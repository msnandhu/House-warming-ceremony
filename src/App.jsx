import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import InvitationCard from './components/InvitationCard';
import LocationMap from './components/LocationMap';
import AudioPlayer from './components/AudioPlayer';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [bellTriggered, setBellTriggered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const triggerBell = () => {
    setBellTriggered(true);
    setTimeout(() => setBellTriggered(false), 200);
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Invitation", id: "invitation" },
    { label: "Directions", id: "location" }
  ];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Scroll Trigger Animations for Responsive Cards
  useEffect(() => {
    // Fade Up for Invitation Card
    gsap.fromTo("#invitation-card-container", 
      { opacity: 0, y: 60, scale: 0.95 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 1.0, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#invitation",
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Fade Up for Location Card
    gsap.fromTo("#location-card-container", 
      { opacity: 0, y: 60, scale: 0.98 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 1.0, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#location",
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <div className="relative min-h-screen bg-beige-light text-wood-dark font-outfit antialiased selection:bg-gold/30">
      
      {/* 1. FLOATING premium header navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-wood-dark/95 md:bg-wood-dark/90 backdrop-blur-md border-b border-gold/25 py-4 px-4 sm:px-6 flex justify-between items-center shadow-lg">
        <div 
          onClick={() => handleScrollTo('hero')}
          className="font-cinzel text-base sm:text-xl font-bold tracking-widest text-gold-light hover:text-gold cursor-pointer transition-colors duration-300 flex items-center gap-2 select-none"
        >
          🪔 SRI SUDALEE
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className="font-cinzel text-xs font-bold tracking-wider text-beige/85 hover:text-gold transition-colors duration-300 cursor-pointer uppercase py-1 border-b border-transparent hover:border-gold/60"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburguer Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gold hover:text-gold-light cursor-pointer p-1"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-wood-dark/95 backdrop-blur-md flex flex-col justify-center items-center gap-8 md:hidden animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className="font-cinzel text-lg font-bold tracking-widest text-beige hover:text-gold transition-colors duration-300 uppercase cursor-pointer py-2 px-6 w-full text-center"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      {/* 2. SCROLLABLE LAYERS (Normal stacking flow) */}
      <main className="relative">
        <Hero onEnterMuttram={triggerBell} />
        
        {/* Invitation card section with ID for animations */}
        <div id="invitation">
          <InvitationCard />
        </div>

        {/* Location map section with ID for animations */}
        <div id="location">
          <LocationMap />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-wood-dark text-beige/40 text-center py-8 text-xs font-outfit border-t border-gold/15 relative z-20">
        <p>© 2026 Sri Sudalee Family. All Rights Reserved.</p>
        <p className="font-cinzel text-gold/30 text-[10px] tracking-widest uppercase mt-1">Auspicious Griha Pravesham Ceremony</p>
        <p className="text-[10px] text-beige/35 hover:text-gold-light transition-colors duration-300 mt-2">
          Made by <span className="font-semibold tracking-wider font-cinzel">Blunar.co</span>
        </p>
      </footer>

      {/* 3. BACKGROUND AUDIO & INTERACTIVE BELL CONTROLLER */}
      <AudioPlayer isBellTriggered={bellTriggered} />
    </div>
  );
}
