---
title: "Website Bếp Ấm Astro và Three.js"
description: "Xây dựng website marketing Bếp Ấm thể hiện một giải pháp không gian bếp trọn gói, có trải nghiệm 3D Lecmax tải theo nhu cầu và sẵn sàng chạy trên Cloudflare."
status: completed
priority: P1
effort: "4 phases"
tags: [feature, frontend, experimental]
blockedBy: []
blocks: []
created: 2026-08-29
---

# Website Bếp Ấm Astro và Three.js

## Tổng quan

Website dành cho gia đình 35–55 tuổi đang xây hoặc cải tạo nhà, giúp họ hiểu Bếp Ấm là nơi cung cấp một giải pháp bếp trọn gói đã được tuyển chọn kỹ. Astro đảm nhiệm nội dung nhanh và SEO; React Three Fiber đảm nhiệm một island 3D giải thích kết cấu Lecmax; cấu hình triển khai hướng tới Cloudflare.

Nguồn thiết kế: [design-system/MASTER.md](../../../design-system/MASTER.md).

## Phạm vi đã chốt

- Trang chủ hoàn chỉnh, mobile-first, tiếng Việt.
- Thông điệp “Một nơi, trọn vẹn gian bếp”.
- Hệ sinh thái Lecmax, Vicostone, Panasonic, Konox xuất hiện rõ và có vai trò trong một hệ thống thống nhất.
- Trải nghiệm 3D minh họa cấu tạo Lecmax với tương tác có mục đích, fallback và reduced motion.
- CTA chính đưa khách tới showroom; hotline và địa chỉ là HTML thật, dùng được khi JavaScript lỗi.
- SEO cơ bản, structured data, accessibility, responsive và build Cloudflare.

## Không thuộc phạm vi

- Configurator đầy đủ, báo giá trực tuyến hoặc tài khoản khách hàng.
- CMS EmDash, CRM, D1 hoặc upload mặt bằng trong MVP này.
- Dùng ảnh dự án, testimonial hoặc thông số bảo hành chưa có bằng chứng.
- Tạo tài nguyên Cloudflare, thay DNS hoặc deploy production khi chưa có xác nhận riêng.

## Kiến trúc

```text
Astro page + semantic HTML
├── Nội dung/SEO/CTA showroom
├── Hệ sinh thái giải pháp bếp trọn gói
└── React island tải khi gần viewport
    └── React Three Fiber + Three.js
        ├── Minh họa module tủ Lecmax
        ├── Tách lớp và hotspot
        └── Fallback HTML/CSS khi không dùng WebGL

Build tĩnh → Cloudflare static assets
```

## Phases

| # | Phase | Trạng thái | Phụ thuộc |
|---|---|---|---|
| 1 | [Nền tảng, nhận diện và scaffold](./phase-01-start.md) | Completed | — |
| 2 | [Nội dung và giao diện giải pháp trọn gói](./phase-02-noi-dung-va-giao-dien-giai-phap-tron-goi.md) | Completed | Phase 1 |
| 3 | [Trải nghiệm 3D Lecmax](./phase-03-trai-nghiem-3d-lecmax.md) | Completed | Phase 1–2 |
| 4 | [Cloudflare và kiểm chứng chất lượng](./phase-04-cloudflare-va-kiem-chung-chat-luong.md) | Completed | Phase 1–3 |

## Tiêu chí hoàn thành

- [x] Website chạy và build thành công bằng lệnh được ghi trong README.
- [x] Hero và phần đầu trang truyền đạt rõ giải pháp bếp trọn gói, không chỉ bán Lecmax.
- [x] Lecmax, Vicostone, Panasonic và Konox đều có nội dung cụ thể, đúng vai trò và không có claim thiếu nguồn.
- [x] CTA showroom, hotline và địa chỉ hoạt động bằng liên kết thật.
- [x] 3D tải trì hoãn, có ít nhất ba trạng thái giải thích, điều khiển nhìn thấy và fallback không phụ thuộc canvas.
- [x] Mobile 375px, tablet và desktop không có horizontal overflow; touch target tối thiểu 44px.
- [x] Keyboard, focus, reduced motion, heading hierarchy và contrast đạt yêu cầu thiết kế.
- [x] Build Cloudflare thành công; deployment production vẫn được giữ ở cổng xác nhận riêng.
- [x] Không có dữ liệu dự án/testimonial giả, secret hoặc file môi trường riêng tư.

## Rủi ro chính

| Rủi ro | Tín hiệu | Xử lý đã định |
|---|---|---|
| Không có GLB Lecmax chính thức | Chỉ có tài liệu, không có model asset | Dùng mô hình hình học minh họa, ghi rõ; kiến trúc sẵn sàng thay GLB sau |
| Không có bộ ảnh công trình | Không tìm thấy ảnh public trong raw | Không dựng project giả; dùng typography, logo và 3D minh họa |
| GPU/mobile yếu | FPS thấp hoặc WebGL lỗi | Tắt chuyển động, giảm DPR và chuyển sang fallback HTML |
| Thông tin thương hiệu đối tác dễ bị diễn giải quá mức | Claim không có trong nguồn | Chỉ mô tả vai trò sản phẩm và việc Bếp Ấm tuyển chọn; tránh chứng nhận/so sánh chưa kiểm chứng |

## Bằng chứng kiểm chứng

- `npm run check`, `npm run test`, `npm run build`.
- Kết quả render thật ở mobile và desktop.
- Kiểm tra source HTML khi JavaScript/3D không hoạt động.
- Đối chiếu nội dung với `raw/Bep Am info/*.md` và brand guideline PDF.

Kết quả cuối ngày 2026-08-29:

- `pnpm check`: 0 lỗi, 0 cảnh báo, 0 gợi ý.
- `pnpm test`: 4/4 test đạt.
- `pnpm build`: 2 trang static được tạo thành công.
- `wrangler deploy --dry-run`: 12 static assets được chấp nhận, không có binding.
- Browser QA: không tràn ngang ở 375, 768 và 1440px; vùng chạm liên hệ tối thiểu 44px.
- R3F: hydrate khi section hiện ra, ba trạng thái hoạt động, reduced motion chuyển về bản tĩnh.
- `pnpm audit --prod`: không có lỗ hổng đã biết.

<!-- slug: bep-am-astro-threejs-website -->
