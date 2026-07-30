import { Terminal } from 'lucide-react';

export function Footer() {
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
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <p>© {new Date().getFullYear()} St. Ann's CSE Department. All rights reserved.</p>
            <span className="hidden md:inline text-white/20">|</span>
            <p className="text-gray-400">Developed by <span className="text-red-500 font-medium">Akash Sankarasetty(skyy)</span></p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
