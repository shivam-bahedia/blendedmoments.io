
import React from 'react';
import { Globe, Users, Megaphone } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-[#f0eeea] dark:border-white/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-3 text-primary mb-8">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 48 48">
                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" />
              </svg>
              <span className="text-2xl font-black text-secondary dark:text-white tracking-tight">Blended Moments</span>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed italic text-lg">
              Empowering the next generation of SMEs with enterprise-grade artificial intelligence.
            </p>
          </div>
          
          <div>
            <h6 className="font-black mb-8 dark:text-white uppercase tracking-widest text-sm">Product</h6>
            <ul className="flex flex-col gap-5 text-gray-500 text-[15px] font-medium">
              <li><a className="hover:text-primary transition-colors" href="#">Features</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Predictive Engine</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Integrations</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">API Docs</a></li>
            </ul>
          </div>
          
          <div>
            <h6 className="font-black mb-8 dark:text-white uppercase tracking-widest text-sm">Company</h6>
            <ul className="flex flex-col gap-5 text-gray-500 text-[15px] font-medium">
              <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h6 className="font-black mb-8 dark:text-white uppercase tracking-widest text-sm">Legal</h6>
            <ul className="flex flex-col gap-5 text-gray-500 text-[15px] font-medium">
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-[#f0eeea] dark:border-white/10 pt-12">
          <p className="text-gray-400 text-sm font-medium">
            © {currentYear} Blended Moments AI Inc. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a className="text-gray-400 hover:text-primary transition-all hover:scale-110" href="#"><Globe size={22} /></a>
            <a className="text-gray-400 hover:text-primary transition-all hover:scale-110" href="#"><Users size={22} /></a>
            <a className="text-gray-400 hover:text-primary transition-all hover:scale-110" href="#"><Megaphone size={22} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
