import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  currentView?: 'home' | 'labs' | 'faculty' | 'gallery';
}

export function Navbar({ currentView = 'home' }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Outcomes', href: '#outcomes' },
    { name: 'Courses', href: '#courses' },
    { name: 'Labs', href: '#labs' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const isLinkActive = (link: typeof navLinks[0]) => {
    if (currentView === 'labs') {
      return link.name === 'Labs';
    }
    if (currentView === 'faculty') {
      return link.name === 'Faculty';
    }
    if (currentView === 'gallery') {
      return link.name === 'Gallery';
    }
    if (currentView === 'home') {
      if (link.name === 'Home') {
        return !hash || hash === '#' || hash === '#home';
      }
      return hash === link.href;
    }
    return false;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="bg-white/10 p-1.5 rounded-lg group-hover:bg-white/20 transition-all">
            <img 
              src="https://sacet.ac.in/wp-content/uploads/2021/07/logo-final.png" 
              alt="St. Ann's Logo" 
              className="h-9 w-auto object-contain" 
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white">
            ST.ANN'S <span className="text-red-600">CSE</span> DEPT
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium transition-colors ${
                isLinkActive(link) ? 'text-red-500 font-semibold' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3">
            <a 
              href="https://drive.google.com/drive/folders/1_x5_upZArV-NMR2eKLITu2l2BD3FJ7qQ?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-red-600/30 hover:border-red-600 hover:bg-red-600/10 text-red-500 hover:text-white text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-1.5 shadow-lg shadow-red-900/5"
            >
              <Terminal className="w-4 h-4" />
              Resources
            </a>
            <a href="#contact" className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors">
              Enquire Now
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10 py-6 px-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className={`text-lg font-medium ${
                isLinkActive(link) ? 'text-red-500 font-semibold' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-white/5">
            <a 
              href="https://drive.google.com/drive/folders/1_x5_upZArV-NMR2eKLITu2l2BD3FJ7qQ?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 border border-red-600/30 bg-red-600/10 text-red-500 text-lg font-medium rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <Terminal className="w-5 h-5" />
              Resources
            </a>
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 bg-red-600 hover:bg-red-700 text-white text-lg font-medium rounded-xl transition-colors"
            >
              Enquire Now
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
