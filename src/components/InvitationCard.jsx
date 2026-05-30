import React from 'react';
import { TempleBorder, LotusMotif, ThoranamGarland } from '../utils/vectors';

export default function InvitationCard() {


  // Dynamically draw the invitation on Canvas and download it as PNG
  const downloadAsImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 1200; // Increased height
    const ctx = canvas.getContext('2d');

    // 1. Draw Silk Brocade Gradient Background
    const grad = ctx.createLinearGradient(0, 0, 800, 1200);
    grad.addColorStop(0, '#7f0000'); // Maroon red
    grad.addColorStop(0.5, '#3a0000'); // Deep dark red
    grad.addColorStop(1, '#7f0000');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 800, 1200);

    // 2. Draw Subtle Concentric Mandala Watermarks
    ctx.strokeStyle = 'rgba(251, 192, 45, 0.08)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(400, 600, 180, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(400, 600, 280, 0, Math.PI * 2);
    ctx.stroke();

    // 3. Draw Outer Gold Border Frame
    ctx.strokeStyle = '#fbc02d';
    ctx.lineWidth = 6;
    ctx.strokeRect(25, 25, 750, 1150);

    // Inner thin border
    ctx.strokeStyle = 'rgba(251, 192, 45, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(33, 33, 734, 1134);

    // 4. Draw Corner Accents
    ctx.fillStyle = '#f57f17';
    // Top-Left Corner
    ctx.fillRect(25, 25, 40, 6);
    ctx.fillRect(25, 25, 6, 40);
    // Top-Right Corner
    ctx.fillRect(735, 25, 40, 6);
    ctx.fillRect(769, 25, 6, 40);
    // Bottom-Left Corner
    ctx.fillRect(25, 1169, 40, 6);
    ctx.fillRect(25, 1135, 6, 40);
    // Bottom-Right Corner
    ctx.fillRect(735, 1169, 40, 6);
    ctx.fillRect(769, 1135, 6, 40);

    // 5. Draw Repeating Temple Gopuram Border Along Top & Bottom
    ctx.fillStyle = '#fbc02d';
    ctx.beginPath();
    for (let x = 40; x <= 740; x += 20) {
      // Top border
      ctx.moveTo(x, 55);
      ctx.lineTo(x + 10, 42);
      ctx.lineTo(x + 20, 55);
      // Bottom border
      ctx.moveTo(x, 1145);
      ctx.lineTo(x + 10, 1158);
      ctx.lineTo(x + 20, 1145);
    }
    ctx.fill();

    // 6. Draw Lotus Motif in Top Center
    ctx.strokeStyle = '#d32f2f';
    ctx.lineWidth = 2.5;
    ctx.fillStyle = 'rgba(211, 47, 47, 0.15)';
    
    // Draw Center Petal
    ctx.beginPath();
    ctx.moveTo(400, 80);
    ctx.bezierCurveTo(385, 105, 385, 135, 400, 150);
    ctx.bezierCurveTo(415, 135, 415, 105, 400, 80);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw Side Left Petal
    ctx.beginPath();
    ctx.moveTo(400, 95);
    ctx.bezierCurveTo(370, 110, 365, 135, 390, 148);
    ctx.stroke();

    // Draw Side Right Petal
    ctx.beginPath();
    ctx.moveTo(400, 95);
    ctx.bezierCurveTo(430, 110, 435, 135, 410, 148);
    ctx.stroke();

    // 7. Write Texts with Custom Centered Styles
    ctx.textAlign = 'center';
    
    // Invocation
    ctx.fillStyle = '#ff8a80';
    ctx.font = 'bold 15px Georgia, serif';
    ctx.fillText('ॐ Sri Varahi Amman Thunai ॐ', 400, 190);

    // Title
    ctx.fillStyle = '#fff8f8';
    ctx.font = 'bold 44px Georgia, serif';
    ctx.fillText('Griha Pravesam', 400, 250);

    // Blessing Quote
    ctx.fillStyle = '#ffebee';
    ctx.font = 'italic 16px Arial, sans-serif';
    ctx.fillText('"With the divine blessings of our ancestors and almighty, we cordially"', 400, 305);
    ctx.fillText('invite you to join us in celebrating the house warming ceremony', 400, 328);
    ctx.fillText('of our new ancestral home.', 400, 351);

    // Welcoming you to
    ctx.fillStyle = '#fbc02d';
    ctx.font = 'bold 13px Arial, sans-serif';
    ctx.fillText('WELCOMING YOU TO', 400, 410);

    // Sri Sudalee
    ctx.fillStyle = '#fff8f8';
    ctx.font = 'bold 36px Georgia, serif';
    ctx.fillText('" SRI SUDALEE "', 400, 460);

    // Draw Event Details Box
    ctx.strokeStyle = 'rgba(251, 192, 45, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(100, 505, 600, 285); // Increased height to fit address

    ctx.fillStyle = '#fbc02d';
    ctx.font = 'bold 16px Georgia, serif';
    ctx.fillText('🗓️ DATE & TIME', 250, 540);
    ctx.fillText('🪔 MUHURTHAM', 550, 540);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px Arial, sans-serif';
    ctx.fillText('Sunday, June 7, 2026', 250, 570);
    ctx.fillText('7:30 AM – 8:30 AM', 550, 570);

    ctx.fillStyle = '#ffebee';
    ctx.font = '13px Arial, sans-serif';
    ctx.fillText('Tamil Month: Vaikasi 24', 250, 595);
    ctx.fillText('Morning Valarpirai', 550, 595);

    // Feast timings
    ctx.fillStyle = '#fbc02d';
    ctx.font = 'bold 16px Georgia, serif';
    ctx.fillText('🍛 FEAST TIMINGS', 400, 642);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px Arial, sans-serif';
    ctx.fillText('Sumptuous Traditional South Indian Feast (Lunch)', 400, 667);
    ctx.fillStyle = '#ffebee';
    ctx.font = '13px Arial, sans-serif';
    ctx.fillText('11:30 AM onwards at the Muttram Courtyard', 400, 687);

    // Venue Address on canvas
    ctx.fillStyle = '#fbc02d';
    ctx.font = 'bold 16px Georgia, serif';
    ctx.fillText('📍 VENUE ADDRESS', 400, 730);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px Arial, sans-serif';
    ctx.fillText('Madakottan ECR, Ramanathapuram', 400, 755);
    ctx.fillStyle = '#ffebee';
    ctx.font = '13px Arial, sans-serif';
    ctx.fillText('Rameswaram – Madurai Main Road (Behind Inji Tea Shop) – 623503', 400, 775);

    // Host Header (Shifted down due to larger details box)
    ctx.fillStyle = '#fbc02d';
    ctx.font = 'bold 13px Georgia, serif';
    ctx.fillText('CORDIALLY INVITED BY', 400, 835);

    // Row 1: Parents (Left / Right columns)
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px Arial, sans-serif';
    ctx.fillText('Dr. Mahendran G. ME, PhD', 230, 875);
    ctx.fillText('Mrs. Shyni S. L. MA, MPhil, B.Ed', 570, 875);

    ctx.fillStyle = '#fbc02d';
    ctx.font = 'bold 10px Georgia, serif';
    ctx.fillText('HoD of ECE, Syed Ammal Engineering College', 230, 895);
    ctx.fillText('HoD of English, Velumanoharan Arts & Science College', 570, 895);

    // Row 2: Sons (Left / Right columns)
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 15px Arial, sans-serif';
    ctx.fillText('Mr. Nandhu S. Mahendran B.E', 230, 945);
    ctx.fillText('Mr. Vishnu Mahendran', 570, 945);

    ctx.fillStyle = '#fbc02d';
    ctx.font = 'bold 10px Georgia, serif';
    ctx.fillText('Founder & CEO, Blunar.Co', 230, 965);

    // 8. Draw Diyas at the bottom
    const drawDiya = (dx, dy) => {
      // Flame
      ctx.fillStyle = '#ff7200';
      ctx.beginPath();
      ctx.moveTo(dx, dy - 25);
      ctx.bezierCurveTo(dx - 8, dy - 10, dx - 8, dy, dx, dy);
      ctx.bezierCurveTo(dx + 8, dy, dx + 8, dy - 10, dx, dy - 25);
      ctx.fill();

      ctx.fillStyle = '#ffc107';
      ctx.beginPath();
      ctx.moveTo(dx, dy - 20);
      ctx.bezierCurveTo(dx - 5, dy - 8, dx - 5, dy - 2, dx, dy - 2);
      ctx.bezierCurveTo(dx + 5, dy - 2, dx + 5, dy - 8, dx, dy - 20);
      ctx.fill();

      // Ceramic Saffron Body
      ctx.fillStyle = '#f57f17';
      ctx.beginPath();
      ctx.moveTo(dx - 22, dy);
      ctx.quadraticCurveTo(dx - 22, dy + 18, dx, dy + 18);
      ctx.quadraticCurveTo(dx + 22, dy + 18, dx + 22, dy);
      ctx.quadraticCurveTo(dx, dy + 8, dx - 22, dy);
      ctx.fill();

      ctx.fillStyle = '#3a0000';
      ctx.beginPath();
      ctx.ellipse(dx, dy + 2, 22, 4, 0, 0, Math.PI * 2);
      ctx.fill();
    };

    drawDiya(150, 1090);
    drawDiya(650, 1090);

    // 9. Export Canvas to PNG
    const link = document.createElement('a');
    link.download = 'Sri_Sudalee_Invitation.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <section id="invitation" className="relative min-h-screen py-24 flex items-center justify-center bg-green-darker px-4 overflow-hidden">
      {/* Silk texture overlay using CSS gradients and vector symbols */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-dark via-green-darker to-pink-dark opacity-95" />
      
      {/* Subtle traditional grid/silk brocade pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#81c784 1px, transparent 0), radial-gradient(#81c784 1px, transparent 0)`,
          backgroundSize: '32px 32px',
          backgroundPosition: '0 0, 16px 16px'
        }}
      />
      
      {/* Giant floating green mandalas in background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full border border-green-medium/10 flex items-center justify-center animate-slow-spin opacity-30 pointer-events-none">
        <div className="w-80 h-80 rounded-full border border-green-medium/15 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full border border-dashed border-green-medium/20" />
        </div>
      </div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full border border-green-medium/10 flex items-center justify-center animate-slow-spin opacity-30 pointer-events-none" style={{ animationDirection: 'reverse' }}>
        <div className="w-80 h-80 rounded-full border border-green-medium/15 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full border border-dashed border-green-medium/20" />
        </div>
      </div>

      {/* Main Container */}
      <div id="invitation-card-container" className="relative z-10 w-full max-w-2xl bg-gradient-to-b from-pink-light via-pink-soft to-pink-medium border-4 border-green-medium p-4 sm:p-12 rounded-lg shadow-2xl gold-border-glow mx-auto text-center">
        
        {/* Corner Green Accents */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-green-dark rounded-tl-sm pointer-events-none" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-green-dark rounded-tr-sm pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-green-dark rounded-bl-sm pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-green-dark rounded-br-sm pointer-events-none" />

        {/* Thoranam Garland across the top */}
        <div className="absolute top-2 left-2 right-2 overflow-hidden h-12 pointer-events-none">
          <ThoranamGarland />
        </div>

        {/* Lotus Icon / Spiritual Header */}
        <div className="mt-8 flex justify-center">
          <LotusMotif className="w-20 h-20 text-green-dark drop-shadow-md" />
        </div>

        {/* Invocation Header */}
        <p className="font-cinzel text-xs sm:text-sm text-pink-dark font-bold tracking-widest mt-4 uppercase">
          ॐ Sri Varahi Amman Thunai ॐ
        </p>
        
        <h2 className="font-cinzel text-3xl sm:text-5xl font-black text-pink-dark tracking-wide mt-3 drop-shadow-sm">
          Griha Pravesam
        </h2>
        
        <p className="font-outfit text-sm text-green-dark italic max-w-md mx-auto mt-3">
          "With the divine blessings of our ancestors and almighty, we cordially invite you to join us in celebrating the house warming ceremony of our new ancestral home."
        </p>

        {/* House Name Display */}
        <div className="my-8 py-3 border-y border-green-medium/40 max-w-sm mx-auto">
          <p className="text-xs uppercase tracking-wider text-green-dark">Welcoming you to</p>
          <h3 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-green-dark tracking-widest uppercase mt-1">
            " Sri Sudalee "
          </h3>
        </div>

        {/* Event Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 text-left bg-pink-light/50 p-4 sm:p-6 rounded-lg border border-green-medium/20">
          <div>
            <h4 className="font-cinzel font-bold text-pink-dark border-b border-green-medium/30 pb-1 mb-2 tracking-wider text-xs sm:text-sm">
              🗓️ DATE & TIME
            </h4>
            <p className="font-outfit font-semibold text-green-darker text-sm sm:text-base">
              Sunday, June 7, 2026
            </p>
            <p className="font-outfit text-xs text-green-dark mt-1">
              Tamil Month: Vaikasi 24
            </p>
          </div>

          <div>
            <h4 className="font-cinzel font-bold text-pink-dark border-b border-green-medium/30 pb-1 mb-2 tracking-wider text-xs sm:text-sm">
              🪔 MUHURTHAM
            </h4>
            <p className="font-outfit font-semibold text-green-darker text-sm sm:text-base">
              Auspicious Muhurtham: 7:30 AM – 8:30 AM
            </p>
            <p className="font-outfit text-xs text-green-dark mt-1 font-medium">
              Morning (Vaikasi Month Valarpirai)
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-cinzel font-bold text-pink-dark border-b border-green-medium/30 pb-1 mb-2 tracking-wider text-xs sm:text-sm">
              🍛 FEAST TIMINGS
            </h4>
            <p className="font-outfit font-semibold text-green-darker text-sm sm:text-base">
              Sumptuous Traditional South Indian Feast (Lunch):
            </p>
            <p className="font-outfit text-sm text-green-dark mt-0.5">
              11:30 AM onwards at the Muttram Courtyard
            </p>
          </div>

          <div className="md:col-span-2 mt-2 pt-2 border-t border-green-medium/15">
            <h4 className="font-cinzel font-bold text-pink-dark pb-1 mb-1 tracking-wider text-xs sm:text-sm">
              📍 VENUE ADDRESS
            </h4>
            <p className="font-outfit font-semibold text-green-darker text-sm sm:text-base">
              Madakottan ECR, Ramanathapuram
            </p>
            <p className="font-outfit text-xs text-green-dark mt-0.5 leading-relaxed font-medium">
              Rameswaram – Madurai Main Road (Behind Inji Tea Shop) – 623503
            </p>
          </div>
        </div>

        {/* Temple Border Trim */}
        <div className="my-6">
          <TempleBorder className="h-3 w-full text-green-dark" />
        </div>

        {/* Host Names / Family details */}
        <div className="text-center space-y-4">
          <h4 className="font-cinzel font-bold text-xs uppercase tracking-widest text-green-dark">
            Cordially Invited By
          </h4>
          
          <div className="space-y-6 border-b border-green-medium/25 pb-6">
            {/* Parents */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
              <div>
                <span className="block font-outfit text-sm sm:text-base font-bold text-green-darker">
                  Dr. Mahendran G. <span className="text-xs font-medium text-green-dark">ME, PhD</span>
                </span>
                <span className="block text-[10px] font-cinzel text-green-dark font-bold uppercase tracking-wider mt-0.5">
                  HoD of ECE, Syed Ammal Engineering College
                </span>
              </div>
              
              <div>
                <span className="block font-outfit text-sm sm:text-base font-bold text-green-darker">
                  Mrs. Shyni S. L. <span className="text-xs font-medium text-green-dark">MA, MPhil, B.Ed</span>
                </span>
                <span className="block text-[10px] font-cinzel text-green-dark font-bold uppercase tracking-wider mt-0.5">
                  HoD of English, Velumanoharan Arts & Science College
                </span>
              </div>
            </div>

            {/* Sons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto pt-4 border-t border-green-medium/10">
              <div>
                <span className="block font-outfit text-sm sm:text-base font-bold text-green-darker">
                  Mr. Nandhu S. Mahendran <span className="text-xs font-medium text-green-dark">B.E</span>
                </span>
                <span className="block text-[10px] font-cinzel text-green-dark font-bold uppercase tracking-wider mt-0.5">
                  Founder & CEO, Blunar.Co
                </span>
              </div>
              
              <div>
                <span className="block font-outfit text-sm sm:text-base font-bold text-green-darker pt-1">
                  Mr. Vishnu Mahendran
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Download Invitation Button */}
        <div className="mt-8 flex justify-center pointer-events-auto">
          <button
            onClick={downloadAsImage}
            className="shine-effect px-6 py-3.5 sm:px-8 bg-gradient-to-br from-green-light via-green-medium to-green-dark text-green-darker border border-green-light font-cinzel font-black tracking-widest text-[10px] sm:text-xs rounded shadow-lg hover:shadow-gold-glow cursor-pointer transition-all duration-300 transform hover:scale-105 active:scale-95 uppercase flex items-center gap-2"
          >
            📥 Download Invitation Card (Image)
          </button>
        </div>

        {/* Dual Animated Diya oil lamps at the bottom */}
        <div className="flex justify-between items-end mt-8 px-4">
          {/* Diya Left */}
          <div className="flex flex-col items-center">
            <div className="relative w-12 h-12 flex items-center justify-center">
              {/* Flame */}
              <div className="diya-flame absolute -top-5 w-4 h-8 bg-gradient-to-t from-glow-dark via-glow to-gold-goldLight rounded-full" />
              {/* Ceramic Green Diya body */}
              <svg className="w-12 h-8 text-green-dark" viewBox="0 0 40 20" fill="currentColor">
                <path d="M 0 5 C 10 20 30 20 40 5 C 38 15 2 15 0 5 Z" />
                <ellipse cx="20" cy="5" rx="20" ry="4" fill="#2e7d32" />
                <circle cx="20" cy="5" r="2" fill="#0c2b11" />
              </svg>
            </div>
            <span className="text-[10px] font-cinzel text-green-dark uppercase mt-1">Anbe Sivam</span>
          </div>

          {/* Diya Right */}
          <div className="flex flex-col items-center">
            <div className="relative w-12 h-12 flex items-center justify-center">
              {/* Flame */}
              <div className="diya-flame absolute -top-5 w-4 h-8 bg-gradient-to-t from-glow-dark via-glow to-gold-goldLight rounded-full" />
              {/* Ceramic Green Diya body */}
              <svg className="w-12 h-8 text-green-dark" viewBox="0 0 40 20" fill="currentColor">
                <path d="M 0 5 C 10 20 30 20 40 5 C 38 15 2 15 0 5 Z" />
                <ellipse cx="20" cy="5" rx="20" ry="4" fill="#2e7d32" />
                <circle cx="20" cy="5" r="2" fill="#0c2b11" />
              </svg>
            </div>
            <span className="text-[10px] font-cinzel text-green-dark uppercase mt-1">Vaazhga Valamudan</span>
          </div>
        </div>

      </div>
    </section>
  );
}
