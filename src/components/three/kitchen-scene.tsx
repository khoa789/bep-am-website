import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Color, Group, MathUtils, MeshStandardMaterial } from "three";
import type { KitchenMode } from "../../data/kitchen-experience";

interface Props {
  mode: KitchenMode;
}

function damp(current: number, target: number, delta: number) {
  return MathUtils.damp(current, target, 7, delta);
}

export default function KitchenScene({ mode }: Props) {
  const leftSide = useRef<Group>(null);
  const rightSide = useRef<Group>(null);
  const topPanel = useRef<Group>(null);
  const counter = useRef<Group>(null);
  const leftDoor = useRef<Group>(null);
  const rightDoor = useRef<Group>(null);
  const drawer = useRef<Group>(null);
  const { invalidate } = useThree();

  const materials = useMemo(
    () => ({
      steel: new MeshStandardMaterial({ color: new Color("#9ba09d"), metalness: 0.72, roughness: 0.34 }),
      steelDark: new MeshStandardMaterial({ color: new Color("#555b58"), metalness: 0.62, roughness: 0.42 }),
      core: new MeshStandardMaterial({ color: new Color("#a36f2c"), metalness: 0.08, roughness: 0.86 }),
      stone: new MeshStandardMaterial({ color: new Color("#d4d0c8"), metalness: 0.04, roughness: 0.65 }),
      dark: new MeshStandardMaterial({ color: new Color("#202421"), metalness: 0.22, roughness: 0.58 }),
      orange: new MeshStandardMaterial({ color: new Color("#f57c00"), metalness: 0.05, roughness: 0.72 }),
    }),
    [],
  );

  useEffect(() => {
    invalidate();
  }, [invalidate, mode]);

  useEffect(
    () => () => Object.values(materials).forEach((material) => material.dispose()),
    [materials],
  );

  useFrame((_, delta) => {
    const animationDelta = Math.min(delta, 1 / 30);
    const exploded = mode === "structure";
    const operating = mode === "operation";
    let moving = false;

    const move = (ref: React.RefObject<Group | null>, axis: "x" | "y" | "z", target: number) => {
      const object = ref.current;
      if (!object) return;
      const next = damp(object.position[axis], target, animationDelta);
      moving ||= Math.abs(next - target) > 0.001;
      object.position[axis] = next;
    };

    move(leftSide, "x", exploded ? -0.48 : 0);
    move(rightSide, "x", exploded ? 0.48 : 0);
    move(topPanel, "y", exploded ? 0.4 : 0);
    move(counter, "y", exploded ? 0.55 : 0);
    move(drawer, "z", operating ? 0.78 : 0);

    if (leftDoor.current && rightDoor.current) {
      const leftTarget = operating ? -1.22 : exploded ? -0.24 : 0;
      const rightTarget = operating ? 1.22 : exploded ? 0.24 : 0;
      const leftNext = damp(leftDoor.current.rotation.y, leftTarget, animationDelta);
      const rightNext = damp(rightDoor.current.rotation.y, rightTarget, animationDelta);
      moving ||= Math.abs(leftNext - leftTarget) > 0.001 || Math.abs(rightNext - rightTarget) > 0.001;
      leftDoor.current.rotation.y = leftNext;
      rightDoor.current.rotation.y = rightNext;
    }

    if (moving) invalidate();
  });

  return (
    <>
      <color attach="background" args={["#171817"]} />
      <ambientLight intensity={1.25} />
      <directionalLight position={[4, 7, 5]} intensity={3.2} color="#fff2dc" />
      <directionalLight position={[-4, 3, 2]} intensity={1.2} color="#dbe9df" />

      <group position={[0, -0.35, 0]} rotation={[0, -0.22, 0]}>
        <group ref={leftSide}>
          <mesh position={[-1.85, 1.35, 0]} scale={[0.12, 2.7, 1.15]} material={materials.steel}>
            <boxGeometry />
          </mesh>
        </group>
        <group ref={rightSide}>
          <mesh position={[1.85, 1.35, 0]} scale={[0.12, 2.7, 1.15]} material={materials.steel}>
            <boxGeometry />
          </mesh>
        </group>
        <mesh position={[0, 0.06, 0]} scale={[3.58, 0.12, 1.15]} material={materials.steel}>
          <boxGeometry />
        </mesh>
        <group ref={topPanel}>
          <mesh position={[0, 2.64, 0]} scale={[3.58, 0.12, 1.15]} material={materials.steel}>
            <boxGeometry />
          </mesh>
        </group>
        <mesh position={[0, 1.35, 0.53]} scale={[3.58, 2.45, 0.09]} material={materials.core}>
          <boxGeometry />
        </mesh>
        <mesh position={[0, 1.35, 0.59]} scale={[3.36, 2.24, 0.025]} material={materials.steelDark}>
          <boxGeometry />
        </mesh>

        <mesh position={[0, 1.22, -0.15]} scale={[3.45, 0.08, 1.02]} material={materials.steelDark}>
          <boxGeometry />
        </mesh>
        <mesh position={[0, 2.06, -0.15]} scale={[3.45, 0.08, 1.02]} material={materials.steelDark}>
          <boxGeometry />
        </mesh>

        <group ref={leftDoor} position={[-1.79, 1.35, -0.63]}>
          <mesh position={[0.88, 0, 0]} scale={[1.68, 2.48, 0.08]} material={materials.dark}>
            <boxGeometry />
          </mesh>
          <mesh position={[1.57, 0, -0.07]} scale={[0.04, 0.7, 0.04]} material={materials.orange}>
            <boxGeometry />
          </mesh>
        </group>
        <group ref={rightDoor} position={[1.79, 1.35, -0.63]}>
          <mesh position={[-0.88, 0, 0]} scale={[1.68, 2.48, 0.08]} material={materials.dark}>
            <boxGeometry />
          </mesh>
          <mesh position={[-1.57, 0, -0.07]} scale={[0.04, 0.7, 0.04]} material={materials.orange}>
            <boxGeometry />
          </mesh>
        </group>

        <group ref={drawer} position={[0, 0, 0]}>
          <mesh position={[0, 0.62, -0.58]} scale={[3.28, 0.65, 0.08]} material={materials.dark}>
            <boxGeometry />
          </mesh>
          <mesh position={[0, 0.69, -0.12]} scale={[3.04, 0.52, 0.78]} material={materials.steelDark}>
            <boxGeometry />
          </mesh>
        </group>

        <group ref={counter}>
          <mesh position={[0, 2.83, -0.03]} scale={[4.2, 0.18, 1.45]} material={materials.stone}>
            <boxGeometry />
          </mesh>
        </group>
      </group>

      <mesh position={[0, -0.48, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 10]} />
        <meshStandardMaterial color="#20211f" roughness={0.95} />
      </mesh>
    </>
  );
}
