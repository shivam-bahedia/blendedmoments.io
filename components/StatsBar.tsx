
import React from 'react';

const stats = [
  { value: '2.5B+', label: 'Data Points Analyzed' },
  { value: '12k+', label: 'SME Users' },
  { value: '20h', label: 'Avg. Time Saved/Week' },
  { value: '3.2x', label: 'ROAS Multiplier' },
];

export const StatsBar: React.FC = () => {
  return (
    <section className="bg-white/40 dark:bg-white/5 py-14 border-y border-[#f0eeea] dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center group">
              <p className="text-primary text-4xl lg:text-5xl font-black mb-2 tracking-tight group-hover:scale-110 transition-transform">
                {stat.value}
              </p>
              <p className="text-[11px] lg:text-[13px] text-gray-500 font-black uppercase tracking-[0.2em] leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
