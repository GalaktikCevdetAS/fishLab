'use client';

import React from 'react';
import * as THREE from 'three';
import { DecorationItem } from '@/types/aquarium';
import { getSubstrateSurface } from '@/components/Substrate';

interface DecorationFieldProps {
  tankBounds: THREE.Vector3;
  decorations?: DecorationItem[];
  substrateHeight?: number;
}

/**
 * Ejder Kayası (Dragon Stone): Doğal keskin kraterik kaya formasyonu.
 */
function DragonStoneModel({
  position,
  baseBottom,
  substrateHeight,
}: {
  position: [number, number, number];
  baseBottom: number;
  substrateHeight: number;
}) {
  const [x, , z] = position;
  const surface = getSubstrateSurface(x, z, baseBottom, substrateHeight);

  const normalQuat = React.useMemo(() => {
    const q = new THREE.Quaternion();
    q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), surface.normal);
    return q;
  }, [surface.normal]);

  return (
    <group position={[x, surface.y, z]} quaternion={normalQuat}>
      {/* Ana sarp kaya kütlesi */}
      <mesh position={[0, 0.65, 0]} rotation={[0.1, 0.4, 0.15]} castShadow>
        <dodecahedronGeometry args={[0.7, 1]} />
        <meshStandardMaterial color="#6e5039" roughness={0.9} flatShading />
      </mesh>
      {/* Yan destek kayası */}
      <mesh position={[0.4, 0.35, -0.2]} rotation={[-0.2, 0.8, -0.1]} castShadow>
        <dodecahedronGeometry args={[0.45, 1]} />
        <meshStandardMaterial color="#7f5d44" roughness={0.88} flatShading />
      </mesh>
      {/* Küçük taban parçası */}
      <mesh position={[-0.35, 0.2, 0.25]} rotation={[0.3, -0.5, 0.2]} castShadow>
        <dodecahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial color="#583f2e" roughness={0.92} flatShading />
      </mesh>
    </group>
  );
}

/**
 * Doğal Akvaryum Mağarası (Slate Cave):
 * Balıkların içine girip saklanabileceği karanlık taş kemer / tünel.
 */
function SlateCaveModel({
  position,
  baseBottom,
  substrateHeight,
}: {
  position: [number, number, number];
  baseBottom: number;
  substrateHeight: number;
}) {
  const [x, , z] = position;
  const surface = getSubstrateSurface(x, z, baseBottom, substrateHeight);

  const normalQuat = React.useMemo(() => {
    const q = new THREE.Quaternion();
    q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), surface.normal);
    return q;
  }, [surface.normal]);

  return (
    <group position={[x, surface.y, z]} quaternion={normalQuat}>
      {/* Sol mağara sütunu */}
      <mesh position={[-0.55, 0.45, 0]} rotation={[0, 0, 0.1]} castShadow>
        <boxGeometry args={[0.35, 0.9, 0.9]} />
        <meshStandardMaterial color="#334155" roughness={0.85} flatShading />
      </mesh>
      {/* Sağ mağara sütunu */}
      <mesh position={[0.55, 0.45, 0]} rotation={[0, 0, -0.1]} castShadow>
        <boxGeometry args={[0.35, 0.9, 0.9]} />
        <meshStandardMaterial color="#334155" roughness={0.85} flatShading />
      </mesh>
      {/* Üst tavan kemer taşı */}
      <mesh position={[0, 0.95, 0]} rotation={[0.05, 0.1, 0]} castShadow>
        <boxGeometry args={[1.5, 0.25, 1.1]} />
        <meshStandardMaterial color="#1e293b" roughness={0.8} flatShading />
      </mesh>
      {/* Mağara içi gölgeli zemin */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.45, 0.45, 0.08, 12]} />
        <meshBasicMaterial color="#0f172a" />
      </mesh>
    </group>
  );
}

export default function DecorationField({
  tankBounds,
  decorations = [],
  substrateHeight = 0,
}: DecorationFieldProps) {
  const baseBottom = -tankBounds.y / 2;

  if (!decorations || decorations.length === 0) return null;

  return (
    <group name="decoration-field">
      {decorations.map((deco) =>
        deco.positions?.map((pos, idx) => {
          if (deco.type === 'cave') {
            return (
              <SlateCaveModel
                key={`${deco.id}-${idx}`}
                position={pos}
                baseBottom={baseBottom}
                substrateHeight={substrateHeight}
              />
            );
          }
          return (
            <DragonStoneModel
              key={`${deco.id}-${idx}`}
              position={pos}
              baseBottom={baseBottom}
              substrateHeight={substrateHeight}
            />
          );
        })
      )}
    </group>
  );
}
