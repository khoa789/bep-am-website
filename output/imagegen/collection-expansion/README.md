# Sáu bộ sưu tập mở rộng

90 ảnh riêng biệt, 15 ảnh mỗi bộ, bổ sung cho 45 ảnh của ba bộ ban đầu. PNG gốc lưu trong thư mục slug; [manifest.json](manifest.json) chứa prompt, trạng thái, kích thước và SHA256. [Dữ liệu website](../../../src/data/collection-albums-expanded.json) chứa tên, mô tả và mã ảnh.

Dùng công cụ image_gen tích hợp theo chấp thuận người dùng. Model thực tế không được công cụ cung cấp; không khẳng định là Flare. Mọi prompt mới chỉ định cánh kính bóng và bếp từ, không có bếp gas. Bộ gia đình đông người thêm người cười nói vui vẻ trong từng ảnh.

`record-image.py INDEX SOURCE_PNG` lưu kết quả công cụ vào đúng vị trí (INDEX bắt đầu 0), kiểm tra định dạng và ghi provenance. Lệnh không ghi đè ảnh đã lưu. Để xuất các ảnh sang WebP sau khi đủ 90 PNG, chạy từ gốc dự án:

```sh
node output/imagegen/collection-albums/prepare-web-images.mjs output/imagegen/collection-expansion/manifest.json
```

Bản gốc không commit hoặc publish. Website dùng 270 WebP tại `public/images/collections/`, cộng 135 WebP có sẵn. Người dùng đã cho phép triển khai; sáu bộ mới chỉ xuất hiện trong trang tổng hợp và các trang chi tiết, không thêm thẻ bộ sưu tập vào trang chủ.

Bảng màu tham chiếu: [lecmax-color-reference.png](lecmax-color-reference.png). Sau góp ý của người dùng,18 ảnh ở ba bộ đầu được thay bằng phối màu đa dạng hơn; bản trước lưu tại `superseded/` (không publish/commit). Ba bộ sau dùng 15 cặp màu mỗi bộ. Máy rửa chén cạnh chậu rửa được đưa vào toàn bộ bộ gia đình và các phương án phù hợp khác. [Bộ 30 góc nhìn cao](../collection-aerial/README.md) được tạo tiếp sau 90 ảnh này.
