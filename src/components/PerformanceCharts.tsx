import React from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, Tooltip
} from 'recharts';

const radarData = [
  { subject: 'RES', A: 80, fullMark: 100 },
  { subject: 'VEL', A: 90, fullMark: 100 },
  { subject: 'AGI', A: 70, fullMark: 100 },
  { subject: 'FUE', A: 60, fullMark: 100 },
  { subject: 'REC', A: 85, fullMark: 100 },
];

const barData = [
  { name: 'ENE', value: 40 },
  { name: 'FEB', value: 55 },
  { name: 'MAR', value: 45 },
  { name: 'ABR', value: 75 },
  { name: 'MAY', value: 85 },
  { name: 'JUN', value: 95 },
];

export const PerformanceCharts: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
      {/* Radar Chart */}
      <div className="bg-white p-5 rounded-xl border border-surface-container-high shadow-sm flex flex-col items-center">
        <h3 className="font-headline italic text-sm font-bold uppercase text-primary self-start mb-2 kinetic-border">Atributos</h3>
        <div className="w-full h-48">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid stroke="#e1e3e4" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 'bold' }} />
              <Radar
                name="Leo"
                dataKey="A"
                stroke="#7e5714"
                fill="#ffca7d"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-5 rounded-xl border border-surface-container-high shadow-sm flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-headline italic text-sm font-bold uppercase text-primary kinetic-border">Potencia (W)</h3>
          <span className="font-label text-[8px] uppercase text-slate-400">6 Meses</span>
        </div>
        <div className="flex-1 min-h-[120px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 8, fontWeight: 'bold' }} 
              />
              <Tooltip cursor={{ fill: 'transparent' }} />
              <Bar 
                dataKey="value" 
                radius={[2, 2, 0, 0]}
                fill="#003164"
              >
                {barData.map((entry, index) => (
                  <rect 
                    key={`cell-${index}`} 
                    fill={index === barData.length - 1 ? '#fec97c' : (index >= 3 ? '#003164' : '#f3f4f5')} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
