'use client';

import React from 'react';
import { SubstrateConfig } from '@/types/aquarium';

interface WaterMetricsHUDProps {
  volumeLiters: number;
  selectedSubstrate: SubstrateConfig | null;
  substrateKg: number;
  totalFishCount: number;
  pH: number;
  oxygen: number;
  ppm: number;
  temperature: number;
  waterQuality: string;
  fps: number;
}

export default function WaterMetricsHUD({
  volumeLiters,
  selectedSubstrate,
  substrateKg,
  totalFishCount,
  pH,
  oxygen,
  ppm,
  temperature,
  waterQuality,
  fps,
}: WaterMetricsHUDProps) {
  const isPpmCritical = ppm > 100;
  const isFishOverloaded = totalFishCount > 25;

  return (
    <div className="absolute top-5 right-5 z-40 min-w-[260px] rounded-2xl bg-sky-950/80 backdrop-blur-md border border-sky-400/30 p-4 text-sky-50 shadow-2xl transition-all">
      <div className="text-[11px] font-bold text-sky-400 uppercase tracking-wider mb-2.5 flex items-center justify-between">
        <span>Akvaryum & Su Değerleri</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      </div>

      <div className="space-y-1.5 text-xs">
        <div className="flex justify-between items-center">
          <span className="text-sky-200">Su Hacmi</span>
          <span className="font-mono font-semibold text-sky-400">{volumeLiters} L</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sky-200">Su Sıcaklığı</span>
          <span className="font-mono font-bold text-amber-300">{temperature}°C</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sky-200">Aktif Zemin</span>
          <span className="font-mono font-semibold text-sky-300">
            {selectedSubstrate ? `${selectedSubstrate.name.split(' ')[0]} (${substrateKg}kg)` : 'Yok'}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sky-200">Toplam Balık</span>
          <span className="font-mono font-semibold text-sky-400">{totalFishCount} Adet</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sky-200">pH Seviyesi</span>
          <span className="font-mono font-bold text-emerald-400">{pH} pH</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sky-200">Çözünmüş O₂</span>
          <span className="font-mono font-bold text-sky-300">{oxygen} mg/L</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sky-200">Organik Yük (PPM)</span>
          <span className={`font-mono font-bold ${isPpmCritical ? 'text-rose-400' : 'text-emerald-400'}`}>
            {ppm} PPM
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sky-200">Biyo-Denge</span>
          <span className={`font-semibold text-[11px] ${isFishOverloaded ? 'text-rose-400' : 'text-emerald-400'}`}>
            {waterQuality}
          </span>
        </div>

        <div className="flex justify-between items-center pt-2 border-t border-sky-400/20">
          <span className="text-sky-300/80">Performans</span>
          <span className="font-mono font-semibold text-sky-400">{fps} FPS</span>
        </div>
      </div>
    </div>
  );
}
