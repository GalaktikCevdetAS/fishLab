'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PlantItem } from '@/types/aquarium';
import { getSubstrateSurface } from '@/components/Substrate';

interface PlantFieldProps {
  tankBounds: THREE.Vector3;
  plantsConfig?: PlantItem[];
  substrateHeight?: number;
}

/**
 * Anubias Nana: Geniş, parlak koyu yeşil yapraklı dayanıklı taban bitkisi.
 */
function AnubiasModel({
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
  const stemRefs = useRef<THREE.Group[]>([]);

  const normalQuat = React.useMemo(() => {
    const q = new THREE.Quaternion();
    q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), surface.normal);
    return q;
  }, [surface.normal]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 1.5;
    stemRefs.current.forEach((stem, idx) => {
      if (stem) {
        const offset = idx * 0.8 + x * 0.2;
        stem.rotation.z = stem.userData.baseZ + Math.sin(t + offset) * 0.05;
        stem.rotation.x = stem.userData.baseX + Math.cos(t * 0.8 + offset) * 0.03;
      }
    });
  });

  const leaves = [
    { pos: [0, 0.1, 0], rot: [0.15, 0, 0.1], scale: [0.3, 0.55, 0.1] },
    { pos: [0.15, 0.08, 0.1], rot: [-0.1, 1.2, -0.2], scale: [0.26, 0.5, 0.09] },
    { pos: [-0.14, 0.09, 0.12], rot: [0.2, 2.4, 0.22], scale: [0.28, 0.52, 0.1] },
    { pos: [-0.12, 0.07, -0.14], rot: [-0.2, 3.8, -0.15], scale: [0.25, 0.46, 0.09] },
    { pos: [0.13, 0.07, -0.12], rot: [0.1, 5.1, 0.25], scale: [0.27, 0.48, 0.09] },
  ];

  return (
    <group position={[x, surface.y, z]} quaternion={normalQuat}>
      <mesh position={[0, 0.03, 0]}>
        <cylinderGeometry args={[0.07, 0.09, 0.06, 8]} />
        <meshStandardMaterial color="#1c1917" roughness={0.9} />
      </mesh>

      {leaves.map((l, i) => (
        <group
          key={i}
          ref={(el) => {
            if (el) {
              el.userData.baseZ = l.rot[2];
              el.userData.baseX = l.rot[0];
              stemRefs.current[i] = el;
            }
          }}
          position={l.pos as [number, number, number]}
          rotation={l.rot as [number, number, number]}
        >
          <mesh position={[0, 0.15, 0]}>
            <cylinderGeometry args={[0.012, 0.016, 0.3, 6]} />
            <meshStandardMaterial color="#166534" roughness={0.6} />
          </mesh>
          <mesh position={[0, 0.35, 0]} scale={l.scale as [number, number, number]}>
            <sphereGeometry args={[1, 12, 10]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#15803d' : '#22c55e'}
              roughness={0.4}
              metalness={0.08}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/**
 * Alternanthera Reineckii: Zarif kızıl/pembe yapraklı gövdeli bitki.
 */
function AlternantheraModel({
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
  const stemRef = useRef<THREE.Group>(null);

  const normalQuat = React.useMemo(() => {
    const q = new THREE.Quaternion();
    q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), surface.normal);
    return q;
  }, [surface.normal]);

  useFrame(({ clock }) => {
    if (stemRef.current) {
      const t = clock.getElapsedTime() * 1.8;
      stemRef.current.rotation.z = Math.sin(t + x * 0.4) * 0.08;
      stemRef.current.rotation.x = Math.cos(t * 0.9 + z * 0.3) * 0.06;
    }
  });

  const leafPairs = [
    { y: 0.25, rotY: 0, scale: [0.15, 0.35, 0.06] },
    { y: 0.55, rotY: Math.PI / 2, scale: [0.18, 0.42, 0.06] },
    { y: 0.85, rotY: Math.PI / 4, scale: [0.16, 0.38, 0.06] },
    { y: 1.15, rotY: (3 * Math.PI) / 4, scale: [0.13, 0.32, 0.05] },
  ];

  return (
    <group position={[x, surface.y, z]} quaternion={normalQuat}>
      <group ref={stemRef}>
        <mesh position={[0, 0.65, 0]}>
          <cylinderGeometry args={[0.02, 0.03, 1.3, 8]} />
          <meshStandardMaterial color="#881337" roughness={0.7} />
        </mesh>

        {leafPairs.map((pair, idx) => (
          <group key={idx} position={[0, pair.y, 0]} rotation={[0, pair.rotY, 0]}>
            <mesh position={[0.2, 0.05, 0]} rotation={[0, 0, -0.4]} scale={pair.scale as [number, number, number]}>
              <coneGeometry args={[1, 1, 5]} />
              <meshStandardMaterial color="#be123c" roughness={0.45} metalness={0.1} />
            </mesh>
            <mesh position={[-0.2, 0.05, 0]} rotation={[0, 0, 0.4]} scale={pair.scale as [number, number, number]}>
              <coneGeometry args={[1, 1, 5]} />
              <meshStandardMaterial color="#e11d48" roughness={0.45} metalness={0.1} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}

/**
 * Saz Bitkisi (Vallisneria): Yüzeye uzanan ince uzun şerit yapraklar.
 */
function VallisneriaModel({
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
  const bladesRef = useRef<THREE.Group[]>([]);

  const normalQuat = React.useMemo(() => {
    const q = new THREE.Quaternion();
    q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), surface.normal);
    return q;
  }, [surface.normal]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 1.6;
    bladesRef.current.forEach((blade, i) => {
      if (blade) {
        blade.rotation.z = blade.userData.baseZ + Math.sin(t + i * 0.6) * 0.12;
        blade.rotation.x = blade.userData.baseX + Math.cos(t * 0.8 + i * 0.5) * 0.06;
      }
    });
  });

  const blades = [
    { height: 2.2, width: 0.14, rot: [0.1, 0.2, 0.05], pos: [0, 0, 0] },
    { height: 1.8, width: 0.12, rot: [-0.15, 1.1, -0.1], pos: [0.1, 0, 0.08] },
    { height: 2.5, width: 0.15, rot: [0.12, 2.3, 0.15], pos: [-0.08, 0, 0.05] },
    { height: 1.6, width: 0.11, rot: [-0.1, 3.7, 0.1], pos: [-0.06, 0, -0.09] },
  ];

  return (
    <group position={[x, surface.y, z]} quaternion={normalQuat}>
      {blades.map((b, i) => (
        <group
          key={i}
          ref={(el) => {
            if (el) {
              el.userData.baseZ = b.rot[2];
              el.userData.baseX = b.rot[0];
              bladesRef.current[i] = el;
            }
          }}
          position={b.pos as [number, number, number]}
          rotation={b.rot as [number, number, number]}
        >
          <mesh position={[0, b.height / 2, 0]}>
            <boxGeometry args={[b.width, b.height, 0.015]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#22c55e' : '#4ade80'}
              roughness={0.4}
              metalness={0.05}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/**
 * Java Fern: Doğal tırtıklı geniş yapraklı eğrelti.
 */
function JavaFernModel({
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
  const frondRefs = useRef<THREE.Group[]>([]);

  const normalQuat = React.useMemo(() => {
    const q = new THREE.Quaternion();
    q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), surface.normal);
    return q;
  }, [surface.normal]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 1.4;
    frondRefs.current.forEach((frond, i) => {
      if (frond) {
        frond.rotation.z = frond.userData.baseZ + Math.sin(t + i * 0.7) * 0.07;
      }
    });
  });

  const fronds = [
    { h: 1.4, w: 0.28, rot: [0.1, 0, 0.12], pos: [0, 0, 0] },
    { h: 1.2, w: 0.24, rot: [-0.15, 1.4, -0.15], pos: [0.12, 0, 0.08] },
    { h: 1.3, w: 0.26, rot: [0.2, 2.9, 0.18], pos: [-0.1, 0, 0.06] },
    { h: 1.0, w: 0.22, rot: [-0.1, 4.4, -0.2], pos: [0, 0, -0.1] },
  ];

  return (
    <group position={[x, surface.y, z]} quaternion={normalQuat}>
      {fronds.map((f, i) => (
        <group
          key={i}
          ref={(el) => {
            if (el) {
              el.userData.baseZ = f.rot[2];
              frondRefs.current[i] = el;
            }
          }}
          position={f.pos as [number, number, number]}
          rotation={f.rot as [number, number, number]}
        >
          <mesh position={[0, f.h / 2, 0]}>
            <coneGeometry args={[f.w, f.h, 4]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#15803d' : '#166534'}
              roughness={0.5}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function PlantField({
  tankBounds,
  plantsConfig = [],
  substrateHeight = 0,
}: PlantFieldProps) {
  const baseBottom = -tankBounds.y / 2;

  if (!plantsConfig || plantsConfig.length === 0) return null;

  return (
    <group name="plant-field">
      {plantsConfig.map((plant, plantIdx) =>
        (plant.positions ?? [[0, 0, 0]]).map((pos, idx) => {
          const key = `${plant.id}-${plantIdx}-${idx}`;
          if (plant.id === 'alternanthera') {
            return (
              <AlternantheraModel
                key={key}
                position={pos}
                baseBottom={baseBottom}
                substrateHeight={substrateHeight}
              />
            );
          }
          if (plant.id === 'vallisneria') {
            return (
              <VallisneriaModel
                key={key}
                position={pos}
                baseBottom={baseBottom}
                substrateHeight={substrateHeight}
              />
            );
          }
          if (plant.id === 'java_fern') {
            return (
              <JavaFernModel
                key={key}
                position={pos}
                baseBottom={baseBottom}
                substrateHeight={substrateHeight}
              />
            );
          }
          return (
            <AnubiasModel
              key={key}
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
