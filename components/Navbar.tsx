
import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-card px-6 py-4 border-b border-[#f0eeea] dark:border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3 text-primary">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 48 48">
            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" />
          </svg>
          <h2 className="text-secondary dark:text-white text-xl font-bold tracking-tight">Blended Moments</h2>
        </div>

        <nav className="hidden md:flex items-center gap-9">
          {['Platform', 'Solutions', 'Pricing', 'Success Stories'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-secondary dark:text-gray-300 text-sm font-medium hover:text-primary transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-white/10 text-secondary dark:text-white hover:bg-gray-200 transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button className="hidden sm:block min-w-[100px] h-10 px-4 bg-primary text-secondary text-sm font-bold rounded-lg hover:scale-105 transition-transform">
            Start Free Trial
          </button>
          
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-white/10 p-6 flex flex-col gap-4 shadow-xl">
          {['Platform', 'Solutions', 'Pricing', 'Success Stories'].map((item) => (
            <a key={item} href="#" className="text-lg font-medium">{item}</a>
          ))}
          <button className="w-full h-12 bg-primary text-secondary font-bold rounded-lg mt-4">
            Start Free Trial
          </button>
        </div>
      )}
    </header>
  );
};
