import React from 'react';
import { Flame, Plus, Laptop, Dumbbell } from 'lucide-react';
import ActivityCard from '../features/dashboard/components/ActivityCard';

// Dummy data generators for the heatmaps
const generateHeatmapData = (seed) => {
  const data = [];
  let currentGroup = 0;
  for (let i = 0; i < 105; i++) { // 21 cols * 5 rows
    // Generate some clumpy random data so it looks like real activity
    const rand = Math.sin(i * seed) * 10000;
    const value = rand - Math.floor(rand);
    
    if (value > 0.7) {
      data.push(Math.floor(value * 4) + 1); // 1 to 4
    } else {
      data.push(0);
    }
  }
  return data;
};

const Dashboard = () => {
  return (
    <div className="min-h-screen p-8 max-w-6xl mx-auto">
      {/* Header section */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
            <Flame className="text-[#00e676]" size={24} />
          </div>
          <h1 className="text-3xl font-bold text-[#00e676]">Streaks</h1>
        </div>
        <button className="flex items-center gap-2 bg-[#00e676] hover:bg-[#00c853] text-black px-5 py-2.5 rounded-xl font-semibold transition-colors duration-200 shadow-[0_0_15px_rgba(0,230,118,0.3)]">
          <Plus size={20} />
          New Activity
        </button>
      </div>

      <h2 className="text-xl font-bold text-white mb-6">Your Activities</h2>

      <div className="flex flex-wrap gap-6">
        <ActivityCard 
          title="Coding"
          icon={<span className="text-3xl">💻</span>}
          totalDaysText="180 total days"
          baseColor="#00e676"
          stats={{ current: 12, best: 45, total: 180 }}
          heatmapData={generateHeatmapData(1.23)}
        />
        
        <ActivityCard 
          title="Gym"
          icon={<span className="text-3xl">🏋️</span>}
          totalDaysText="95 total days"
          baseColor="#f97316"
          stats={{ current: 5, best: 30, total: 95 }}
          heatmapData={generateHeatmapData(2.45)}
        />
      </div>
    </div>
  );
};

export default Dashboard;
