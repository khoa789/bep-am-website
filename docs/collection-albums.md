# Album phối cảnh bếp

Website có 10 bộ sưu tập với 165 phối cảnh trong album: chín bộ 15 ảnh và một bộ 30 ảnh toàn cảnh từ trên cao. Ba bộ ban đầu giữ ảnh bìa và ảnh cũ; bảy bộ mới dùng ảnh đầu album làm bìa danh mục, không lặp bìa trong trang chi tiết. Dữ liệu nằm trong [collection-albums.ts](../src/data/collection-albums.ts), [collection-albums-expanded.json](../src/data/collection-albums-expanded.json) và [collection-albums-aerial.json](../src/data/collection-albums-aerial.json); giao diện xem ảnh nằm trong [collection-album.astro](../src/components/collection-album.astro).

Trang chủ chỉ hiển thị ba bộ ban đầu, được chọn rõ qua `homepageCollectionSlugs` trong [editorial-content.ts](../src/data/editorial-content.ts). Nút “Xem tất cả 10 bộ sưu tập” dẫn đến `/bo-suu-tap/`. Trang tổng hợp có cả mười bộ; mỗi trang chi tiết có đường quay lại danh mục và hai bộ liên quan.

Ảnh dùng cánh phẳng bóng kính, thay đổi bảng màu, bố trí và bối cảnh. Đây là ý tưởng AI, không phải hồ sơ công trình đã thi công hay bản vẽ chế tạo.

## Tạo và lưu ảnh

- 45 PNG gốc của ba bộ đầu lưu trong `output/imagegen/collection-albums/<slug>/`; 90 PNG của sáu bộ mới lưu trong `output/imagegen/collection-expansion/<slug>/`. Bản gốc không commit vào Git.
- [Manifest và toàn bộ prompt](../output/imagegen/collection-albums/manifest.json) ghi rõ mô hình yêu cầu ban đầu là Flare, nhưng người dùng đã đồng ý công cụ tạo ảnh tích hợp không xác minh model.
- Người dùng đã duyệt việc publish/deploy cả 45 ảnh qua hội thoại. Ràng buộc chỉ dùng bếp từ được bổ sung cho ảnh tạo tiếp từ ảnh toàn bộ số 21; người dùng yêu cầu giữ nguyên các ảnh tạo trước đó.
- [Manifest mở rộng](../output/imagegen/collection-expansion/manifest.json) lưu 90 prompt riêng. Tất cả ảnh mới dùng bếp từ; bộ “Bếp cho nhà đông người” có gia đình cười nói vui vẻ. Phối màu theo bảng 15 màu Lecmax do người dùng cung cấp, sử dụng nhiều cách phối hai màu; máy rửa chén được bổ sung cạnh chậu rửa trong các phương án phù hợp.
- [Manifest góc nhìn cao](../output/imagegen/collection-aerial/manifest.json) lưu 30 prompt và 30 PNG riêng trong `output/imagegen/collection-aerial/`. Giữ nguyên 15 ảnh đầu góc nhìn 3–4 m; 15 ảnh tiếp theo hạ khoảng 1 m, còn 2,5–3 m theo phản hồi người dùng. Tất cả yêu cầu nhìn toàn cảnh khu bếp, cánh bóng kính, bếp từ và mã màu Lecmax ghi rõ theo từng phần tủ. Màu trong phối cảnh AI mang tính tham khảo, cần đối chiếu mẫu vật liệu khi chọn thi công.
- Ảnh tối ưu xuất vào `public/images/collections/<slug>/`, mỗi ảnh có bản 320, 800 và 1600 px. Giữ tỷ lệ gốc và loại metadata khi xuất WebP.

Khi có đủ bản PNG gốc và công cụ `cwebp` trên PATH, chạy từ gốc dự án:

```sh
node output/imagegen/collection-albums/prepare-web-images.mjs
node output/imagegen/collection-albums/build-preview.mjs
# Xuất WebP cho sáu bộ mở rộng:
node output/imagegen/collection-albums/prepare-web-images.mjs output/imagegen/collection-expansion/manifest.json
node output/imagegen/collection-albums/prepare-web-images.mjs output/imagegen/collection-aerial/manifest.json
```

Lệnh build-preview tạo album duyệt ba bộ ban đầu tại máy, mở trực tiếp `output/imagegen/collection-albums/index.html`. Website production dùng component Astro riêng; bản PNG và trang duyệt không thuộc thư mục `public/` nên không xuất lên website.

## Trải nghiệm xem

Lưới hai cột trên màn hình rộng, một cột trên điện thoại. Ảnh có chú thích màu sắc, bố trí, bối cảnh và mã ảnh để trao đổi khi tư vấn. Bộ toàn cảnh từ trên cao ghi mã màu tủ dưới, tủ trên và đảo/bán đảo dưới từng ảnh, đồng thời trong phần chi tiết của trình xem ảnh. Mở ảnh sẽ thấy toàn khung, nút trước/sau, bộ đếm và dải ảnh nhỏ. Hỗ trợ phím mũi tên, Escape và trả focus về ảnh đã chọn. Khi JavaScript không hoạt động, liên kết vẫn mở bản WebP lớn.

Định hướng bố cục tham khảo MCP Inspo: Artek, House of Honey và OMA. [Bản nghiên cứu](../plans/260917-collection-albums/plan.md) ghi nguồn và các quyết định; thiết kế giữ nền giấy, font và màu đã duyệt của Bếp Ấm.
