'use client';

import { useState } from 'react';

interface CoverageMapProps {
  className?: string;
}

const serviceAreas = [
  { id: 'barnet', name: 'Barnet', x: 180, y: 120, region: 'North London' },
  { id: 'watford', name: 'Watford', x: 120, y: 100, region: 'Hertfordshire' },
  { id: 'hatfield', name: 'Hatfield', x: 160, y: 80, region: 'Hertfordshire' },
  { id: 'brentford', name: 'Brentford', x: 100, y: 180, region: 'West London' },
  { id: 'hoddesdon', name: 'Hoddesdon', x: 220, y: 90, region: 'Hertfordshire' },
  { id: 'st-albans', name: 'St Albans', x: 140, y: 70, region: 'Hertfordshire' },
  { id: 'stevenage', name: 'Stevenage', x: 180, y: 50, region: 'Hertfordshire' },
  { id: 'broxbourne', name: 'Broxbourne', x: 200, y: 100, region: 'Hertfordshire' },
  { id: 'potters-bar', name: 'Potters Bar', x: 170, y: 110, region: 'Hertfordshire' },
  { id: 'ealing', name: 'Ealing', x: 90, y: 170, region: 'West London' },
  { id: 'hackney', name: 'Hackney', x: 190, y: 190, region: 'East London' },
  { id: 'islington', name: 'Islington', x: 180, y: 180, region: 'North London' },
  { id: 'welwyn', name: 'Welwyn Garden City', x: 160, y: 60, region: 'Hertfordshire' },
  { id: 'camden', name: 'Camden Town', x: 170, y: 170, region: 'Central London' },
  { id: 'redbridge', name: 'Redbridge', x: 220, y: 180, region: 'East London' },
  { id: 'waltham-forest', name: 'Waltham Forest', x: 210, y: 160, region: 'East London' },
  { id: 'haringey', name: 'Haringey', x: 190, y: 150, region: 'North London' },
  { id: 'enfield', name: 'Enfield', x: 200, y: 130, region: 'North London' },
  { id: 'harrow', name: 'Harrow', x: 110, y: 150, region: 'North West London' }
];

export default function CoverageMap({ className = '' }: CoverageMapProps) {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const getAreaColor = (areaId: string) => {
    if (selectedArea === areaId) return '#D4AF37'; // Alba gold
    if (hoveredArea === areaId) return '#F4D03F'; // Light gold
    return '#162F4F'; // Alba primary
  };

  const hoveredAreaData = hoveredArea ? serviceAreas.find(area => area.id === hoveredArea) : null;

  return (
    <div className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${className}`}>
      {/* Map Container */}
      <div className="relative h-full min-h-[400px] bg-gradient-to-br from-alba-cream to-alba-warm-white">
        {/* SVG Map */}
        <svg
          viewBox="0 0 300 250"
          className="w-full h-full"
          style={{ minHeight: '400px' }}
        >
          {/* Background regions */}
          <defs>
            <pattern id="mapPattern" patternUnits="userSpaceOnUse" width="20" height="20">
              <rect width="20" height="20" fill="#F8F9FA" opacity="0.3"/>
              <circle cx="10" cy="10" r="1" fill="#162F4F" opacity="0.1"/>
            </pattern>
          </defs>
          
          {/* London boundary (simplified) */}
          <ellipse
            cx="180"
            cy="170"
            rx="80"
            ry="60"
            fill="none"
            stroke="#162F4F"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.3"
          />
          
          {/* Hertfordshire boundary (simplified) */}
          <ellipse
            cx="160"
            cy="80"
            rx="70"
            ry="50"
            fill="none"
            stroke="#2A4A6B"
            strokeWidth="2"
            strokeDasharray="3,3"
            opacity="0.3"
          />
          
          {/* M25 representation */}
          <ellipse
            cx="170"
            cy="140"
            rx="100"
            ry="80"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="3"
            strokeDasharray="8,4"
            opacity="0.4"
          />

          {/* Service area points */}
          {serviceAreas.map((area) => (
            <g key={area.id}>
              {/* Area circle */}
              <circle
                cx={area.x}
                cy={area.y}
                r="8"
                fill={getAreaColor(area.id)}
                stroke="white"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-300 hover:r-10"
                onMouseEnter={() => setHoveredArea(area.id)}
                onMouseLeave={() => setHoveredArea(null)}
                onClick={() => setSelectedArea(selectedArea === area.id ? null : area.id)}
              />
              
              {/* Pulse animation for hovered area */}
              {hoveredArea === area.id && (
                <circle
                  cx={area.x}
                  cy={area.y}
                  r="12"
                  fill={getAreaColor(area.id)}
                  opacity="0.3"
                  className="animate-ping"
                />
              )}
              
              {/* Area label */}
              <text
                x={area.x}
                y={area.y - 15}
                textAnchor="middle"
                className="text-xs font-semibold fill-alba-primary pointer-events-none"
                opacity={hoveredArea === area.id || selectedArea === area.id ? 1 : 0.7}
              >
                {area.name}
              </text>
            </g>
          ))}

          {/* Legend */}
          <g transform="translate(10, 10)">
            <rect x="0" y="0" width="120" height="80" fill="white" fillOpacity="0.9" rx="8" stroke="#162F4F" strokeWidth="1"/>
            <text x="10" y="15" className="text-xs font-bold fill-alba-primary">Coverage Areas</text>
            
            <circle cx="15" cy="30" r="4" fill="#162F4F"/>
            <text x="25" y="34" className="text-xs fill-alba-charcoal">Service Location</text>
            
            <line x1="10" y1="45" x2="25" y2="45" stroke="#D4AF37" strokeWidth="2" strokeDasharray="4,2"/>
            <text x="30" y="49" className="text-xs fill-alba-charcoal">M25 Corridor</text>
            
            <line x1="10" y1="60" x2="25" y2="60" stroke="#162F4F" strokeWidth="1" strokeDasharray="3,3"/>
            <text x="30" y="64" className="text-xs fill-alba-charcoal">Region Boundary</text>
          </g>
        </svg>

        {/* Hover tooltip */}
        {hoveredAreaData && (
          <div className="absolute top-4 right-4 bg-alba-primary text-white p-3 rounded-lg shadow-lg max-w-xs">
            <h4 className="font-semibold text-sm">{hoveredAreaData.name}</h4>
            <p className="text-xs text-alba-cream/90">{hoveredAreaData.region}</p>
            <p className="text-xs text-alba-gold mt-1">Click for more details</p>
          </div>
        )}

        {/* Selected area info */}
        {selectedArea && (
          <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg border-l-4 border-alba-gold">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-alba-primary">
                  {serviceAreas.find(a => a.id === selectedArea)?.name}
                </h4>
                <p className="text-sm text-alba-charcoal/70">
                  {serviceAreas.find(a => a.id === selectedArea)?.region}
                </p>
                <p className="text-xs text-alba-accent mt-1">
                  ✓ Full painting & decorating services available
                </p>
              </div>
              <button
                onClick={() => setSelectedArea(null)}
                className="text-alba-charcoal/50 hover:text-alba-primary"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Coverage stats */}
        <div className="absolute top-4 left-4 bg-alba-gold/10 backdrop-blur-sm p-3 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-alba-primary">19</div>
            <div className="text-xs text-alba-charcoal/70">Areas Covered</div>
          </div>
        </div>
      </div>
    </div>
  );
}