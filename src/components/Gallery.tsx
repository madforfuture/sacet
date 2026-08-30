import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Maximize2, ChevronLeft, ChevronRight, X } from 'lucide-react';

const galleryImages: string[] = [
  'https://i.postimg.cc/R0Gxmwrc/DSC-5223.jpg',
  'https://i.postimg.cc/FKGXv0tL/DSC-5244.jpg',
  'https://i.postimg.cc/mrVW47xY/DSC-5370.jpg',
  'https://i.postimg.cc/Dz53h1VJ/DSC-5446.jpg'
];

export function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1;
    });
  };

  const handleNext = () => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1;
    });
  };

  return (
    <div className="pt-24 pb-24 bg-[#050505] min-h-screen">
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
            <span className="text-xs font-mono text-red-500 font-semibold tracking-widest uppercase">Visual Tour</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight">
            Our <span className="text-red-600">Campus Gallery</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            Take a visual tour of our state-of-the-art facilities, modern campus classrooms, and active laboratory environments.
          </p>
        </div>

        {/* Elegant Image Grid (Only Images, no names or descriptions) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryImages.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setActiveImageIndex(i)}
              className="relative group aspect-video rounded-3xl overflow-hidden bg-[#0c0c0c] border border-white/5 hover:border-red-600/35 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-red-950/20"
            >
              {/* Overlaid Hover Tint */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-500 z-10" />
              
              {/* Zooming Image */}
              <img 
                src={src} 
                alt={`Campus Gallery ${i + 1}`} 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Hover Trigger Lightbox Indicator */}
              <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="p-4 bg-red-600/95 rounded-full text-white shadow-xl shadow-red-600/35 scale-90 group-hover:scale-100 transition-all duration-300">
                  <Maximize2 className="w-6 h-6" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox / Modal Carousel (Only active image and essential controllers, no titles or labels) */}
        <AnimatePresence>
          {activeImageIndex !== null && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-6 backdrop-blur-md"
            >
              {/* Close Bar */}
              <div className="flex justify-end items-center z-10">
                <button 
                  onClick={() => setActiveImageIndex(null)}
                  className="p-3 bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all shadow-lg"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Core Image Area & Navigation Controls */}
              <div className="relative flex-1 flex items-center justify-center max-w-5xl mx-auto w-full py-4">
                {/* Previous Button */}
                <button 
                  onClick={handlePrev}
                  className="absolute left-4 z-20 p-4 bg-white/5 hover:bg-red-600 hover:text-white text-gray-300 rounded-full border border-white/10 transition-all shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Active Lightbox Image */}
                <motion.div 
                  key={activeImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="relative max-h-[80vh] w-full flex items-center justify-center"
                >
                  <img 
                    src={galleryImages[activeImageIndex]} 
                    alt={`Enlarged view ${activeImageIndex + 1}`} 
                    className="max-h-[80vh] max-w-full rounded-2xl object-contain border border-white/10 shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Next Button */}
                <button 
                  onClick={handleNext}
                  className="absolute right-4 z-20 p-4 bg-white/5 hover:bg-red-600 hover:text-white text-gray-300 rounded-full border border-white/10 transition-all shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Spacer/Empty bottom bar to maintain layout balance */}
              <div className="h-6" />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
