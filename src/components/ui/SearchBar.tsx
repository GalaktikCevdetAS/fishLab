'use client';

import React, { useState, useMemo } from 'react';
import {
  SubstrateConfig,
  FishConfig,
  PlantItem,
  DecorationItem,
  EquipmentItem,
  CatalogItem,
} from '@/types/aquarium';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchResults: CatalogItem[];
  fishCounts: Record<string, number>;
  activePlants: PlantItem[];
  activeDecorations: DecorationItem[];
  activeEquipments: EquipmentItem[];
  selectedSubstrate: SubstrateConfig | null;
  substrateKg: number;
  setSubstrateKg: React.Dispatch<React.SetStateAction<number>>;
  onSelectSubstrate: (substrate: SubstrateConfig) => void;
  onRemoveSubstrate: () => void;
  onAddFish: (fish: FishConfig) => void;
  onRemoveFish: (fish: FishConfig) => void;
  onClearSpecies: (fish: FishConfig) => void;
  onAddPlant: (plant: PlantItem) => void;
  onRemovePlant: (plantId: string) => void;
  onAddDecoration: (deco: DecorationItem) => void;
  onRemoveDecoration: (decoId: string) => void;
  onToggleEquipment: (equip: EquipmentItem) => void;
}

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  searchResults,
  fishCounts,
  activePlants,
  activeDecorations,
  activeEquipments,
  selectedSubstrate,
  substrateKg,
  setSubstrateKg,
  onSelectSubstrate,
  onRemoveSubstrate,
  onAddFish,
  onRemoveFish,
  onClearSpecies,
  onAddPlant,
  onRemovePlant,
  onAddDecoration,
  onRemoveDecoration,
  onToggleEquipment,
}: SearchBarProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'Zemin' | 'Balık' | 'Bitki' | 'Dekor' | 'Ekipman'>('all');

  const filteredResults = useMemo(() => {
    if (activeTab === 'all') return searchResults;
    return searchResults.filter((item) => item.category === activeTab);
  }, [searchResults, activeTab]);

  const plantCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const p of activePlants) {
      counts[p.id] = (counts[p.id] || 0) + 1;
    }
    return counts;
  }, [activePlants]);

  const decoCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const d of activeDecorations) {
      counts[d.id] = (counts[d.id] || 0) + 1;
    }
    return counts;
  }, [activeDecorations]);

  const equipmentIds = useMemo(() => {
    return new Set(activeEquipments.map((e) => e.id));
  }, [activeEquipments]);

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 w-[94vw] max-w-[680px]">
      {/* Arama Sonuçları Açılır Kartı */}
      {searchResults.length > 0 && (
        <div className="mb-2.5 flex flex-col gap-2 rounded-2xl bg-sky-950/95 backdrop-blur-xl border border-sky-400/40 p-3 shadow-2xl max-h-[380px] overflow-y-auto">
          {/* Kategori Sekmeleri */}
          <div className="flex gap-1.5 pb-2 border-b border-sky-400/20 text-xs overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-sky-500 text-white font-semibold shadow'
                  : 'text-sky-300 hover:bg-sky-900/60'
              }`}
            >
              Tümü ({searchResults.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('Zemin')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'Zemin'
                  ? 'bg-sky-500 text-white font-semibold shadow'
                  : 'text-sky-300 hover:bg-sky-900/60'
              }`}
            >
              🏖️ Zemin
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('Balık')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'Balık'
                  ? 'bg-sky-500 text-white font-semibold shadow'
                  : 'text-sky-300 hover:bg-sky-900/60'
              }`}
            >
              🐟 Balıklar
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('Bitki')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'Bitki'
                  ? 'bg-sky-500 text-white font-semibold shadow'
                  : 'text-sky-300 hover:bg-sky-900/60'
              }`}
            >
              🌿 Bitkiler
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('Dekor')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'Dekor'
                  ? 'bg-sky-500 text-white font-semibold shadow'
                  : 'text-sky-300 hover:bg-sky-900/60'
              }`}
            >
              🪨 Dekor
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('Ekipman')}
              className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeTab === 'Ekipman'
                  ? 'bg-sky-500 text-white font-semibold shadow'
                  : 'text-sky-300 hover:bg-sky-900/60'
              }`}
            >
              ⚙️ Ekipman
            </button>
          </div>

          {/* Sonuç Öğeleri */}
          <div className="flex flex-col gap-1.5">
            {filteredResults.map((item) => {
              const isSubstrate = item.category === 'Zemin';
              const isFish = item.category === 'Balık';
              const isPlant = item.category === 'Bitki';
              const isDeco = item.category === 'Dekor';
              const isEquip = item.category === 'Ekipman';

              const fCount = isFish ? fishCounts[item.id] || 0 : 0;
              const pCount = isPlant ? plantCounts[item.id] || 0 : 0;
              const dCount = isDeco ? decoCounts[item.id] || 0 : 0;
              const isEquipActive = isEquip ? equipmentIds.has(item.id) : false;

              return (
                <div
                  key={item.id}
                  className="flex items-center justify-between rounded-xl bg-sky-900/40 hover:bg-sky-900/60 transition-colors p-2.5 text-sky-100"
                >
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-xl">{item.icon || '✨'}</span>
                    <div>
                      <div className="font-semibold flex items-center gap-2">
                        <span>{item.name}</span>
                        <span className="text-[10px] text-sky-400 font-normal">
                          ({item.category})
                        </span>
                        {item.price && (
                          <span className="text-[11px] font-mono text-emerald-400 font-bold">
                            {item.price} ₺{isSubstrate ? '/kg' : ''}
                          </span>
                        )}
                        {isFish && fCount > 0 && (
                          <span className="bg-sky-600 px-1.5 py-0.5 rounded text-[10px] font-bold">
                            {fCount} Adet
                          </span>
                        )}
                        {isPlant && pCount > 0 && (
                          <span className="bg-emerald-600 px-1.5 py-0.5 rounded text-[10px] font-bold">
                            {pCount} Grup
                          </span>
                        )}
                        {isDeco && dCount > 0 && (
                          <span className="bg-amber-600 px-1.5 py-0.5 rounded text-[10px] font-bold">
                            Aktif
                          </span>
                        )}
                        {isEquip && isEquipActive && (
                          <span className="bg-teal-600 px-1.5 py-0.5 rounded text-[10px] font-bold">
                            Çalışıyor
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <div className="text-[11px] text-sky-300/80">{item.description}</div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* Zemin Seçimi */}
                    {isSubstrate && (
                      <button
                        type="button"
                        onClick={() => onSelectSubstrate(item as SubstrateConfig)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                          selectedSubstrate?.id === item.id
                            ? 'bg-emerald-500 text-sky-950 font-extrabold'
                            : 'bg-sky-400 hover:bg-sky-300 text-sky-950'
                        }`}
                      >
                        {selectedSubstrate?.id === item.id ? 'Aktif ✓' : 'Seç +'}
                      </button>
                    )}

                    {/* Balık Adet Kontrolü */}
                    {isFish && (
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => onRemoveFish(item as FishConfig)}
                          disabled={fCount === 0}
                          className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs transition-colors ${
                            fCount === 0
                              ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                              : 'bg-sky-600 hover:bg-sky-500 text-white cursor-pointer'
                          }`}
                        >
                          -
                        </button>
                        <span className="w-5 text-center text-xs font-bold font-mono">
                          {fCount}
                        </span>
                        <button
                          type="button"
                          onClick={() => onAddFish(item as FishConfig)}
                          className="w-6 h-6 rounded bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center font-bold text-xs cursor-pointer transition-colors"
                        >
                          +
                        </button>
                        {fCount > 0 && (
                          <button
                            type="button"
                            onClick={() => onClearSpecies(item as FishConfig)}
                            title="Tümünü Temizle"
                            className="ml-1 px-2 py-0.5 rounded bg-rose-500/80 hover:bg-rose-500 text-white text-[10px] cursor-pointer transition-colors"
                          >
                            🗑️
                          </button>
                        )}
                      </div>
                    )}

                    {/* Bitki Ekleme / Çıkarma */}
                    {isPlant && (
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => onRemovePlant(item.id)}
                          disabled={pCount === 0}
                          className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs transition-colors ${
                            pCount === 0
                              ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                              : 'bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer'
                          }`}
                        >
                          -
                        </button>
                        <span className="w-5 text-center text-xs font-bold font-mono">
                          {pCount}
                        </span>
                        <button
                          type="button"
                          onClick={() => onAddPlant(item as PlantItem)}
                          className="w-6 h-6 rounded bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center font-bold text-xs cursor-pointer transition-colors"
                        >
                          +
                        </button>
                      </div>
                    )}

                    {/* Dekorasyon Ekleme / Kaldırma */}
                    {isDeco && (
                      <button
                        type="button"
                        onClick={() => {
                          if (dCount > 0) {
                            onRemoveDecoration(item.id);
                          } else {
                            onAddDecoration(item as DecorationItem);
                          }
                        }}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                          dCount > 0
                            ? 'bg-rose-500/80 hover:bg-rose-500 text-white'
                            : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                        }`}
                      >
                        {dCount > 0 ? 'Kaldır ✕' : 'Ekle +'}
                      </button>
                    )}

                    {/* Ekipman Aç / Kapat */}
                    {isEquip && (
                      <button
                        type="button"
                        onClick={() => onToggleEquipment(item as EquipmentItem)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                          isEquipActive
                            ? 'bg-teal-500 text-slate-950 font-bold'
                            : 'bg-sky-600 hover:bg-sky-500 text-white'
                        }`}
                      >
                        {isEquipActive ? 'Çıkar ✕' : 'Kur +'}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Ana Arama Giriş Çubuğu */}
      <div className="flex items-center gap-3 rounded-full bg-sky-950/90 backdrop-blur-xl border border-sky-400/40 px-5 py-3 shadow-2xl">
        <span className="text-lg">✨</span>
        <input
          type="text"
          placeholder="Akvaryuma ekle: kum, balık, bitki, kaya veya filtre arayın..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent border-none text-white text-sm outline-none placeholder:text-sky-300/60"
        />

        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="text-sky-400 hover:text-sky-200 text-xs px-1 cursor-pointer"
          >
            ✕
          </button>
        )}

        {/* Aktif Kum Durumu ve Kg Ayarı */}
        {selectedSubstrate && (
          <div className="flex items-center gap-2 border-l border-sky-400/30 pl-3 whitespace-nowrap text-xs">
            <span className="text-sky-300 font-mono font-medium">
              {selectedSubstrate.name.split(' ')[0]} ({substrateKg}kg)
            </span>
            <button
              type="button"
              onClick={() => setSubstrateKg((p) => Math.max(p - 1, 1))}
              className="w-5 h-5 rounded bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center font-bold cursor-pointer"
            >
              -
            </button>
            <button
              type="button"
              onClick={() => setSubstrateKg((p) => p + 1)}
              className="w-5 h-5 rounded bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center font-bold cursor-pointer"
            >
              +
            </button>
            <button
              type="button"
              onClick={onRemoveSubstrate}
              className="text-rose-400 hover:text-rose-300 ml-1 text-[11px] cursor-pointer"
            >
              Sil
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
