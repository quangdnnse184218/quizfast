# QuizFast — hướng dẫn cho Claude

Web luyện đề trắc nghiệm cho sinh viên (môn FE GDC, FE AGU, và đề tự tải lên). Đọc file này trước khi sửa bất cứ thứ gì.

## Cấu trúc
- `index.html`: toàn bộ giao diện và logic (Tailwind CDN, không có bước build).
- `data-gdc.js`, `data-agu-1.js`, `data-agu-2.js`: ngân hàng câu hỏi có sẵn (375 câu), chỉ còn là **bản dự phòng**. Nguồn chính là bảng `quizfast_questions` trên Supabase.
- Chạy thử: `python -m http.server 8765 --bind 127.0.0.1` rồi mở http://127.0.0.1:8765/index.html (đã có cấu hình `.claude/launch.json`, tên `quizfast`).

## Quy tắc đề thi (cố định, không cho người dùng chỉnh)
- Điểm đạt: **trên 4/10**.
- Không còn module/quiz. Mỗi môn gom câu hỏi theo thứ tự cố định rồi chia thành "Đề 1, Đề 2..." mỗi đề **60 câu**. Đề cuối được ít hơn 60, **không độn câu trùng**.
- Thời gian chỉ có 2 chế độ: **60 phút** hoặc **không giới hạn**.
- "Đề Xáo Trộn" của mỗi môn: bốc 60 câu lúc bắt đầu làm, ưu tiên câu hay sai, rồi câu chưa làm, rồi đang nhớ, rồi đã thuộc.
- Đề tự tải lên (Studio) quá 60 câu thì tự chia thành nhiều đề.

## Giao diện
- Chỉ đổi màu, chữ, bố cục. **Giữ dạng trắc nghiệm chọn đáp án** và màu thương hiệu xanh lá. Không tự nghĩ ra concept mới.
- Mặc định giao diện sáng; có chế độ tối (đã chỉnh cho đủ tương phản).
- Tô từ khóa: tự động (web tự dò từ khóa, không dùng danh sách có sẵn) và thủ công (bôi đen, lưu theo từng câu trong localStorage). Hai nút bật/tắt độc lập, phím H bật/tắt tô tự động.

## Dữ liệu (Supabase)
- Project `appquiz`, ref `typsubizynimfhukhewc`, vùng ap-southeast-1. Khóa công khai (publishable) nằm trong `index.html`, đó là bình thường.
- `quizfast_questions`: ngân hàng câu hỏi chuẩn. RLS bật, **chỉ có chính sách đọc công khai**. Không bật tạm quyền ghi cho `anon` để nạp dữ liệu (hệ thống sẽ chặn). Nạp hoặc sửa bằng SQL qua công cụ Supabase, chia lô, và đối chiếu mã băm md5 từng lô với file gốc.
- `quizfast_subjects`, `quizfast_exams`: môn và đề tự tải lên, hiện **ai cũng ghi/xóa được** (chưa có đăng nhập).
- Web đọc câu hỏi từ DB, nếu DB lỗi hoặc thiếu thì dùng file `data-*.js`. Giữ nguyên ID câu hỏi cũ (ví dụ `GDC_M34_Q1`) vì tiến độ người học gắn theo ID.
- Hàng đợi đồng bộ (`quizfast_sync_queue_v1`) giữ các thay đổi chưa đẩy được lên cloud; lần đồng bộ sau không được ghi đè chúng.

## Làm việc với git
- Mỗi việc làm trong nhánh/worktree riêng tách từ `main` mới nhất. **Luôn `git fetch` trước**, vì `main` có thể đã có commit từ nơi khác.
- Chỉ đẩy lên `main` khi người dùng nói rõ. Ưu tiên fast-forward, không `--force`. Nếu `main` đã đi xa hơn, báo người dùng rồi mới gộp.
- Không commit khóa bí mật. Khóa Gemini chỉ lưu trong trình duyệt của người dùng.

## Chưa làm (có thể giao tiếp)
- Tự lưu bài đang làm dở (hiện tải lại trang là mất bài).
- Siết quyền ghi của `quizfast_subjects` và `quizfast_exams` (cần quyết định có đăng nhập hay mật khẩu admin).
- Hàm `rls_auto_enable()` mà Supabase cảnh báo cho phép `anon` gọi.
- Đưa Gemini vào Edge Function thay vì gọi từ trình duyệt; tải file PDF/Word/ảnh vẫn đang tắt.

## Khóa localStorage đang dùng
`quizfast_progress_v1` (tiến độ từng câu), `quizfast_paper_history_v1` (điểm từng đề), `quizfast_subjects_v1`, `quizfast_custom_exams_v1`, `quizfast_sync_queue_v1`, `quizfast_theme_v1`, `quizfast_gemini_key_v1`, `quizfast_hl_prefs_v1`, `quizfast_user_hl_v1`.
