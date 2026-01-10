
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell } from 'recharts';
import { TrendingUp } from 'lucide-react';

const data = [
  { name: 'Mon', value: 30 },
  { name: 'Tue', value: 45 },
  { name: 'Wed', value: 65 },
  { name: 'Thu', value: 55 },
  { name: 'Fri', value: 85 },
  { name: 'Sat', value: 95 },
  { name: 'Sun', value: 75 },
];

export const DashboardMockup: React.FC = () => {
  return (
    <div className="relative">
      <div className="glass-card rounded-3xl p-8 shadow-[0_32px_64px_-16px_rgba(208,187,149,0.2)] dark:shadow-none border border-primary/30 overflow-hidden">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h3 className="font-bold text-xl dark:text-white">Live Performance</h3>
            <p className="text-xs text-gray-500 font-medium">Updated every 5 mins</p>
          </div>
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-10">
          <div className="bg-white/50 dark:bg-white/5 p-5 rounded-2xl border border-primary/10 transition-all hover:border-primary/40">
            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Growth Lift</p>
            <p className="text-3xl font-black text-primary tracking-tight">+142%</p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 mt-4 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[85%] rounded-full animate-in slide-in-from-left duration-1000"></div>
            </div>
          </div>
          <div className="bg-white/50 dark:bg-white/5 p-5 rounded-2xl border border-primary/10 transition-all hover:border-primary/40">
            <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">AI Confidence</p>
            <p className="text-3xl font-black text-primary tracking-tight">98.4%</p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 mt-4 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[98%] rounded-full animate-in slide-in-from-left duration-1000"></div>
            </div>
          </div>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{fill: '#888', fontSize: 12}} 
                dy={10}
              />
              <Tooltip 
                cursor={{fill: 'rgba(208, 187, 149, 0.1)'}}
                contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill="#D0BB95" 
                    fillOpacity={0.2 + (index / data.length) * 0.8} 
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute -bottom-6 -left-6 glass-card p-5 rounded-2xl shadow-2xl hidden md:flex items-center gap-4 border border-primary/50 animate-bounce-slow">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-secondary shadow-lg shadow-primary/30">
          <TrendingUp size={24} />
        </div>
        <div>
          <p className="text-[10px] uppercase text-gray-500 font-black tracking-widest">New Leads</p>
          <p className="text-xl font-black dark:text-white">+2,481</p>
        </div>
      </div>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
