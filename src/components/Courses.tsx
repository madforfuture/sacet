import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Courses() {
  return (
    <section id="courses" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Academic <span className="text-red-600">Programs</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive curriculum designed to meet the demands of the modern tech industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* UG */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-gradient-to-br from-[#151515] to-[#0a0a0a] border border-white/5 transition-colors duration-300 hover:border-white/10"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-xs font-bold tracking-widest uppercase mb-6">
              Undergraduate
            </div>

            <h3 className="text-3xl font-display font-bold mb-4">
              B.Tech in CSE
            </h3>

            <p className="text-gray-400 mb-12">
              A 4-year comprehensive program covering core computer science concepts, programming, and modern technologies.
            </p>
            
            <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-red-500 transition-colors group">
              View Curriculum
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* PG */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] bg-gradient-to-br from-red-900/10 to-[#0a0a0a] border border-red-500/10 transition-colors duration-300 hover:border-red-500/20"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 text-red-500 text-xs font-bold tracking-widest uppercase mb-6">
              Postgraduate
            </div>

            <h3 className="text-3xl font-display font-bold mb-4">
              M.Tech in CSE
            </h3>

            <p className="text-gray-400 mb-12">
              A 2-year advanced program focusing on research, specialized domains, and industry-level problem solving.
            </p>
            
            <a
              href="https://drive.google.com/file/d/18c4bv-DcQrnpx01gMlEf3UcK7CMxYj18/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-white hover:text-red-500 transition-colors group"
            >
              View Curriculum
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
