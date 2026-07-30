import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Target, Lightbulb, BarChart3 } from 'lucide-react';
import { peos, psos, programOutcomes } from '../data/outcomes';

function AccordionItem({ title, id, children }: { title: string, id: string, children: React.ReactNode, key?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-2xl bg-[#121212] overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="text-red-500 font-display font-bold text-sm w-12 shrink-0">{id}</span>
          <span className="font-bold text-gray-200">{title}</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-500 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 text-sm text-gray-400">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Outcomes() {
  return (
    <section id="outcomes" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* PEOs and PSOs */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-[2.5rem] bg-[#0f0f0f] border border-white/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-display font-bold">Program Educational Objectives</h3>
            </div>
            <ul className="space-y-4">
              {peos.map((peo, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300 text-sm leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span>{peo}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 md:p-10 rounded-[2.5rem] bg-[#0f0f0f] border border-white/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-2xl font-display font-bold">Program Specific Outcomes</h3>
            </div>
            <ul className="space-y-4">
              {psos.map((pso, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300 text-sm leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span>{pso}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* POs, Competencies and Indicators */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold">Program Outcomes, Competencies & Indicators</h3>
          </div>
          <div className="space-y-4 max-w-4xl">
            {programOutcomes.map((po) => (
              <AccordionItem key={po.id} id={po.id} title={po.title}>
                <div className="pl-[4.5rem]">
                  <p className="text-gray-300 font-medium mb-6 leading-relaxed">
                    {po.desc}
                  </p>
                  
                  <div className="space-y-6">
                    {po.competencies.map((comp, j) => (
                      <div key={j} className="bg-black/40 rounded-xl p-5 border border-white/5">
                        <h4 className="text-red-400 font-medium text-sm mb-4 leading-relaxed tracking-wide">
                          <span className="text-white/40 uppercase text-xs block mb-1">Competency</span>
                          {comp.text}
                        </h4>
                        
                        <div className="space-y-3 pl-4 border-l border-white/10">
                          <span className="text-white/40 uppercase text-xs font-medium tracking-wide">Performance Indicators</span>
                          <ul className="space-y-3 mt-2">
                            {comp.indicators.map((ind, k) => (
                              <li key={k} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                                <div className="w-1 h-1 rounded-full bg-gray-600 mt-2 shrink-0" />
                                <span>{ind}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionItem>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
