# Album phối cảnh bếp

Mỗi route bộ sưu tập có thêm 15 phối cảnh mới, bên cạnh ảnh bìa và ảnh cũ. Dữ liệu nằm trong [collection-albums.ts](../src/data/collection-albums.ts); giao diện và trình xem ảnh nằm trong [collection-album.astro](../src/components/collection-album.astro).

Ảnh dùng cánh phẳng bóng kính, thay đổi bảng màu, bố trí và bối cảnh. Đây là ý tưởng AI, không phải hồ sơ công trình đã thi công hay bản vẽ chế tạo.

## Tạo và lưu ảnh

- Bản PNG gốc lưu trên máy trong `output/imagegen/collection-albums/<slug>/`, không commit vào Git.
- [Manifest và toàn bộ prompt](../output/imagegen/collection-albums/manifest.json) ghi rõ mô hình yêu cầu ban đầu là Flare, nhưng người dùng đã đồng ý công cụ tạo ảnh tích hợp không xác minh model.
- Người dùng đã duyệt việc publish/deploy cả 45 ảnh qua hội thoại. Ràng buộc chỉ dùng bếp từ được bổ sung cho ảnh tạo tiếp từ ảnh toàn bộ số 21; người dùng yêu cầu giữ nguyên các ảnh tạo trước đó.
- Ảnh tối ưu xuất vào `public/images/collections/<slug>/`, mỗi ảnh có bản 320, 800 và 1600 px. Giữ tỷ lệ gốc và loại metadata khi xuất WebP.

Khi có đủ bản PNG gốc và công cụ `cwebp` trên PATH, chạy từ gốc dự án:

```sh
node output/imagegen/collection-albums/prepare-web-images.mjs
node output/imagegen/collection-albums/build-preview.mjs
```

Lệnh thứ hai tạo album duyệt tại máy, mở trực tiếp `output/imagegen/collection-albums/index.html`. Website production dùng component Astro riêng; bản PNG và trang duyệt không thuộc thư mục `public/` nên không xuất lên website.

## Trải nghiệm xem

Lưới hai cột trên màn hình rộng, một cột trên điện thoại. Ảnh có chú thích màu sắc, bố trí, bối cảnh và mã ảnh để trao đổi khi tư vấn. Mở ảnh sẽ thấy toàn khung, nút trước/sau, bộ đếm và dải ảnh nhỏ. Hỗ trợ phím mũi tên, Escape và trả focus về ảnh đã chọn. Khi JavaScript không hoạt động, liên kết vẫn mở bản WebP lớn.

Định hướng bố cục tham khảo MCP Inspo: Artek, House of Honey và OMA. [Bản nghiên cứu](../plans/260917-collection-albums/plan.md) ghi nguồn và các quyết định; thiết kế giữ nền giấy, font và màu đã duyệt của Bếp Ấm.
