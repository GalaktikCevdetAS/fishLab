'use client';

import React from 'react';

interface TankOption {
  volumeLiters: number;
  name: string;
  bounds: [number, number, number];
}

interface TankSizeSidebarProps {
  options: TankOption[];
  currentVolume: number;
  onSelectVolume: (option: TankOption) => void;
}

export default function TankSizeSidebar({
  options,
  currentVolume,
  onSelectVolume,
}: TankSizeSidebarProps) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 50,
        background: 'rgba(7, 45, 74, 0.88)',
        backdropFilter: 'blur(14px)',
        border: '1px solid rgba(56, 189, 248, 0.45)',
        borderRadius: '16px',
        padding: '16px 20px',
        color: '#e2f1fd',
        minWidth: '220px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <div
        style={{
          fontSize: '11px',
          fontWeight: 700,
          color: '#38bdf8',
          marginBottom: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        Akvaryum Boyutu (Hacim)
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {options.map((opt) => {
          const isSelected = currentVolume === opt.volumeLiters;
          return (
            <button
              key={opt.volumeLiters}
              onClick={() => onSelectVolume(opt)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 14px',
                background: isSelected
                  ? 'rgba(56, 189, 248, 0.3)'
                  : 'rgba(56, 189, 248, 0.08)',
                border: isSelected
                  ? '1px solid #38bdf8'
                  : '1px solid rgba(56, 189, 248, 0.2)',
                borderRadius: '10px',
                color: '#fff',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
              }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: '13px' }}>
                  {opt.volumeLiters} Litre
                </div>
                <div style={{ fontSize: '10px', color: '#bae6fd' }}>
                  {opt.name.split(' ')[1] || ''} {opt.name.split(' ')[2] || ''}
                </div>
              </div>
              {isSelected && (
                <span style={{ fontSize: '12px', color: '#38bdf8' }}>● Aktif</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}