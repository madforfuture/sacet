import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { HOD } from './components/HOD';
import { Faculty } from './components/Faculty';
import { Courses } from './components/Courses';
import { Outcomes } from './components/Outcomes';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LabDetails } from './components/LabDetails';

export default function App() {
  const [view, setView] = useState<'home' | 'labs' | 'faculty' | 'gallery'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#labs') {
        setView('labs');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#faculty') {
        setView('faculty');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '#gallery') {
        setView('gallery');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check hash on initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Smooth scroll helper when switching from labs back to a home section
  useEffect(() => {
    if (view === 'home' && window.location.hash && window.location.hash !== '#labs' && window.location.hash !== '#faculty' && window.location.hash !== '#gallery') {
      const id = window.location.hash.substring(1);
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [view]);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-red-600 selection:text-white">
      <Navbar currentView={view} />
      <main>
        {view === 'labs' ? (
          <LabDetails />
        ) : view === 'faculty' ? (
          <Faculty />
        ) : view === 'gallery' ? (
          <Gallery />
        ) : (
          <>
            <Hero />
            <About />
            <HOD />
            {/* Faculty section is now a separate page */}
            <Outcomes />
            <Courses />
            {/* Gallery section is now a separate page */}
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
