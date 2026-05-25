import React from 'react';

// Elegant Gold Temple Border SVG pattern
export const TempleBorder = ({ className = "h-4 w-full text-gold" }) => (
  <svg className={className} viewBox="0 0 100 10" preserveAspectRatio="none" fill="currentColor">
    <path d="M 0 10 L 100 10 L 100 8 L 98 6 L 96 8 L 94 6 L 92 8 L 90 6 L 88 8 L 86 6 L 84 8 L 82 6 L 80 8 L 78 6 L 76 8 L 74 6 L 72 8 L 70 6 L 68 8 L 66 6 L 64 8 L 62 6 L 60 8 L 58 6 L 56 8 L 54 6 L 52 8 L 50 6 L 48 8 L 46 6 L 44 8 L 42 6 L 40 8 L 38 6 L 36 8 L 34 6 L 32 8 L 30 6 L 28 8 L 26 6 L 24 8 L 22 6 L 20 8 L 18 6 L 16 8 L 14 6 L 12 8 L 10 6 L 8 8 L 6 6 L 4 8 L 2 6 L 0 8 Z" />
    <rect x="0" y="8" width="100" height="2" fill="currentColor" opacity="0.8" />
  </svg>
);

// Traditional Gold Lotus Motif
export const LotusMotif = ({ className = "w-16 h-16 text-gold" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Center petal */}
    <path d="M 50 20 C 40 40 40 70 50 85 C 60 70 60 40 50 20 Z" fill="currentColor" fillOpacity="0.15" />
    {/* Inner Left petal */}
    <path d="M 50 35 C 30 45 25 70 45 82 C 40 70 43 55 50 35 Z" fill="currentColor" fillOpacity="0.1" />
    {/* Inner Right petal */}
    <path d="M 50 35 C 70 45 75 70 55 82 C 60 70 57 55 50 35 Z" fill="currentColor" fillOpacity="0.1" />
    {/* Outer Left petal */}
    <path d="M 45 50 C 15 55 10 75 35 83 C 25 73 35 60 45 50 Z" fill="currentColor" fillOpacity="0.05" />
    {/* Outer Right petal */}
    <path d="M 55 50 C 85 55 90 75 65 83 C 75 73 65 60 55 50 Z" fill="currentColor" fillOpacity="0.05" />
    {/* Base Leaves/Lotus stand */}
    <path d="M 30 85 C 40 92 60 92 70 85 C 60 88 40 88 30 85 Z" fill="currentColor" />
    <path d="M 25 88 C 45 98 55 98 75 88 C 55 92 45 92 25 88 Z" fill="currentColor" opacity="0.7" />
  </svg>
);

// South Indian chalk art Kolam mandala design
export const KolamDesign = ({ className = "w-32 h-32 text-gold/60" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Outer boundary circles */}
    <circle cx="50" cy="50" r="46" strokeDasharray="3 3" opacity="0.6" />
    <circle cx="50" cy="50" r="42" opacity="0.8" />
    <circle cx="50" cy="50" r="30" />
    
    {/* Central Dot */}
    <circle cx="50" cy="50" r="2" fill="currentColor" />
    
    {/* Infinite loop curves (Sikku Kolam style) */}
    {/* Diagonal curves */}
    <path d="M 50 8 C 55 25 75 25 80 50 C 75 75 55 75 50 92 C 45 75 25 75 20 50 C 25 25 45 25 50 8 Z" />
    <path d="M 8 50 C 25 55 25 75 50 80 C 75 75 75 55 92 50 C 75 45 75 25 50 20 C 25 25 25 45 8 50 Z" />
    
    {/* Inner decorative petals */}
    <path d="M 50 20 C 40 35 40 45 50 50 C 60 45 60 35 50 20 Z" />
    <path d="M 50 80 C 40 65 40 55 50 50 C 60 55 60 65 50 80 Z" />
    <path d="M 20 50 C 35 40 45 40 50 50 C 45 60 35 60 20 50 Z" />
    <path d="M 80 50 C 65 40 55 40 50 50 C 55 60 65 60 80 50 Z" />
    
    {/* Outer leaf accents */}
    <path d="M 50 8 Q 50 2 55 5 Q 50 8 45 5 Z" fill="currentColor" />
    <path d="M 50 92 Q 50 98 55 95 Q 50 92 45 95 Z" fill="currentColor" />
    <path d="M 8 50 Q 2 50 5 55 Q 8 50 5 45 L 8 50 Z" fill="currentColor" />
    <path d="M 92 50 Q 98 50 95 55 Q 92 50 95 45 L 92 50 Z" fill="currentColor" />
  </svg>
);

// Traditional Mango Leaf & Marigold Flower hanging garland (Thoranam)
export const ThoranamGarland = ({ className = "w-full text-gold" }) => {
  // A SVG garland containing green mango leaves and orange marigolds
  return (
    <svg className={className} viewBox="0 0 400 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      {/* Golden hanging thread */}
      <path d="M 0 5 Q 100 20 200 5 Q 300 20 400 5" stroke="#d4af37" strokeWidth="2.5" />
      
      {/* Hanging Leaf-Marigold units */}
      {[25, 75, 125, 175, 225, 275, 325, 375].map((x, index) => {
        // Adjust vertical coordinate according to the string curve: Q formula y = a*x^2 + b*x + c
        // String curve drops down to about 15px in the center of the curves
        const xInSegment = x % 200;
        const curveOffset = 5 + (15 * (1 - Math.pow((xInSegment - 100) / 100, 2)));
        const y = curveOffset;
        
        return (
          <g key={index} transform={`translate(${x}, ${y})`}>
            {/* Thread holding the leaf */}
            <line x1="0" y1="0" x2="0" y2="10" stroke="#d4af37" strokeWidth="1.5" />
            
            {/* Marigold flowers (orange/yellow circles) */}
            <circle cx="0" cy="11" r="5" fill="#ff7200" />
            <circle cx="0" cy="11" r="3" fill="#ffb355" />
            
            <circle cx="0" cy="18" r="4" fill="#ff9e22" />
            
            {/* Green Mango Leaf */}
            <path 
              d="M -3 21 C -6 28 -5 36 0 43 C 5 36 6 28 3 21 Z" 
              fill="#2e7d32" 
              stroke="#1b5e20"
              strokeWidth="0.5"
            />
            {/* Leaf Midrib */}
            <line x1="0" y1="21" x2="0" y2="40" stroke="#1b5e20" strokeWidth="0.5" opacity="0.6" />
          </g>
        );
      })}
    </svg>
  );
};
