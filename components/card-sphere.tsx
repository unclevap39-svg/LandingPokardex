"use client";

import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import type { MotionValue } from "framer-motion";
import cardsManifest from "@/lib/cards-manifest.json";

const CARD_ASPECT = 63 / 88; // real TCG card ratio (63mm x 88mm)
const CARD_WIDTH = 0.92;
const CARD_HEIGHT = CARD_WIDTH / CARD_ASPECT;
const SPHERE_RADIUS = 3.15;

// Evenly distributes `count` points on a unit sphere (golden-angle spiral).
function fibonacciSphere(count: number): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / Math.max(count - 1, 1)) * 2;
    const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = goldenAngle * i;
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;
    points.push(new THREE.Vector3(x, y, z));
  }
  return points;
}

interface CardData {
  dir: THREE.Vector3;
  texture: THREE.Texture;
  explodeDistance: number;
  spin: number;
  fadeStart: number;
}

function Cards({ progress, reducedMotion }: { progress: MotionValue<number>; reducedMotion: boolean }) {
  const textures = useTexture(cardsManifest.map((c) => c.file));
  const groupRef = useRef<THREE.Group>(null);
  const cardRefs = useRef<(THREE.Mesh | null)[]>([]);

  // One-time non-deterministic layout: lazy useState initializer is the
  // sanctioned place for impure (Math.random) setup, unlike useMemo/render.
  const [cards] = useState<CardData[]>(() => {
    const dirs = fibonacciSphere(cardsManifest.length);
    return dirs.map((dir, i) => ({
      dir,
      texture: textures[i],
      explodeDistance: 3.5 + Math.random() * 3.5,
      spin: (Math.random() - 0.5) * 6,
      fadeStart: 0.45 + Math.random() * 0.25,
    }));
  });

  useFrame((_, delta) => {
    const t = progress.get();
    const baseSpeed = reducedMotion ? 0.02 : 0.12;
    const speedBoost = 1 + t * 4;

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * baseSpeed * speedBoost;
      groupRef.current.rotation.x = Math.sin(Date.now() * 0.00015) * 0.08;
    }

    const explodeT = Math.max(0, (t - 0.12) / 0.7);
    const eased = 1 - Math.pow(1 - Math.min(explodeT, 1), 3);

    cards.forEach((card, i) => {
      const mesh = cardRefs.current[i];
      if (!mesh) return;

      const distance = SPHERE_RADIUS + eased * card.explodeDistance;
      mesh.position.copy(card.dir).multiplyScalar(distance);
      mesh.lookAt(0, 0, 0);
      mesh.rotateZ(eased * card.spin);

      const fadeT = Math.max(0, (t - card.fadeStart) / 0.4);
      const opacity = Math.max(0, 1 - fadeT);
      const material = mesh.material as THREE.MeshBasicMaterial;
      material.opacity = opacity;
      material.transparent = true;

      const scale = 1 - eased * 0.35;
      mesh.scale.setScalar(Math.max(0.1, scale));
    });
  });

  return (
    <group ref={groupRef}>
      {cards.map((card, i) => (
        <mesh
          key={cardsManifest[i].id}
          ref={(el) => {
            cardRefs.current[i] = el;
          }}
        >
          <planeGeometry args={[CARD_WIDTH, CARD_HEIGHT]} />
          <meshBasicMaterial map={card.texture} toneMapped={false} side={THREE.DoubleSide} transparent />
        </mesh>
      ))}
    </group>
  );
}

export function CardSphere({ progress }: { progress: MotionValue<number> }) {
  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 8.5], fov: 42 }}
      className="!touch-auto"
    >
      <fogExp2 attach="fog" args={["#0a0810", 0.06]} />
      <Suspense fallback={null}>
        <Cards progress={progress} reducedMotion={reducedMotion} />
      </Suspense>
    </Canvas>
  );
}
