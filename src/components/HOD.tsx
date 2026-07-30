import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Calendar, Award } from 'lucide-react';

export function HOD() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 md:p-14 rounded-[2.5rem] bg-[#0f0f0f] border border-white/10 relative"
        >
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
                <img 
                  src="https://sacet.ac.in/wp-content/uploads/WhatsApp-Image-2026-02-07-at-2.15.17-PM.jpeg" 
                  alt="Dr P HARINI" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">Dr P HARINI</h2>
              <p className="text-red-500 font-medium mb-6">Head of Department, CSE</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-400">
                  <Briefcase className="w-5 h-5 text-white/50" />
                  <span>Professor</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <GraduationCap className="w-5 h-5 text-white/50" />
                  <span>Ph.D (2011, JNTUA)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Calendar className="w-5 h-5 text-white/50" />
                  <span>27 Years Experience</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
              <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
                <p>
                  Dr. P. HARINI has received her Ph.D in Computer Science and Engineering in 2011 from JNTUA Ananthapur, Andhra Pradesh. She is currently working as Professor and Head in the CSE department.
                </p>
                <p>
                  She brings a wealth of knowledge with a total of <strong>27 years of experience</strong> in Teaching and Administration. She is ratified by JNTUK, Kakinada.
                </p>
                <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-red-600/10 border border-red-500/20 text-red-400 mt-4">
                  <Award className="w-6 h-6 shrink-0" />
                  <span className="font-medium text-sm md:text-base">Best Teacher Award for the year 2012 from JNTUK</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
