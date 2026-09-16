import { Canvas } from "@react-three/fiber";
import {
  Component,
  type ErrorInfo,
  type ReactNode,
  useEffect,
  useState,
} from "react";
import { kitchenViews, type KitchenMode } from "../../data/kitchen-experience";
import KitchenFallback from "./kitchen-fallback";
import KitchenScene from "./kitchen-scene";
import "./kitchen-experience.css";

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2") || canvas.getContext("webgl");
    context?.getExtension("WEBGL_lose_context")?.loseContext();
    return Boolean(context);
  } catch {
    return false;
  }
}

class CanvasBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo) {
    // The static explanation remains available when the GPU context fails.
  }

  render() {
    return this.state.failed ? (
      <KitchenFallback reason="Không thể mở mô hình 3D trên thiết bị này" />
    ) : (
      this.props.children
    );
  }
}

export default function KitchenExperience() {
  const [mode, setMode] = useState<KitchenMode>("complete");
  const [capability, setCapability] = useState<
    "checking" | "ready" | "fallback"
  >("checking");
  const activeView =
    kitchenViews.find((view) => view.id === mode) ?? kitchenViews[0];

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setCapability(supportsWebGL() && !reduceMotion ? "ready" : "fallback");
  }, []);

  return (
    <div className="kitchen-experience">
      <div
        className="kitchen-canvas-wrap"
        role="img"
        aria-label="Mô hình minh họa hệ tủ Lecmax"
      >
        {capability === "ready" ? (
          <CanvasBoundary>
            <Canvas
              frameloop="demand"
              dpr={[1, 1.5]}
              camera={{
                position: [5.2, 3.7, -7.2],
                fov: 35,
                near: 0.1,
                far: 40,
              }}
              gl={{
                antialias: true,
                alpha: false,
                powerPreference: "high-performance",
              }}
              fallback={
                <KitchenFallback reason="Không thể mở mô hình 3D trên thiết bị này" />
              }
              onCreated={({ gl, camera }) => {
                camera.lookAt(0, 1.15, 0);
                gl.domElement.addEventListener(
                  "webglcontextlost",
                  (event) => {
                    event.preventDefault();
                    setCapability("fallback");
                  },
                  { once: true },
                );
              }}
            >
              <KitchenScene mode={mode} />
            </Canvas>
          </CanvasBoundary>
        ) : (
          <KitchenFallback
            reason={
              capability === "checking"
                ? "Bản xem tĩnh"
                : "Chế độ tĩnh phù hợp với thiết bị của bạn"
            }
          />
        )}
      </div>

      <div
        className="kitchen-controls"
        role="group"
        aria-label="Chọn góc giải thích mô hình"
      >
        {kitchenViews.map((view) => (
          <button
            type="button"
            className={mode === view.id ? "is-active" : undefined}
            aria-pressed={mode === view.id}
            disabled={capability === "checking"}
            onClick={() => setMode(view.id)}
            key={view.id}
          >
            <span>{view.label}</span>
          </button>
        ))}
      </div>

      <div className="kitchen-status" aria-live="polite">
        <p>{activeView.title}</p>
        <span>{activeView.description}</span>
      </div>
    </div>
  );
}
