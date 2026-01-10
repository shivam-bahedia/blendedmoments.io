
import React from 'react';
import { Search, Send, MessageSquare, ArrowRight } from 'lucide-react';

const featureList = [
  {
    icon: <Search className="w-7 h-7" />,
    title: 'Predictive SEO',
    desc: "Our AI doesn't just find keywords; it predicts tomorrow's trends before they happen, giving you first-mover advantage.",
  },
  {
    icon: <Send className="w-7 h-7" />,
    title: 'Omnichannel Auto-Posting',
    desc: 'Schedule once, deploy everywhere. AI adapts your content format and timing for each platform automatically.',
    featured: true,
  },
  {
    icon: <MessageSquare className="w-7 h-7" />,
    title: 'Smart Engagement',
    desc: 'Autonomous community management. Our AI handles 90% of comments and DMs with human-like brand voice.',
  },
];

export const Features: React.FC = () => {
  return (
    <section id="platform" className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
      <div className="text-center mb-20">
        <h2 className="text-primary font-black uppercase tracking-[0.3em] text-xs mb-4">The Engine</h2>
        <h3 className="text-4xl lg:text-6xl font-black mb-6 dark:text-white tracking-tight">AI-Powered Growth Tools</h3>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg italic leading-relaxed">Everything you need to outperform competitors with 10x the budget.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {featureList.map((f, i) => (
          <div 
            key={i} 
            className={`glass-card p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 group border-2 ${f.featured ? 'border-primary/40' : 'border-primary/10'} hover:border-primary`}
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-secondary transition-all duration-300">
              {f.icon}
            </div>
            <h4 className="text-2xl font-black mb-4 dark:text-white">{f.title}</h4>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 text-lg">{f.desc}</p>
            <a href="#" className="text-primary font-bold inline-flex items-center gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-sm">
              Learn more <ArrowRight size={18} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
