# Nghiên cứu hệ sinh thái Three.js cho Bếp Ấm

Cập nhật: 2026-08-29

## Quyết định MVP

Website dùng **Astro + React Three Fiber**, với 3D là một island tải bằng `client:visible`.
Mô hình MVP được dựng thủ tục bằng hình học cơ bản, không cần tải GLB, texture lớn hoặc thư viện
hiệu ứng. Canvas chỉ render khi trạng thái thay đổi (`frameloop="demand"`) và giới hạn DPR.

## Repo đã đánh giá

| Repo | Giá trị có thể tận dụng | Quyết định hiện tại |
|---|---|---|
| [pmndrs/react-three-fiber](https://github.com/pmndrs/react-three-fiber) | React renderer chính thức trong hệ pmndrs; R3F 9 tương thích React 19; hỗ trợ render theo nhu cầu | Dùng trong MVP |
| [pmndrs/gltfjsx](https://github.com/pmndrs/gltfjsx) | Chuyển GLTF thành component có type, prune graph và hỗ trợ pipeline nén | Dùng khi có model 3D sản phẩm thật |
| [donmccurdy/glTF-Transform](https://github.com/donmccurdy/glTF-Transform) | Pipeline tối ưu GLB/GLTF, nén mesh và texture có thể tái lập | Dùng ở giai đoạn đưa model thật lên web |
| [pmndrs/drei](https://github.com/pmndrs/drei) | Nhiều helper cho camera, loader, performance và interaction | Chưa thêm; MVP không cần để tránh tăng dependency |
| [pmndrs/react-three-offscreen](https://github.com/pmndrs/react-three-offscreen) | Chuyển R3F sang Web Worker với fallback | Không dùng; repo tự ghi là experimental, chưa đáng đổi độ phức tạp lấy lợi ích ở scene nhỏ |
| [gkjohnson/three-mesh-bvh](https://github.com/gkjohnson/three-mesh-bvh) | Tăng tốc raycasting trên mesh nhiều polygon | Không cần cho mô hình thủ tục ít mesh; xem lại khi có model kiến trúc lớn |
| [pmndrs/uikit](https://github.com/pmndrs/uikit) | UI bố cục bên trong WebGL | Không dùng; nút HTML bên ngoài canvas dễ tiếp cận và SEO tốt hơn |

## Nguyên tắc rút ra

- Giữ nội dung, nút và trạng thái tương tác trong HTML; canvas chỉ trình bày hình học.
- Không tải thêm repo chỉ vì demo đẹp. Mỗi dependency phải giải quyết một giới hạn đo được.
- Khi có GLB thật: chuẩn hóa tên node, chạy `gltfjsx --transform`, kiểm tra lại bằng glTF-Transform,
  giới hạn texture, rồi đo kích thước bundle và thời gian tương tác trên mobile.
- Chỉ cân nhắc BVH, offscreen canvas hoặc post-processing sau khi profiling chứng minh cần thiết.
