'use client';

import React, { useState, useMemo, useRef } from 'react';
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
  allCatalogItems: CatalogItem[];
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
  allCatalogItems,
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
  const [isCatalogModalOpen, setIsCatalogModalOpen] = useState<boolean>(false);
  const [modalTab, setModalTab] = useState<'Zemin' | 'Balık' | 'Bitki' | 'Dekor' | 'Ekipman'>('Balık');

  // Taşınabilir Pencere State ve Ref'leri
  const [modalPosition, setModalPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const isDraggingRef = useRef<boolean>(false);
  const dragOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    dragOffsetRef.current = {
      x: e.clientX - modalPosition.x,
      y: e.clientY - modalPosition.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    setModalPosition({
      x: e.clientX - dragOffsetRef.current.x,
      y: e.clientY - dragOffsetRef.current.y,
    });
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const filteredResults = useMemo(() => {
    if (activeTab === 'all') return searchResults;
    return searchResults.filter((item) => item.category === activeTab);
  }, [searchResults, activeTab]);

  const modalFilteredItems = useMemo(() => {
    return allCatalogItems.filter((item) => item.category === modalTab);
  }, [allCatalogItems, modalTab]);

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
    <>
      {/* Arama Çubuğu Eski Yerinde (Ekranın Alt Orta Kısmında) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 w-[94vw] max-w-[760px]">
        {/* Arama Sonuçları Açılır Kartı (Çubuğun Üzerinde Açılır) */}
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
                          <span className="text-[10px] text-sky-400 font-normal">({item.category})</span>
                          {item.price && (
                            <span className="text-[11px] font-mono text-emerald-400 font-bold">
                              {item.price} ₺{isSubstrate ? '/kg' : ''}
                            </span>
                          )}
                          {isFish && fCount > 0 && (
                            <span className="bg-sky-600 px-1.5 py-0.5 rounded text-[10px] font-bold">{fCount} Adet</span>
                          )}
                          {isPlant && pCount > 0 && (
                            <span className="bg-emerald-600 px-1.5 py-0.5 rounded text-[10px] font-bold">{pCount} Grup</span>
                          )}
                        </div>
                        {item.description && <div className="text-[11px] text-sky-300/80">{item.description}</div>}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
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

                      {isFish && (
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => onRemoveFish(item as FishConfig)}
                            disabled={fCount === 0}
                            className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs ${
                              fCount === 0 ? 'bg-slate-700 text-slate-400 cursor-not-allowed' : 'bg-sky-600 hover:bg-sky-500 text-white cursor-pointer'
                            }`}
                          >
                            -
                          </button>
                          <span className="w-5 text-center text-xs font-bold font-mono">{fCount}</span>
                          <button
                            type="button"
                            onClick={() => onAddFish(item as FishConfig)}
                            className="w-6 h-6 rounded bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center font-bold text-xs cursor-pointer"
                          >
                            +
                          </button>
                          {fCount > 0 && (
                            <button
                              type="button"
                              onClick={() => onClearSpecies(item as FishConfig)}
                              className="ml-1 px-2 py-0.5 rounded bg-rose-500/80 hover:bg-rose-500 text-white text-[10px] cursor-pointer"
                            >
                              🗑️
                            </button>
                          )}
                        </div>
                      )}

                      {isPlant && (
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => onRemovePlant(item.id)}
                            disabled={pCount === 0}
                            className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs ${
                              pCount === 0 ? 'bg-slate-700 text-slate-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer'
                            }`}
                          >
                            -
                          </button>
                          <span className="w-5 text-center text-xs font-bold font-mono">{pCount}</span>
                          <button
                            type="button"
                            onClick={() => onAddPlant(item as PlantItem)}
                            className="w-6 h-6 rounded bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center font-bold text-xs cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      )}

                      {isDeco && (
                        <button
                          type="button"
                          onClick={() => (dCount > 0 ? onRemoveDecoration(item.id) : onAddDecoration(item as DecorationItem))}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                            dCount > 0 ? 'bg-rose-500/80 text-white' : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                          }`}
                        >
                          {dCount > 0 ? 'Kaldır ✕' : 'Ekle +'}
                        </button>
                      )}

                      {isEquip && (
                        <button
                          type="button"
                          onClick={() => onToggleEquipment(item as EquipmentItem)}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                            isEquipActive ? 'bg-teal-500 text-slate-950 font-bold' : 'bg-sky-600 hover:bg-sky-500 text-white'
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

        {/* Ana Arama Giriş Çubuğu ve Ekstra "Tüm Ürünler" Butonu */}
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

          {/* Tüm Ürünler Açılır Popup Butonu */}
          <button
            type="button"
            onClick={() => setIsCatalogModalOpen(true)}
            className="whitespace-nowrap px-4 py-1.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-xs font-bold shadow-lg transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>📦</span>
            <span>Tüm Ürünler</span>
          </button>

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

      {/* TAŞINABİLİR (DRAGGABLE) VE KAYDIRILABİLİR (SCROLLABLE) TÜM ÜRÜNLER PENCERESİ */}
      {isCatalogModalOpen && (
        <div
          className="fixed z-[150] select-none"
          style={{
            top: `calc(50% + ${modalPosition.y}px)`,
            left: `calc(50% + ${modalPosition.x}px)`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-[90vw] max-w-[680px] bg-sky-950/95 border border-sky-400/60 rounded-3xl shadow-2xl p-6 flex flex-col max-h-[85vh] text-sky-100 backdrop-blur-2xl">
            {/* Modal Başlık ve Sürükleme Alanı (Header) */}
            <div
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              className="flex items-center justify-between pb-4 border-b border-sky-400/30 cursor-move"
              title="Pencereyi taşımak için basıp sürükleyin"
            >
              <div className="flex items-center gap-2.5 pointer-events-none">
                <span className="text-2xl">🛍️</span>
                <h2 className="text-lg font-bold text-white">Akvaryum Malzeme Kataloğu (Tüm Ürünler)</h2>
                <span className="text-[10px] bg-sky-800/60 text-sky-300 px-2 py-0.5 rounded-full">Taşınabilir ✥</span>
              </div>
              <button
                type="button"
                onClick={() => setIsCatalogModalOpen(false)}
                className="w-8 h-8 rounded-full bg-sky-900/60 hover:bg-sky-800 text-sky-300 hover:text-white flex items-center justify-center font-bold transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Kategori Sekmeleri */}
            <div className="flex gap-2 py-3 border-b border-sky-400/20 overflow-x-auto shrink-0">
              {(['Balık', 'Bitki', 'Zemin', 'Dekor', 'Ekipman'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setModalTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    modalTab === tab
                      ? 'bg-sky-500 text-white shadow-lg scale-105'
                      : 'bg-sky-900/40 text-sky-300 hover:bg-sky-900/80'
                  }`}
                >
                  {tab === 'Balık' && '🐟 Balıklar'}
                  {tab === 'Bitki' && '🌿 Bitkiler'}
                  {tab === 'Zemin' && '🏖️ Zemin & Kum'}
                  {tab === 'Dekor' && '🪨 Dekorlar'}
                  {tab === 'Ekipman' && '⚙️ Ekipmanlar'}
                </button>
              ))}
            </div>

            {/* Kaydırma Çubuğu (Scrollbar) İçeren Ürün Listesi */}
            <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-2.5 pr-1 custom-scrollbar">
              {modalFilteredItems.map((item) => {
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
                    className="flex items-center justify-between rounded-2xl bg-sky-900/40 hover:bg-sky-900/70 border border-sky-400/20 transition-all p-3.5"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-2xl p-2 rounded-xl bg-sky-950/60 border border-sky-400/20">
                        {item.icon || '✨'}
                      </span>
                      <div>
                        <div className="font-bold text-sm flex items-center gap-2">
                          <span>{item.name}</span>
                          {item.price && (
                            <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-500/30">
                              {item.price} ₺{isSubstrate ? '/kg' : ''}
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-sky-300/80 mt-0.5">{item.description}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {isSubstrate && (
                        <button
                          type="button"
                          onClick={() => onSelectSubstrate(item as SubstrateConfig)}
                          className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            selectedSubstrate?.id === item.id
                              ? 'bg-emerald-500 text-slate-950 font-extrabold shadow'
                              : 'bg-sky-400 hover:bg-sky-300 text-slate-950'
                          }`}
                        >
                          {selectedSubstrate?.id === item.id ? 'Aktif Kum ✓' : 'Kum Seç +'}
                        </button>
                      )}

                      {isFish && (
                        <div className="flex items-center gap-1.5 bg-sky-950/60 p-1.5 rounded-xl border border-sky-400/20">
                          <button
                            type="button"
                            onClick={() => onRemoveFish(item as FishConfig)}
                            disabled={fCount === 0}
                            className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                              fCount === 0 ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-sky-600 hover:bg-sky-500 text-white cursor-pointer'
                            }`}
                          >
                            -
                          </button>
                          <span className="w-6 text-center text-xs font-bold font-mono">{fCount}</span>
                          <button
                            type="button"
                            onClick={() => onAddFish(item as FishConfig)}
                            className="w-7 h-7 rounded-lg bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center font-bold text-xs cursor-pointer"
                          >
                            +
                          </button>
                          {fCount > 0 && (
                            <button
                              type="button"
                              onClick={() => onClearSpecies(item as FishConfig)}
                              title="Tümünü Kaldır"
                              className="ml-1 px-2 py-1 rounded-lg bg-rose-500 hover:bg-rose-400 text-white text-xs cursor-pointer"
                            >
                              🗑️
                            </button>
                          )}
                        </div>
                      )}

                      {isPlant && (
                        <div className="flex items-center gap-1.5 bg-sky-950/60 p-1.5 rounded-xl border border-sky-400/20">
                          <button
                            type="button"
                            onClick={() => onRemovePlant(item.id)}
                            disabled={pCount === 0}
                            className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs ${
                              pCount === 0 ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-500 text-white cursor-pointer'
                            }`}
                          >
                            -
                          </button>
                          <span className="w-6 text-center text-xs font-bold font-mono">{pCount}</span>
                          <button
                            type="button"
                            onClick={() => onAddPlant(item as PlantItem)}
                            className="w-7 h-7 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center font-bold text-xs cursor-pointer"
                          >
                            +
                          </button>
                        </div>
                      )}

                      {isDeco && (
                        <button
                          type="button"
                          onClick={() => (dCount > 0 ? onRemoveDecoration(item.id) : onAddDecoration(item as DecorationItem))}
                          className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            dCount > 0 ? 'bg-rose-500 hover:bg-rose-400 text-white' : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                          }`}
                        >
                          {dCount > 0 ? 'Kaldır ✕' : 'Ekle +'}
                        </button>
                      )}

                      {isEquip && (
                        <button
                          type="button"
                          onClick={() => onToggleEquipment(item as EquipmentItem)}
                          className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            isEquipActive ? 'bg-teal-500 text-slate-950 font-extrabold' : 'bg-sky-600 hover:bg-sky-500 text-white'
                          }`}
                        >
                          {isEquipActive ? 'Sök ✕' : 'Kur +'}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Alt Kısım */}
            <div className="pt-3 border-t border-sky-400/30 flex justify-end shrink-0">
              <button
                type="button"
                onClick={() => setIsCatalogModalOpen(false)}
                className="px-6 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-lg transition-all cursor-pointer"
              >
                Tamam / Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}