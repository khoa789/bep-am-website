# Mở rộng album bếp bóng kính

Ngày: 17/09/2026. Trạng thái: đủ 45 ảnh, đã tích hợp, deploy và xác minh production.

## Kết quả cần giao

Tạo thêm 15 ảnh riêng biệt cho mỗi bộ sưu tập hiện có (45 ảnh mới). Giữ cánh phẳng bóng kính giống ảnh hiện tại; đa dạng màu sắc, bố cục và không gian. Lưu ảnh gốc trong dự án, có trang duyệt tại máy và chú thích; publish/deploy ngay khi đủ 45 ảnh theo chấp thuận mới nhất của người dùng.

## Ràng buộc

- Mô hình yêu cầu ban đầu: `gpt-image-2.5-flare`; người dùng đã đồng ý công cụ tích hợp không xác minh model.
- Ảnh là phối cảnh AI, không phải công trình đã thi công; không có logo, chữ hay watermark trong ảnh.
- Giữ nguyên ảnh đã tạo theo yêu cầu người dùng. Chỉ dùng bếp từ cho ảnh tạo tiếp từ ảnh toàn bộ số 21. Được phép publish/deploy cả 45 ảnh, không cần duyệt thêm.
- Giữ DESIGN.md: nền giấy ấm, Newsreader + Arial, ảnh chữ nhật và chú thích ngoài ảnh.
- Các thay đổi có sẵn trong workspace thuộc công việc khác, giữ nguyên.

## Phạm vi và tiêu chí nghiệm thu

1. Nghiên cứu MCP Inspo, xem ảnh tham chiếu, chuẩn bị 45 prompt: hoàn thành.
2. Tạo 45 PNG riêng biệt (15 mỗi bộ), lưu prompt, kích thước và SHA256: hoàn thành. Giữ nguyên nội dung ảnh theo quyết định người dùng.
3. Tạo trang duyệt tại máy và album production: hoàn thành. Mỗi album có chú thích, phóng lớn, trước/sau, thumbnail, bàn phím và liên kết dự phòng khi tắt JavaScript.
4. Xuất 135 WebP ở 320/800/1600 px, tổng 7.55 MiB; kiểm tra đầy đủ file: hoàn thành.
5. Tests: 3 files / 8 tests pass; Astro check 33 files không lỗi/cảnh báo; build 8 trang; Cloudflare dry-run pass. Kiểm tra browser desktop/mobile và sửa cuộn dialog: hoàn thành.
6. Deploy lên Cloudflare thành công, version `4e704aad-0325-4717-bb11-1a7fb14fe1f5`. Kết quả xác minh live tại [live-verification.json](live-verification.json).

Không thêm CMS, tài khoản, mua hàng hoặc thay đổi trang chủ trong đợt chuẩn bị ảnh này.

## Nghiên cứu và cách thể hiện được chọn

Đã gọi MCP Inspo `recommend`, `search_screens` và `get_screen` cho ba mẫu; phản hồi nguồn nằm trong [references](references/).

- [Artek](https://artek.fi): học cách dành diện tích lớn cho ảnh, khoảng trắng và tiêu đề ngắn.
- [House of Honey](https://houseofhoney.com/): học nhịp ảnh nội thất và nền ấm. Giữ font và màu Bếp Ấm.
- [OMA](https://oma.com): học ảnh kiến trúc lớn để nhìn rõ không gian. Chú thích của Bếp Ấm đặt ngoài ảnh.

Đề xuất của dự án (không phải tính năng được xác minh trên các trang tham khảo): album lưới hai cột desktop, một cột mobile; ảnh bìa hiện có phía trên; ảnh mới đánh số 01–15 với tên màu, dạng bếp và bối cảnh. Bấm vào ảnh mở trình xem với ảnh đủ khung, trước/sau, bộ đếm và dải thumbnail. Hỗ trợ Escape, phím mũi tên, focus quay lại ảnh vừa chọn; không tự chạy. Không crop cánh tủ ở chế độ xem lớn. Giữ ảnh thumbnail nhẹ và tải lười; chỉ tải bản lớn khi mở.

## Nguồn hình và mô hình

Ảnh tham chiếu đã xem trực tiếp: `public/images/kitchen-concept-2-800.webp`, `kitchen-concept-3-800.webp`, `kitchen-concept-4-800.webp`. Dùng để mô tả vật liệu, ánh sáng, ngôn ngữ cánh tủ; 45 phối cảnh mới không chỉ đổi crop ảnh gốc.

[Tài liệu OpenAI Flare](https://developers.openai.com/api/docs/models/gpt-image-2.5-flare) xác nhận model ID. Catalog MeiGen cũng có GPT Image 2.5, variant flare, nhưng MCP hiện chỉ cung cấp công cụ tra cứu. Công cụ image_gen tích hợp không có tham số chọn model. Kiểm tra môi trường phiên này: OPENAI_API_KEY chưa được cấu hình. Đã hỏi người dùng về việc cấu hình API hoặc chấp nhận công cụ tích hợp không xác minh model.

## File bàn giao

- [Danh sách ảnh và prompt](../../output/imagegen/collection-albums/manifest.json)
- [Thư mục lưu ảnh](../../output/imagegen/collection-albums/)

Bản PNG gốc và trang duyệt nằm ngoài `public/`. Website dùng WebP tại `public/images/collections/`; bản gốc không commit vào Git.

## Quyết định cuối cùng

- Người dùng đồng ý công cụ tạo ảnh tích hợp không xác minh model; không ghi nhận ảnh là Flare khi công cụ không cung cấp thông tin đó.
- Giữ nguyên ảnh đã tạo, không kiểm tra/sửa lại bếp gas; ràng buộc chỉ bếp từ áp dụng cho ảnh tạo tiếp từ ảnh toàn bộ số 21.
- Người dùng cho phép publish và deploy ngay khi đủ 45 ảnh, không cần bước duyệt nữa.

## Triển khai

[Website production](https://bep-am-website.tdk-onwork.workers.dev) có ba album mới. [Hướng dẫn bảo trì](../../docs/collection-albums.md) mô tả dữ liệu và lệnh tạo biến thể ảnh. Giữ nguyên thay đổi có sẵn của tác vụ khác trong workspace; bản deploy chỉ phát sinh 139 asset mới/thay đổi của album (135 WebP, 3 HTML, 1 CSS).
