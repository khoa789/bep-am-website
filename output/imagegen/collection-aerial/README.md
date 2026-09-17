# Toàn cảnh bếp từ trên cao

30 ảnh riêng biệt, góc nhìn xiên từ khoảng 2,5–4 m trên mặt đất, bao quát toàn khu bếp và lối đi. 15 ảnh đầu giữ nguyên góc cao 3–4 m; 15 ảnh tiếp theo dùng góc thấp hơn khoảng 1 m (2,5–3 m). Đây là bộ thứ mười, bổ sung sau 90 ảnh của sáu bộ mở rộng.

[manifest.json](manifest.json) lưu prompt, mã màu, trạng thái, kích thước và SHA256 của từng PNG. [Dữ liệu website](../../../src/data/collection-albums-aerial.json) chứa chú thích mã màu Lecmax theo tủ dưới, tủ trên và đảo/bán đảo. Bảng màu tham chiếu nằm ở [lecmax-color-reference.png](../collection-expansion/lecmax-color-reference.png).

Dùng công cụ image_gen tích hợp; model thực tế không được công cụ cung cấp. Cánh phẳng bóng kính, chỉ bếp từ, có máy rửa chén cạnh chậu khi bố trí phù hợp. Mã màu là ý đồ phối màu theo bảng người dùng cung cấp; ảnh AI không thay thế mẫu vật liệu thực tế.

PNG gốc trong thư mục slug không commit hoặc publish. Để lưu kết quả: `python3 output/imagegen/collection-aerial/record-image.py INDEX SOURCE_PNG` (INDEX bắt đầu 0). Xuất 90 WebP bằng:

```sh
node output/imagegen/collection-albums/prepare-web-images.mjs output/imagegen/collection-aerial/manifest.json
```
