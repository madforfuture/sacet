import { motion } from 'motion/react';
import { Calendar, ArrowUpRight } from 'lucide-react';

const newsItems = [
  { date: 'Oct 24, 2026', title: 'CSE Students Win National Hackathon', category: 'Achievement' },
  { date: 'Oct 18, 2026', title: 'International Conference on AI & ML', category: 'Event' },
  { date: 'Oct 10, 2026', title: 'New Quantum Computing Lab Inaugurated', category: 'Infrastructure' },
];

export function News() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">News & <span className="text-red-600">Events</span></h2>
            <p className="text-gray-400">Stay updated with the latest happenings in the department.</p>
          </div>
          <button className="text-sm font-bold hover:text-red-500 transition-colors">View All News</button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl bg-[#121212] border border-white/5 hover:border-white/20 transition-colors cursor-pointer flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-bold tracking-wider text-red-500 uppercase">{item.category}</span>
                <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
              </div>
              
              <h3 className="text-xl font-display font-bold mb-6 group-hover:text-red-400 transition-colors mt-auto">{item.title}</h3>
              
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
