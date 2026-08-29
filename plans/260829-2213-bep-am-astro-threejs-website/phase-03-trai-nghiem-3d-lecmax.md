---
phase: 3
title: "Trải nghiệm 3D Lecmax"
status: completed
priority: P1
effort: "3d-island"
dependencies: [1, 2]
---

# Phase 3: Trải nghiệm 3D Lecmax

## Overview

Thêm một React island 3D minh họa kỹ thuật, giúp người xem hiểu cấu tạo module Lecmax mà không biến toàn website thành canvas.

## Requirements

- Functional: model minh họa, tách lớp, mở cánh/ngăn, hotspot, reset, fallback.
- Non-functional: load khi gần viewport, reduced motion, mobile touch, dừng render khi không xem.

## Architecture

`KitchenExperience.tsx` quản lý mode tương tác. Scene dùng hình học đơn giản thay GLB chưa có. Nội dung giải thích được nhân đôi semantically trong HTML bên cạnh canvas. Astro hydrate bằng `client:visible`.

## Related Code Files

- Create: `/Users/tadaka/Documents/BepAm_website/src/components/three/kitchen-experience.tsx`
- Create: `/Users/tadaka/Documents/BepAm_website/src/components/three/kitchen-scene.tsx`
- Create: `/Users/tadaka/Documents/BepAm_website/src/components/three/kitchen-fallback.tsx`
- Create: `/Users/tadaka/Documents/BepAm_website/src/components/kitchen-story.astro`
- Create: `/Users/tadaka/Documents/BepAm_website/src/data/kitchen-hotspots.ts`

## Implementation Steps

1. Dựng scene cabinet module, countertop, sink zone và appliance volume.
2. Thêm mode hoàn thiện, cấu tạo và vận hành.
3. Thêm hotspot/legend điều khiển bằng button HTML.
4. Thêm reset, reduced-motion và lỗi WebGL fallback.
5. Giới hạn DPR, demand rendering khi hợp lý và tạm dừng khi tab ẩn.

## Success Criteria

- [x] 3D có tối thiểu ba trạng thái có ý nghĩa, không chỉ xoay model.
- [x] Người dùng hiểu cấu tạo qua HTML khi canvas không có.
- [x] Điều khiển bằng keyboard và touch; target tối thiểu 44px.
- [x] Không load React/Three.js trước khi section gần viewport.
- [x] Có nhãn “Minh họa kỹ thuật” để tránh hiểu là thiết kế cho khách cụ thể.

## Risk Assessment

Procedural model không đại diện chính xác 100% sản phẩm Lecmax. Nội dung chỉ minh họa nguyên lý đã có nguồn; không dùng kích thước giả. Khi có GLB chính thức, thay scene model mà giữ interaction contract.
