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
    description:
      "Nhìn tổng thể quan hệ giữa thùng tủ, cánh, mặt bàn và khoang sử dụng.",
  },
  {
    id: "structure",
    label: "Tách lớp",
    title: "Nhìn vào phần cấu tạo",
    description:
      "Thành tủ, nắp tủ và mặt bàn tách ra để thấy vị trí các cấu kiện. Minh họa không thể hiện đầy đủ cấu tạo từng lớp vật liệu.",
  },
  {
    id: "operation",
    label: "Vận hành",
    title: "Mở ra để thấy công năng",
    description:
      "Cánh và ngăn kéo mở theo một góc cố định, giúp hình dung thao tác mà không cần tự xoay mô hình.",
  },
] as const;
