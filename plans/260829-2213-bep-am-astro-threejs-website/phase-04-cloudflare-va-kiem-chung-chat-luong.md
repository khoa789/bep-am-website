---
phase: 4
title: "Cloudflare và kiểm chứng chất lượng"
status: completed
priority: P1
effort: "hardening"
dependencies: [1, 2, 3]
---

# Phase 4: Cloudflare và kiểm chứng chất lượng

## Overview

Làm site sẵn sàng triển khai static trên Cloudflare, kiểm tra build, SEO, accessibility, mobile/desktop và sửa lỗi theo bằng chứng render thật.

## Requirements

- Functional: production build, preview local, Cloudflare config, metadata và structured data.
- Non-functional: không secret, không lỗi console nghiêm trọng, responsive, reduced motion và fallback.

## Architecture

Astro static output được phục vụ như static assets. Không tạo Worker/D1 khi chưa có nhu cầu server. Wrangler chỉ cấu hình output directory và compatibility metadata cần thiết.

## Related Code Files

- Create: `wrangler.jsonc`
- Create: `tests/content-contract.test.ts`
- Modify: `package.json`
- Modify: `README.md`
- Modify: các file UI/3D khi QA phát hiện lỗi.

## Implementation Steps

1. Thêm scripts check/test/build/preview và Cloudflare config tối thiểu.
2. Viết test contract cho thông điệp, thương hiệu và contact.
3. Build production và kiểm tra output HTML.
4. Render thật ở 375px và 1440px; kiểm tra keyboard/reduced motion.
5. Sửa overflow, contrast, loading, console và 3D regressions.
6. Ghi rõ lệnh deploy; dừng trước remote mutation nếu chưa có xác nhận.

## Success Criteria

- [x] `npm run check`, `npm run test`, `npm run build` đều pass.
- [x] Wrangler dry-run hoặc local preview phục vụ đúng `dist`.
- [x] Screenshot mobile/desktop xác nhận layout và nội dung chính.
- [x] Không horizontal overflow, focus rõ, reduced motion hoạt động.
- [x] SEO title/description/canonical/Open Graph/JSON-LD hợp lệ ở mức source.
- [x] README ghi rõ ranh giới chưa deploy production.

## Risk Assessment

Cloudflare API hoặc adapter có thể thay đổi. Xác minh tài liệu hiện hành trước khi cấu hình; với site tĩnh, ưu tiên cấu hình ít phụ thuộc nhất. Nếu remote deploy cần login hoặc tạo project, dừng ở cổng xác nhận thay vì tự provision.
