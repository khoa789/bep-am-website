# ĐỀ XUẤT WEBSITE 3D CHO BẾP ẤM – LECMAX

## 1. Tổng quan dự án

### Tên dự án đề xuất

**Bếp Ấm 3D Experience – Bên trong một căn bếp Lecmax**

### Bối cảnh

Bếp Ấm là đơn vị tư vấn, thiết kế và thi công hệ tủ bếp cao cấp Lecmax, kết hợp các thiết bị và phụ kiện bếp như Panasonic, Hafele, Konox và các thương hiệu phù hợp khác.

Khách hàng mục tiêu chủ yếu là các gia đình đang xây nhà mới hoặc cải tạo căn bếp, có mức đầu tư cao, quan tâm đến độ bền, công năng, tính thẩm mỹ và chất lượng thi công lâu dài.

Thách thức lớn nhất trong quá trình bán hàng là phần lớn giá trị của hệ tủ bếp Lecmax nằm ở những yếu tố khách hàng khó nhìn thấy qua ảnh thông thường:

- Kết cấu khung tủ inox 304.
- Cấu tạo nhiều lớp.
- Hệ phụ kiện và ray trượt.
- Cách tổ chức khoang tủ.
- Độ chính xác trong thiết kế và thi công.
- Khả năng vận hành trong đời sống thực tế.
- Giá trị sử dụng lâu dài.

Website cần biến các giá trị kỹ thuật vô hình này thành một trải nghiệm trực quan, dễ hiểu và có sức thuyết phục cao.

---

## 2. Tư duy chiến lược

Three.js không nên được dùng chỉ để tạo hiệu ứng đẹp hoặc làm toàn bộ website trở thành một thế giới 3D phức tạp.

Vai trò phù hợp nhất của Three.js là:

> Biến những giá trị kỹ thuật vô hình của hệ tủ bếp Lecmax thành một trải nghiệm mà khách hàng có thể nhìn thấy, tương tác và hiểu được.

Website phải giúp khách hàng trả lời ba câu hỏi:

1. Hệ tủ Lecmax khác gì so với một hệ tủ bếp thông thường?
2. Hệ tủ vận hành như thế nào trong đời sống thật?
3. Nếu áp dụng vào căn bếp của gia đình mình thì sẽ ra sao?

Mục tiêu không phải chỉ tạo ra một website gây ấn tượng thị giác.

Mục tiêu cuối cùng là:

- Tăng mức độ hiểu sản phẩm.
- Tăng niềm tin vào chất lượng.
- Tăng thời gian khách hàng ở lại website.
- Tăng tỷ lệ gửi mặt bằng.
- Tăng số lịch hẹn tư vấn.
- Hỗ trợ đội ngũ bán hàng giải thích sản phẩm dễ hơn.
- Tạo sự khác biệt rõ ràng so với các đơn vị thiết kế tủ bếp khác.

---

## 3. Nguyên tắc thiết kế trải nghiệm

### 3.1. Không làm 3D khắp mọi nơi

Chỉ sử dụng 3D tại các điểm tạo giá trị cao:

- Hero section.
- Giải phẫu hệ tủ.
- Trình diễn công năng.
- So sánh cấu tạo.
- Cấu hình phong cách cơ bản.
- Trang thiết kế riêng của khách hàng trong tương lai.

Các phần sau nên sử dụng HTML, ảnh thật và video:

- Giới thiệu thương hiệu.
- Công trình thực tế.
- Quy trình làm việc.
- Blog kiến thức.
- Chính sách bảo hành.
- Form đăng ký tư vấn.
- Thông tin liên hệ.

### 3.2. Mỗi tương tác phải có mục đích

Không tạo mô hình chỉ để khách xoay tự do.

Mỗi animation hoặc thao tác phải trả lời một câu hỏi cụ thể:

- Cấu tạo này có lợi gì?
- Khoang tủ này giải quyết nhu cầu nào?
- Vì sao phụ kiện này cần thiết?
- Vì sao mức đầu tư cao hơn?
- Điểm khác biệt trong thi công của Bếp Ấm là gì?

### 3.3. 3D tạo tò mò, công trình thật tạo niềm tin

Công thức trải nghiệm đề xuất:

```text
3D gây ấn tượng
    ↓
Giải thích kỹ thuật
    ↓
Hình ảnh công trình thực tế
    ↓
Quy trình rõ ràng
    ↓
Tư vấn cá nhân hóa
    ↓
Chuyển đổi thành khách hàng tiềm năng
```

### 3.4. Ưu tiên điện thoại

Phần lớn khách hàng có khả năng truy cập website bằng điện thoại.

Website phải:

- Tải nhanh trên mạng 4G.
- Có trải nghiệm thay thế khi thiết bị yếu.
- Không bắt khách tải mô hình quá nặng.
- Không dùng hiệu ứng làm khách chóng mặt.
- Không khóa cuộn trang quá lâu.
- Không buộc người dùng phải hiểu cách xoay mô hình 3D.

---

# 4. Ý tưởng trải nghiệm Three.js

## 4.1. Trải nghiệm chủ lực: Giải phẫu một hệ tủ bếp Lecmax

Đây là ứng dụng Three.js quan trọng nhất của website.

### Mô tả

Khách hàng nhìn thấy một hệ tủ bếp hoàn chỉnh. Khi cuộn trang hoặc chọn từng lớp, căn bếp được bóc tách theo thứ tự:

```text
Căn bếp hoàn chỉnh
    ↓
Cánh tủ
    ↓
Khung tủ inox 304
    ↓
Ray trượt và bản lề
    ↓
Khoang chức năng
    ↓
Mặt đá và thiết bị
    ↓
Hệ thống hoàn chỉnh
```

### Tương tác đề xuất

Khách hàng có thể:

- Xoay mô hình ở mức giới hạn.
- Phóng to từng khu vực.
- Mở và đóng cánh tủ.
- Kéo ngăn kéo.
- Hạ giá bát nâng hạ.
- Kéo tủ đồ khô.
- Mở tủ thiết bị.
- Bật đèn LED trong tủ rượu.
- Ẩn cánh tủ để nhìn kết cấu bên trong.
- Chọn từng điểm hotspot để xem thông tin.
- Chuyển giữa chế độ hoàn thiện và chế độ cấu tạo.

### Thông tin hotspot

Mỗi hotspot chỉ nên có:

- Tên bộ phận.
- Công dụng.
- Giá trị nổi bật.
- Một hình ảnh cận cảnh hoặc video ngắn nếu cần.
- Nút “Xem công trình có sử dụng giải pháp này”.

### Giá trị kinh doanh

Trải nghiệm này giúp khách hàng hiểu rằng mức đầu tư vào Lecmax không chỉ dành cho vẻ ngoài mà còn dành cho:

- Kết cấu.
- Độ bền.
- Công năng.
- Phụ kiện.
- Độ hoàn thiện.
- Trải nghiệm sử dụng lâu dài.

---

## 4.2. Một ngày trong căn bếp

### Mục tiêu

Cho khách hàng thấy căn bếp không phải là một vật thể tĩnh, mà là một hệ thống vận hành theo nhịp sống gia đình.

### Kịch bản đề xuất

#### Buổi sáng

- Ánh sáng bếp bật lên.
- Camera tiến nhẹ vào khu vực chuẩn bị.
- Giá bát nâng hạ đi xuống.
- Ngăn kéo dụng cụ mở ra.
- Bếp từ được kích hoạt.
- Máy hút mùi bắt đầu vận hành.

#### Buổi trưa

- Tủ đồ khô được kéo ra.
- Ngăn kéo nồi mở.
- Khoang thùng rác âm tủ xuất hiện.
- Máy rửa chén được mở.
- Các vùng công năng được đánh dấu nhẹ.

#### Buổi tối

- Ánh sáng chuyển sang tông ấm.
- Tủ rượu sáng đèn.
- Bàn đảo trở thành khu vực sinh hoạt.
- Căn bếp chuyển từ không gian nấu ăn sang không gian gia đình.

### Cách điều khiển

Có thể dùng scroll-based animation:

```text
Cuộn đến phần 1 → camera tiến vào khu vực chậu
Cuộn đến phần 2 → giá bát hạ xuống
Cuộn đến phần 3 → tủ đồ khô kéo ra
Cuộn đến phần 4 → ngăn kéo và thiết bị vận hành
Cuộn đến phần 5 → ánh sáng chuyển sang buổi tối
```

### Nguyên tắc

Khách hàng không cần biết sử dụng mô hình 3D vẫn xem được toàn bộ câu chuyện.

---

## 4.3. So sánh hệ tủ thông thường và hệ tủ Lecmax

### Mục tiêu

Giúp khách hàng nhìn thấy khác biệt mà không cần nói xấu đối thủ.

### Hình thức

Màn hình chia đôi hoặc có thanh kéo before/after.

#### Bên trái

- Hệ tủ vật liệu thông thường.
- Chỉ thấy bề mặt.
- Khoang tủ cơ bản.
- Phụ kiện giới hạn.
- Kết cấu ít được giải thích.

#### Bên phải

- Hệ tủ Lecmax.
- Bóc tách khung inox.
- Thể hiện ray trượt, bản lề, phụ kiện.
- Khoang chức năng rõ ràng.
- Tổ chức lưu trữ khoa học.

### Các tiêu chí có thể so sánh

- Vật liệu khung.
- Khả năng phù hợp với môi trường ẩm.
- Cấu trúc khoang tủ.
- Hệ phụ kiện.
- Độ hoàn thiện.
- Khả năng vệ sinh.
- Khả năng bảo trì.
- Độ chính xác khi lắp đặt.
- Trải nghiệm sử dụng.

### Lưu ý truyền thông

Không nên dùng thông điệp tuyệt đối hoặc thiếu cơ sở.

Nên tập trung vào:

- Cấu tạo thực tế.
- Tiêu chuẩn vật liệu.
- Giải pháp công năng.
- Quy trình thi công.
- Chính sách bảo hành.

---

## 4.4. Mô phỏng công năng theo nhu cầu gia đình

### Tình huống 1: Gia đình có người lớn tuổi

Mô hình làm nổi bật:

- Giá bát nâng hạ.
- Ngăn kéo thay vì khoang thấp khó lấy.
- Thiết bị đặt ở độ cao phù hợp.
- Hạn chế cúi và với.
- Lối đi rộng.
- Ánh sáng rõ.

### Tình huống 2: Gia đình bốn người

Mô hình làm nổi bật:

- Luồng di chuyển từ tủ lạnh đến chậu và bếp.
- Khu sơ chế.
- Khu nấu.
- Khu lưu trữ.
- Khu máy rửa chén.
- Bàn đảo dùng cho bữa sáng hoặc học tập.

### Tình huống 3: Gia đình thường xuyên đãi khách

Mô hình làm nổi bật:

- Bàn đảo lớn.
- Tủ rượu.
- Khoang ly.
- Hệ tủ cao.
- Khu sơ chế tách với khu phục vụ.
- Không gian thao tác cho nhiều người.

### Tình huống 4: Nhà có trẻ nhỏ

Mô hình làm nổi bật:

- Bố trí vật dụng nguy hiểm ngoài tầm với.
- Góc bo phù hợp.
- Khu lưu trữ riêng.
- Thiết bị có tính năng an toàn.
- Không gian quan sát trẻ từ khu nấu.

### Giá trị

Website không còn bán “mét tủ”, mà bán một giải pháp sống phù hợp với từng gia đình.

---

## 4.5. Bộ cấu hình phong cách bếp cơ bản

### Giai đoạn đầu

Chỉ cho phép khách hàng chọn các yếu tố đơn giản:

- Kiểu bố trí: chữ I, chữ L, chữ U.
- Màu tủ trên.
- Màu tủ dưới.
- Màu mặt đá.
- Cánh kính hoặc cánh đặc.
- Có tay nắm hoặc không tay nắm.
- Có bàn đảo hoặc không.
- Có tủ rượu hoặc không.
- Nhóm thiết bị Panasonic.
- Nhóm chậu vòi Konox.

### Kết quả

Sau khi cấu hình, website hiển thị:

```text
Phong cách: Hiện đại ấm áp
Bố trí: Bếp chữ L có bàn đảo
Nhóm công năng: Gia đình bốn người
Thiết bị dự kiến: 5–7 sản phẩm
Mức đầu tư tham khảo: 220–280 triệu đồng
```

Sau đó khách hàng có thể:

- Lưu cấu hình.
- Gửi qua Zalo.
- Gửi cho Bếp Ấm.
- Đặt lịch tư vấn.
- Gửi mặt bằng.
- Yêu cầu báo giá sơ bộ.

### Không nên làm ở giai đoạn đầu

Không xây configurator chính xác theo từng milimét ngay từ đầu.

Nguyên nhân:

- Số lượng module lớn.
- Có nhiều quy tắc kỹ thuật.
- Có module góc.
- Có filler.
- Có khoảng hở.
- Có giới hạn kích thước.
- Có va chạm thiết bị.
- Có nhiều loại mặt đá.
- Giá phụ thuộc vào cấu hình thực tế.
- Dễ biến thành dự án phần mềm quá lớn.

---

## 4.6. Trang thiết kế riêng cho từng khách hàng

### Tầm nhìn dài hạn

Sau khi tư vấn, mỗi khách hàng nhận một đường dẫn riêng:

```text
bepam.vn/thiet-ke/gia-dinh-anh-minh
```

### Nội dung trang

Khách hàng có thể:

- Xem mô hình căn bếp của mình.
- Xoay và phóng to.
- Mở từng khoang tủ.
- Xem danh sách thiết bị.
- Xem vật liệu đề xuất.
- Chuyển giữa các phương án màu.
- Gửi nhận xét vào từng vị trí.
- Duyệt thiết kế.
- Yêu cầu chỉnh sửa.
- Xem phiên bản trước đó.
- Đặt lịch trao đổi.

### Quy trình kỹ thuật đề xuất

```text
Khách gửi mặt bằng
    ↓
Bếp Ấm dựng SketchUp
    ↓
Xuất mô hình GLB/glTF
    ↓
Tối ưu mô hình cho web
    ↓
Tải lên trang dự án riêng
    ↓
Khách xem và phản hồi
```

### Giá trị

Website lúc này không chỉ là công cụ marketing mà trở thành:

- Công cụ bán hàng.
- Công cụ thuyết trình thiết kế.
- Công cụ duyệt phương án.
- Công cụ cộng tác với khách hàng.
- Nền tảng lưu trữ dự án.

---

# 5. Cấu trúc trang chủ đề xuất

## Section 1 – Hero 3D

### Mục tiêu

Tạo ấn tượng mạnh ngay từ đầu nhưng không làm khách chờ quá lâu.

### Hình ảnh

- Một căn bếp Lecmax cao cấp.
- Nền tối hoặc trung tính.
- Ánh sáng bật dần.
- Camera chuyển động nhẹ.
- Không xoay liên tục.
- Không hiệu ứng phô trương quá mức.

### Thông điệp đề xuất

> Không chỉ là một căn bếp đẹp.  
> Đó là một hệ thống được thiết kế để đồng hành cùng gia đình nhiều năm.

### CTA

- Khám phá cấu tạo.
- Xem công trình thực tế.
- Gửi mặt bằng.
- Đặt lịch tư vấn.

### Yêu cầu UX

- Có hình ảnh fallback trước khi mô hình tải xong.
- Có nút bỏ qua animation.
- Không chặn người dùng quá ba giây.
- Trên thiết bị yếu có thể dùng video hoặc ảnh.

---

## Section 2 – Bên trong một căn bếp Lecmax

### Nội dung

Trình diễn bóc tách:

1. Cánh tủ.
2. Khung inox.
3. Ray và bản lề.
4. Khoang chức năng.
5. Mặt đá.
6. Thiết bị.
7. Hệ thống hoàn chỉnh.

### Mỗi bước gồm

- Animation.
- Tiêu đề ngắn.
- Một đoạn giải thích.
- Một lợi ích thực tế.
- Một liên kết đến công trình thật.

---

## Section 3 – Trải nghiệm vận hành

Cho phép khách bấm hoặc cuộn để:

- Hạ giá bát.
- Kéo tủ đồ khô.
- Mở ngăn kéo.
- Mở máy rửa chén.
- Bật đèn tủ rượu.
- Mở tủ thiết bị.
- Xem khu lưu trữ.

---

## Section 4 – Giải pháp cho từng gia đình

Các thẻ lựa chọn:

- Gia đình trẻ.
- Gia đình có người lớn tuổi.
- Gia đình bốn người.
- Nhà thường xuyên đãi khách.
- Căn hộ.
- Nhà phố.
- Biệt thự.

Khi chọn, mô hình hoặc nội dung thay đổi để chỉ ra giải pháp phù hợp.

---

## Section 5 – Công trình thực tế

Đây là phần chuyển từ 3D sang bằng chứng thực tế.

Mỗi dự án nên có:

- Ảnh trước thi công.
- Ảnh sau thi công.
- Địa điểm.
- Diện tích hoặc chiều dài tủ.
- Nhu cầu gia đình.
- Vấn đề ban đầu.
- Giải pháp của Bếp Ấm.
- Vật liệu.
- Thiết bị.
- Thời gian thi công.
- Nhận xét khách hàng.

### Nguyên tắc

Ảnh thật phải chiếm ưu tiên. Không dùng render thay cho công trình đã thi công.

---

## Section 6 – Quy trình làm việc

### Quy trình đề xuất

1. Tiếp nhận nhu cầu.
2. Khảo sát hiện trạng.
3. Tư vấn công năng.
4. Thiết kế sơ bộ.
5. Chọn vật liệu và thiết bị.
6. Báo giá.
7. Ký hợp đồng.
8. Sản xuất.
9. Lắp đặt.
10. Nghiệm thu và bảo hành.

Mỗi bước cần thể hiện:

- Khách hàng cần cung cấp gì.
- Bếp Ấm thực hiện gì.
- Đầu ra của bước đó là gì.
- Thời gian dự kiến.
- Ai chịu trách nhiệm.

---

## Section 7 – Khám phá căn bếp phù hợp

Một bài khảo sát ngắn gồm khoảng 5 câu:

1. Nhà mới hay cải tạo?
2. Gia đình có bao nhiêu người?
3. Kiểu bếp mong muốn?
4. Mức đầu tư dự kiến?
5. Thời điểm cần hoàn thành?

Kết quả:

- Gợi ý kiểu bố trí.
- Gợi ý nhóm công năng.
- Gợi ý mức ngân sách.
- Gợi ý thiết bị.
- CTA đặt lịch tư vấn.

---

## Section 8 – CTA chuyển đổi

Không nên dùng CTA chung chung như “Liên hệ với chúng tôi”.

### CTA đề xuất

> Gửi mặt bằng – nhận định hướng bố trí sơ bộ.

Hoặc:

> Đặt lịch 45 phút cùng chuyên gia thiết kế Bếp Ấm.

Hoặc:

> Nhận tư vấn giải pháp bếp phù hợp với gia đình.

### Form thu lead

Thông tin tối thiểu:

- Họ tên.
- Số điện thoại.
- Khu vực.
- Nhà mới hay cải tạo.
- Ngân sách dự kiến.
- Thời điểm cần làm.
- Upload mặt bằng hoặc ảnh hiện trạng.
- Ghi chú.

---

# 6. Trải nghiệm MVP đề xuất

## Tên trải nghiệm

**Bên trong một căn bếp Lecmax**

## Thời lượng

Khoảng 60–90 giây nếu khách xem toàn bộ.

## Kịch bản

### Cảnh 1 – Căn bếp hoàn chỉnh

- Mô hình xuất hiện.
- Ánh sáng bật lên.
- Camera tiến nhẹ.
- Hiển thị thông điệp mở đầu.

### Cảnh 2 – Vùng công năng

Các vùng được làm nổi bật:

- Lưu trữ.
- Rửa.
- Sơ chế.
- Nấu.
- Thiết bị.
- Bàn đảo.

### Cảnh 3 – Vận hành phụ kiện

- Giá bát hạ xuống.
- Tủ đồ khô kéo ra.
- Ngăn kéo mở.
- Máy rửa chén mở.
- Tủ rượu bật đèn.

### Cảnh 4 – Bóc tách cấu tạo

- Cánh tủ mờ dần.
- Khung inox lộ ra.
- Phụ kiện được đánh dấu.
- Các hotspot giải thích xuất hiện.

### Cảnh 5 – Trở lại căn bếp hoàn chỉnh

Thông điệp:

> Vẻ đẹp là điều nhìn thấy.  
> Chất lượng nằm ở những gì bên trong.

### Cảnh 6 – Chuyển đổi

Thông điệp:

> Gửi mặt bằng căn bếp của anh chị.  
> Bếp Ấm sẽ tư vấn phương án bố trí phù hợp với nhu cầu thực tế.

CTA:

- Gửi mặt bằng.
- Đặt lịch tư vấn.
- Xem công trình thật.

---

# 7. Phạm vi phát triển theo giai đoạn

## Giai đoạn 1 – Website ấn tượng có kiểm soát

### Phạm vi

- Trang chủ.
- Một mô hình bếp 3D.
- Camera animation theo cuộn.
- 5–7 hotspot.
- Mở cánh và ngăn kéo.
- Một cảnh bóc tách khung inox.
- Một số animation phụ kiện.
- Công trình thực tế.
- Form thu lead.
- Kết nối Google Sheets hoặc CRM đơn giản.
- Tối ưu mobile.

### Mục tiêu

- Kiểm chứng khách hàng có quan tâm trải nghiệm 3D hay không.
- Đo tỷ lệ tương tác.
- Đo tỷ lệ gửi mặt bằng.
- Đo tỷ lệ đặt lịch.
- Thu thập dữ liệu trước khi mở rộng.

---

## Giai đoạn 2 – Trình diễn sản phẩm và cấu hình

### Phạm vi bổ sung

- Đổi màu cánh.
- Đổi mặt đá.
- Chọn phong cách.
- Chọn kiểu bếp.
- Chọn nhóm thiết bị.
- Chọn nhóm công năng.
- Lưu cấu hình.
- Gửi cấu hình cho nhân viên tư vấn.
- Hiển thị mức ngân sách tham khảo.

---

## Giai đoạn 3 – Nền tảng tư vấn thiết kế

### Phạm vi bổ sung

- Tài khoản khách hàng.
- Trang dự án riêng.
- Upload mặt bằng.
- Xem mô hình thiết kế riêng.
- Bình luận theo vị trí.
- Quản lý phiên bản.
- Duyệt phương án.
- Liên kết báo giá.
- Liên kết CRM.
- Trạng thái dự án.
- Thông báo cập nhật.

### Ghi chú

Giai đoạn 3 gần với một sản phẩm SaaS nội bộ hơn là một website marketing thông thường.

---

# 8. Kiến trúc công nghệ đề xuất

## Frontend

### Next.js

Sử dụng cho:

- Trang chủ.
- SEO.
- Blog.
- Trang công trình.
- Form.
- Trang dự án.
- Server-side rendering.
- Routing.

### React Three Fiber

Sử dụng để quản lý Three.js trong hệ sinh thái React:

- Scene.
- Camera.
- Mesh.
- Light.
- Event.
- Animation.
- Component hóa các bộ phận bếp.

### Three.js

Sử dụng cho:

- Render mô hình 3D.
- Ánh sáng.
- Vật liệu.
- Camera.
- Animation.
- Raycasting.
- Hotspot.
- Post-processing ở mức vừa phải.

### Drei

Có thể sử dụng các helper:

- OrbitControls.
- Environment.
- Html.
- ContactShadows.
- useGLTF.
- Bounds.
- Loader.
- PerformanceMonitor.

### GSAP hoặc Motion

Sử dụng cho:

- Scroll-based animation.
- Timeline.
- Camera transition.
- Đồng bộ giữa nội dung HTML và mô hình 3D.

---

## Mô hình 3D

### Định dạng

Ưu tiên:

- GLB.
- glTF.

Không đưa trực tiếp file SketchUp nặng lên trình duyệt.

### Quy trình tài sản

```text
SketchUp
    ↓
Blender hoặc công cụ chuyển đổi
    ↓
Làm sạch mô hình
    ↓
Giảm polygon
    ↓
Chuẩn hóa tên object
    ↓
Tối ưu texture
    ↓
Xuất GLB
    ↓
Nén
    ↓
Đưa lên CDN
```

### Quy ước tên object

Ví dụ:

```text
CABINET_BASE_01
CABINET_WALL_01
DOOR_BASE_01
DRAWER_01
PANTRY_PULL_OUT
DISH_RACK_LIFT
WINE_CABINET
COUNTERTOP
SINK
COOKTOP
DISHWASHER
FRIDGE
MICROWAVE
OVEN
```

Tên object phải ổn định để code có thể điều khiển animation và hotspot.

---

## Backend và dữ liệu

### Giai đoạn MVP

Có thể sử dụng:

- Next.js API routes.
- Cloudflare Workers.
- Google Sheets.
- Airtable.
- Supabase.
- D1.

Đề xuất thực tế cho Bếp Ấm:

```text
Frontend: Next.js
Hosting: Cloudflare Pages hoặc Vercel
3D assets: Cloudflare R2
API: Cloudflare Workers
Database MVP: Google Sheets hoặc Cloudflare D1
Form: API riêng
Thông báo: Email hoặc Telegram
```

### Dữ liệu lead

Các trường đề xuất:

```text
lead_id
created_at
full_name
phone
email
location
project_type
kitchen_layout
budget_range
expected_completion
family_size
selected_style
selected_features
uploaded_files
source_page
utm_source
utm_campaign
status
assigned_to
notes
```

---

# 9. Yêu cầu hiệu năng

## Mục tiêu

Website phải hoạt động tốt trên điện thoại tầm trung.

### Quy tắc

- Có ảnh placeholder trước khi 3D tải.
- Lazy load mô hình.
- Chỉ tải 3D khi gần viewport.
- Tạm dừng render khi tab không hoạt động.
- Tạm dừng animation khi section không được xem.
- Giảm độ phân giải renderer trên thiết bị yếu.
- Giới hạn pixel ratio.
- Nén texture.
- Nén GLB.
- Dùng Level of Detail nếu cần.
- Không lạm dụng shadow động.
- Không lạm dụng post-processing.
- Không sử dụng texture 4K cho mọi vật liệu.
- Có fallback video hoặc ảnh.

### Ngân sách tài sản gợi ý cho MVP

- GLB chính: cố gắng dưới 10–15 MB.
- Texture tổng: cố gắng dưới 8–12 MB.
- Ảnh hero fallback: dưới 300 KB.
- Không tự động tải toàn bộ công trình ngay khi mở trang.

### Chỉ số cần theo dõi

- Largest Contentful Paint.
- Interaction to Next Paint.
- Cumulative Layout Shift.
- Time to Interactive.
- Thời gian tải mô hình.
- Tỷ lệ lỗi WebGL.
- FPS trên mobile.
- Tỷ lệ khách bỏ trang trước khi mô hình tải xong.

---

# 10. Yêu cầu trải nghiệm người dùng

## Desktop

- Có thể xoay mô hình giới hạn.
- Có hotspot.
- Có scroll animation.
- Có nút reset camera.
- Có nút bật/tắt âm thanh nếu dùng.
- Có nút bỏ qua trải nghiệm.

## Mobile

- Ưu tiên cuộn dọc.
- Không yêu cầu thao tác hai ngón phức tạp.
- Không chiếm màn hình quá lâu.
- Chỉ dùng thao tác chạm đơn giản.
- Có nút quay về góc mặc định.
- Có UI lớn, dễ bấm.
- Giảm chuyển động nếu người dùng chọn reduced motion.

## Accessibility

- Nội dung quan trọng phải có phiên bản HTML.
- Không phụ thuộc hoàn toàn vào canvas.
- Hỗ trợ bàn phím với các nút chính.
- Có alt text cho ảnh.
- Độ tương phản đủ.
- Tôn trọng `prefers-reduced-motion`.
- Không dùng chuyển động nhanh gây khó chịu.

---

# 11. Nội dung truyền thông

## Thông điệp cốt lõi

### Thông điệp 1

> Không chỉ là một căn bếp đẹp.  
> Đó là một hệ thống được thiết kế để đồng hành cùng gia đình nhiều năm.

### Thông điệp 2

> Vẻ đẹp là điều nhìn thấy.  
> Chất lượng nằm ở những gì bên trong.

### Thông điệp 3

> Một căn bếp tốt không chỉ vừa với không gian.  
> Nó phải vừa với cách gia đình sống mỗi ngày.

### Thông điệp 4

> Giữ lửa Bếp Ấm – Vun đắp Nhà Êm.

## Giọng điệu

- Cao cấp nhưng gần gũi.
- Kỹ thuật nhưng dễ hiểu.
- Không phô trương.
- Không hô khẩu hiệu quá nhiều.
- Không dùng quá nhiều từ “sang trọng”, “đẳng cấp”.
- Ưu tiên bằng chứng, cấu tạo, quy trình và công trình thật.

---

# 12. Những điều cần tránh

## 12.1. Website tải quá lâu

Một trải nghiệm 3D nặng sẽ làm mất khách trước khi họ kịp thấy giá trị.

## 12.2. Mô hình xoay vô định

Khách xoay vài vòng rồi thoát nếu không có câu chuyện dẫn dắt.

## 12.3. Dùng render thay cho công trình thật

3D có thể tạo ấn tượng nhưng không thay thế được bằng chứng thi công.

## 12.4. Làm configurator quá lớn

Không xây hệ thống hàng trăm module ngay từ đầu.

## 12.5. Quá nhiều hiệu ứng

Hiệu ứng phải phục vụ thông điệp, không được cạnh tranh với sản phẩm.

## 12.6. Thiếu CTA rõ ràng

Mỗi section quan trọng cần dẫn đến hành động:

- Gửi mặt bằng.
- Xem công trình thật.
- Đặt lịch.
- Yêu cầu tư vấn.
- Lưu cấu hình.

## 12.7. Thiếu đo lường

Không thể đánh giá hiệu quả nếu không theo dõi:

- Khách có xem 3D không?
- Xem đến bước nào?
- Hotspot nào được bấm nhiều?
- Có gửi mặt bằng không?
- Có đặt lịch không?
- Thiết bị nào thường gặp lỗi?

---

# 13. Hệ thống đo lường

## Sự kiện analytics đề xuất

```text
hero_3d_loaded
hero_3d_failed
experience_started
experience_completed
hotspot_clicked
cabinet_opened
drawer_opened
dish_rack_activated
pantry_activated
structure_view_enabled
material_changed
layout_selected
configuration_saved
project_viewed
floorplan_uploaded
consultation_clicked
consultation_submitted
zalo_clicked
phone_clicked
```

## KPI giai đoạn MVP

- Tỷ lệ tải thành công mô hình.
- Tỷ lệ khách bắt đầu trải nghiệm.
- Tỷ lệ xem hết trải nghiệm.
- Thời gian trung bình trên trang.
- Số hotspot trung bình được xem.
- Tỷ lệ bấm xem công trình thật.
- Tỷ lệ gửi mặt bằng.
- Tỷ lệ đặt lịch.
- Tỷ lệ khách hàng đủ điều kiện.
- Số hợp đồng có nguồn từ website.

---

# 14. User stories

## Khách hàng mới

> Là một khách hàng đang xây nhà, tôi muốn nhìn thấy cấu tạo bên trong của hệ tủ Lecmax để hiểu vì sao mức đầu tư cao hơn.

## Khách hàng quan tâm công năng

> Là một người thường xuyên nấu ăn, tôi muốn xem các phụ kiện vận hành để biết chúng có phù hợp với thói quen của gia đình hay không.

## Khách hàng chưa biết chọn kiểu bếp

> Là một khách hàng chưa có kiến thức thiết kế, tôi muốn trả lời vài câu hỏi và nhận gợi ý bố trí phù hợp.

## Khách hàng đã được tư vấn

> Là một khách hàng đang làm việc với Bếp Ấm, tôi muốn xem lại thiết kế trên điện thoại và gửi nhận xét cho từng khu vực.

## Nhân viên bán hàng

> Là một nhân viên tư vấn, tôi muốn dùng mô hình 3D để giải thích cấu tạo và công năng cho khách hàng dễ hơn.

## Quản lý

> Là người quản lý, tôi muốn biết trải nghiệm nào tạo ra nhiều lead và lịch hẹn nhất.

---

# 15. Tiêu chí nghiệm thu MVP

MVP được xem là đạt khi:

- Trang chủ hoạt động tốt trên desktop và mobile.
- Mô hình tải được ổn định.
- Có fallback khi WebGL không hoạt động.
- Có ít nhất 5 hotspot.
- Có ít nhất 3 animation công năng.
- Có một chế độ bóc tách cấu tạo.
- Có nút reset camera.
- Có nút bỏ qua animation.
- Có form gửi mặt bằng.
- Dữ liệu form được lưu.
- Có thông báo khi có lead mới.
- Có analytics cho các tương tác chính.
- Không xuất hiện lỗi nghiêm trọng trên Safari iOS.
- Không làm trang bị đứng hoặc quá nóng trên điện thoại tầm trung.
- Nội dung HTML vẫn đọc được khi phần 3D không tải.

---

# 16. Cấu trúc thư mục code gợi ý

```text
src/
├── app/
│   ├── page.tsx
│   ├── cong-trinh/
│   ├── giai-phap/
│   ├── thiet-ke/
│   ├── api/
│   └── layout.tsx
│
├── components/
│   ├── layout/
│   ├── sections/
│   ├── forms/
│   ├── ui/
│   └── three/
│       ├── KitchenScene.tsx
│       ├── KitchenModel.tsx
│       ├── CameraRig.tsx
│       ├── Lighting.tsx
│       ├── Hotspots.tsx
│       ├── ExplodedView.tsx
│       ├── CabinetAnimations.tsx
│       ├── PerformanceManager.tsx
│       └── FallbackExperience.tsx
│
├── hooks/
│   ├── useDeviceCapability.ts
│   ├── useReducedMotion.ts
│   ├── useKitchenAnimation.ts
│   └── useAnalytics.ts
│
├── lib/
│   ├── analytics.ts
│   ├── database.ts
│   ├── lead.ts
│   └── constants.ts
│
├── data/
│   ├── hotspots.ts
│   ├── materials.ts
│   ├── projects.ts
│   └── kitchen-config.ts
│
└── public/
    ├── models/
    ├── textures/
    ├── images/
    └── videos/
```

---

# 17. Dữ liệu hotspot mẫu

```json
[
  {
    "id": "stainless-frame",
    "objectName": "CABINET_BASE_01",
    "title": "Khung tủ inox 304",
    "description": "Kết cấu bên trong được thiết kế cho môi trường bếp có độ ẩm cao.",
    "benefit": "Tăng độ bền và giúp việc vệ sinh, bảo trì thuận tiện hơn.",
    "position": [0.8, 1.1, -0.4],
    "projectSlug": "cong-trinh-binh-thuy"
  },
  {
    "id": "dish-rack",
    "objectName": "DISH_RACK_LIFT",
    "title": "Giá bát nâng hạ",
    "description": "Hệ giá bát có thể hạ xuống vị trí vừa tầm sử dụng.",
    "benefit": "Hạn chế phải với cao, phù hợp với nhiều thành viên trong gia đình.",
    "position": [-0.6, 1.7, 0.2],
    "animation": "dishRackDown"
  }
]
```

---

# 18. Prompt khởi tạo dự án cho AI code

```text
Bạn là một kỹ sư phần mềm cao cấp, chuyên về Next.js, TypeScript, React Three Fiber, Three.js, hiệu năng web và trải nghiệm 3D trên thiết bị di động.

Hãy xây dựng MVP cho website “Bếp Ấm 3D Experience – Bên trong một căn bếp Lecmax”.

Mục tiêu kinh doanh:
- Giúp khách hàng hiểu cấu tạo và công năng của hệ tủ Lecmax.
- Tạo ấn tượng cao cấp nhưng không phô trương.
- Tăng số khách gửi mặt bằng và đặt lịch tư vấn.
- Hoạt động tốt trên điện thoại tại Việt Nam.

Công nghệ:
- Next.js App Router.
- TypeScript strict mode.
- Tailwind CSS.
- React Three Fiber.
- Drei.
- Three.js.
- GSAP hoặc Motion cho scroll animation.
- GLB/glTF cho mô hình 3D.
- API route hoặc Cloudflare Worker cho form lead.

Yêu cầu chức năng:
1. Hero section có mô hình bếp 3D và ảnh fallback.
2. Camera chuyển động nhẹ theo cuộn trang.
3. Có 5–7 hotspot giải thích cấu tạo.
4. Có animation mở cánh, kéo ngăn kéo và hạ giá bát.
5. Có chế độ exploded view để bóc tách cánh, khung và phụ kiện.
6. Có nút reset camera.
7. Có nút bỏ qua animation.
8. Có fallback nếu WebGL không khả dụng.
9. Có form gửi mặt bằng và đăng ký tư vấn.
10. Có analytics cho các sự kiện chính.
11. Có hỗ trợ prefers-reduced-motion.
12. Có chiến lược tối ưu hiệu năng mobile.
13. Nội dung quan trọng phải tồn tại dưới dạng HTML, không chỉ nằm trong canvas.

Nguyên tắc thiết kế:
- Không làm toàn bộ website thành một thế giới 3D.
- 3D chỉ dùng tại những điểm giúp khách hàng hiểu sản phẩm.
- Giao diện cao cấp, ấm áp, hiện đại.
- Không lạm dụng hiệu ứng.
- Không dùng camera chuyển động nhanh.
- Không khóa người dùng trong intro.
- Công trình thực tế phải được trình bày bằng ảnh thật.

Hãy thực hiện theo các bước:
1. Đề xuất kiến trúc hệ thống.
2. Tạo cấu trúc thư mục.
3. Khởi tạo project.
4. Xây dựng component 3D theo module.
5. Tạo dữ liệu hotspot mẫu.
6. Tạo animation state machine.
7. Xây dựng form lead.
8. Thêm analytics.
9. Thêm fallback.
10. Viết hướng dẫn thay mô hình GLB và texture.
11. Viết README hướng dẫn chạy local và deploy.

Không cần xây configurator theo từng milimét trong MVP.
Không cần hệ thống tài khoản khách hàng trong MVP.
Ưu tiên hoàn thiện một trải nghiệm 3D duy nhất thật tốt.
```

---

# 19. Roadmap triển khai đề xuất

## Sprint 1 – Nền tảng

- Khởi tạo Next.js.
- Thiết lập design system.
- Tạo layout.
- Tạo hero tĩnh.
- Tạo các section HTML.
- Tạo form lead.
- Thiết lập analytics.

## Sprint 2 – Mô hình 3D

- Chuẩn hóa GLB.
- Tải mô hình.
- Thiết lập camera.
- Thiết lập ánh sáng.
- Thiết lập vật liệu.
- Thêm fallback.

## Sprint 3 – Tương tác

- Hotspot.
- Mở cánh.
- Kéo ngăn kéo.
- Giá bát nâng hạ.
- Reset camera.
- Scroll animation.

## Sprint 4 – Exploded view

- Phân nhóm object.
- Tách lớp.
- Đồng bộ nội dung.
- Thêm chú thích.
- Tối ưu animation.

## Sprint 5 – Công trình và chuyển đổi

- Trang công trình.
- Form gửi mặt bằng.
- Upload file.
- Thông báo lead.
- Kết nối Google Sheets hoặc CRM.

## Sprint 6 – Tối ưu và kiểm thử

- Mobile.
- Safari iOS.
- Android Chrome.
- Mạng chậm.
- Thiết bị yếu.
- Accessibility.
- Analytics.
- SEO.
- Core Web Vitals.

---

# 20. Kết luận

Three.js phù hợp với Bếp Ấm không phải vì nó tạo được hình ảnh 3D đẹp, mà vì nó có thể giúp khách hàng hiểu những giá trị khó nhìn thấy của một hệ tủ bếp cao cấp.

Thứ tự ưu tiên đúng là:

```text
Một mô hình bếp mẫu thật tốt
    ↓
Trải nghiệm bóc tách cấu tạo
    ↓
Animation công năng
    ↓
Giải thích kỹ thuật dễ hiểu
    ↓
Công trình thực tế
    ↓
Form gửi mặt bằng
    ↓
Đặt lịch tư vấn
    ↓
Thu thập dữ liệu và cải tiến
```

Không nên bắt đầu bằng một configurator khổng lồ.

Nên bắt đầu bằng một trải nghiệm duy nhất nhưng đủ mạnh để khách hàng nhớ rằng:

> Bếp Ấm không chỉ bán một bộ tủ bếp.  
> Bếp Ấm thiết kế một hệ thống sống phù hợp với từng gia đình.
