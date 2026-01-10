
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '49',
    description: 'For solo entrepreneurs',
    features: ['3 Social Profiles', 'Basic AI Scheduling', 'Weekly Growth Report'],
  },
  {
    name: 'Professional',
    price: '149',
    description: 'For growing SMEs',
    features: ['10 Social Profiles', 'Advanced AI Predictor', 'Smart Engagement Bot', 'Real-time Analytics Dashboard'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '499',
    description: 'For large-scale teams',
    features: ['Unlimited Profiles', 'Custom AI Model Training', 'Dedicated Account Manager', 'API Access & Integrations'],
  },
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-[#f0eeea] dark:bg-white/5 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-4xl lg:text-6xl font-black mb-6 dark:text-white tracking-tight">Simple, Results-Based Pricing</h3>
          <p className="text-gray-500 text-lg">Choose the plan that fits your current scale.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`glass-card p-12 rounded-[2.5rem] flex flex-col transition-all duration-300 ${plan.featured ? 'bg-white dark:bg-[#2a2620] scale-105 border-4 border-primary z-10 shadow-3xl' : 'hover:border-primary/50'}`}
            >
              {plan.featured && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-secondary px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                  Most Popular
                </div>
              )}
              <h4 className="text-3xl font-black mb-2 dark:text-white">{plan.name}</h4>
              <p className="text-gray-500 font-medium mb-10">{plan.description}</p>
              
              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-6xl font-black dark:text-white">${plan.price}</span>
                <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">/mo</span>
              </div>

              <ul className="flex flex-col gap-6 mb-12 flex-1">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-secondary dark:text-gray-300 font-medium">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all ${plan.featured ? 'bg-primary text-secondary shadow-xl shadow-primary/30 hover:scale-[1.02]' : 'border-2 border-primary text-primary hover:bg-primary/10'}`}>
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
