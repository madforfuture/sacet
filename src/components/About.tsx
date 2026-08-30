import { motion } from 'motion/react';
import { Target, Lightbulb, Cpu, Globe } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Pioneering <span className="text-red-600">Excellence</span> in Computing
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              From a modest beginning in 2001, the Computer Science Department in St. Ann's College of Engineering & Technology (SACET), Chirala has now grown into a fully integrated department in the field of Engineering and Technology. It is an "education with future". Learning how to inquire, converse and collaborate, the skill that never go out of date. The objectives of imparting education, combined with creation, dissemination and application of knowledge are being met in an integrated form to create a synergetic impact.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/5">
                <Target className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-xl font-display font-bold mb-2">Our Mission</h3>
                <p className="text-sm text-gray-400">To impart high-quality education and foster research in computer science to meet global standards.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#121212] border border-white/5">
                <Lightbulb className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-xl font-display font-bold mb-2">Our Vision</h3>
                <p className="text-sm text-gray-400">To be a center of excellence in computer science, producing ethical and competent professionals.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 mt-8">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-red-900/20 to-black border border-red-500/20 flex flex-col items-center text-center">
                <Cpu className="w-10 h-10 text-red-500 mb-4" />
                <h4 className="text-3xl font-display font-bold text-white mb-1">6</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Advanced Labs</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-8 rounded-3xl bg-[#121212] border border-white/5 flex flex-col items-center text-center">
                <h4 className="text-3xl font-display font-bold text-white mb-1">44</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Expert Faculty</p>
              </div>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-black border border-white/10 flex flex-col items-center text-center">
                <Globe className="w-10 h-10 text-white mb-4" />
                <h4 className="text-3xl font-display font-bold text-white mb-1">500+</h4>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Global Alumni</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
