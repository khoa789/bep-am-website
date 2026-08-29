---
phase: 2
title: "Nội dung và giao diện giải pháp trọn gói"
status: completed
priority: P1
effort: "content-ui"
dependencies: [1]
---

# Phase 2: Nội dung và giao diện giải pháp trọn gói

## Overview

Xây hành trình trang chủ hoàn chỉnh để khách hiểu Bếp Ấm đã chọn và kết nối toàn bộ thành phần của một căn bếp, rồi dẫn họ tới showroom.

## Requirements

- Functional: hero, lời hứa tuyển chọn, hệ sinh thái thương hiệu, quy trình, showroom, CTA tel/map.
- Non-functional: HTML semantic, không dữ liệu giả, brand voice 70/30 chuyên nghiệp–gần gũi.

## Architecture

Các section Astro dùng dữ liệu typed trong `src/data/site-content.ts`. Component nhỏ chỉ tách khi có cấu trúc hoặc behavior thật sự dùng lại.

## Related Code Files

- Create: `/Users/tadaka/Documents/BepAm_website/src/pages/index.astro`
- Create: `/Users/tadaka/Documents/BepAm_website/src/data/site-content.ts`
- Create: `/Users/tadaka/Documents/BepAm_website/src/components/site-header.astro`
- Create: `/Users/tadaka/Documents/BepAm_website/src/components/solution-ecosystem.astro`
- Create: `/Users/tadaka/Documents/BepAm_website/src/components/showroom-cta.astro`

## Implementation Steps

1. Viết content từ brand, marketing và product sources; loại claim thiếu bằng chứng.
2. Dựng hero “Một nơi, trọn vẹn gian bếp”.
3. Dựng hệ sinh thái Lecmax–Vicostone–Panasonic–Konox với vai trò liên kết.
4. Dựng quy trình tư vấn, tiêu chuẩn tuyển chọn và thông tin showroom.
5. Thêm navigation, tel và map link; bảo đảm CTA duy nhất có ưu tiên rõ.

## Success Criteria

- [x] Bốn nhóm thương hiệu xuất hiện rõ trong nửa đầu hành trình.
- [x] Nội dung thể hiện Bếp Ấm nhận phần khó tuyển chọn và đồng bộ giải pháp.
- [x] Không có giá online, discount, testimonial hoặc dự án giả.
- [x] Hotline `0923 179 169`, địa chỉ và giờ mở cửa hiển thị đúng nguồn.
- [x] Trang vẫn có giá trị hoàn chỉnh trước khi thêm 3D.

## Risk Assessment

Thiếu hình ảnh thực tế có thể làm section thương hiệu trống. Dùng bố cục typography, material swatches và đường kỹ thuật thay vì stock hoặc ảnh giả; không gắn logo đối tác khi chưa có asset chính thức.
