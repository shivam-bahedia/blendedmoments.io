
import React from 'react';
import { DashboardMockup } from './DashboardMockup';
import { Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex flex-col gap-8 flex-1 animate-in fade-in slide-in-from-left duration-700">
          <div className="flex flex-col gap-5">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-xs font-black uppercase tracking-[0.2em] rounded-full w-fit">
              Enterprise AI for SMEs
            </span>
            <h1 className="text-secondary dark:text-white text-5xl lg:text-[5.5rem] font-black leading-[1] tracking-tighter">
              Data-Driven Growth, <br/>
              <span className="text-primary italic">Automated.</span>
            </h1>
            <p className="text-secondary dark:text-gray-400 text-lg lg:text-xl font-medium max-w-[540px] leading-relaxed">
              Blended Moments uses predictive intelligence to scale your social media ROI without the agency overhead.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="flex min-w-[220px] h-14 items-center justify-center rounded-xl bg-primary text-secondary text-lg font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-1">
              Launch Your Campaign
            </button>
            <button className="flex min-w-[200px] h-14 items-center justify-center rounded-xl border-2 border-primary/40 text-secondary dark:text-white text-lg font-bold hover:bg-primary/10 transition-colors group">
              <Play className="mr-2 fill-current" size={18} />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex-1 w-full animate-in fade-in zoom-in duration-1000">
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
};
