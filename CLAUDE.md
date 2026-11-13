# QuizFast — hướng dẫn cho Claude

Web luyện đề trắc nghiệm cho sinh viên (môn FE GDC, FE AGU, và đề tự tải lên). Đọc file này trước khi sửa bất cứ thứ gì.

## Cấu trúc
- `index.html`: toàn bộ giao diện và logic (Tailwind CDN, không có bước build).
- `data-gdc.js`, `data-agu-1.js`, `data-agu-2.js`: ngân hàng câu hỏi có sẵn (375 câu), chỉ còn là **bản dự phòng**. Nguồn chính là bảng `quizfast_questions` trên Supabase.
- Chạy thử: `python -m http.server 8765 --bind 127.0.0.1` rồi mở http://127.0.0.1:8765/index.html (đã có cấu hình `.claude/launch.json`, tên `quizfast`).
- Deploy: **Vercel** (project `quizfast`, team `quang-5d6e`, id `prj_UWX1VjAswXbnrNm0wOg2t93p5cDa`), nối repo `quangdnnse184218/quizfast`. Trang tĩnh, không build. Đẩy lên `main` là tự lên bản chính thức https://quizfast-xi.vercel.app ; mỗi nhánh khác tự có link xem trước. (Trước đây dùng GitHub Pages `quangdnnse184218.github.io/quizfast`.)

## Quy tắc đề thi (cố định, không cho người dùng chỉnh)
- Điểm đạt: **trên 4/10**.
- Không còn module/quiz. Mỗi môn gom câu hỏi theo thứ tự cố định rồi chia thành "Đề 1, Đề 2..." mỗi đề **60 câu**. Đề cuối được ít hơn 60, **không độn câu trùng**.
- Thời gian chỉ có 2 chế độ: **60 phút** hoặc **không giới hạn**.
- "Đề Xáo Trộn" của mỗi môn: bốc 60 câu lúc bắt đầu làm, ưu tiên câu hay sai, rồi câu chưa làm, rồi đang nhớ, rồi đã thuộc.
- Đề tự tải lên (Studio) quá 60 câu thì tự chia thành nhiều đề.

## Môn mặc định và môn học của bạn
- Trang chủ chia hai phần: **Môn mặc định** (do admin thêm, người dùng chỉ học, không thêm/xóa đề) và **Môn học của bạn** (do chính người dùng tạo, lưu trên cloud).
- Thêm môn mặc định mới (admin): thêm một dòng vào `quizfast_default_subjects`, nạp câu hỏi vào `quizfast_questions` với `subject` trùng tên, rồi (nếu cần) thêm file dự phòng. Môn không có trong `quizfast_default_subjects` (hoặc `is_published=false`) sẽ không hiện. Nếu DB không tải được, web tạm dùng các môn có trong ngân hàng câu hỏi.
- Người dùng chưa có đăng nhập, nên mỗi trình duyệt có một **mã đồng bộ** ngẫu nhiên (`quizfast_owner_key_v1`, 36 ký tự). Mã gửi kèm header `x-owner-id` ở mọi yêu cầu tới `quizfast_subjects` và `quizfast_exams`; policy RLS so khớp `owner_id` với header này. Ai biết mã là xem/sửa được dữ liệu của mã đó; không chia sẻ mã công khai.
- Nút "Mã đồng bộ" ở phần "Môn học của bạn": xem/sao chép mã, hoặc nhập mã từ máy khác để lấy lại môn (thay dữ liệu cục bộ bằng dữ liệu của mã đó).
- Khóa chính môn là `(owner_id, name)`. Tên môn của người dùng không được trùng tên môn mặc định (không phân biệt hoa thường). ID đề tự tải lên có chuỗi ngẫu nhiên để không đụng nhau giữa người dùng.
- Nâng cấp sau này: nếu thêm đăng nhập thật (Supabase Auth), thay điều kiện policy từ header `x-owner-id` sang `auth.uid()`.

## Thêm đề (Studio) và bóc tách câu hỏi
- Nguồn: kéo thả hoặc chọn file (Word `.docx`, PDF, ảnh, `.txt`/`.json`), dán ảnh bằng Ctrl+V, hoặc dán chữ. Sau khi bóc tách luôn có bước kiểm tra: cảnh báo từng câu (thiếu đáp án, thiếu lựa chọn, trùng câu, AI đoán đáp án), ô lọc "Chỉ hiện câu cần kiểm tra", sửa trực tiếp, mỗi câu 2 đến 6 đáp án (A-F). Không lưu được khi còn câu chưa hợp lệ.
- Cách bóc tách (chọn trong hộp thoại, mặc định "Tự động"): **code trước, AI khi cần**.
  - Code (miễn phí): đọc Word trực tiếp từ XML để lấy **đánh số tự động** và **định dạng chữ** (đậm, nghiêng, gạch chân, màu, tô nền); đáp án đúng nhận từ ✅ ✓ *, dòng "Đáp án: B", bảng đáp án cuối đề, hoặc việc chỉ một đáp án gạch chân/tô màu/tô nền (đậm chỉ dùng khi không có dấu hiệu nào khác). Hỗ trợ "Câu 1:", "1.", "Question 1)", nhiều đáp án trên một dòng, đề không đánh số, đáp án xuống dòng. PDF dùng pdf.js (lấy chữ theo dòng).
  - AI (Gemini `gemini-2.5-flash`, khóa của người dùng lưu trong trình duyệt, gửi qua header `x-goog-api-key`): bắt buộc cho **ảnh và PDF scan**; tự dùng khi code nhận ra quá ít/không chắc chắn; có nút "AI điền đáp án còn thiếu" (đáp án AI đoán có nhãn cảnh báo). Đầu ra theo `responseSchema`, đề dài chia đoạn ~9000 ký tự, tự thử lại khi 429/5xx.
- Thư viện JSZip và pdf.js chỉ tải khi cần (không còn nằm trong `<head>`); Tesseract và Mammoth đã bỏ.
- Phần lõi bóc tách bằng code là các hàm thuần (`parseQuestionsFromLines`, `detectAnswerKey`, `splitInlineOptions`...) trong `index.html`, có thể kiểm thử bằng Node (không cần DOM). Khi sửa parser phải chạy lại các ca mẫu: số + ký hiệu, "Câu N" + dòng đáp án, bảng đáp án, đáp án một dòng, 5 đáp án, định dạng Word, không có đáp án, đề không đánh số.
- Chưa làm: đọc `.xlsx`/`.csv` dạng bảng, `.doc` cũ (báo người dùng đổi sang `.docx`), OCR không cần AI, gọi AI qua Edge Function (hiện khóa nằm trong trình duyệt người dùng).

## Giao diện
- Chỉ đổi màu, chữ, bố cục. **Giữ dạng trắc nghiệm chọn đáp án** và màu thương hiệu xanh lá. Không tự nghĩ ra concept mới.
- Mặc định giao diện sáng; có chế độ tối (đã chỉnh cho đủ tương phản).
- Highlight: nhãn nhỏ "Highlight" phía trên, hai nút bên dưới là "Tự động" (web tự dò từ khóa, không dùng danh sách có sẵn) và "Thủ công" (bôi đen, lưu theo từng câu trong localStorage). **Mặc định tắt cả hai**, người dùng tự bật. Phím H bật/tắt tô tự động.
- "Đề Xáo Trộn" luôn nằm cuối danh sách đề của mỗi môn.

## Dữ liệu (Supabase)
- Project `appquiz`, ref `typsubizynimfhukhewc`, vùng ap-southeast-1. Khóa công khai (publishable) nằm trong `index.html`, đó là bình thường.
- `quizfast_questions`: ngân hàng câu hỏi chuẩn. RLS bật, **chỉ có chính sách đọc công khai**. Không bật tạm quyền ghi cho `anon` để nạp dữ liệu (hệ thống sẽ chặn). Nạp hoặc sửa bằng SQL qua công cụ Supabase, chia lô, và đối chiếu mã băm md5 từng lô với file gốc.
- `quizfast_default_subjects`: danh sách **môn mặc định** (tên, mô tả, thứ tự, `is_published`). Chỉ đọc công khai; chỉ admin sửa qua SQL.
- `quizfast_subjects`, `quizfast_exams`: **môn và đề của người dùng**, mỗi dòng có `owner_id`. RLS chỉ cho đọc/ghi dòng có `owner_id` trùng header `x-owner-id` (xem mục dưới). Không còn quyền công khai.
- Web đọc câu hỏi từ DB, nếu DB lỗi hoặc thiếu thì dùng file `data-*.js`. Giữ nguyên ID câu hỏi cũ (ví dụ `GDC_M34_Q1`) vì tiến độ người học gắn theo ID.
- Hàng đợi đồng bộ (`quizfast_sync_queue_v1`) giữ các thay đổi chưa đẩy được lên cloud; lần đồng bộ sau không được ghi đè chúng.

## Làm việc với git
- Mỗi việc làm trong nhánh/worktree riêng tách từ `main` mới nhất. **Luôn `git fetch` trước**, vì `main` có thể đã có commit từ nơi khác.
- Chỉ đẩy lên `main` khi người dùng nói rõ. Ưu tiên fast-forward, không `--force`. Nếu `main` đã đi xa hơn, báo người dùng rồi mới gộp.
- Không commit khóa bí mật. Khóa Gemini chỉ lưu trong trình duyệt của người dùng.

## Chưa làm (có thể giao tiếp)
- Tự lưu bài đang làm dở (hiện tải lại trang là mất bài).
- Đăng nhập thật (Google/email) để dữ liệu người dùng không phụ thuộc vào "biết mã"; công cụ admin để quản lý môn mặc định mà không cần SQL.
- Hàm `rls_auto_enable()` mà Supabase cảnh báo cho phép `anon` gọi.
- Đưa Gemini vào Edge Function (khóa của admin, giới hạn lượt theo mã đồng bộ) thay vì mỗi người dùng tự dán khóa.

## Khóa localStorage đang dùng
`quizfast_owner_key_v1` (mã đồng bộ), `quizfast_progress_v1` (tiến độ từng câu), `quizfast_paper_history_v1` (điểm từng đề), `quizfast_subjects_v1`, `quizfast_custom_exams_v1`, `quizfast_sync_queue_v1`, `quizfast_theme_v1`, `quizfast_gemini_key_v1`, `quizfast_hl_prefs_v1`, `quizfast_user_hl_v1`.
