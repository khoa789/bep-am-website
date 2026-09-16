# Website Bếp Ấm

Website marketing cho Bếp Ấm, xây bằng Astro và một React Three Fiber island. Mục tiêu là giúp khách hàng hiểu giải pháp không gian bếp trọn gói đã được Bếp Ấm tuyển chọn kỹ, rồi khuyến khích họ ghé showroom trải nghiệm.

## Stack

- Astro: nội dung, SEO và static output.
- React Three Fiber + Three.js: trải nghiệm 3D Lecmax tải khi cần.
- Cloudflare Workers Static Assets: phục vụ website production từ bản build tĩnh.

## Chạy local

```bash
pnpm install
pnpm dev
```

## Kiểm tra

```bash
pnpm check
pnpm test
pnpm build
```

Kiểm tra gói deploy Cloudflare mà không ghi lên tài khoản:

```bash
pnpm cloudflare:dry-run
```

## Kiến trúc triển khai

Site xuất hoàn toàn tĩnh vào `dist/` và được cấu hình trong `wrangler.jsonc` như một
Workers Static Assets project, không có Worker script, D1 hay server runtime. Cấu hình này
giữ website đơn giản và vẫn để ngỏ khả năng thêm API/Workers về sau nếu có nhu cầu thật.

Triển khai production từ máy đã đăng nhập Cloudflare:

```bash
pnpm exec wrangler whoami
pnpm run deploy
```

Production hiện chạy tại
[bep-am-website.tdk-onwork.workers.dev](https://bep-am-website.tdk-onwork.workers.dev).
Astro dùng URL này để sinh canonical và ảnh Open Graph tuyệt đối. Khi chuyển sang custom
domain, đặt `PUBLIC_SITE_URL=https://ten-mien-moi.vn` tại lúc build để ghi đè.

## Nguồn thiết kế

- `DESIGN.md`: hướng trang chủ “Hồ sơ một gian bếp ấm” được duyệt ngày 16/09/2026.
- `docs/image-sources.json`: nguồn ảnh Lecmax; ảnh tham khảo không đại diện công trình Bếp Ấm.
- Đặt lịch tư vấn hiện qua điện thoại, không có API nhận lịch.

- `design-system/MASTER.md`: hệ màu, typography, motion, accessibility và hành trình nội dung đã duyệt.
- `docs/threejs-research.md`: repo Three.js/R3F đã đánh giá và quyết định dùng hoặc loại khỏi MVP.
- `plans/260829-2213-bep-am-astro-threejs-website/`: kế hoạch và tiêu chí nghiệm thu.

## Ranh giới triển khai

Source được build tĩnh và deploy lên Cloudflare Workers Static Assets. Thay DNS, thêm custom
domain hoặc cấu hình secrets vẫn cần xác nhận riêng.
