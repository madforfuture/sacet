import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Calendar, Layers, ArrowLeft, Search, LayoutGrid, Table, GraduationCap, Filter, Users } from 'lucide-react';

const facultyData = [
  { name: "Dr P HARINI", designation: "Professor", qual: "Ph.D", level: "UG", doj: "12-07-2004" },
  { name: "Dr YEZARLA CHITTIBABU", designation: "Professor", qual: "Ph.D", level: "UG", doj: "28-06-2004" },
  { name: "Dr RATNA RAJU MUKIRI", designation: "Professor", qual: "Ph.D", level: "UG", doj: "01-12-2016" },
  { name: "Dr M. RAMESH", designation: "Professor", qual: "Ph.D", level: "UG", doj: "05-06-2023" },
  { name: "Dr AMARTHALURI THIRUPATHAIAH", designation: "Associate Professor", qual: "Ph.D", level: "UG", doj: "01-03-2005" },
  { name: "Dr PRASUNA GRANDHI", designation: "Associate Professor", qual: "Ph.D", level: "UG", doj: "14-07-2016" },
  { name: "Dr P V SUBBARAMASARMA", designation: "Associate Professor", qual: "Ph.D", level: "UG", doj: "01-07-2005" },
  { name: "Dr NAGESH BABU DASARI", designation: "Associate Professor", qual: "Ph.D", level: "UG", doj: "02-06-2008" },
  { name: "Dr SUBBARAO KATTEDA", designation: "Associate Professor", qual: "Ph.D", level: "UG", doj: "01-06-2006" },
  { name: "Dr E. SANDEEP KRUPAKAR", designation: "Associate Professor", qual: "Ph.D", level: "UG", doj: "04-07-2022" },
  { name: "Mr S AMARNATH BABU", designation: "Associate Professor", qual: "M.Tech", level: "UG", doj: "11-05-2006" },
  { name: "Mr N LAKSHMI NARAYANA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "16-07-2005" },
  { name: "Mrs MADHURI DRAKSHARAM", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "06-06-2009" },
  { name: "Mr TULASI SESHASAI", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "02-07-2012" },
  { name: "Mrs MAMIDALA ANUSHA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "01-07-2019" },
  { name: "Mrs V L N S SWAPNIKA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "22-11-2019" },
  { name: "Mrs N SULAKSHNA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "02-12-2019" },
  { name: "Mrs SINDHURA PASUPULETI", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "01-10-2021" },
  { name: "Mr SURYA KIRAN KUMAR K", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "07-10-2021" },
  { name: "Mr KUNCHALA RAMESH", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "01-02-2022" },
  { name: "Mrs Y. SMILE", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "05-06-2023" },
  { name: "Mr KARRI RAMESH BABU", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "17-01-2024" },
  { name: "Mr SHAIK JILANI", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "15-05-2024" },
  { name: "Mr K SAI KRISHNA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "02-07-2018" },
  { name: "Mr D SHYAM BABU", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "10-10-2011" },
  { name: "Mr GUNTI RAJESH", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "01-10-2021" },
  { name: "Mr BALA KRISHNA YAKKALA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "01-07-2015" },
  { name: "Mrs M. PRAVEENA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "01-03-2014" },
  { name: "Mr C.V.C. UDAY BHASKAR", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "05-06-2023" },
  { name: "Mrs M. NAGA PADMAJA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "05-06-2023" },
  { name: "Mrs SYED ARIFA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "15-07-2024" },
  { name: "Mrs DEVARAKONDA SOWMYA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "01-08-2024" },
  { name: "Ms PASUPULETI MADHURI", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "01-08-2024" },
  { name: "Mrs M. SUVARNA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "01-08-2025" },
  { name: "Ms B SIVA PAVANI", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "14-08-2025" },
  { name: "Mrs K LAVANYA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "14-08-2025" },
  { name: "Ms A LAKSHMI PRIYANKA", designation: "Assistant Professor", qual: "M.Tech", level: "UG", doj: "14-08-2025" },
  { name: "Dr G SANKAR", designation: "Associate Professor", qual: "Ph.D", level: "PG", doj: "04-07-2022" },
  { name: "Ms B CHARANI", designation: "Assistant Professor", qual: "M.Tech", level: "PG", doj: "04-07-2022" },
  { name: "Mrs A KAVYA", designation: "Assistant Professor", qual: "M.Tech", level: "PG", doj: "01-12-2020" },
  { name: "Mr P SANKARA RAO", designation: "Assistant Professor", qual: "M.Tech", level: "PG", doj: "04-07-2022" }
];

function getInitials(name: string) {
  const parts = name.replace(/^(Dr|Mr|Mrs|Ms|Prof)\.?\s+/i, '').split(' ');
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return parts[0].substring(0, 2).toUpperCase();
}

export function Faculty() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDesignation, setSelectedDesignation] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedQual, setSelectedQual] = useState('All');
  const [viewType, setViewType] = useState<'grid' | 'table'>('grid');

  const designations = ['All', 'Professor', 'Associate Professor', 'Assistant Professor'];
  const levels = ['All', 'UG', 'PG'];
  const qualifications = ['All', 'Ph.D', 'M.Tech'];

  // Filter logic
  const filteredFaculty = facultyData
    .filter(faculty => {
      const matchesSearch = 
        faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faculty.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faculty.qual.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDesignation = selectedDesignation === 'All' || faculty.designation === selectedDesignation;
      const matchesLevel = selectedLevel === 'All' || faculty.level === selectedLevel;
      const matchesQual = selectedQual === 'All' || faculty.qual === selectedQual;

      return matchesSearch && matchesDesignation && matchesLevel && matchesQual;
    });

  return (
    <div className="pt-24 pb-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb Back Link */}
        <div className="mb-8">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-red-500 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Department Homepage
          </a>
        </div>

        {/* Header Section */}
        <div className="mb-12 border-b border-white/5 pb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span className="text-xs font-mono text-red-500 font-semibold tracking-widest uppercase">Academic Experts</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight">
            Our <span className="text-red-600">Faculty Directory</span>
          </h1>
          <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
            St. Ann's Department of Computer Science and Engineering is anchored by distinguished, highly qualified academic minds. Explore our directory of esteemed professors, research mentors, and engineering educators.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="bg-[#0a0a0a] p-6 rounded-3xl border border-white/5 mb-10 space-y-6">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search faculty by name, qualification, designation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#121212] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-white focus:outline-none focus:border-red-500 transition-colors placeholder:text-gray-500"
              />
            </div>

            {/* Utility controls (Layout selection) */}
            <div className="flex flex-wrap items-center gap-4">
              {/* View Type Toggle */}
              <div className="flex items-center bg-[#121212] border border-white/10 rounded-xl p-1">
                <button 
                  onClick={() => setViewType('grid')}
                  className={`p-2 rounded-lg transition-colors ${viewType === 'grid' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}
                  title="Grid View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setViewType('table')}
                  className={`p-2 rounded-lg transition-colors ${viewType === 'table' ? 'bg-red-600 text-white' : 'text-gray-400 hover:text-white'}`}
                  title="Table View"
                >
                  <Table className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Filtering Pills Grid */}
          <div className="grid md:grid-cols-3 gap-6 pt-4 border-t border-white/5">
            {/* Filter by Designation */}
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-2">Designation</label>
              <div className="flex flex-wrap gap-1.5">
                {designations.map((desig) => (
                  <button
                    key={desig}
                    onClick={() => setSelectedDesignation(desig)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      selectedDesignation === desig 
                        ? 'bg-red-600 border-red-600 text-white' 
                        : 'bg-[#121212] border-white/5 text-gray-400 hover:border-white/15 hover:text-white'
                    }`}
                  >
                    {desig}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Level */}
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-2">Academic Program</label>
              <div className="flex flex-wrap gap-1.5">
                {levels.map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedLevel(lvl)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      selectedLevel === lvl 
                        ? 'bg-red-600 border-red-600 text-white' 
                        : 'bg-[#121212] border-white/5 text-gray-400 hover:border-white/15 hover:text-white'
                    }`}
                  >
                    {lvl === 'All' ? 'All Programs' : `${lvl} Program`}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter by Qualification */}
            <div>
              <label className="block text-[10px] font-mono uppercase tracking-wider text-gray-500 mb-2">Highest Degree</label>
              <div className="flex flex-wrap gap-1.5">
                {qualifications.map((q) => (
                  <button
                    key={q}
                    onClick={() => setSelectedQual(q)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      selectedQual === q 
                        ? 'bg-red-600 border-red-600 text-white' 
                        : 'bg-[#121212] border-white/5 text-gray-400 hover:border-white/15 hover:text-white'
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Active Filters Summary */}
        <div className="flex items-center justify-between mb-8 text-sm text-gray-400 px-2">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-red-500" />
            <span>Showing <strong className="text-white font-semibold">{filteredFaculty.length}</strong> Faculty Members</span>
          </div>
          {(selectedDesignation !== 'All' || selectedLevel !== 'All' || selectedQual !== 'All' || searchQuery !== '') && (
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedDesignation('All');
                setSelectedLevel('All');
                setSelectedQual('All');
              }}
              className="text-xs text-red-500 hover:underline font-semibold"
            >
              Clear All Filters
            </button>
          )}
        </div>

        {/* Rendering Content */}
        {filteredFaculty.length === 0 ? (
          <div className="text-center py-20 bg-[#0a0a0a] rounded-[2.5rem] border border-white/5">
            <Users className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-300">No Faculty Members Found</h3>
            <p className="text-gray-500 text-sm mt-2 max-w-sm mx-auto leading-relaxed">
              We couldn't find matches for your current filter parameters. Try adjusting your search query or reset filters.
            </p>
          </div>
        ) : viewType === 'grid' ? (
          /* Card Grid View Layout */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFaculty.map((faculty, index) => {
              const isPhD = faculty.qual.toLowerCase().includes('ph.d');
              return (
                <motion.div
                  key={faculty.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3, delay: (index % 12) * 0.04 }}
                  className="group relative p-6 rounded-3xl bg-[#0a0a0a] border border-white/5 hover:border-red-500/20 hover:bg-[#0c0c0c] transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Hover background visual glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/5 group-hover:to-transparent transition-all duration-500" />

                  <div className="relative z-10">
                    {/* Header: initials and qualification badge */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600/10 group-hover:text-red-500 group-hover:border-red-500/20 transition-all duration-300">
                        <span className="font-display font-bold text-lg tracking-wider">{getInitials(faculty.name)}</span>
                      </div>
                      {isPhD && (
                        <span className="px-2.5 py-1 bg-red-600/10 border border-red-500/20 text-red-400 font-mono text-[10px] font-bold rounded-full tracking-wider uppercase">
                          Mentor
                        </span>
                      )}
                    </div>

                    {/* Faculty Profile Info */}
                    <h3 className="text-lg font-display font-bold mb-1 leading-tight group-hover:text-red-400 transition-colors line-clamp-1" title={faculty.name}>
                      {faculty.name}
                    </h3>
                    <p className="text-xs text-red-500 font-semibold mb-5 uppercase tracking-wider">{faculty.designation}</p>

                    {/* Details Lists */}
                    <div className="space-y-2.5 border-t border-white/5 pt-4">
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <Award className="w-4 h-4 text-red-500 shrink-0" />
                        <span>Qualification: <strong className="text-white">{faculty.qual}</strong></span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <Layers className="w-4 h-4 text-red-500 shrink-0" />
                        <span>Program assigned: <strong className="text-white">{faculty.level} Course</strong></span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <Calendar className="w-4 h-4 text-red-500 shrink-0" />
                        <span>Joined SACET: <strong className="text-white">{faculty.doj}</strong></span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* Table Spreadsheet View Layout */
          <div className="overflow-x-auto bg-[#0a0a0a] border border-white/5 rounded-3xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-white/[0.02]">
                  <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Avatar</th>
                  <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Faculty Name</th>
                  <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Designation</th>
                  <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Highest Degree</th>
                  <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Academic Level</th>
                  <th className="py-4 px-6 text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">Joining Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredFaculty.map((faculty) => (
                  <tr key={faculty.name} className="hover:bg-white/[0.01] transition-colors group">
                    <td className="py-4 px-6">
                      <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-display font-bold text-xs tracking-wider group-hover:bg-red-600/10 group-hover:text-red-500 group-hover:border-red-500/20 transition-all duration-300">
                        {getInitials(faculty.name)}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-bold text-white group-hover:text-red-500 transition-colors text-sm">{faculty.name}</div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-xs font-medium text-gray-300 bg-[#121212] border border-white/5 px-2.5 py-1 rounded">
                        {faculty.designation}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-1.5">
                        <GraduationCap className="w-3.5 h-3.5 text-red-500" />
                        <span className="text-sm text-gray-300">{faculty.qual}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-xs text-gray-400">{faculty.level} Program</span>
                    </td>
                    <td className="py-4 px-6 font-mono text-xs text-gray-400">
                      {faculty.doj}
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
