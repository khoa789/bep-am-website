export type KitchenMode = "complete" | "structure" | "operation";

export interface KitchenView {
  id: KitchenMode;
  label: string;
  title: string;
  description: string;
}

export const kitchenViews: readonly KitchenView[] = [
  {
    id: "complete",
    label: "Toàn hệ",
    title: "Một module hoàn chỉnh",
    description: "Nhìn tổng thể quan hệ giữa thùng tủ, cánh, mặt bàn và khoang sử dụng.",
  },
  {
    id: "structure",
    label: "Tách lớp",
    title: "Nhìn vào phần cấu tạo",
    description: "Các lớp được tách nhẹ để giải thích hai mặt inox, lõi tổ ong và kết cấu liên kết.",
  },
  {
    id: "operation",
    label: "Vận hành",
    title: "Mở ra để thấy công năng",
    description: "Cánh và ngăn kéo mở theo một góc cố định, giúp hình dung thao tác mà không cần tự xoay mô hình.",
  },
] as const;
