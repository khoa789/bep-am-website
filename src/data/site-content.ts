export interface SolutionLayer {
  id: string;
  order: string;
  brand: string;
  role: string;
  summary: string;
  details: readonly string[];
  material: "steel" | "stone" | "appliance" | "water";
}

export interface ProcessStep {
  order: string;
  title: string;
  description: string;
}

export const contact = {
  phoneDisplay: "0923 179 169",
  phoneHref: "tel:+84923179169",
  address: "168C Xô Viết Nghệ Tĩnh, Phường Ninh Kiều, Thành phố Cần Thơ",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=168C+Xo+Viet+Nghe+Tinh+Ninh+Kieu+Can+Tho",
  facebookHref: "https://facebook.com/BepAm.LecmaxCanTho",
  openingHours: "Mở cửa 7 ngày/tuần, đến 19:00 mỗi ngày",
} as const;

export const solutionLayers: readonly SolutionLayer[] = [
  {
    id: "lecmax",
    order: "01",
    brand: "Lecmax",
    role: "Hệ tủ và kết cấu nền",
    summary:
      "Hệ tủ inox 304 theo module tạo nên phần khung bền vững và công năng lưu trữ của toàn bộ căn bếp.",
    details: ["Hai mặt inox 304", "Lõi nhôm tổ ong", "Liên kết không mối hàn"],
    material: "steel",
  },
  {
    id: "vicostone",
    order: "02",
    brand: "Vicostone",
    role: "Bề mặt thao tác",
    summary:
      "Mặt đá kết nối các khu vực chuẩn bị, nấu nướng và vệ sinh thành một bề mặt sử dụng liền mạch.",
    details: ["Mặt bàn bếp", "Bàn đảo", "Điểm nối vật liệu"],
    material: "stone",
  },
  {
    id: "panasonic",
    order: "03",
    brand: "Panasonic",
    role: "Thiết bị phục vụ nhịp sống",
    summary:
      "Thiết bị được bố trí cùng hệ tủ để thao tác nấu, lưu trữ và vệ sinh diễn ra thuận tiện trong sinh hoạt hằng ngày.",
    details: ["Bếp từ", "Lò và vi sóng", "Máy rửa chén"],
    material: "appliance",
  },
  {
    id: "konox",
    order: "04",
    brand: "Konox",
    role: "Chậu vòi và vùng nước",
    summary:
      "Chậu và vòi được chọn theo thói quen sử dụng, rồi phối hợp với khoang chậu, mặt đá và đường kỹ thuật.",
    details: ["Chậu rửa", "Vòi bếp", "Phụ kiện vùng chậu"],
    material: "water",
  },
] as const;

export const processSteps: readonly ProcessStep[] = [
  {
    order: "01",
    title: "Lắng nghe cách gia đình sống",
    description:
      "Bếp Ấm bắt đầu từ người sử dụng, thói quen nấu nướng, không gian và điều khách hàng thật sự lo lắng.",
  },
  {
    order: "02",
    title: "Đo đạc và kết nối giải pháp",
    description:
      "Hệ tủ, mặt đá, thiết bị và chậu vòi được xem trong cùng một phương án, không ghép từng món rời rạc sau cùng.",
  },
  {
    order: "03",
    title: "Giải thích rõ trước khi làm",
    description:
      "Mỗi lựa chọn đều đi cùng lý do về công năng, vật liệu và khả năng vận hành lâu dài để gia đình chủ động quyết định.",
  },
  {
    order: "04",
    title: "Thi công và đồng hành",
    description:
      "Bếp Ấm nhận phần khó trong phối hợp và hoàn thiện, để khách hàng có một đầu mối xuyên suốt cho căn bếp.",
  },
] as const;

export const selectionStandards = [
  {
    title: "Chất lượng rõ ràng",
    description: "Ưu tiên vật liệu, cấu tạo và thông tin sản phẩm có thể giải thích cụ thể.",
  },
  {
    title: "Vận hành đồng bộ",
    description: "Mỗi thành phần phải phù hợp với hệ tủ, không gian và thao tác của gia đình.",
  },
  {
    title: "Giá trị dài hạn",
    description: "Lựa chọn dựa trên độ bền, khả năng sử dụng và trách nhiệm sau khi hoàn thiện.",
  },
] as const;
