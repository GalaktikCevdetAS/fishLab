'use client';

import React, { useState } from 'react';
import {
  TankOption,
  SubstrateConfig,
  FishConfig,
  PlantItem,
  DecorationItem,
  EquipmentItem,
} from '@/types/aquarium';

interface CartDrawerProps {
  currentTank: TankOption;
  selectedSubstrate: SubstrateConfig | null;
  substrateKg: number;
  fishes: FishConfig[];
  fishCounts: Record<string, number>;
  activePlants: PlantItem[];
  decorations: DecorationItem[];
  equipments: EquipmentItem[];
}

export default function CartDrawer({
  currentTank,
  selectedSubstrate,
  substrateKg,
  fishes,
  fishCounts,
  activePlants,
  decorations,
  equipments,
}: CartDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Fiyat hesaplamaları
  const tankPrice = currentTank.price || 750;
  const substratePrice = selectedSubstrate && substrateKg > 0 ? (selectedSubstrate.price || 20) * substrateKg : 0;

  let fishTotal = 0;
  const fishItems: { name: string; count: number; unitPrice: number; total: number }[] = [];
  for (const f of fishes) {
    const c = fishCounts[f.id] || 0;
    if (c > 0) {
      const u = f.price || 50;
      const t = c * u;
      fishTotal += t;
      fishItems.push({ name: f.name, count: c, unitPrice: u, total: t });
    }
  }

  // Bitki hesaplaması
  const plantCounts: Record<string, { plant: PlantItem; count: number }> = {};
  for (const p of activePlants) {
    if (!plantCounts[p.id]) {
      plantCounts[p.id] = { plant: p, count: 0 };
    }
    plantCounts[p.id].count++;
  }
  let plantTotal = 0;
  const plantItems: { name: string; count: number; unitPrice: number; total: number }[] = [];
  for (const item of Object.values(plantCounts)) {
    const u = item.plant.price || 70;
    const t = item.count * u;
    plantTotal += t;
    plantItems.push({ name: item.plant.name, count: item.count, unitPrice: u, total: t });
  }

  // Dekorasyon hesaplaması
  let decoTotal = 0;
  const decoItems: { name: string; count: number; unitPrice: number; total: number }[] = [];
  for (const d of decorations) {
    const u = d.price || 150;
    decoTotal += u;
    decoItems.push({ name: d.name, count: 1, unitPrice: u, total: u });
  }

  // Ekipman hesaplaması
  let equipTotal = 0;
  const equipItems: { name: string; count: number; unitPrice: number; total: number }[] = [];
  for (const e of equipments) {
    const u = e.price || 350;
    equipTotal += u;
    equipItems.push({ name: e.name, count: 1, unitPrice: u, total: u });
  }

  const grandTotal = tankPrice + substratePrice + fishTotal + plantTotal + decoTotal + equipTotal;

  return (
    <>
      {/* Sağ Alt Tetikleyici Buton */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="absolute bottom-24 right-5 z-40 flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold px-3.5 py-2.5 shadow-xl transition-all cursor-pointer border border-emerald-400/30"
      >
        <span>🛒</span>
        <span>Akvaryum Bütçesi ({grandTotal.toLocaleString('tr-TR')} ₺)</span>
      </button>

      {/* Açılır Sepet Çekmecesi */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="w-full max-w-md h-full bg-slate-900/95 border-l border-sky-400/30 text-sky-100 p-6 flex flex-col shadow-2xl overflow-y-auto">
            {/* Başlık */}
            <div className="flex items-center justify-between pb-4 border-b border-sky-400/20">
              <div className="flex items-center gap-2">
                <span className="text-xl">🛍️</span>
                <h2 className="text-lg font-bold text-white">Akvaryum Bütçe & Sepet Özeti</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-sky-400 hover:text-white text-lg px-2 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Kalemler Listesi */}
            <div className="flex-1 py-4 space-y-4 text-xs">
              {/* Tank */}
              <div className="rounded-xl bg-sky-950/60 p-3 border border-sky-400/20">
                <div className="text-[11px] font-bold text-sky-400 uppercase mb-2">Akvaryum Gövdesi</div>
                <div className="flex justify-between items-center">
                  <span>{currentTank.name}</span>
                  <span className="font-mono font-bold text-emerald-400">{tankPrice.toLocaleString('tr-TR')} ₺</span>
                </div>
              </div>

              {/* Zemin */}
              <div className="rounded-xl bg-sky-950/60 p-3 border border-sky-400/20">
                <div className="text-[11px] font-bold text-sky-400 uppercase mb-2">Zemin & Kum</div>
                {selectedSubstrate && substrateKg > 0 ? (
                  <div className="flex justify-between items-center">
                    <span>{selectedSubstrate.name} ({substrateKg} kg)</span>
                    <span className="font-mono font-bold text-emerald-400">{substratePrice.toLocaleString('tr-TR')} ₺</span>
                  </div>
                ) : (
                  <span className="text-sky-400/60 italic">Zemin seçilmedi (0 ₺)</span>
                )}
              </div>

              {/* Canlı Balıklar */}
              <div className="rounded-xl bg-sky-950/60 p-3 border border-sky-400/20">
                <div className="text-[11px] font-bold text-sky-400 uppercase mb-2">Canlı Balıklar ({fishItems.length} Tür)</div>
                {fishItems.length > 0 ? (
                  <div className="space-y-1.5">
                    {fishItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span>{item.name} <span className="text-sky-400">×{item.count}</span></span>
                        <span className="font-mono font-bold text-emerald-400">{item.total.toLocaleString('tr-TR')} ₺</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="text-sky-400/60 italic">Akvaryumda balık yok</span>
                )}
              </div>

              {/* Canlı Bitkiler */}
              <div className="rounded-xl bg-sky-950/60 p-3 border border-sky-400/20">
                <div className="text-[11px] font-bold text-sky-400 uppercase mb-2">Canlı Bitkiler ({plantItems.length} Tür)</div>
                {plantItems.length > 0 ? (
                  <div className="space-y-1.5">
                    {plantItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span>{item.name} <span className="text-emerald-400">×{item.count} grup</span></span>
                        <span className="font-mono font-bold text-emerald-400">{item.total.toLocaleString('tr-TR')} ₺</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="text-sky-400/60 italic">Bitki eklenmedi</span>
                )}
              </div>

              {/* Dekorasyonlar */}
              <div className="rounded-xl bg-sky-950/60 p-3 border border-sky-400/20">
                <div className="text-[11px] font-bold text-sky-400 uppercase mb-2">Kaya & Dekorasyonlar</div>
                {decoItems.length > 0 ? (
                  <div className="space-y-1.5">
                    {decoItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span>{item.name}</span>
                        <span className="font-mono font-bold text-emerald-400">{item.total.toLocaleString('tr-TR')} ₺</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="text-sky-400/60 italic">Dekorasyon eklenmedi</span>
                )}
              </div>

              {/* Ekipmanlar */}
              <div className="rounded-xl bg-sky-950/60 p-3 border border-sky-400/20">
                <div className="text-[11px] font-bold text-sky-400 uppercase mb-2">Filtre & Isıtıcı Ekipmanları</div>
                {equipItems.length > 0 ? (
                  <div className="space-y-1.5">
                    {equipItems.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center">
                        <span>{item.name}</span>
                        <span className="font-mono font-bold text-emerald-400">{item.total.toLocaleString('tr-TR')} ₺</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="text-sky-400/60 italic">Donanım eklenmedi</span>
                )}
              </div>
            </div>

            {/* Alt Toplam & Sipariş Butonu */}
            <div className="pt-4 border-t border-sky-400/20">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold text-sky-200">Tahmini Toplam Maliyet:</span>
                <span className="text-xl font-mono font-extrabold text-emerald-400">
                  {grandTotal.toLocaleString('tr-TR')} ₺
                </span>
              </div>
              <button
                type="button"
                onClick={() => alert(`Proje Sepet Özeti Alındı!\nToplam Kurulum Maliyeti: ${grandTotal.toLocaleString('tr-TR')} ₺`)}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold text-sm shadow-lg transition-all cursor-pointer"
              >
                Teklif / Alışveriş Listesini İndir
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
