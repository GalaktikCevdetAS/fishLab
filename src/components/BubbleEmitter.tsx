'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface BubbleEmitterProps {
  tankBounds: THREE.Vector3;
  substrateHeight?: number;
  count?: number;
  enabled?: boolean;
}

export default function BubbleEmitter({
  tankBounds,
  substrateHeight = 0,
  count = 35,
  enabled = true,
}: BubbleEmitterProps) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const baseBottom = -tankBounds.y / 2 + substrateHeight + 0.1;
  const topLimit = tankBounds.y / 2 - 0.25;

  // Baloncukların ilk rastgele durumları
  const particles = useMemo(() => {
    return Array.from({ length: count }, () => {
      // 2 farklı hava taşı noktasından yükselsin
      const emitterX = Math.random() > 0.5 ? 2.5 : -2.5;
      const emitterZ = Math.random() > 0.5 ? 1.0 : -1.0;

      return {
        x: emitterX + THREE.MathUtils.randFloatSpread(0.6),
        y: THREE.MathUtils.randFloat(baseBottom, topLimit),
        z: emitterZ + THREE.MathUtils.randFloatSpread(0.6),
        originX: emitterX,
        originZ: emitterZ,
        speed: THREE.MathUtils.randFloat(0.6, 1.4),
        scale: THREE.MathUtils.randFloat(0.04, 0.09),
        wobbleSpeed: THREE.MathUtils.randFloat(2.0, 4.0),
        phase: Math.random() * Math.PI * 2,
      };
    });
  }, [count, baseBottom, topLimit]);

  useFrame((state, delta) => {
    if (!meshRef.current || !enabled) return;

    const t = state.clock.getElapsedTime();
    const clampedDelta = Math.min(delta, 0.1);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      // Yukarı doğru süzülme ve hafif yalpalama
      p.y += p.speed * clampedDelta;
      const wobbleX = Math.sin(t * p.wobbleSpeed + p.phase) * 0.02;
      const wobbleZ = Math.cos(t * p.wobbleSpeed * 0.8 + p.phase) * 0.02;

      // Su yüzeyine ulaştığında patlayıp tabana geri dönsün
      if (p.y >= topLimit) {
        p.y = baseBottom;
        p.x = p.originX + THREE.MathUtils.randFloatSpread(0.6);
        p.z = p.originZ + THREE.MathUtils.randFloatSpread(0.6);
      }

      dummy.position.set(p.x + wobbleX, p.y, p.z + wobbleZ);
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();

      meshRef.current.setMatrixAt(i, dummy.matrix);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  if (!enabled) return null;

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 12, 12]} />
      <meshPhysicalMaterial
        color="#bae6fd"
        transmission={0.88}
        opacity={0.65}
        transparent
        roughness={0.05}
        metalness={0.1}
        ior={1.15}
        reflectivity={0.9}
        depthWrite={false}
      />
    </instancedMesh>
  );
}
