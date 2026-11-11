export type LightingMode = 'day' | 'night' | 'plant';

export interface TankOption {
  volumeLiters: number;
  name: string;
  bounds: [number, number, number];
  price?: number;
}

export interface TankConfig {
  defaultVolume?: number;
  options?: TankOption[];
  bounds: [number, number, number];
  volumeLiters: number;
  temperature?: number;
  price?: number;
}

export interface SubstrateEcology {
  phEffect: number;
  ppmFactor: number;
}

export interface SubstrateConfig {
  id: string;
  name: string;
  category: string;
  color: string;
  roughness: number;
  metalness: number;
  icon: string;
  description: string;
  price?: number;
  ecology?: SubstrateEcology;
}

export interface FishEcology {
  oxygenConsumption: number;
  bioloadPpm: number;
}

export interface FishConfig {
  id: string;
  name: string;
  category: string;
  modelPath?: string;
  texturePath?: string;
  behavior?: 'normal' | 'bottom_dweller' | 'surface_dweller';
  layer?: 'surface' | 'mid' | 'bottom';
  icon: string;
  description: string;
  price?: number;
  appearance?: {
    color: string;
    secondaryColor?: string;
    roughness: number;
    metalness: number;
  };
  physics: {
    minSpeed: number;
    maxSpeed: number;
    diveInterval: number;
    verticalFreedom: number;
    turnSpeed: number;
  };
  swimShader?: {
    bodySpeed: number;
    bodyFreq: number;
    bodyAmp: number;
    finSpeed: number;
    pectoralAmp: number;
    caudalWhip: number;
  };
  ecology?: FishEcology;
}

export interface PlantEcology {
  oxygenProduction: number;
  ppmReduction: number;
}

export interface PlantItem {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  color?: string;
  price?: number;
  positions: [number, number, number][];
  ecology?: PlantEcology;
}

export interface DecorationItem {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  type: 'rock' | 'cave';
  color?: string;
  price?: number;
  positions: [number, number, number][];
  scale?: [number, number, number];
}

export interface EquipmentEcology {
  ppmReductionRate?: number;
  oxygenBoost?: number;
  targetTemp?: number;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  type: 'filter' | 'heater' | 'airstone';
  price?: number;
  ecology?: EquipmentEcology;
}

export type CatalogItem =
  | SubstrateConfig
  | FishConfig
  | PlantItem
  | DecorationItem
  | EquipmentItem;

export interface AquariumCatalog {
  substrates: SubstrateConfig[];
  fishes: FishConfig[];
  plants?: PlantItem[];
  decorations?: DecorationItem[];
  equipments?: EquipmentItem[];
}

export interface AquariumConfig {
  tank: TankConfig;
  catalog: AquariumCatalog;
  activeTank: {
    selectedSubstrate: SubstrateConfig | null;
    substrateKg: number;
    fishes: { id: string; count: number }[];
    plants?: PlantItem[];
    decorations?: DecorationItem[];
    equipments?: EquipmentItem[];
  };
}

export interface WaterParameters {
  ph: number;
  oxygen: number;
  ppm: number;
  temperature: number;
  quality: string;
}
