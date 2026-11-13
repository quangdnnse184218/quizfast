/* QuizFast — đăng ký / đăng nhập bằng Supabase Auth (gọi thẳng REST, không cần build).
   Dùng chung cho index.html và admin.html. Khóa publishable là khóa công khai, để trong trình duyệt là bình thường. */
(function () {
  'use strict';
  const BASE = 'https://typsubizynimfhukhewc.supabase.co';
  const KEY = 'sb_publishable_uyBM4WsSz16ie7pnpNJtfA_jsYw882Q';
  const STORE = 'quizfast_auth_v1';

  let session = null; // { access_token, refresh_token, expires_at (giây), user }
  let profile = null; // { user_id, email, display_name, role }
  const listeners = new Set();
  let refreshing = null;

  try {
    const saved = JSON.parse(localStorage.getItem(STORE) || 'null');
    if (saved && saved.access_token && saved.refresh_token) session = saved;
  } catch { /* bỏ qua */ }

  function persist() {
    try {
      if (session) localStorage.setItem(STORE, JSON.stringify(session));
      else localStorage.removeItem(STORE);
    } catch { /* bỏ qua */ }
  }
  function emit() { listeners.forEach(fn => { try { fn(state()); } catch (e) { console.warn(e); } }); }
  function state() { return { user: session ? session.user : null, profile, isAdmin: !!(profile && profile.role === 'admin') }; }

  function viMessage(raw) {
    const t = String(raw || '').toLowerCase();
    if (t.includes('invalid login credentials')) return 'Email hoặc mật khẩu không đúng.';
    if (t.includes('email not confirmed')) return 'Email chưa được xác nhận. Hãy mở thư xác nhận trong hộp thư của bạn.';
    if (t.includes('already registered') || t.includes('already been registered') || t.includes('user_already_exists')) return 'Email này đã được đăng ký. Hãy đăng nhập.';
    if (t.includes('password') && (t.includes('at least') || t.includes('weak') || t.includes('short'))) return 'Mật khẩu quá yếu. Dùng ít nhất 8 ký tự.';
    if (t.includes('valid email') || t.includes('invalid format') || t.includes('email_address_invalid')) return 'Email không hợp lệ.';
    if (t.includes('rate limit') || t.includes('too many') || t.includes('over_email_send_rate_limit')) return 'Thao tác quá nhanh, hãy thử lại sau ít phút.';
    if (t.includes('failed to fetch') || t.includes('networkerror')) return 'Không kết nối được máy chủ. Kiểm tra mạng rồi thử lại.';
    return raw || 'Có lỗi xảy ra, hãy thử lại.';
  }

  async function authCall(path, body, token) {
    let res;
    try {
      res = await fetch(`${BASE}/auth/v1${path}`, {
        method: 'POST',
        headers: { apikey: KEY, 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
        body: JSON.stringify(body || {})
      });
    } catch (e) { throw new Error(viMessage(e && e.message)); }
    const txt = await res.text();
    let data = null;
    try { data = txt ? JSON.parse(txt) : null; } catch { /* bỏ qua */ }
    if (!res.ok) {
      const raw = (data && (data.msg || data.error_description || data.message || data.error_code || data.error)) || `Lỗi ${res.status}`;
      const err = new Error(viMessage(raw));
      err.status = res.status;
      err.code = data && (data.error_code || data.error);
      throw err;
    }
    return data;
  }

  function setSession(data) {
    const exp = data.expires_at || (Math.floor(Date.now() / 1000) + (data.expires_in || 3600));
    session = { access_token: data.access_token, refresh_token: data.refresh_token, expires_at: exp, user: data.user };
    persist();
  }

  async function loadProfile() {
    profile = null;
    if (!session) return;
    try {
      const rows = await rest(`/quizfast_profiles?select=user_id,email,display_name,role&user_id=eq.${session.user.id}`);
      profile = Array.isArray(rows) && rows[0] ? rows[0] : null;
    } catch (e) { console.warn('Không đọc được hồ sơ người dùng:', e); }
  }

  async function refresh() {
    if (!session) return null;
    if (refreshing) return refreshing;
    refreshing = (async () => {
      try {
        const data = await authCall('/token?grant_type=refresh_token', { refresh_token: session.refresh_token });
        setSession(data);
      } catch (e) {
        // Chỉ đăng xuất khi máy chủ từ chối hẳn phiên; lỗi mạng thì giữ phiên để thử lại sau
        if (e.status && e.status >= 400 && e.status < 500) { session = null; profile = null; persist(); emit(); }
        throw e;
      } finally { refreshing = null; }
    })();
    return refreshing;
  }

  async function getToken() {
    if (!session) return null;
    if (session.expires_at - 60 <= Math.floor(Date.now() / 1000)) {
      try { await refresh(); } catch { /* dùng token cũ, nếu hết hạn thì request sẽ báo lỗi */ }
    }
    return session ? session.access_token : null;
  }

  // Gọi PostgREST. Có phiên thì gửi token người dùng (để RLS nhận auth.uid()), không thì dùng quyền ẩn danh.
  async function rest(path, options = {}) {
    const token = await getToken();
    const headers = {
      apikey: KEY,
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token || KEY}`,
      ...(options.headers || {})
    };
    const res = await fetch(`${BASE}/rest/v1${path}`, { ...options, headers });
    if (!res.ok) {
      const errText = await res.text();
      const err = new Error(`Supabase ${res.status}: ${errText}`);
      err.status = res.status;
      throw err;
    }
    const txt = await res.text();
    return txt ? JSON.parse(txt) : null;
  }

  async function signUp(email, password, displayName) {
    const data = await authCall('/signup', { email, password, data: { display_name: displayName || '' } });
    if (data && data.access_token) {
      setSession(data);
      await loadProfile();
      emit();
      return { signedIn: true };
    }
    // Email được DB tự xác nhận (trigger quizfast_auto_confirm), nên đăng nhập luôn bằng thông tin vừa nhập
    try {
      await signIn(email, password);
      return { signedIn: true };
    } catch (e) {
      if (/chưa được xác nhận/i.test(e.message)) return { signedIn: false, needsConfirm: true };
      throw e;
    }
  }

  async function signIn(email, password) {
    const data = await authCall('/token?grant_type=password', { email, password });
    setSession(data);
    await loadProfile();
    emit();
  }

  async function signOut() {
    const token = session && session.access_token;
    session = null; profile = null; persist(); emit();
    if (token) { try { await authCall('/logout', {}, token); } catch { /* bỏ qua */ } }
  }

  async function resetPassword(email) {
    await authCall('/recover', { email, redirect_to: location.origin + location.pathname });
  }

  // Link xác nhận email / đặt lại mật khẩu đưa người dùng về trang với token trong phần #hash
  function consumeHashSession() {
    const h = location.hash.replace(/^#/, '');
    if (!h.includes('access_token=')) return false;
    const p = new URLSearchParams(h);
    const at = p.get('access_token'), rt = p.get('refresh_token');
    if (!at || !rt) return false;
    let user = null;
    try {
      const payload = JSON.parse(atob(at.split('.')[1].replace(/-/g, '+').replace(/_/g, '/')));
      user = { id: payload.sub, email: payload.email };
    } catch { return false; }
    session = { access_token: at, refresh_token: rt, expires_at: Number(p.get('expires_at')) || (Math.floor(Date.now() / 1000) + Number(p.get('expires_in') || 3600)), user };
    persist();
    history.replaceState(null, '', location.pathname + location.search);
    return true;
  }

  async function init() {
    const fromLink = consumeHashSession();
    if (session) {
      try {
        if (fromLink || session.expires_at - 60 <= Math.floor(Date.now() / 1000)) await refresh();
      } catch { /* giữ phiên nếu chỉ lỗi mạng */ }
      await loadProfile();
    }
    emit();
    return state();
  }

  window.QFAuth = {
    init, signUp, signIn, signOut, resetPassword, rest, getToken,
    state,
    get user() { return session ? session.user : null; },
    get profile() { return profile; },
    get isAdmin() { return !!(profile && profile.role === 'admin'); },
    onChange(fn) { listeners.add(fn); return () => listeners.delete(fn); },
    BASE, KEY
  };
})();
