import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Search, Cpu, Terminal, Layers, Info, Filter, LayoutGrid, Table } from 'lucide-react';

export interface Lab {
  srNo: number;
  roomNumber: string;
  name: string;
  equipment: string[];
  specs?: string;
  description: string;
  category: string;
}

export const labsData: Lab[] = [
  {
    srNo: 1,
    roomNumber: "134 & 134 A",
    name: "Mobile Application & Data Mining Lab",
    equipment: ["Desktop PCs", "Flutter", "Android Studio", "Visual Studio Code", "GCC Compiler", "Python", "Weka 3.7", "Java IDE"],
    description: "State-of-the-art workspace configured for cross-platform mobile engineering, data mining algorithms, and predictive analysis prototyping.",
    category: "Application Dev"
  },
  {
    srNo: 2,
    roomNumber: "135 & 135 A",
    name: "Full Stack Web Technologies Lab",
    equipment: ["Desktop PCs", "AngularJS", "Node.js", "MongoDB", "Visual Studio Code"],
    description: "Dedicated to building modern multi-tier web applications, RESTful backends, and handling schema-less document databases.",
    category: "Web & Backend"
  },
  {
    srNo: 3,
    roomNumber: "101 G & 101 H",
    name: "Relational Database Management Systems Lab",
    equipment: ["Desktop PCs", "Java IDE", "GCC Compiler", "Eclipse", "MySQL", "Oracle RDBMS"],
    description: "Designed for advanced relational modeling, SQL query optimization, transactional security testing, and structured object programming.",
    category: "Database & Core"
  },
  {
    srNo: 4,
    roomNumber: "101 B & C",
    name: "Systems Programming & Compiler Design Lab",
    equipment: ["Desktop PCs", "MySQL", "Oracle", "Java IDE", "Eclipse", "GCC Compiler", "Visual Studio Code", "Python"],
    description: "A dual-purpose facility serving system-level programming projects, parsing operations, and agile software development lifecycle practices.",
    category: "Database & Core"
  },
  {
    srNo: 5,
    roomNumber: "101 E & 101 F",
    name: "Artificial Intelligence & Computational Lab",
    equipment: ["Desktop PCs", "Python", "Visual Studio Code", "GCC Compiler"],
    description: "Optimized for core algorithm prototyping, AI heuristics, natural language processing scripts, and high-level computational scripting.",
    category: "AI & Scripting"
  },
  {
    srNo: 6,
    roomNumber: "023",
    name: "High-Performance Computing Center",
    equipment: ["Desktop PCs"],
    specs: "Intel Core i5-6500 CPU @ 3.20GHz, 3.19 GHz, 8GB RAM, 500GB HDD, 15\" TFT Monitor, Mechanical Keyboard",
    description: "Equipped with specialized high-speed microprocessing nodes to facilitate heavy computational experiments, data structures, and kernel administration studies.",
    category: "Infrastructure"
  }
];

export function LabDetails() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewType, setViewType] = useState<'grid' | 'table'>('grid');

  const categories = ['All', 'Application Dev', 'Web & Backend', 'Database & Core', 'AI & Scripting', 'Infrastructure'];

  const filteredLabs = labsData.filter(lab => {
    const matchesSearch = 
      lab.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.roomNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.equipment.some(item => item.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (lab.specs && lab.specs.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || lab.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <div className="mb-8">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Department Homepage
          </a>
        </div>

        {/* Page Header */}
        <div className="mb-12 border-b border-white/5 pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span className="text-xs font-mono text-red-500 font-semibold tracking-widest uppercase">Department Infrastructure</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight">
            Academic <span className="text-red-600">Laboratories</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            Explore our advanced, fully-networked computing laboratories. Outfitted with licensed software and modern computing systems, these labs drive rigorous academic sessions and innovative project development.
          </p>
        </div>

        {/* Controls Panel */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8 bg-[#0a0a0a] p-4 rounded-2xl border border-white/5">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search by Room, Software, or Equipment..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121212] border border-white/10 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* View Switcher */}
            <div className="flex items-center bg-[#121212] border border-white/10 rounded-xl p-1">
              <button 
                onClick={() => setViewType('grid')}
                className={`p-1.5 rounded-lg transition-colors ${viewType === 'grid' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewType('table')}
                className={`p-1.5 rounded-lg transition-colors ${viewType === 'table' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}
                title="Table View"
              >
                <Table className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                selectedCategory === category 
                  ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/15' 
                  : 'bg-[#0a0a0a] border-white/5 text-gray-400 hover:border-white/15 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Dynamic Content Rendering */}
        {filteredLabs.length === 0 ? (
          <div className="text-center py-16 bg-[#0a0a0a] rounded-3xl border border-white/5">
            <Terminal className="w-12 h-12 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-300">No Laboratories Found</h3>
            <p className="text-gray-500 text-sm mt-1">Try refining your search query or selecting a different category.</p>
          </div>
        ) : viewType === 'grid' ? (
          /* Grid View Layout */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLabs.map((lab, index) => (
              <motion.div
                key={lab.srNo}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative bg-[#0a0a0a] hover:bg-[#0c0c0c] border border-white/5 hover:border-red-600/20 rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 bg-white/5 text-[10px] font-mono text-gray-400 border border-white/5 rounded-full uppercase tracking-wider">
                      Room {lab.roomNumber}
                    </span>
                    <span className="text-xs font-mono text-red-500 font-semibold">
                      #0{lab.srNo}
                    </span>
                  </div>

                  {/* Lab Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors leading-tight">
                    {lab.name}
                  </h3>

                  {/* Lab Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {lab.description}
                  </p>
                </div>

                <div>
                  {/* Equipment/Specs Section */}
                  <div className="border-t border-white/5 pt-4">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <Cpu className="w-3.5 h-3.5 text-red-500" />
                      <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">Technology Stack</span>
                    </div>
                    
                    {lab.specs ? (
                      <div className="bg-[#121212] p-3 rounded-xl border border-white/5 text-[11px] font-mono text-gray-400 leading-normal">
                        <span className="text-red-500 font-semibold block mb-1 uppercase tracking-widest text-[9px]">Hardware Profile:</span>
                        {lab.specs}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-1.5">
                        {lab.equipment.map((item, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-[#121212] text-gray-300 rounded-md text-[11px] font-mono border border-white/5 hover:border-white/10 transition-colors"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Table View Layout */
          <div className="overflow-x-auto bg-[#0a0a0a] border border-white/5 rounded-3xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Sr. No</th>
                  <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Room Number</th>
                  <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Name of the Laboratory</th>
                  <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Important Equipment & Software Stack</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredLabs.map((lab) => (
                  <tr key={lab.srNo} className="hover:bg-white/[0.01] transition-colors group">
                    <td className="py-5 px-6 font-mono text-sm text-red-500 font-semibold">0{lab.srNo}</td>
                    <td className="py-5 px-6">
                      <span className="px-2.5 py-1 bg-white/5 text-xs font-mono text-gray-300 border border-white/5 rounded">
                        {lab.roomNumber}
                      </span>
                    </td>
                    <td className="py-5 px-6">
                      <div className="font-bold text-white group-hover:text-red-500 transition-colors text-sm">{lab.name}</div>
                      <div className="text-xs text-gray-500 mt-1 max-w-sm line-clamp-1">{lab.description}</div>
                    </td>
                    <td className="py-5 px-6">
                      {lab.specs ? (
                        <div className="text-xs font-mono text-gray-400 max-w-md leading-relaxed">
                          <span className="text-red-500 font-semibold text-[10px] uppercase block mb-0.5 font-sans">Hardware Spec:</span>
                          {lab.specs}
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-1">
                          {lab.equipment.map((item, idx) => (
                            <span key={idx} className="px-2 py-0.5 bg-[#121212] text-gray-300 rounded text-[11px] font-mono border border-white/5">
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
