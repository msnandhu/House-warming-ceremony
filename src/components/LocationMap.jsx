import React from 'react';
import { Compass, MapPin, Navigation } from 'lucide-react';

export default function LocationMap() {
  const mapQueryUrl = "https://maps.apple/p/zojTN~vZ2Q8_B2";

  return (
    <section id="location" className="relative min-h-screen py-24 bg-pink-soft text-green-darker px-4 overflow-hidden">
      {/* Background kolam texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#81c784 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-cinzel text-xs sm:text-sm text-green-dark tracking-widest uppercase font-bold">
            Venue & Directions
          </p>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-pink-dark tracking-wide mt-2">
            Location Guide
          </h2>
          <div className="w-24 h-1 bg-green-medium mx-auto mt-4 rounded-full shadow-gold-glow" />
        </div>

        {/* Content Layout */}
        <div id="location-card-container" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-pink-light border border-green-medium/30 rounded-lg p-4 sm:p-12 shadow-xl hover:shadow-gold-glow transition-shadow duration-500">
          
          {/* Compass & Vector Address */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              {/* Rotating Compass Graphic */}
              <div className="relative w-24 h-24 flex items-center justify-center bg-gradient-to-br from-green-light via-green-medium to-green-dark rounded-full shadow-gold-glow border-2 border-pink-light animate-slow-spin">
                <Compass className="w-12 h-12 text-green-darker" strokeWidth={1.5} />
                <div className="absolute top-1 font-cinzel text-[10px] font-black text-green-darker select-none">N</div>
                <div className="absolute bottom-1 font-cinzel text-[10px] font-black text-green-darker select-none">S</div>
                <div className="absolute left-1 font-cinzel text-[10px] font-black text-green-darker select-none">W</div>
                <div className="absolute right-1 font-cinzel text-[10px] font-black text-green-darker select-none">E</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-cinzel text-2xl font-bold text-pink-dark">
                Sri Sudalee
              </h3>
              
              <div className="flex items-start justify-center lg:justify-start gap-3">
                <MapPin className="w-5 h-5 text-pink-dark mt-1 shrink-0" />
                <p className="font-outfit text-sm sm:text-base text-green-dark leading-relaxed">
                  Madakottan ECR<br />
                  Rameswaram – Madurai Main Road<br />
                  Ramanathapuram – 623503
                </p>
              </div>

              <div className="p-4 bg-pink-soft/20 border border-pink-medium/20 rounded-lg max-w-sm mx-auto lg:mx-0">
                <span className="font-cinzel text-xs font-bold text-pink-dark uppercase tracking-wider block mb-1">
                  ⭐ Prominent Landmark
                </span>
                <p className="font-outfit text-xs sm:text-sm text-green-darker">
                  Right behind the popular <span className="font-semibold text-pink-dark">"Inji Tea Shop"</span>. Approximately 100 meters off the main highway.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={mapQueryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shine-effect inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-green-light via-green-medium to-green-dark text-green-darker font-cinzel font-bold tracking-wider text-sm rounded shadow-md hover:shadow-gold-glow transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <Navigation className="w-4 h-4 fill-current" />
                Navigate to Home
              </a>
            </div>
          </div>

          {/* Interactive Vector Map Schematic */}
          <div className="lg:col-span-7 h-80 w-full bg-green-darker rounded-lg border border-green-medium/30 p-4 relative overflow-hidden flex flex-col justify-between shadow-inner">
            {/* Grid layout decoration */}
            <div className="absolute inset-0 opacity-10" 
              style={{
                backgroundImage: 'linear-gradient(#fff0f3 1px, transparent 1px), linear-gradient(90deg, #fff0f3 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}
            />
            
            {/* Compass rose watermark */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 border border-green-medium/10 rounded-full flex items-center justify-center pointer-events-none">
              <div className="w-36 h-36 border border-green-medium/5 rounded-full" />
            </div>

            <div className="relative z-10 flex justify-between items-start">
              <span className="text-[10px] font-cinzel font-bold text-green-medium tracking-widest uppercase bg-green-dark/60 px-2 py-0.5 rounded border border-green-medium/20">
                Route Map Schematic
              </span>
              <span className="text-[9px] font-outfit text-pink-light/50 italic">
                Ramanathapuram Bypass
              </span>
            </div>

            {/* Custom SVG Roadmap */}
            <svg className="absolute inset-0 w-full h-full p-8" viewBox="0 0 100 100" fill="none" stroke="currentColor">
              {/* ECR highway road lines */}
              <path d="M -10 30 C 30 30 70 45 110 45" stroke="#3a0000" strokeWidth="12" strokeLinecap="round" />
              <path d="M -10 30 C 30 30 70 45 110 45" stroke="#fbc02d" strokeWidth="0.5" strokeDasharray="3 3" />
              
              {/* Highway Label */}
              <text x="15" y="24" fill="#fbc02d" fontSize="3" fontFamily="Cinzel" letterSpacing="0.5">Rameswaram - Madurai Road (ECR)</text>

              {/* Side Road to House */}
              <path d="M 60 41 L 60 75 L 75 75" stroke="#3a0000" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Inji Tea Shop Landmark Node */}
              <g transform="translate(53, 35)">
                <circle cx="0" cy="0" r="4" fill="#d32f2f" stroke="#fbc02d" strokeWidth="1" />
                <text x="6" y="1" fill="#fff8f8" fontSize="3" fontFamily="Outfit" fontWeight="bold">Inji Tea Shop</text>
                <text x="6" y="4" fill="#fbc02d" fontSize="2" fontFamily="Outfit">Landmark</text>
              </g>

              {/* Sri Sudalee House Node */}
              <g transform="translate(75, 75)">
                {/* Glowing ring */}
                <circle cx="0" cy="0" r="8" fill="none" stroke="#fbc02d" strokeWidth="0.5" className="animate-pulse" />
                {/* House pin */}
                <circle cx="0" cy="0" r="4" fill="#fbc02d" stroke="#d32f2f" strokeWidth="1.5" />
                <path d="M -2 -1 L 0 -3 L 2 -1 L 2 2 L -2 2 Z" fill="#d32f2f" />
                <rect x="-1" y="-1" width="2" height="3" fill="#fbc02d" />
                <text x="-12" y="9" fill="#fbc02d" fontSize="4.5" fontFamily="Cinzel" fontWeight="bold">SRI SUDALEE</text>
              </g>

              {/* Direction Indicator Arrow */}
              <path d="M 58 45 L 58 60" stroke="#fff8f8" strokeWidth="0.5" markerEnd="url(#arrow)" />
              
              {/* SVG marker definitions */}
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#fff8f8" />
                </marker>
              </defs>
            </svg>

            {/* Note text inside map */}
            <div className="relative z-10 text-left bg-green-dark/50 border border-green-medium/15 p-2 rounded max-w-xs text-[10px] text-pink-light/95 leading-relaxed font-outfit mt-auto">
              💡 <span className="font-semibold text-green-medium">Travel Note:</span> From Ramanathapuram town, head east towards Rameswaram. Madakottan is 3km from the town center. Look for Inji Tea Shop on your right.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
