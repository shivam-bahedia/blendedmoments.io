
import React from 'react';

export const CTA: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-24 lg:pb-32">
      <div className="bg-primary rounded-[3rem] p-16 lg:p-24 text-center flex flex-col items-center gap-10 shadow-[0_48px_100px_rgba(208,187,149,0.3)]">
        <h2 className="text-secondary text-5xl lg:text-[5rem] font-black max-w-4xl leading-[1] tracking-tighter">
          Ready to automate your digital success?
        </h2>
        <p className="text-secondary/70 text-xl lg:text-2xl max-w-2xl font-medium leading-relaxed">
          Join 12,000+ SMEs scaling their brands with data-driven confidence. Start your 14-day free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
          <button className="bg-secondary text-white px-12 py-6 rounded-2xl text-xl font-black uppercase tracking-widest hover:scale-105 hover:bg-secondary/90 transition-all shadow-xl">
            Get Started Free
          </button>
          <button className="bg-white/20 text-secondary px-12 py-6 rounded-2xl text-xl font-black uppercase tracking-widest border border-secondary/10 hover:bg-white/30 transition-all">
            Book a Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};
