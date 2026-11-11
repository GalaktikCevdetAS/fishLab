'use client';

import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { FishManager } from '@/utils/FishManager';
import Substrate from '@/components/Substrate';
import PlantField from '@/components/PlantField';
import DecorationField from '@/components/DecorationField';
import BubbleEmitter from '@/components/BubbleEmitter';
import EquipmentField from '@/components/EquipmentField';
import WaterMetricsHUD from '@/components/ui/WaterMetricsHUD';
import SearchBar from '@/components/ui/SearchBar';
import TankSizeSidebar from '@/components/ui/TankSizeSidebar';
import CartDrawer from '@/components/ui/CartDrawer';
import LightingAndPhotoBar from '@/components/ui/LightingAndPhotoBar';
import {
  AquariumConfig,
  SubstrateConfig,
  FishConfig,
  PlantItem,
  DecorationItem,
  EquipmentItem,
  CatalogItem,
  LightingMode,
  TankOption,
} from '@/types/aquarium';

/**
 * Su ortamı kontrolörü:
 * Kullanıcı isteği doğrultusunda arka plan rengi ASLA kararmaz veya koyulaşmaz (daima ferah #06395d kalır).
 * Yalnızca suyun renginde ve hafif pusunda kirlenme belli olur; balıklar daima net ve görünür kalır.
 */
function WaterEnvironment({ qualityLevel }: { qualityLevel: number }) {
  const { scene } = useThree();

  useFrame(() => {
    // Arka plan rengi sabit ve temiz mavi kalır; balıklar kaybolmaz
    const baseColor = new THREE.Color('#06395d');
    if (scene.background instanceof THREE.Color) {
      scene.background.lerp(baseColor, 0.05);
    }
    if (scene.fog && scene.fog instanceof THREE.FogExp2) {
      // Su kirlense dahi sis balıkları yutmaz (hafif sarımsı ama düşük yoğunlukta)
      const fogTint = qualityLevel === 0 ? '#06395d' : qualityLevel === 1 ? '#3d3f1a' : '#4a3d12';
      scene.fog.color.lerp(new THREE.Color(fogTint), 0.05);
      scene.fog.density = 0.02; // Düşük ve net görüş
    }
  });

  return null;
}

/**
 * Akvaryumun 3D hacimsel suyu:
 * Kirlendiğinde su sarı / koyu sarı bir tona bürünür, ancak opaklık dengeli tutularak
 * balıkların ve bitkilerin her koşulda kristal netliğinde görünmesi sağlanır.
 */
function WaterVolumeBox({ bounds, qualityLevel }: { bounds: THREE.Vector3; qualityLevel: number }) {
  // 0: Berrak Mavi, 1: Sarımsı Bulanık, 2: Koyu Sarı/Kehribar Kirlilik
  const waterColors = ['#38bdf8', '#facc15', '#ca8a04'];
  const opacities = [0.08, 0.18, 0.26];
  const transmissions = [0.92, 0.82, 0.72];

  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[bounds.x - 0.06, bounds.y - 0.06, bounds.z - 0.06]} />
      <meshPhysicalMaterial
        color={waterColors[qualityLevel]}
        transparent
        opacity={opacities[qualityLevel]}
        roughness={0.06}
        metalness={0.05}
        transmission={transmissions[qualityLevel]}
        ior={1.333}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

function WaterSurface({ bounds, qualityLevel }: { bounds: THREE.Vector3; qualityLevel: number }) {
  const surfaceColors = ['#38bdf8', '#eab308', '#ca8a04'];
  const opacities = [0.3, 0.45, 0.6];

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, bounds.y / 2 - 0.2, 0]}>
      <planeGeometry args={[bounds.x, bounds.z]} />
      <meshPhysicalMaterial
        color={surfaceColors[qualityLevel]}
        transparent
        opacity={opacities[qualityLevel]}
        roughness={0.05}
        metalness={0.08}
        transmission={0.8}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function GlassTankBox({ bounds, qualityLevel }: { bounds: THREE.Vector3; qualityLevel: number }) {
  const boxGeom = useMemo(
    () => new THREE.BoxGeometry(bounds.x, bounds.y, bounds.z),
    [bounds.x, bounds.y, bounds.z]
  );

  const borderColors = ['#bae6fd', '#facc15', '#eab308'];

  return (
    <group>
      <lineSegments>
        <edgesGeometry args={[boxGeom]} />
        <lineBasicMaterial color={borderColors[qualityLevel]} transparent opacity={0.7} />
      </lineSegments>
      <mesh>
        <boxGeometry args={[bounds.x, bounds.y, bounds.z]} />
        <meshPhysicalMaterial
          color={qualityLevel > 0 ? (qualityLevel === 1 ? '#fef08a' : '#fde047') : '#ffffff'}
          transmission={0.94}
          opacity={0.22 + qualityLevel * 0.08}
          transparent
          roughness={0.02}
          metalness={0.1}
          ior={1.5}
          reflectivity={0.9}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

export default function AquariumScene() {
  const [fps, setFps] = useState<number>(60);
  const [tankData, setTankData] = useState<AquariumConfig | null>(null);
  const [currentVolume, setCurrentVolume] = useState<number>(100);
  const [customBounds, setCustomBounds] = useState<[number, number, number]>([14, 7, 7]);
  const [currentTankOption, setCurrentTankOption] = useState<TankOption>({
    volumeLiters: 100,
    name: '100 Litre Standart Akvaryum',
    bounds: [14, 7, 7],
    price: 750,
  });

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lightingMode, setLightingMode] = useState<LightingMode>('day');
  const [isPhotoMode, setIsPhotoMode] = useState<boolean>(false);

  // Akvaryum kum ve canlı durumu
  const [selectedSubstrate, setSelectedSubstrate] = useState<SubstrateConfig | null>(null);
  const [substrateKg, setSubstrateKg] = useState<number>(0);

  const [fishCounts, setFishCounts] = useState<Record<string, number>>({});
  const [activePlants, setActivePlants] = useState<PlantItem[]>([]);
  const [activeDecorations, setActiveDecorations] = useState<DecorationItem[]>([]);
  const [activeEquipments, setActiveEquipments] = useState<EquipmentItem[]>([]);

  // Ekolojik Canlı Su Parametreleri
  const [temperature, setTemperature] = useState<number>(25.5);
  const [pH, setPh] = useState<number>(7.2);
  const [oxygen, setOxygen] = useState<number>(8.0);
  const [ppm, setPpm] = useState<number>(10);
  const [waterQuality, setWaterQuality] = useState<string>('Kristal & Berrak (Seviye 1)');
  const [qualityLevel, setQualityLevel] = useState<number>(0);

  const fishManagerRef = useRef<FishManager | null>(null);

  // Konfigürasyon dosyasını ve kayıtlı durumu yükle
  useEffect(() => {
    let isMounted = true;
    async function loadConfig() {
      try {
        const res = await fetch('/fishConfig.json');
        if (!res.ok) throw new Error('fishConfig.json yüklenemedi');
        const data: AquariumConfig = await res.json();
        if (isMounted) {
          setTankData(data);
          if (data.tank.volumeLiters) setCurrentVolume(data.tank.volumeLiters);
          if (data.tank.bounds) setCustomBounds(data.tank.bounds);
          if (data.tank.temperature) setTemperature(data.tank.temperature);

          if (data.tank.options && data.tank.options.length > 1) {
            setCurrentTankOption(data.tank.options[1]);
          }

          // LocalStorage'dan kayıtlı akvaryumu geri yükle
          try {
            const savedState = localStorage.getItem('fishlab_saved_tank');
            if (savedState) {
              const parsed = JSON.parse(savedState);
              if (parsed.activePlants) setActivePlants(parsed.activePlants);
              if (parsed.activeDecorations) setActiveDecorations(parsed.activeDecorations);
              if (parsed.activeEquipments) setActiveEquipments(parsed.activeEquipments);
              if (parsed.selectedSubstrate) setSelectedSubstrate(parsed.selectedSubstrate);
              if (parsed.substrateKg !== undefined) setSubstrateKg(parsed.substrateKg);
              if (parsed.fishCounts) setFishCounts(parsed.fishCounts);
            }
          } catch {
            // LocalStorage hatası yoksayılır
          }
        }
      } catch (err) {
        console.error('fishConfig.json yüklenirken hata oluştu:', err);
      }
    }
    loadConfig();
    return () => {
      isMounted = false;
    };
  }, []);

  // Değişiklikleri otomatik olarak kaydet
  useEffect(() => {
    if (!tankData) return;
    try {
      const stateToSave = {
        activePlants,
        activeDecorations,
        activeEquipments,
        selectedSubstrate,
        substrateKg,
        fishCounts,
      };
      localStorage.setItem('fishlab_saved_tank', JSON.stringify(stateToSave));
    } catch {
      // ignore
    }
  }, [activePlants, activeDecorations, activeEquipments, selectedSubstrate, substrateKg, fishCounts, tankData]);

  const tankBounds = useMemo(() => new THREE.Vector3(...customBounds), [customBounds]);

  const handleSelectVolume = useCallback((option: TankOption) => {
    setCurrentVolume(option.volumeLiters);
    setCustomBounds(option.bounds);
    setCurrentTankOption(option);
  }, []);

  const effectiveSubstrateHeight = useMemo(() => {
    return Boolean(selectedSubstrate && substrateKg > 0)
      ? Math.min(Math.max(substrateKg * 0.035, 0.12), 2.2)
      : 0;
  }, [selectedSubstrate, substrateKg]);

  useEffect(() => {
    if (fishManagerRef.current) {
      fishManagerRef.current.setSubstrateHeight(effectiveSubstrateHeight);
    }
  }, [effectiveSubstrateHeight]);

  // Ekipman kontrolleri
  const hasFilter = useMemo(() => activeEquipments.some((e) => e.type === 'filter'), [activeEquipments]);
  const hasHeater = useMemo(() => activeEquipments.some((e) => e.type === 'heater'), [activeEquipments]);
  const hasAirStone = useMemo(() => activeEquipments.some((e) => e.type === 'airstone'), [activeEquipments]);

  // Dinamik Ekoloji & Canlı Su Kalitesi
  useEffect(() => {
    if (!tankData) return;

    let basePh = 7.2;
    let baseOxygen = 8.0;
    let basePpm = 10;
    let baseTemp = 25.5;

    // Isıtıcı kontrolü
    if (hasHeater) {
      baseTemp = 25.5;
    } else {
      // Isıtıcı yoksa ortam sıcaklığına doğru düşüş
      baseTemp = 22.0;
    }

    // Kumun etkisi
    if (selectedSubstrate?.ecology) {
      basePh += selectedSubstrate.ecology.phEffect;
      basePpm += substrateKg * selectedSubstrate.ecology.ppmFactor;
    }

    // Balıkların atık ve oksijen etkisi
    let totalOxygenConsumption = 0;
    let totalBioload = 0;

    for (const fish of tankData.catalog.fishes) {
      const count = fishCounts[fish.id] || 0;
      if (count > 0 && fish.ecology) {
        totalOxygenConsumption += count * (fish.ecology.oxygenConsumption || 0.15);
        totalBioload += count * (fish.ecology.bioloadPpm || 2.5);
      }
    }

    // Bitkilerin oksijen ve filtre etkisi
    let totalPlantOxygen = 0;
    let totalPlantPpmReduction = 0;

    for (const plant of activePlants) {
      totalPlantOxygen += plant.ecology?.oxygenProduction || 0.45;
      totalPlantPpmReduction += plant.ecology?.ppmReduction || 3.0;
    }

    // Filtre ve Hava Taşı donanım etkisi
    if (hasFilter) {
      totalPlantPpmReduction += 25.0; // Biyolojik dış filtre atığı emer
    }
    if (hasAirStone) {
      totalPlantOxygen += 2.5; // Hava taşı bol oksijen kazandırır
    }

    const finalOxygen = Math.max(1.8, baseOxygen + totalPlantOxygen - totalOxygenConsumption);
    const finalPpm = Math.max(5, basePpm + totalBioload - totalPlantPpmReduction);

    const totalFish = Object.values(fishCounts).reduce((a, b) => a + b, 0);

    // Su kalitesi seviyeleri:
    let qLevel = 0;
    let quality = 'Kristal & Berrak (Seviye 1)';

    if (finalPpm > 40 || totalFish > 10) {
      qLevel = 1;
      quality = 'Hafif Kirlenmiş / Sarı (Seviye 2)';
    }
    if (finalPpm > 85 || totalFish > 20 || finalOxygen < 3.2) {
      qLevel = 2;
      quality = 'Kritik Toksik! / Koyu Sarı (Seviye 3)';
    }

    setPh(Number(basePh.toFixed(1)));
    setOxygen(Number(finalOxygen.toFixed(1)));
    setPpm(Math.round(finalPpm));
    setTemperature(baseTemp);
    setWaterQuality(quality);
    setQualityLevel(qLevel);

    if (fishManagerRef.current) {
      fishManagerRef.current.setTankToxic(qLevel === 2);
    }
  }, [selectedSubstrate, substrateKg, fishCounts, activePlants, hasFilter, hasHeater, hasAirStone, tankData]);

  const handleHeightCalculated = useCallback(
    (height: number) => {
      if (fishManagerRef.current) {
        fishManagerRef.current.updateGroundLevel(height, effectiveSubstrateHeight);
      }
    },
    [effectiveSubstrateHeight]
  );

  const handleSelectSubstrate = useCallback(
    (substrate: SubstrateConfig) => {
      setSelectedSubstrate(substrate);
      if (substrateKg === 0) setSubstrateKg(10);
      setSearchQuery('');
    },
    [substrateKg]
  );

  const handleRemoveSubstrate = useCallback(() => {
    setSelectedSubstrate(null);
    setSubstrateKg(0);
    if (fishManagerRef.current) {
      fishManagerRef.current.resetGroundLevel();
    }
  }, []);

  const handleAddFish = useCallback((item: FishConfig) => {
    if (fishManagerRef.current) {
      fishManagerRef.current.addSingleFish(item);
      setFishCounts(fishManagerRef.current.getFishCounts());
    }
  }, []);

  const handleRemoveFish = useCallback((item: FishConfig) => {
    if (fishManagerRef.current) {
      fishManagerRef.current.removeSingleFish(item.id);
      setFishCounts(fishManagerRef.current.getFishCounts());
    }
  }, []);

  const handleClearSpecies = useCallback((item: FishConfig) => {
    if (fishManagerRef.current) {
      fishManagerRef.current.removeSpecies(item.id);
      setFishCounts(fishManagerRef.current.getFishCounts());
    }
  }, []);

  const handleAddPlant = useCallback((plantItem: PlantItem) => {
    // Her + tıklamasında katalogdaki positions listesinden rastgele TEK bir konum seç
    const positions = plantItem.positions ?? [[0, 0, 0]];
    const randomPos = positions[Math.floor(Math.random() * positions.length)] as [number, number, number];
    // Hafif rastgele offset ekle — aynı bitki türü üst üste binmesin
    const jitterX = (Math.random() - 0.5) * 1.5;
    const jitterZ = (Math.random() - 0.5) * 1.0;
    const finalPos: [number, number, number] = [
      randomPos[0] + jitterX,
      randomPos[1],
      randomPos[2] + jitterZ,
    ];
    const singleInstance: PlantItem = { ...plantItem, positions: [finalPos] };
    setActivePlants((prev) => [...prev, singleInstance]);
  }, []);

  const handleRemovePlant = useCallback((plantId: string) => {
    setActivePlants((prev) => {
      const idx = prev.findIndex((p) => p.id === plantId);
      if (idx !== -1) {
        const copy = [...prev];
        copy.splice(idx, 1);
        return copy;
      }
      return prev;
    });
  }, []);

  const handleAddDecoration = useCallback((deco: DecorationItem) => {
    setActiveDecorations((prev) => [...prev, deco]);
  }, []);

  const handleRemoveDecoration = useCallback((decoId: string) => {
    setActiveDecorations((prev) => prev.filter((d) => d.id !== decoId));
  }, []);

  const handleToggleEquipment = useCallback((equip: EquipmentItem) => {
    setActiveEquipments((prev) => {
      const exists = prev.some((e) => e.id === equip.id);
      if (exists) {
        return prev.filter((e) => e.id !== equip.id);
      }
      return [...prev, equip];
    });
  }, []);

  // Fotoğraf çekme / Screenshot modu
  const handleTakePhoto = useCallback(() => {
    setIsPhotoMode(true);
    setTimeout(() => {
      const canvas = document.querySelector('canvas');
      if (canvas) {
        const dataUrl = canvas.toDataURL('image/png');
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = `fishlab-akvaryum-${new Date().toISOString().slice(0, 10)}.png`;
        a.click();
      }
      setIsPhotoMode(false);
    }, 150);
  }, []);

  const allCatalogItems = useMemo(() => {
    if (!tankData) return [];
    return [
      ...tankData.catalog.substrates,
      ...(tankData.catalog.fishes || []),
      ...(tankData.catalog.plants || []),
      ...(tankData.catalog.decorations || []),
      ...(tankData.catalog.equipments || []),
    ] as CatalogItem[];
  }, [tankData]);

  const searchResults = useMemo(() => {
    if (searchQuery.trim() === '') return [];
    const query = searchQuery.toLowerCase();
    return allCatalogItems.filter((item) => item.name.toLowerCase().includes(query));
  }, [searchQuery, allCatalogItems]);

  if (!tankData) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-[#072d4a] text-sky-200">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-sky-400 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm">Akvaryum simülasyonu yükleniyor...</p>
        </div>
      </div>
    );
  }

  const totalFishCount = Object.values(fishCounts).reduce((a, b) => a + b, 0);

  // Aydınlatma ayarlamaları
  const lightConfig = {
    day: {
      directionalColor: '#f0f9ff',
      directionalIntensity: 2.8,
      ambientColor: '#38bdf8',
      ambientIntensity: 1.8,
    },
    night: {
      directionalColor: '#1e1b4b',
      directionalIntensity: 0.8,
      ambientColor: '#1d4ed8',
      ambientIntensity: 0.7,
    },
    plant: {
      directionalColor: '#fdf2f8',
      directionalIntensity: 3.0,
      ambientColor: '#ec4899',
      ambientIntensity: 1.5,
    },
  }[lightingMode];

  return (
    <div className="w-screen h-screen relative overflow-hidden select-none bg-[#072d4a]">
      {/* Arayüz Butonları (Fotoğraf Modunda Otomatik Gizlenir) */}
      {!isPhotoMode && (
        <>
          {/* Sol Tank Boyutu Paneli */}
          <TankSizeSidebar
            options={
              tankData.tank.options ?? [
                { volumeLiters: 50, name: '50 Litre', bounds: [10, 5, 5], price: 450 },
                { volumeLiters: 100, name: '100 Litre', bounds: [14, 7, 7], price: 750 },
                { volumeLiters: 200, name: '200 Litre', bounds: [18, 8.5, 8.5], price: 1400 },
              ]
            }
            currentVolume={currentVolume}
            onSelectVolume={handleSelectVolume}
          />

          {/* Sol Üst: Bütçe / Sepet Çekmecesi */}
          <CartDrawer
            currentTank={currentTankOption}
            selectedSubstrate={selectedSubstrate}
            substrateKg={substrateKg}
            fishes={tankData.catalog.fishes}
            fishCounts={fishCounts}
            activePlants={activePlants}
            decorations={activeDecorations}
            equipments={activeEquipments}
          />

          {/* Üst Orta: Aydınlatma ve Fotoğraf Modu Çubuğu */}
          <LightingAndPhotoBar
            lightingMode={lightingMode}
            setLightingMode={setLightingMode}
            onTakePhoto={handleTakePhoto}
          />

          {/* Sağ Üst: Su Değerleri Göstergesi */}
          <WaterMetricsHUD
            volumeLiters={currentVolume}
            selectedSubstrate={selectedSubstrate}
            substrateKg={substrateKg}
            totalFishCount={totalFishCount}
            temperature={temperature}
            pH={pH}
            oxygen={oxygen}
            ppm={ppm}
            waterQuality={waterQuality}
            fps={fps}
          />

          {/* Alt Arama ve Yönetim Çubuğu */}
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            searchResults={searchResults}
            fishCounts={fishCounts}
            activePlants={activePlants}
            activeDecorations={activeDecorations}
            activeEquipments={activeEquipments}
            selectedSubstrate={selectedSubstrate}
            substrateKg={substrateKg}
            setSubstrateKg={setSubstrateKg}
            onSelectSubstrate={handleSelectSubstrate}
            onRemoveSubstrate={handleRemoveSubstrate}
            onAddFish={handleAddFish}
            onRemoveFish={handleRemoveFish}
            onClearSpecies={handleClearSpecies}
            onAddPlant={handleAddPlant}
            onRemovePlant={handleRemovePlant}
            onAddDecoration={handleAddDecoration}
            onRemoveDecoration={handleRemoveDecoration}
            onToggleEquipment={handleToggleEquipment}
          />
        </>
      )}

      {/* 3D WebGL Dünyası */}
      <Canvas
        camera={{ position: [0, 0, 8.5], fov: 55 }}
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ scene }) => {
          scene.background = new THREE.Color('#06395d');
          scene.fog = new THREE.FogExp2('#06395d', 0.02);
        }}
      >
        <WaterEnvironment qualityLevel={qualityLevel} />

        <directionalLight
          position={[0, 10, 3]}
          intensity={lightConfig.directionalIntensity}
          color={lightConfig.directionalColor}
        />
        <ambientLight
          intensity={lightConfig.ambientIntensity}
          color={lightConfig.ambientColor}
        />

        <GlassTankBox bounds={tankBounds} qualityLevel={qualityLevel} />
        <WaterVolumeBox bounds={tankBounds} qualityLevel={qualityLevel} />
        <WaterSurface bounds={tankBounds} qualityLevel={qualityLevel} />

        <Substrate
          tankBounds={tankBounds}
          substrateConfig={selectedSubstrate}
          substrateKg={substrateKg}
          onHeightCalculated={handleHeightCalculated}
        />

        <PlantField
          tankBounds={tankBounds}
          plantsConfig={activePlants}
          substrateHeight={effectiveSubstrateHeight}
        />

        <DecorationField
          tankBounds={tankBounds}
          decorations={activeDecorations}
          substrateHeight={effectiveSubstrateHeight}
        />

        <BubbleEmitter
          tankBounds={tankBounds}
          substrateHeight={effectiveSubstrateHeight}
          count={hasAirStone ? 60 : 25}
          enabled={true}
        />

        <EquipmentField
          tankBounds={tankBounds}
          substrateHeight={effectiveSubstrateHeight}
          hasHeater={hasHeater}
          hasAirStone={hasAirStone}
          lightingMode={lightingMode}
        />

        <SimulationController
          tankBounds={tankBounds}
          onFpsUpdate={setFps}
          fishManagerRef={fishManagerRef}
        />

        <OrbitControls
          makeDefault
          enableDamping
          dampingFactor={0.05}
          minDistance={3}
          maxDistance={25}
        />
      </Canvas>
    </div>
  );
}

function SimulationController({
  tankBounds,
  onFpsUpdate,
  fishManagerRef,
}: {
  tankBounds: THREE.Vector3;
  onFpsUpdate: (fps: number) => void;
  fishManagerRef: React.MutableRefObject<FishManager | null>;
}) {
  const { scene } = useThree();
  const frameCountRef = useRef(0);
  const lastFpsUpdateRef = useRef(performance.now());

  useEffect(() => {
    if (!fishManagerRef.current) {
      fishManagerRef.current = new FishManager(scene, tankBounds);
    } else {
      fishManagerRef.current.updateBounds(tankBounds);
    }

    return () => {
      fishManagerRef.current?.dispose();
      fishManagerRef.current = null;
    };
  }, [scene, tankBounds, fishManagerRef]);

  useFrame((state, delta) => {
    if (fishManagerRef.current) {
      fishManagerRef.current.update(delta, state.clock.elapsedTime);
    }

    frameCountRef.current++;
    const now = performance.now();
    if (now - lastFpsUpdateRef.current >= 500) {
      const currentFps = Math.round(
        (frameCountRef.current * 1000) / (now - lastFpsUpdateRef.current)
      );
      onFpsUpdate(currentFps);
      frameCountRef.current = 0;
      lastFpsUpdateRef.current = now;
    }
  });

  return null;
}
