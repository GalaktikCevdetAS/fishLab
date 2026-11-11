'use client';

import React from 'react';
import { LightingMode } from '@/types/aquarium';

interface LightingAndPhotoBarProps {
  lightingMode: LightingMode;
  setLightingMode: (mode: LightingMode) => void;
  onTakePhoto: () => void;
}

export default function LightingAndPhotoBar({
  lightingMode,
  setLightingMode,
  onTakePhoto,
}: LightingAndPhotoBarProps) {
  return (
    <div className="absolute top-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1.5 rounded-2xl bg-sky-950/80 backdrop-blur-md border border-sky-400/30 p-1.5 shadow-2xl">
      {/* Gün Işığı */}
      <button
        type="button"
        onClick={() => setLightingMode('day')}
        className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
          lightingMode === 'day'
            ? 'bg-amber-400 text-sky-950 shadow-md font-bold'
            : 'text-sky-200 hover:bg-sky-900/60'
        }`}
      >
        <span>☀️</span>
        <span>Gün Işığı</span>
      </button>

      {/* Gece Lambası */}
      <button
        type="button"
        onClick={() => setLightingMode('night')}
        className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
          lightingMode === 'night'
            ? 'bg-indigo-600 text-white shadow-md font-bold'
            : 'text-sky-200 hover:bg-sky-900/60'
        }`}
      >
        <span>🌙</span>
        <span>Gece Mavisi</span>
      </button>

      {/* Bitki Işığı */}
      <button
        type="button"
        onClick={() => setLightingMode('plant')}
        className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
          lightingMode === 'plant'
            ? 'bg-fuchsia-600 text-white shadow-md font-bold'
            : 'text-sky-200 hover:bg-sky-900/60'
        }`}
      >
        <span>🌸</span>
        <span>Bitki Spektrumu</span>
      </button>

      <div className="w-[1px] h-5 bg-sky-400/30 mx-1" />

      {/* Fotoğraf Çek Butonu */}
      <button
        type="button"
        onClick={onTakePhoto}
        title="Arayüzü gizle ve sahnenin net fotoğrafını indir"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-600/80 hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
      >
        <span>📸</span>
        <span>Fotoğraf Çek</span>
      </button>
    </div>
  );
}
