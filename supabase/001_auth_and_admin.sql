-- QuizFast: đăng ký/đăng nhập (Supabase Auth) + trang admin.
-- Chạy một lần trong Supabase SQL Editor (project typsubizynimfhukhewc).

-- 1. Hồ sơ người dùng, gắn với Supabase Auth
create table if not exists public.quizfast_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null default '',
  display_name text not null default '',
  role text not null default 'user' check (role in ('user','admin')),
  created_at timestamptz not null default now()
);
alter table public.quizfast_profiles enable row level security;

-- Email được tự động cấp quyền admin khi đăng ký (RLS bật, không có policy => API không đọc/ghi được)
create table if not exists public.quizfast_admin_emails (email text primary key);
alter table public.quizfast_admin_emails enable row level security;
insert into public.quizfast_admin_emails(email) values ('quanggg104204@gmail.com') on conflict do nothing;

create or replace function public.quizfast_is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.quizfast_profiles where user_id = auth.uid() and role = 'admin');
$$;
grant execute on function public.quizfast_is_admin() to anon, authenticated;

create or replace function public.quizfast_handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.quizfast_profiles(user_id, email, display_name, role)
  values (
    new.id,
    coalesce(new.email, ''),
    coalesce(nullif(new.raw_user_meta_data->>'display_name',''), split_part(coalesce(new.email,''), '@', 1)),
    case when exists (select 1 from public.quizfast_admin_emails a where lower(a.email) = lower(coalesce(new.email,''))) then 'admin' else 'user' end
  ) on conflict (user_id) do nothing;
  return new;
end $$;
revoke execute on function public.quizfast_handle_new_user() from public, anon, authenticated;

drop trigger if exists quizfast_on_auth_user_created on auth.users;
create trigger quizfast_on_auth_user_created after insert on auth.users
  for each row execute function public.quizfast_handle_new_user();

-- Tạo hồ sơ cho các tài khoản đã tồn tại (nếu có)
insert into public.quizfast_profiles(user_id, email, display_name, role)
select u.id, coalesce(u.email,''), split_part(coalesce(u.email,''),'@',1),
  case when exists (select 1 from public.quizfast_admin_emails a where lower(a.email)=lower(coalesce(u.email,''))) then 'admin' else 'user' end
from auth.users u on conflict (user_id) do nothing;

-- 2. Profiles: người dùng xem hồ sơ của mình; admin xem và sửa quyền tất cả
drop policy if exists "Profiles read own" on public.quizfast_profiles;
drop policy if exists "Profiles admin read" on public.quizfast_profiles;
drop policy if exists "Profiles admin update" on public.quizfast_profiles;
create policy "Profiles read own" on public.quizfast_profiles for select to authenticated using (user_id = auth.uid());
create policy "Profiles admin read" on public.quizfast_profiles for select to authenticated using (public.quizfast_is_admin());
create policy "Profiles admin update" on public.quizfast_profiles for update to authenticated
  using (public.quizfast_is_admin()) with check (public.quizfast_is_admin());

-- 3. Môn và đề của người dùng: chuyển từ header x-owner-id sang tài khoản đăng nhập (owner_id = auth.uid())
drop policy if exists "Owner access quizfast_subjects" on public.quizfast_subjects;
drop policy if exists "Owner access quizfast_exams" on public.quizfast_exams;
drop policy if exists "Admin read quizfast_subjects" on public.quizfast_subjects;
drop policy if exists "Admin read quizfast_exams" on public.quizfast_exams;
drop policy if exists "Admin delete quizfast_subjects" on public.quizfast_subjects;
drop policy if exists "Admin delete quizfast_exams" on public.quizfast_exams;
create policy "Owner access quizfast_subjects" on public.quizfast_subjects for all to authenticated
  using (owner_id = auth.uid()::text) with check (owner_id = auth.uid()::text);
create policy "Owner access quizfast_exams" on public.quizfast_exams for all to authenticated
  using (owner_id = auth.uid()::text) with check (owner_id = auth.uid()::text);
create policy "Admin read quizfast_subjects" on public.quizfast_subjects for select to authenticated using (public.quizfast_is_admin());
create policy "Admin read quizfast_exams" on public.quizfast_exams for select to authenticated using (public.quizfast_is_admin());
create policy "Admin delete quizfast_subjects" on public.quizfast_subjects for delete to authenticated using (public.quizfast_is_admin());
create policy "Admin delete quizfast_exams" on public.quizfast_exams for delete to authenticated using (public.quizfast_is_admin());

-- 4. Admin quản lý ngân hàng câu hỏi và môn mặc định
drop policy if exists "Admin write quizfast_questions" on public.quizfast_questions;
drop policy if exists "Admin all quizfast_default_subjects" on public.quizfast_default_subjects;
create policy "Admin write quizfast_questions" on public.quizfast_questions for all to authenticated
  using (public.quizfast_is_admin()) with check (public.quizfast_is_admin());
create policy "Admin all quizfast_default_subjects" on public.quizfast_default_subjects for all to authenticated
  using (public.quizfast_is_admin()) with check (public.quizfast_is_admin());

-- 5. Studio cho phép tới 6 đáp án (A-F)
alter table public.quizfast_questions drop constraint if exists quizfast_questions_options_check;
alter table public.quizfast_questions add constraint quizfast_questions_options_check
  check (jsonb_typeof(options) = 'array' and jsonb_array_length(options) between 2 and 6);

-- 6. Bỏ bước xác nhận email: tài khoản mới được xác nhận ngay khi tạo, web tự đăng nhập sau khi đăng ký.
-- (Đã áp dụng thành migration quizfast_auto_confirm_email.)
create or replace function public.quizfast_auto_confirm_email()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  if new.email_confirmed_at is null then
    new.email_confirmed_at := now();
  end if;
  return new;
end $$;
revoke execute on function public.quizfast_auto_confirm_email() from public, anon, authenticated;

drop trigger if exists quizfast_auto_confirm on auth.users;
create trigger quizfast_auto_confirm before insert on auth.users
  for each row execute function public.quizfast_auto_confirm_email();
