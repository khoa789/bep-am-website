---
phase: 1
title: "Nền tảng, nhận diện và scaffold"
status: completed
priority: P1
effort: "foundation"
dependencies: []
---

# Phase 1: Nền tảng, nhận diện và scaffold

## Overview

Tạo nền Astro/React/Three.js tối giản, đưa design token và logo chính thức vào đúng cấu trúc, thiết lập SEO/layout để các phase sau không phải thay nền.

## Requirements

- Functional: Astro render trang chủ; React island được hỗ trợ; logo chính thức hiển thị đúng tỷ lệ.
- Non-functional: TypeScript strict, không secret, dependency tối thiểu, cấu trúc dễ đọc.

## Architecture

Astro static output. `BaseLayout.astro` sở hữu metadata và shell. CSS token bám `design-system/MASTER.md`. React chỉ hydrate component 3D.

## Related Code Files

- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `src/layouts/base-layout.astro`
- Create: `src/styles/global.css`
- Create: `public/brand/bep-am-logo.png`
- Create: `README.md`

## Implementation Steps

1. Scaffold Astro TypeScript và cài React, Three.js, React Three Fiber.
2. Chuẩn hóa logo trích từ brand PDF mà không đổi màu/tỷ lệ.
3. Cài semantic tokens, typography, focus, motion và responsive primitives.
4. Tạo layout SEO và shell trang chủ.

## Success Criteria

- [x] Astro dev/build nhận diện đầy đủ dependencies.
- [x] Logo đúng asset gốc, có kích thước hiển thị tối thiểu 80px và clear space.
- [x] CSS dùng token thương hiệu, không dùng palette xanh SaaS đã bị loại.
- [x] README ghi stack, lệnh chạy và ranh giới deploy.

## Risk Assessment

Logo lấy từ PDF có vùng trắng lớn. Crop chỉ được loại whitespace, không chỉnh pixel logo. Nếu chất lượng không đủ ở màn hình lớn, giữ kích thước hiển thị nhỏ và yêu cầu file vector gốc ở một lần cập nhật sau.
