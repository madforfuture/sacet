import { motion } from 'motion/react';
import { ChevronRight, Code2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#1a0000_0%,_#050505_100%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer"
          onClick={() => window.open('https://sacet.ac.in/', '_blank', 'noopener,noreferrer')}
        >
          <img 
            src="https://sacet.ac.in/wp-content/uploads/2021/07/logo-final.png" 
            alt="St. Ann's Logo" 
            className="h-6 w-auto object-contain bg-white rounded px-1 py-0.5" 
            referrerPolicy="no-referrer"
          />
          <span className="text-xs md:text-sm font-medium tracking-wide">St. Ann's College of Engineering & Technology</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[1.1] mb-6 overflow-hidden">
          <motion.span
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
            className="block"
          >
            Department of
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500"
          >
            Computer Science
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
            className="block text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.15)]"
          >
            & Engineering
          </motion.span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 font-light"
        >
          Innovating the Future with Technology. We build the next generation of software engineers, researchers, and tech leaders.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#courses" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2 group">
            Explore Programs
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all flex items-center justify-center">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
