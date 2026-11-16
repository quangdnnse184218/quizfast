# QuizFast — hướng dẫn cho Claude

Web luyện đề trắc nghiệm cho sinh viên (môn FE GDC, FE AGU, và đề tự tải lên). Đọc file này trước khi sửa bất cứ thứ gì.

## Cấu trúc
- `index.html`: toàn bộ giao diện và logic (Tailwind CDN, không có bước build).
- **Không còn máy chủ, không đăng nhập.** Supabase project `appquiz` bị tạm dừng (hết hạn mức Free 2 project) nên đã gỡ toàn bộ đăng nhập, trang admin và đồng bộ cloud. Web chạy hoàn toàn trên trình duyệt. (Lịch sử git trước commit gỡ có bản đăng nhập + admin + SQL Supabase nếu cần lấy lại.)
- `data-tthcm-349.js` (môn `TTHCM 349 câu`) và `data-tthcm-chuong.js` (môn `TTHCM theo chương`, 6 chương, bỏ 3 câu không có đáp án đúng và 13 câu trùng hẳn): sinh từ 2 file Word nguồn bằng script bóc tách riêng (không lưu trong repo). Ảnh minh họa nằm ở `images/`.
- `data-*.js`: ngân hàng câu hỏi có sẵn, **nguồn duy nhất** của các môn mặc định. Thêm môn mặc định = thêm file `data-xxx.js` (mảng câu hỏi, `subject` là tên môn) và nạp bằng thẻ `<script>` + `buildBuiltinBank()` trong `index.html`.
- Chạy thử: `python -m http.server 8765 --bind 127.0.0.1` rồi mở http://127.0.0.1:8765/index.html (đã có cấu hình `.claude/launch.json`, tên `quizfast`).
- Deploy: **Vercel** (project `quizfast`, team `quang-5d6e`, id `prj_UWX1VjAswXbnrNm0wOg2t93p5cDa`), nối repo `quangdnnse184218/quizfast`. Trang tĩnh, không build. Đẩy lên `main` là tự lên bản chính thức https://quizfast-xi.vercel.app ; mỗi nhánh khác tự có link xem trước. (Trước đây dùng GitHub Pages `quangdnnse184218.github.io/quizfast`.)

## Quy tắc đề thi (cố định, không cho người dùng chỉnh)
- Điểm đạt: **trên 4/10**.
- Không còn module/quiz. Mỗi môn gom câu hỏi theo thứ tự cố định rồi chia thành "Đề 1, Đề 2..." mỗi đề **60 câu**. Đề cuối được ít hơn 60, **không độn câu trùng**.
- Thời gian chỉ có 2 chế độ: **60 phút** hoặc **không giới hạn**.
- "Đề Xáo Trộn" của mỗi môn: bốc 60 câu lúc bắt đầu làm, ưu tiên câu hay sai, rồi câu chưa làm, rồi đang nhớ, rồi đã thuộc.
- Đề tự tải lên (Studio) quá 60 câu thì tự chia thành nhiều đề.
- Môn có trường `chapter` (và `chapterTitle`) trong dữ liệu, ví dụ `TTHCM theo chương`: đề được nhóm theo chương; chương dài được chia **đều** thành các đề không quá 60 câu (ví dụ 171 câu → 3 đề × 57). Môn không có `chapter` vẫn chia 60 câu theo thứ tự như trên.
- Câu hỏi có thể có `image` (đường dẫn trong `images/`) và `explanation` (ghi chú, hiện sau khi trả lời ở chế độ "Học" và trong phần xem lại).

## Môn mặc định và môn học của bạn
- Trang chủ chia hai phần: **Môn mặc định** (do admin thêm, người dùng chỉ học, không thêm/xóa đề) và **Môn học của bạn** (do chính người dùng tạo, lưu trên cloud).
- Môn mặc định = mọi môn có trong các file `data-*.js`. Môn của bạn (tạo bằng Studio) lưu trong `localStorage` của trình duyệt đó, không đồng bộ giữa các máy.
- Tên môn của người dùng không được trùng tên môn mặc định (không phân biệt hoa thường).

## Thêm đề (Studio) và bóc tách câu hỏi
- Nguồn: **chỉ văn bản**: dán chữ, hoặc chọn/kéo thả file Word `.docx` và `.txt`/`.md`/`.json`/`.csv`. Đã **bỏ** ảnh, PDF và toàn bộ phần AI (Gemini); không còn ô chọn "Cách bóc tách", luôn bóc tách bằng code.
- Sau khi bóc tách luôn có bước kiểm tra: cảnh báo từng câu (thiếu đáp án, thiếu lựa chọn, trùng câu), ô lọc "Chỉ hiện câu cần kiểm tra", sửa trực tiếp, mỗi câu 2 đến 6 đáp án (A-F). Không lưu được khi còn câu chưa hợp lệ.
- Nguồn nào không nhận ra được câu hỏi nào (câu có nội dung và ít nhất 2 đáp án) thì báo "… không phải câu hỏi hoặc đề bài." Nếu có nhiều nguồn thì nguồn hợp lệ vẫn được giữ, nguồn lỗi được báo là đã bỏ qua.
- Code đọc Word trực tiếp từ XML để lấy **đánh số tự động** và **định dạng chữ** (đậm, nghiêng, gạch chân, màu, tô nền); đáp án đúng nhận từ ✅ ✓ *, dòng "Đáp án: B", bảng đáp án cuối đề, hoặc việc chỉ một đáp án gạch chân/tô màu/tô nền (đậm chỉ dùng khi không có dấu hiệu nào khác). Hỗ trợ "Câu 1:", "1.", "Question 1)", nhiều đáp án trên một dòng, đề không đánh số, đáp án xuống dòng.
- JSZip chỉ tải khi cần (không nằm trong `<head>`).
- Phần lõi bóc tách là các hàm thuần (`parseQuestionsFromLines`, `detectAnswerKey`, `splitInlineOptions`...) trong `index.html`, có thể kiểm thử bằng Node (không cần DOM). Khi sửa parser phải chạy lại các ca mẫu: số + ký hiệu, "Câu N" + dòng đáp án, bảng đáp án, đáp án một dòng, 5 đáp án, định dạng Word, không có đáp án, đề không đánh số, và văn bản thường (phải bị từ chối).
- Chưa làm: đọc `.xlsx`/`.csv` dạng bảng, `.doc` cũ (báo người dùng đổi sang `.docx`).

## Giao diện
- **Ưu tiên điện thoại.** Trang làm bài có thanh điều hướng cố định ở đáy (Trước / bảng câu hỏi / Tiếp), bảng câu hỏi là ngăn kéo từ dưới lên, vuốt trái/phải để đổi câu; màn hình lớn (lg trở lên) giữ bố cục hai cột.
- Hộp thiết lập bài có hai chế độ chọn nhanh: **Học** (chấm ngay, không giới hạn giờ, giữ thứ tự đáp án gốc; mặc định) và **Thi thử** (60 phút, chấm khi nộp). Lựa chọn được nhớ.
- **Hỗ trợ ghi nhớ**: thẻ "Mục tiêu hôm nay" ở trang chủ (20 câu/ngày, chuỗi ngày học liên tiếp, khóa `quizfast_daily_v1`); nút "Ôn nhanh 10 câu" (ưu tiên câu hay sai → đang nhớ → chưa làm); ô "mẹo nhớ" riêng cho từng câu sau khi trả lời ở chế độ Học (`quizfast_notes_v1`, hiện lại ở phần xem lại); tùy chọn "Lặp lại câu sai ở cuối bài" (câu làm sai được thêm một bản `isRetry` ở cuối bài, không tính vào điểm).
- Bài đang làm dở tự lưu (`quizfast_exam_session_v1`) theo từng đề; có nút "Làm tiếp" ở thẻ đề và thanh "Bạn đang làm dở" ở trang chủ. Nộp bài thì xóa bản lưu.
- Đáp án kiểu "Tất cả đều đúng", "A và B", "Cả hai"... **không bị trộn** thứ tự dù bật trộn đáp án (xem `optionsOrderMatters`).
- Chỉ đổi màu, chữ, bố cục. **Giữ dạng trắc nghiệm chọn đáp án** và màu thương hiệu xanh lá. Không tự nghĩ ra concept mới.
- Bảng màu: thương hiệu xanh ngọc lục bảo đậm (`brand-600` #0f7d56, `brand-700` #0b6648) và thang `slate` đã được chỉnh ngả xanh trong `tailwind.config` (đổi một chỗ là đổi cả web). Nền tối dùng các mã #0b1210 / #121c17 / #1b2822.
- **Kính lỏng (liquid glass)**: lớp `.glass` (thanh đầu, thanh tab đáy, thanh Trước/Tiếp, hộp thoại, ngăn kéo; có `backdrop-filter`) và `.glass-lite` (thẻ, không làm mờ nền để máy yếu vẫn mượt). Nền có các đốm màu mờ cố định (`.qf-bg`) để kính nhìn ra được. Đừng gắn `.glass` lên danh sách dài.
- **Cuộn**: điện thoại và máy tính bảng cuộn **cả trang** (để thanh địa chỉ trình duyệt tự thu lại); chỉ từ `lg` trở lên `<main>` mới tự cuộn và trang làm bài khóa cuộn. Khi đang làm bài trên điện thoại, header ẩn đi (chỉ còn thẻ tên đề + thanh tiến độ). Nút bấm quan trọng cao tối thiểu 44px. Thẻ môn trên điện thoại là một hàng gọn (~86px), từ `sm` trở lên là thẻ lớn có dải màu. Trang chủ có một thẻ gộp "đang làm dở + mục tiêu hôm nay".
- **Điều hướng**: điện thoại có thanh tab nổi ở đáy (Môn học, Câu sai, Thêm đề); từ màn hình `sm` trở lên dùng thanh điều hướng trên đầu trang. Không còn Flashcards.
- Điểm nhấn: thanh đầu trang gradient ngọc lục bảo (chữ trắng), nút **Tải đề lên** màu vàng, mỗi môn có dải màu riêng (hàm `subjectAccent`: TTHCM đỏ→vàng, FE GDC tím, FE AGU xanh dương, môn của bạn xanh lá), chữ cái A/B/C/D có sắc nhẹ riêng (`LETTER_TINTS`), thanh tiến độ gradient xanh→vàng trong trang làm bài. Trên điện thoại ẩn nhóm nút Highlight và nhãn tên môn để câu hỏi lên cao hơn.
- Tránh dùng `space-y-*` cho vùng có phần tử ẩn bằng class `hidden` (margin vẫn tính, tạo khoảng trống lạ); dùng `flex flex-col gap-*`.
- **Năm giao diện**, chọn bằng danh sách ở hộp "Giao diện" (nút bảng màu góc phải thanh đầu trang): *Mặc định (sáng)*, *Tối*, *Hồng pastel*, *Xanh dương*, *Tím lavender*. Chỉ giao diện xanh ngọc (sáng/tối) có chế độ tối; ba kiểu màu luôn sáng. Lưu ở `quizfast_skin_v1` (kiểu màu) và `quizfast_theme_v1` (sáng/tối). Hồng pastel còn có font tiêu đề Baloo 2, nền chấm hoa, nút bo tròn.
- Màu thương hiệu và xám nằm trong **biến CSS** (`--b50…--b950`, `--s50…--s950`, `--acc`) ở `<style>`, Tailwind đọc qua `rgb(var(--…) / <alpha-value>)`. Thêm giao diện mới = thêm khối `html[data-skin="tên"] { … }` (biến màu, nền, bóng kính), một dòng `data-look` trong hộp chọn và tên trong `applySkin`. Màu **đúng/sai luôn là emerald/rose cố định** (không dùng `brand-`) để giao diện hồng không làm lẫn đáp án đúng với sai.
- Icon: icon màu từ Fluent Emoji Flat (MIT) và Twemoji (cờ), tải sẵn thành file SVG trong `icons/`. Mã vẫn viết `<i data-lucide="tên">`; bảng `MAP` ở đầu `index.html` đổi tên lucide sang file màu, tên không có trong `MAP` (đóng, mũi tên, thêm...) vẫn dùng nét lucide. Thêm icon mới: tải SVG vào `icons/` rồi thêm vào `MAP`.
- Mặc định giao diện sáng; có chế độ tối (đã chỉnh cho đủ tương phản).
- Highlight: nhãn nhỏ "Highlight" phía trên, hai nút bên dưới là "Tự động" (web tự dò từ khóa, không dùng danh sách có sẵn) và "Thủ công" (bôi đen, lưu theo từng câu trong localStorage). **Mặc định tắt cả hai**, người dùng tự bật. Phím H bật/tắt tô tự động.
- "Đề Xáo Trộn" luôn nằm cuối danh sách đề của mỗi môn.

## Dữ liệu
- Không dùng cơ sở dữ liệu. Câu hỏi nằm trong `data-*.js`; tiến độ, điểm, môn/đề tự thêm nằm trong `localStorage`. Giữ nguyên ID câu hỏi cũ (ví dụ `GDC_M34_Q1`) vì tiến độ người học gắn theo ID.
- Nếu sau này cần lưu trên máy chủ/đăng nhập: dùng lại bản trong lịch sử git (Supabase) hoặc chọn nền tảng khác.

## Làm việc với git
- Mỗi việc làm trong nhánh/worktree riêng tách từ `main` mới nhất. **Luôn `git fetch` trước**, vì `main` có thể đã có commit từ nơi khác.
- Chỉ đẩy lên `main` khi người dùng nói rõ. Ưu tiên fast-forward, không `--force`. Nếu `main` đã đi xa hơn, báo người dùng rồi mới gộp.
- Không commit khóa bí mật (chỉ khóa publishable của Supabase được để trong mã).

## Chưa làm (có thể giao tiếp)
- Đồng bộ môn/đề giữa các máy (cần máy chủ).

## Khóa localStorage đang dùng
`quizfast_progress_v1` (tiến độ từng câu), `quizfast_paper_history_v1` (điểm từng đề), `quizfast_subjects_v1`, `quizfast_custom_exams_v1`, `quizfast_theme_v1`, `quizfast_exam_session_v1`, `quizfast_setup_preset_v1`, `quizfast_hl_prefs_v1`, `quizfast_user_hl_v1`.
