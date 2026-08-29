---
title: "Design System Bếp Ấm"
status: approved
direction: "Kỹ nghệ ấm áp"
updated: 2026-08-29
source:
  - "/Users/tadaka/Documents/Bep Am_Knowledge Base/raw/sources/Brand_Guidelines_BepAm_v2.0.pdf"
  - "/Users/tadaka/Documents/Bep Am_Knowledge Base/raw/Bep Am info/marketing-strategy.md"
  - "/Users/tadaka/Documents/Bep Am_Knowledge Base/raw/Bep Am info/products.md"
---

# Design System Bếp Ấm

## 1. Mục tiêu trải nghiệm

Bếp Ấm là điểm đến cho một **giải pháp không gian bếp trọn gói**, nơi những thương hiệu chất lượng đã được chọn kỹ để khách hàng yên tâm ra quyết định. Lecmax là sản phẩm chủ lực và là điểm neo của trải nghiệm 3D, nhưng website phải thể hiện đồng đều vai trò của:

- hệ tủ bếp inox Lecmax;
- đá bề mặt Vicostone;
- thiết bị bếp Panasonic;
- chậu và vòi Konox;
- phụ kiện, thiết bị và vật liệu phù hợp khác được Bếp Ấm tuyển chọn.

Mục tiêu chuyển đổi chính: **đưa khách hàng đến showroom Bếp Ấm**. Không báo giá trực tuyến và không dùng chiến thuật gây áp lực.

## 2. Hướng thiết kế đã duyệt

**Kỹ nghệ ấm áp** kết hợp sự chính xác của vật liệu và kỹ thuật với cảm giác yên tâm của một gian bếp gia đình.

- Chuyên nghiệp nhưng không lạnh lùng.
- Cao cấp nhưng không phô trương.
- Chuyển động có mục đích, không trình diễn công nghệ vô cớ.
- Ảnh và vật liệu thật tạo niềm tin; 3D giúp giải thích phần khó nhìn thấy.
- Mobile-first; nội dung cốt lõi luôn đọc được khi 3D không tải.

## 3. Hành trình chính

```text
Lời hứa về một gian bếp trọn vẹn
→ Hệ sinh thái thương hiệu được Bếp Ấm chọn kỹ
→ 3D giải thích kết cấu chủ lực Lecmax
→ Giải pháp mặt đá, thiết bị và chậu vòi đồng bộ
→ Quy trình tư vấn và đồng hành
→ Bằng chứng về chất lượng, bảo hành và showroom
→ Ghé showroom trải nghiệm
```

Mỗi màn hình hoặc section chỉ có một hành động chính. CTA toàn site dùng một thông điệp nhất quán: **Ghé showroom trải nghiệm**.

## 4. Hệ màu

### Màu thương hiệu

| Token | Giá trị | Vai trò |
|---|---:|---|
| `--color-brand` | `#1B5E20` | Màu chính, tiêu đề nhấn, đường kỹ thuật, trạng thái chọn |
| `--color-action` | `#F57C00` | CTA và điểm tương tác; tối đa khoảng 30% màu thương hiệu |
| `--color-action-hover` | `#D96D00` | CTA hover, đảm bảo tương phản |
| `--color-on-brand` | `#FFFFFF` | Chữ trên nền xanh đậm |
| `--color-on-action` | `#242424` | Chữ trên nền cam; cặp màu đạt tương phản WCAG AA |

Tỷ lệ xanh : cam mục tiêu là 70 : 30. Không dùng champagne gold hoặc titanium silver như màu UI khi logo xanh–cam đang xuất hiện. Chất liệu inox, đá và kính trong ảnh/3D được xem là vật liệu sản phẩm, không phải màu trang trí thương hiệu.

### Màu trung tính

| Token | Giá trị | Vai trò |
|---|---:|---|
| `--color-canvas` | `#FFFFFF` | Nền chính |
| `--color-surface` | `#F5F5F5` | Nền section phụ |
| `--color-ink` | `#242424` | Tiêu đề và body text tăng tương phản |
| `--color-muted` | `#5F5F5F` | Chú thích và nội dung phụ |
| `--color-line` | `#D9DDD9` | Divider, khung kỹ thuật |
| `--color-stage` | `#121212` | Sân khấu 3D độc lập |
| `--color-stage-text` | `#F5F5F5` | Nội dung trên sân khấu 3D |

## 5. Typography

- Font chính: `Arial`, theo brand guideline.
- Font thay thế: `Roboto`, `Helvetica Neue`, sans-serif.
- Không dùng font viết tay, comic, bo tròn hoặc font trang trí.
- Không tải webfont ở MVP nếu font hệ thống đáp ứng, giảm thời gian hiển thị chữ.

| Role | Kích thước | Weight | Line-height |
|---|---|---:|---:|
| Display | `clamp(2.5rem, 7vw, 6.5rem)` | 700 | 0.98 |
| H1 | `clamp(2.25rem, 5vw, 4.75rem)` | 700 | 1.04 |
| H2 | `clamp(1.85rem, 3vw, 3.25rem)` | 700 | 1.1 |
| H3 | `clamp(1.25rem, 2vw, 1.65rem)` | 700 | 1.25 |
| Body large | `clamp(1.05rem, 1.4vw, 1.25rem)` | 400 | 1.65 |
| Body | `1rem` | 400 | 1.6 |
| Label | `0.75rem` | 700 | 1.3; tracking `0.12em` |

Giới hạn dòng đọc: 35–60 ký tự trên mobile, 60–75 ký tự trên desktop.

## 6. Bố cục và khoảng cách

- Lưới 12 cột desktop, 6 cột tablet, 4 cột mobile.
- Container tối đa `1280px`; gutter `20px / 32px / 48px` theo breakpoint.
- Thang khoảng cách: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128px`.
- Section padding: mobile `72–88px`; desktop `112–160px`.
- Không dùng horizontal scroll cho hành trình chính.
- Tránh card grid dày đặc; ưu tiên cụm nội dung lớn, đường chia mảnh và khoảng trắng.

## 7. Hình khối, viền và chiều sâu

- Radius: `2px` cho tag/label, `4px` cho nút/input, tối đa `12px` cho khung media.
- Line icon stroke `2px`, góc bo `2–4px`, chỉ dùng xanh hoặc dark gray.
- Không dùng glassmorphism, gradient trang trí, bokeh hoặc shadow dày.
- Shadow chỉ dùng cho lớp nổi thật sự: `0 16px 48px rgba(18,18,18,0.10)`.
- Dùng đường kỹ thuật, số thứ tự và nhãn nhỏ để thể hiện tính chính xác.

## 8. Hình ảnh và vật liệu

- Ánh sáng trầm ấm, màu tự nhiên, không oversaturated.
- Không gian sạch, gọn, có chiều sâu.
- Ưu tiên ba loại ảnh: macro vật liệu, toàn cảnh căn bếp, lifestyle gia đình.
- Không dùng stock generic hoặc ảnh dự án giả.
- Khi thiếu ảnh thật, bố cục phải vẫn hoàn chỉnh bằng typography, vật liệu CSS và 3D minh họa có ghi chú rõ.
- Không sửa màu, bóp méo hoặc thêm hiệu ứng vào logo gốc.

## 9. Chuyển động

- Micro-interaction: `150–300ms`; chuyển cảnh nội dung tối đa `400ms`.
- Chỉ animate `transform` và `opacity` cho UI.
- Tối đa 1–2 điểm chuyển động chính trong một viewport.
- Không scroll-jacking, scroll-snap bắt buộc hoặc animation nhấp nháy.
- Mọi chuyển động phải trả lời một câu hỏi về cấu tạo, công năng hoặc quan hệ giữa các giải pháp.
- `prefers-reduced-motion: reduce` phải tắt camera tự động, parallax và các reveal không cần thiết.

## 10. Trải nghiệm 3D

- 3D là một React island, không phải lớp nền toàn trang.
- Trước khi tải hiển thị poster/skeleton giữ nguyên tỷ lệ để CLS gần 0.
- Chỉ hydrate khi section gần viewport; dừng render khi ra khỏi viewport hoặc tab ẩn.
- Mobile mặc định ít hiệu ứng hơn desktop; có fallback tĩnh khi WebGL/GPU yếu.
- Điều khiển nhìn thấy được: mở/tách lớp, chọn hotspot, đặt lại góc nhìn.
- Không yêu cầu thao tác xoay tự do để hiểu nội dung.
- Mô hình ở MVP là minh họa kỹ thuật, không được mô tả như bản thiết kế chính xác cho khách hàng cụ thể.

## 11. Thành phần và trạng thái

### CTA chính

- Nền cam, chữ `#242424`, chiều cao tối thiểu `48px`.
- Nội dung ưu tiên: “Ghé showroom trải nghiệm”.
- Hover làm tối màu, không phóng to gây lệch layout.
- Focus ring xanh `3px` với offset rõ ràng.

### CTA phụ

- Nền trong, border xanh, chữ xanh.
- Dùng cho gọi điện, xem địa chỉ hoặc bỏ qua 3D.

### Loading / degraded / error

- Loading: poster + progress có text, không để canvas trắng.
- GPU yếu hoặc reduced motion: ảnh/HTML giải thích thay thế, CTA vẫn dùng được.
- Lỗi WebGL: thông báo ngắn, không kỹ thuật hóa; cung cấp nút xem nội dung tĩnh.
- Offline: thông tin showroom, số điện thoại và địa chỉ vẫn xuất hiện trong HTML.

## 12. Responsive và accessibility

- Kiểm tra tối thiểu tại `375, 768, 1024, 1440px` và mobile landscape.
- Touch target tối thiểu `44×44px`, khoảng cách giữa các target tối thiểu `8px`.
- Text thường đạt WCAG AA `4.5:1`; UI lớn và non-text đạt tối thiểu `3:1`.
- Có skip link, heading hierarchy tuần tự, landmark rõ, alt text và focus visible.
- Không truyền đạt ý nghĩa chỉ bằng màu hoặc chuyển động.
- Nội dung quan trọng tồn tại trong HTML, không nằm độc quyền trong canvas.

## 13. Giọng nói và nội dung

- Chân thành, rõ ràng, có chiều sâu; chuyên nghiệp 70%, gần gũi 30%.
- Giải thích vì sao nên hoặc không nên, không ép quyết định.
- Không dùng “sale”, “giảm giá”, “rẻ”, “đắt”, “tốt nhất”, “số 1”.
- Nói về chất lượng bằng vật liệu, quy trình và giá trị sử dụng dài hạn.
- Thông điệp hệ sinh thái:

> Từ hệ tủ, mặt đá, thiết bị đến chậu vòi, Bếp Ấm chọn từng thương hiệu bằng cùng một tiêu chuẩn: chất lượng rõ ràng, vận hành bền bỉ và phù hợp với căn bếp của mỗi gia đình.

## 14. Cấu trúc trang chủ

1. Hero: “Một nơi, trọn vẹn gian bếp” + CTA showroom.
2. Lời hứa tuyển chọn: Bếp Ấm nhận phần khó về mình.
3. Hệ sinh thái giải pháp: Lecmax, Vicostone, Panasonic, Konox.
4. Trải nghiệm 3D: bên trong một hệ tủ Lecmax.
5. Một căn bếp vận hành như một hệ thống: liên kết tủ, đá, thiết bị, chậu vòi.
6. Quy trình tư vấn và thi công trọn gói.
7. Chất lượng và sự an tâm dài hạn.
8. Showroom: địa chỉ, giờ mở cửa, hotline và CTA.

## 15. Tiêu chí kiểm chứng thiết kế

- Nhìn trang không cần đọc hết vẫn hiểu Bếp Ấm cung cấp giải pháp bếp trọn gói.
- Bốn nhóm Lecmax, Vicostone, Panasonic, Konox đều xuất hiện trước section 3D hoặc ngay sau lời hứa chính.
- Lecmax nổi bật nhờ chiều sâu giải thích, không làm các giải pháp còn lại bị hiểu là phụ kiện rời rạc.
- CTA showroom là hành động chính duy nhất.
- Trải nghiệm hoàn chỉnh trên mobile khi 3D bị tắt.
- Không vi phạm màu, logo, typography, tone hoặc visual guardrail của brand guideline.
