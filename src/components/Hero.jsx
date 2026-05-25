import React from 'react';

export default function Hero({ onEnterMuttram }) {
  const handleEnter = () => {
    // Ring the temple bell welcome chime
    if (onEnterMuttram) {
      onEnterMuttram();
    }
    
    // Scroll down to the invitation section smoothly
    const invSection = document.getElementById('invitation');
    if (invSection) {
      invSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative w-screen h-screen overflow-hidden flex flex-col justify-between items-center text-center p-6 sm:p-12 text-white bg-gradient-to-b from-[#e65c00] via-[#bf360c] to-[#26140a]"
    >
      
      {/* 1. SUNSET SUN DISK & GLOW (From the Photo) */}
      <div 
        className="absolute w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-white shadow-[0_0_50px_rgba(255,255,255,0.8),_0_0_100px_rgba(255,163,26,0.6)] pointer-events-none"
        style={{
          top: '20%',
          left: '20%',
        }}
      />

      {/* 2. SVG HOUSE & FENCE SILHOUETTE (From the Photo) */}
      <div className="absolute bottom-0 left-0 w-full h-[32vh] pointer-events-none select-none z-10 overflow-hidden">
        <svg 
          className="w-full h-full text-[#140a05] fill-current" 
          viewBox="0 0 1000 300" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Back trees/fields silhouette */}
          <path d="M 0 250 Q 150 242 300 254 Q 450 258 600 247 Q 750 253 900 244 Q 950 242 1000 248 L 1000 300 L 0 300 Z" opacity="0.4" />
          
          {/* The main house profile */}
          {/* Main horizontal house body */}
          <rect x="70" y="180" width="790" height="75" />
          {/* Left sloped roof (hipped) */}
          <path d="M 60 180 L 150 120 L 760 120 L 850 180 Z" />
          {/* Tiled roof ridges representation */}
          <line x1="150" y1="120" x2="60" y2="180" stroke="#000000" strokeWidth="2" opacity="0.5" />
          <line x1="760" y1="120" x2="850" y2="180" stroke="#000000" strokeWidth="2" opacity="0.5" />

          {/* Stepped secondary roof on the right side */}
          <rect x="730" y="195" width="220" height="60" />
          <path d="M 720 195 L 760 145 L 910 145 L 950 195 Z" />
          <line x1="760" y1="145" x2="720" y2="195" stroke="#000000" strokeWidth="2" opacity="0.5" />
          <line x1="910" y1="145" x2="950" y2="195" stroke="#000000" strokeWidth="2" opacity="0.5" />

          {/* Pillars support (cutout style verandah porch) */}
          {/* Verandah floor deck */}
          <rect x="70" y="248" width="880" height="10" fill="#0a0502" />
          {/* Pillars columns */}
          {[90, 160, 230, 300, 370, 440, 510, 580, 650, 720, 790, 860, 930].map((cx, idx) => (
            <rect key={idx} x={cx} y="180" width="8" height="68" fill="#140a05" />
          ))}

          {/* Foreground wire fence posts */}
          {[40, 180, 320, 460, 600, 740, 880, 960].map((fx, idx) => (
            <g key={idx}>
              {/* Post shaft */}
              <rect x={fx} y="225" width="6" height="75" fill="#080402" />
              {/* Post top cap */}
              <polygon points={`${fx-3},225 ${fx+9},225 ${fx+3},220`} fill="#080402" />
            </g>
          ))}

          {/* Horizontal fence wires */}
          <line x1="0" y1="240" x2="1000" y2="240" stroke="#080402" strokeWidth="1" />
          <line x1="0" y1="260" x2="1000" y2="260" stroke="#080402" strokeWidth="1" />
        </svg>
      </div>

      {/* 3. CO-ORDINATED TEXT OVERLAYS */}
      <div className="relative z-20 pt-12 animate-fade-in select-none">
        <p className="font-cinzel text-xs sm:text-sm text-gold font-black tracking-widest uppercase">
          Auspicious Griha Pravesam
        </p>
        <div className="w-16 h-0.5 bg-gold mx-auto mt-2 opacity-80" />
      </div>

      <div className="relative z-20 space-y-6 max-w-2xl my-auto select-none">
        <h1 className="font-cinzel text-4xl sm:text-7xl font-black text-beige tracking-wide leading-none drop-shadow-lg gold-text-glow">
          House Warming<br />
          <span className="text-gold font-extrabold">Ceremony</span>
        </h1>

        <div className="py-2">
          <p className="font-outfit text-xs uppercase tracking-widest text-gold-light/95 font-medium">House Name</p>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-beige tracking-widest uppercase mt-1">
            "Sri Sudalee"
          </h2>
        </div>

        {/* Address */}
        <div className="font-outfit text-xs sm:text-sm text-beige/90 leading-relaxed max-w-md mx-auto bg-wood-dark/50 p-4 rounded border border-gold/15 backdrop-blur-sm shadow-md">
          <span className="font-cinzel text-gold text-xs font-bold tracking-wider block mb-1">📍 Ceremony Location</span>
          Madakottan ECR • Near Inji Tea Shop<br />
          Rameswaram – Madurai Main Road<br />
          Ramanathapuram – 623503
        </div>
        
        {/* Scroll CTA Button */}
        <div className="pt-4 pointer-events-auto">
          <button
            onClick={handleEnter}
            className="shine-effect px-8 py-4 bg-gradient-to-br from-gold-light via-gold to-gold-dark text-wood-dark border border-gold-light font-cinzel font-black tracking-widest text-sm rounded shadow-lg hover:shadow-gold-glow cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95 uppercase"
          >
            View Invitation 🪔
          </button>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-20 pb-6 animate-bounce text-[10px] sm:text-xs text-beige/65 tracking-wider font-cinzel select-none">
        Scroll Down to Read Invitation
      </div>

      {/* SVG Flying Birds Background Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-6 h-6 text-gold/30 fill-current"
          style={{
            top: '20%',
            left: '-10%',
            animation: 'fly-across 18s linear infinite',
            animationDelay: '1s'
          }}
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 2C10.5 4.5 7 5.5 2 6C7 7 10 9.5 12 12C14 9.5 17 7 22 6C17 5.5 13.5 4.5 12 2Z" />
          </svg>
        </div>

        <div 
          className="absolute w-5 h-5 text-gold/25 fill-current"
          style={{
            top: '32%',
            left: '-15%',
            animation: 'fly-across 22s linear infinite',
            animationDelay: '5s'
          }}
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 2C10.5 4.5 7 5.5 2 6C7 7 10 9.5 12 12C14 9.5 17 7 22 6C17 5.5 13.5 4.5 12 2Z" />
          </svg>
        </div>

        <div 
          className="absolute w-4 h-4 text-gold/20 fill-current"
          style={{
            top: '15%',
            left: '-10%',
            animation: 'fly-across 25s linear infinite',
            animationDelay: '9s'
          }}
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 2C10.5 4.5 7 5.5 2 6C7 7 10 9.5 12 12C14 9.5 17 7 22 6C17 5.5 13.5 4.5 12 2Z" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes fly-across {
          0% {
            transform: translate(0, 0) scaleX(1);
            left: -10%;
          }
          50% {
            transform: translate(300px, -40px) scaleX(1);
          }
          100% {
            transform: translate(120vw, -80px) scaleX(1);
            left: 110%;
          }
        }
      `}</style>
    </section>
  );
}
