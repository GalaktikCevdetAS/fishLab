'use client';

import React from 'react';
import * as THREE from 'three';
import { LightingMode } from '@/types/aquarium';

interface EquipmentFieldProps {
  tankBounds: THREE.Vector3;
  substrateHeight?: number;
  hasHeater: boolean;
  hasAirStone: boolean;
  lightingMode: LightingMode;
}

/**
 * 3D Akvaryum Üstü LED Armatür Modeli:
 * Akvaryumun cam kenarlarına oturan modern alüminyum gövde,
 * akrilik montaj ayakları ve aktif ışık moduna göre parıldayan LED şeridi.
 */
function LightFixtureModel({
  bounds,
  lightingMode,
}: {
  bounds: THREE.Vector3;
  lightingMode: LightingMode;
}) {
  const topY = bounds.y / 2 + 0.12;

  // Işık moduna göre LED rengi
  const ledColor = {
    day: '#f0f9ff',
    night: '#3b82f6',
    plant: '#f43f5e',
  }[lightingMode];

  return (
    <group position={[0, topY, 0]}>
      {/* Ana alüminyum armatür gövdesi */}
      <mesh position={[0, 0.05, 0]} castShadow>
        <boxGeometry args={[bounds.x - 0.2, 0.08, 0.5]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Parlayan alt LED paneli */}
      <mesh position={[0, 0.005, 0]}>
        <boxGeometry args={[bounds.x - 0.4, 0.015, 0.35]} />
        <meshBasicMaterial color={ledColor} />
      </mesh>

      {/* Sol akrilik cam tutucu ayak */}
      <mesh position={[-(bounds.x / 2) + 0.05, -0.06, 0]}>
        <boxGeometry args={[0.08, 0.18, 0.55]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.9}
          opacity={0.4}
          transparent
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>

      {/* Sağ akrilik cam tutucu ayak */}
      <mesh position={[bounds.x / 2 - 0.05, -0.06, 0]}>
        <boxGeometry args={[0.08, 0.18, 0.55]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.9}
          opacity={0.4}
          transparent
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}

/**
 * 3D Akvaryum Termostatlı Isıtıcı Modeli:
 * Arka cama vantuzlarla tutturulmuş, içinde kızıl ısıtıcı rezistansı yanan cam tüp.
 */
function HeaterModel({ bounds }: { bounds: THREE.Vector3 }) {
  const posX = bounds.x / 2 - 0.8;
  const posY = 0.2;
  const posZ = -bounds.z / 2 + 0.22;

  return (
    <group position={[posX, posY, posZ]}>
      {/* Üst siyah su geçirmez kontrol kafası & ayar kadranı */}
      <mesh position={[0, 1.35, 0]}>
        <cylinderGeometry args={[0.11, 0.11, 0.35, 12]} />
        <meshStandardMaterial color="#0f172a" roughness={0.7} />
      </mesh>

      {/* Kırmızı çalışma kontrol LED ışığı */}
      <mesh position={[0, 1.25, 0.1]}>
        <sphereGeometry args={[0.025, 8, 8]} />
        <meshBasicMaterial color="#ef4444" />
      </mesh>

      {/* Şeffaf dayanıklı dış kuvars cam tüp */}
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.09, 0.09, 1.7, 16]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={0.88}
          transparent
          opacity={0.35}
          roughness={0.05}
          metalness={0.1}
        />
      </mesh>

      {/* İçinde akkor yanan seramik ısıtıcı rezistans */}
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.045, 0.045, 1.3, 12]} />
        <meshBasicMaterial color="#ea580c" />
      </mesh>

      {/* Cama sabitleyen üst vantuz */}
      <mesh position={[0, 1.05, -0.1]}>
        <cylinderGeometry args={[0.12, 0.08, 0.06, 12]} />
        <meshStandardMaterial color="#1e293b" roughness={0.8} />
      </mesh>

      {/* Cama sabitleyen alt vantuz */}
      <mesh position={[0, -0.2, -0.1]}>
        <cylinderGeometry args={[0.12, 0.08, 0.06, 12]} />
        <meshStandardMaterial color="#1e293b" roughness={0.8} />
      </mesh>
    </group>
  );
}

/**
 * 3D Hava Taşı ve Silikon Hava Hortumu Modeli:
 * Tabanda duran gözenekli mineral hava taşı ve yukarı uzanan şeffaf hortum.
 */
function AirStoneModel({
  bounds,
  substrateHeight = 0,
}: {
  bounds: THREE.Vector3;
  substrateHeight: number;
}) {
  const posX = 2.5;
  const posZ = 1.0;
  const groundY = -bounds.y / 2 + substrateHeight + 0.08;

  return (
    <group position={[posX, groundY, posZ]}>
      {/* Gözenekli mineral silindir hava taşı */}
      <mesh position={[0, 0.08, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.45, 12]} />
        <meshStandardMaterial color="#0284c7" roughness={0.95} flatShading />
      </mesh>

      {/* Plastik hortum bağlantı rekoru */}
      <mesh position={[-0.26, 0.08, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 0.12, 8]} />
        <meshStandardMaterial color="#0f172a" roughness={0.5} />
      </mesh>

      {/* Yukarı doğru uzanan şeffaf silikon hava hortumu */}
      <mesh position={[-0.32, 1.6, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 3.2, 8]} />
        <meshPhysicalMaterial
          color="#e0f2fe"
          transmission={0.85}
          transparent
          opacity={0.4}
          roughness={0.1}
        />
      </mesh>
    </group>
  );
}

export default function EquipmentField({
  tankBounds,
  substrateHeight = 0,
  hasHeater,
  hasAirStone,
  lightingMode,
}: EquipmentFieldProps) {
  return (
    <group name="equipment-field">
      {/* 3D Üst LED Armatür Modeli Daima Mevcuttur */}
      <LightFixtureModel bounds={tankBounds} lightingMode={lightingMode} />

      {/* Isıtıcı Donanımı Eklendiğinde 3D Modeli Görünür */}
      {hasHeater && <HeaterModel bounds={tankBounds} />}

      {/* Hava Taşı Donanımı Eklendiğinde 3D Modeli Görünür */}
      {hasAirStone && <AirStoneModel bounds={tankBounds} substrateHeight={substrateHeight} />}
    </group>
  );
}
