
import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonial: React.FC = () => {
  return (
    <section id="success-stories" className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
      <div className="glass-card rounded-[3rem] p-12 lg:p-24 relative overflow-hidden border border-primary/20">
        <div className="absolute top-12 right-12 text-primary/10 pointer-events-none">
          <Quote size={200} />
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <div className="flex gap-1.5 mb-10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-primary fill-primary" size={24} />
            ))}
          </div>

          <p className="text-3xl lg:text-5xl font-medium italic mb-12 leading-[1.3] dark:text-white tracking-tight">
            "Since switching to Blended Moments, our team has saved over 20 hours a week on social management. The ROI prediction engine is scarily accurate—we've seen a 3x increase in conversions."
          </p>

          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full border-4 border-primary/30 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/sarah/200" 
                alt="Sarah Jenkins" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h5 className="text-xl font-black dark:text-white">Sarah Jenkins</h5>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">CEO, Artisan Botanicals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
