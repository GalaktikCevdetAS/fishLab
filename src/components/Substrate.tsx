'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { SubstrateConfig } from '@/types/aquarium';

/**
 * Verilen (x, z) koordinatındaki zemin yüzey yüksekliğini ve eğim normalini hesaplar.
 * Balık ve bitkilerin kum tepelerine tam paralel oturmasını ve hareket etmesini sağlar.
 */
export function getSubstrateSurface(
  x: number,
  z: number,
  baseTankBottom: number,
  substrateHeight: number
): { y: number; normal: THREE.Vector3 } {
  if (substrateHeight <= 0) {
    return { y: baseTankBottom, normal: new THREE.Vector3(0, 1, 0) };
  }

  const waveFactor = Math.min(substrateHeight * 0.15, 0.08);
  const wave = Math.sin(x * 0.7) * Math.cos(z * 0.7) * waveFactor;
  const y = baseTankBottom + substrateHeight + wave;

  // Yüzey eğim türevleri
  const dx = 0.7 * Math.cos(x * 0.7) * Math.cos(z * 0.7) * waveFactor;
  const dz = -0.7 * Math.sin(x * 0.7) * Math.sin(z * 0.7) * waveFactor;

  const normal = new THREE.Vector3(-dx, 1, -dz).normalize();
  return { y, normal };
}

interface SubstrateProps {
  tankBounds: THREE.Vector3;
  substrateConfig: SubstrateConfig | null;
  substrateKg: number;
  onHeightCalculated: (height: number) => void;
}

export default function Substrate({
  tankBounds,
  substrateConfig,
  substrateKg,
  onHeightCalculated,
}: SubstrateProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const onHeightRef = useRef(onHeightCalculated);
  onHeightRef.current = onHeightCalculated;

  const baseTankBottom = -tankBounds.y / 2;
  const hasSubstrate = Boolean(substrateConfig && substrateKg > 0);
  const calculatedHeight = hasSubstrate
    ? Math.min(Math.max(substrateKg * 0.035, 0.12), 2.2)
    : 0;

  // Kum varlığında üst yüzey kotunu, kum silindiğinde çıplak cam tabanını bildir
  useEffect(() => {
    const effectiveSurfaceY = baseTankBottom + calculatedHeight;
    onHeightRef.current(effectiveSurfaceY);
  }, [baseTankBottom, calculatedHeight]);

  // Doğal dalga deformasyonu (yalnızca kum kalınlığı veya türü değiştiğinde)
  useEffect(() => {
    if (!meshRef.current || !hasSubstrate) return;
    const geometry = meshRef.current.geometry as THREE.PlaneGeometry;
    const posAttribute = geometry.attributes.position;

    const waveFactor = Math.min(calculatedHeight * 0.15, 0.08);
    for (let i = 0; i < posAttribute.count; i++) {
      const x = posAttribute.getX(i);
      const y = posAttribute.getY(i);
      // Yerel Y, -Math.PI / 2 rotasyonunda global Z ile eşleşir
      const globalZ = -y;
      const wave = Math.sin(x * 0.7) * Math.cos(globalZ * 0.7) * waveFactor;
      posAttribute.setZ(i, wave);
    }
    posAttribute.needsUpdate = true;
    geometry.computeVertexNormals();
  }, [calculatedHeight, hasSubstrate, substrateConfig]);

  if (!hasSubstrate || !substrateConfig) return null;

  return (
    <group position={[0, baseTankBottom, 0]}>
      <mesh
        ref={meshRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, calculatedHeight, 0]}
        receiveShadow
      >
        <planeGeometry args={[tankBounds.x, tankBounds.z, 64, 64]} />
        <meshStandardMaterial
          color={substrateConfig.color}
          roughness={substrateConfig.roughness}
          metalness={substrateConfig.metalness}
          flatShading={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
