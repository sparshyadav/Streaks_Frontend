import React from 'react';
import { Flame, Trophy, CalendarDays, Check } from 'lucide-react';

const HeatmapGrid = ({ data, baseColor }) => {
  // data is an array of intensity values from 0 to 4
  // We'll map them to opacities.
  const getOpacity = (intensity) => {
    switch (intensity) {
      case 1: return 0.4;
      case 2: return 0.6;
      case 3: return 0.8;
      case 4: return 1.0;
      default: return 0;
    }
  };

  return (
    <div className="grid grid-rows-5 grid-flow-col gap-[3px]">
      {data.map((intensity, i) => (
        <div
          key={i}
          className="w-3 h-3 rounded-sm"
          style={{
            backgroundColor: intensity === 0 ? '#1e2227' : baseColor, // Streak surface for empty
            opacity: intensity === 0 ? 1 : getOpacity(intensity)
          }}
        />
      ))}
    </div>
  );
};

const ActivityCard = ({ title, icon, totalDaysText, stats, baseColor, heatmapData }) => {
  return (
    <div className="bg-[#16191d] rounded-2xl p-6 w-[380px] border border-white/5">
      <div className="flex justify-between items-start mb-6">
        <div className="flex gap-4 items-center">
          <div className="text-2xl">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-gray-400 text-sm">{totalDaysText}</p>
          </div>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1e2e26] text-[#00e676] border border-[#00e676]/30 hover:bg-[#00e676]/20 transition-colors text-sm font-medium">
          <Check size={14} strokeWidth={3} />
          Done
        </button>
      </div>

      <div className="flex gap-6 mb-6">
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-white font-bold text-lg">
            <Flame size={16} style={{ color: baseColor }} />
            {stats.current}
          </div>
          <span className="text-gray-400 text-xs mt-0.5">Current</span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-white font-bold text-lg">
            <Trophy size={16} className="text-yellow-500" />
            {stats.best}
          </div>
          <span className="text-gray-400 text-xs mt-0.5">Best</span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-white font-bold text-lg">
            <CalendarDays size={16} className="text-gray-300" />
            {stats.total}
          </div>
          <span className="text-gray-400 text-xs mt-0.5">Total</span>
        </div>
      </div>

      <HeatmapGrid data={heatmapData} baseColor={baseColor} />
    </div>
  );
};

export default ActivityCard;
