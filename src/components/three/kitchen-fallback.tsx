export default function KitchenFallback({ reason = "Bản xem tĩnh" }: { reason?: string }) {
  return (
    <div className="kitchen-fallback">
      <div className="fallback-cabinet" aria-hidden="true">
        <span className="fallback-panel fallback-panel--back" />
        <span className="fallback-panel fallback-panel--core" />
        <span className="fallback-panel fallback-panel--front" />
      </div>
      <p className="fallback-reason">{reason}</p>
      <p className="fallback-title">Hai mặt inox · Lõi tổ ong · Kết cấu module</p>
    </div>
  );
}
