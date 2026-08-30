import { useState, useRef } from 'react';
import { Sparkles, ExternalLink, Linkedin, CheckCircle2, MapPin, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Footer() {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 250);
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="https://sacet.ac.in/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 mb-6 group">
              <div className="bg-white/10 p-1.5 rounded-lg group-hover:bg-white/20 transition-all">
                <img 
                  src="https://sacet.ac.in/wp-content/uploads/2021/07/logo-final.png" 
                  alt="St. Ann's Logo" 
                  className="h-8 w-auto object-contain" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">ST.ANN'S <span className="text-red-600">CSE</span> DEPT</span>
            </a>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-8">
              Empowering the next generation of computer scientists and engineers to build a better future through technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#faculty" className="hover:text-red-500 transition-colors">Faculty</a></li>
              <li><a href="#courses" className="hover:text-red-500 transition-colors">Programs</a></li>
              <li><a href="#outcomes" className="hover:text-red-500 transition-colors">Outcomes</a></li>
              <li><a href="#labs" className="hover:text-red-500 transition-colors">Lab Details</a></li>
              <li><a href="#gallery" className="hover:text-red-500 transition-colors">Campus Gallery</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left">
            <p>© {new Date().getFullYear()} St. Ann's CSE Department. All rights reserved.</p>
            <span className="hidden md:inline text-white/20">|</span>
            
            {/* Animated Golden Developer Attribution with LinkedIn Floating Preview Window */}
            <div 
              className="relative inline-block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <motion.a 
                href="https://www.linkedin.com/in/svnakash/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-950/40 via-yellow-950/30 to-amber-950/40 border border-amber-500/30 hover:border-amber-400/60 shadow-[0_0_20px_rgba(245,158,11,0.15)] hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400/30 group-hover:fill-amber-300 transition-colors" />
                </motion.div>
                
                <span className="text-gray-400 font-normal">
                  Developed by{' '}
                  <span className="relative font-semibold font-mono tracking-wide bg-gradient-to-r from-amber-200 via-yellow-300 via-amber-400 to-yellow-200 bg-[length:200%_auto] bg-clip-text text-transparent animate-golden-shimmer drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]">
                    Akash Sankarasetty(skyy)
                  </span>
                </span>
              </motion.a>

              {/* Floating Window Frame */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5 w-80 sm:w-88 z-50 pointer-events-auto"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Window Container */}
                    <div className="rounded-2xl bg-[#0e0e12] border border-amber-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_25px_rgba(245,158,11,0.2)] overflow-hidden backdrop-blur-xl">
                      
                      {/* Window Titlebar */}
                      <div className="px-3.5 py-2.5 bg-[#16161e] border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                        </div>
                        
                        <div className="flex items-center gap-1.5 text-[11px] font-mono text-gray-400">
                          <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" />
                          <span>linkedin.com/in/svnakash</span>
                        </div>

                        <a 
                          href="https://www.linkedin.com/in/svnakash/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-amber-400 transition-colors"
                          title="Open in new tab"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* LinkedIn Header Cover Banner */}
                      <div className="h-16 bg-gradient-to-r from-[#004182] via-[#0a66c2] to-amber-600 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px]"></div>
                        <div className="absolute top-2 right-3 px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-mono text-amber-300 border border-amber-400/20 flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                          <span>Creator</span>
                        </div>
                      </div>

                      {/* Profile Body */}
                      <div className="px-4 pb-4 pt-0 relative">
                        {/* Avatar */}
                        <div className="-mt-8 mb-2.5 flex items-end justify-between">
                          <div className="relative">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 via-amber-600 to-yellow-600 p-0.5 shadow-lg">
                              <div className="w-full h-full rounded-full bg-[#111116] flex items-center justify-center font-display font-bold text-base text-amber-300 tracking-wider">
                                AS
                              </div>
                            </div>
                            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#0e0e12]" title="Available for projects"></span>
                          </div>

                          <div className="flex items-center gap-1 bg-[#0a66c2]/10 border border-[#0a66c2]/30 px-2.5 py-1 rounded-md text-[#0a66c2] text-[11px] font-semibold">
                            <Linkedin className="w-3 h-3" />
                            <span>LinkedIn Member</span>
                          </div>
                        </div>

                        {/* Details */}
                        <div>
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <h5 className="font-bold text-white text-sm">Akash Sankarasetty</h5>
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                          </div>
                          <p className="text-[11px] font-mono text-amber-400/90 font-medium mb-1">
                            @svnakash <span className="text-gray-400 font-sans">• skyy</span>
                          </p>
                          <p className="text-xs text-gray-300 font-normal leading-snug mb-2.5">
                            Gen AI & Agentic Developer • Computer Science & Engineering
                          </p>
                          
                          <div className="flex items-center gap-3 text-[10px] text-gray-400 mb-3.5">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3 text-red-400" />
                              Andhra Pradesh, India
                            </span>
                            <span className="flex items-center gap-1">
                              <Globe className="w-3 h-3 text-amber-400" />
                              SACET CSE
                            </span>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <a
                          href="https://www.linkedin.com/in/svnakash/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#0a66c2] hover:from-[#004182] to-[#0a66c2] text-white font-medium text-xs flex items-center justify-center gap-1.5 shadow-md shadow-blue-950/40 hover:shadow-blue-900/60 transition-all group/btn"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                          <span>View Full Profile on LinkedIn</span>
                          <ExternalLink className="w-3 h-3 opacity-70 group-hover/btn:translate-x-0.5 transition-transform" />
                        </a>
                      </div>

                      {/* Tail / Arrow */}
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0e0e12] border-r border-b border-amber-500/30 rotate-45"></div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes goldenShimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-golden-shimmer {
          animation: goldenShimmer 4s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
