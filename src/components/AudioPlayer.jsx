import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Bell } from 'lucide-react';

export default function AudioPlayer({ isBellTriggered, onBellPlay }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef(null);
  const bgAudioRef = useRef(null);

  // Background Flute/Nadaswaram Instrumental Music
  // We use a high quality traditional Indian flute/sitar instrumental track
  const bgMusicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"; // Stable fallback track
  // Alternative high quality traditional ambient track
  const traditionalUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"; 

  useEffect(() => {
    // Create background audio element - loading "Celebration of Varisu" track
    bgAudioRef.current = new Audio("https://pub-c06830501a61476cb3c683b52a55928d.r2.dev/celebration-of-varisu.mp3");
    bgAudioRef.current.loop = true;
    bgAudioRef.current.volume = 0.45;

    // Handle audio error gracefully by falling back to standard South Indian flute instrumental
    bgAudioRef.current.onerror = () => {
      bgAudioRef.current.src = "https://pub-c06830501a61476cb3c683b52a55928d.r2.dev/south-indian-flute.mp3";
    };

    return () => {
      if (bgAudioRef.current) {
        bgAudioRef.current.pause();
      }
    };
  }, []);

  // Listen for parent-triggered bell chimes (e.g. entering through the front door)
  useEffect(() => {
    if (isBellTriggered) {
      ringTempleBell();
    }
  }, [isBellTriggered]);

  const toggleMusic = () => {
    if (!bgAudioRef.current) return;

    if (isPlaying) {
      bgAudioRef.current.pause();
      setIsPlaying(false);
    } else {
      bgAudioRef.current.play().catch(e => {
        console.log("Audio play blocked by browser. Requires interaction.", e);
      });
      setIsPlaying(true);
      
      // Also ring the bell as a welcoming chime
      ringTempleBell();
    }
  };

  // Synthesize Temple Bell using Web Audio API
  // This simulates the actual frequency spectrum of a traditional South Indian brass bell
  const ringTempleBell = () => {
    try {
      // Initialize AudioContext if not already done
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const now = ctx.currentTime;
      const duration = 6.0; // Long resonating echo
      
      // Principal frequency of a medium-sized bronze temple bell
      const fundamental = 261.63; // C4 Middle C

      // Bell harmonics ratio (from standard acoustic studies of church/temple bells)
      // Hum: 0.5, Prime: 1.0, Tierce: 1.2, Quint: 1.5, Nominal: 2.0, Supernominal: 2.5, Octave: 3.0
      const harmonicRatios = [0.5, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0];
      const gains = [0.4, 0.5, 0.3, 0.25, 0.2, 0.15, 0.1, 0.05];

      // Create a master gain for the bell stroke envelope
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0, now);
      // Fast strike attack
      masterGain.gain.linearRampToValueAtTime(0.8, now + 0.015);
      // Exponential decay
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      // Lowpass filter to soften the tail end harmonics over time
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(3000, now);
      filter.frequency.exponentialRampToValueAtTime(300, now + duration * 0.8);

      // Create oscillators for each harmonic
      harmonicRatios.forEach((ratio, i) => {
        const osc = ctx.createOscillator();
        const oscGain = ctx.createGain();
        
        // Slightly detune to create a lush, rich brass shimmer
        const detuneValue = (Math.random() - 0.5) * 8;
        
        // Bell timbres use a mix of sine and triangle waves
        osc.type = i < 3 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(fundamental * ratio, now);
        osc.detune.setValueAtTime(detuneValue, now);

        // Apply dynamic decay to individual harmonics (high frequencies die out faster)
        const harmonicDecay = duration / (ratio * 0.8);
        oscGain.gain.setValueAtTime(gains[i], now);
        oscGain.gain.exponentialRampToValueAtTime(0.0001, now + Math.min(duration, harmonicDecay));

        osc.connect(oscGain);
        oscGain.connect(filter);

        osc.start(now);
        osc.stop(now + duration + 0.1);
      });

      // Add a slight tremolo (low frequency oscillator) to model the beating sound of the bell metal
      const tremolo = ctx.createGain();
      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(6, now); // 6Hz vibration
      
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(0.15, now);
      
      lfo.connect(lfoGain);
      lfoGain.connect(tremolo.gain);
      
      tremolo.gain.setValueAtTime(0.85, now);

      // Connect node chain
      filter.connect(tremolo);
      tremolo.connect(masterGain);
      masterGain.connect(ctx.destination);
      
      lfo.start(now);
      lfo.stop(now + duration);

      if (onBellPlay) {
        onBellPlay();
      }
    } catch (error) {
      console.warn("Web Audio API not fully supported or blocked:", error);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Temple Bell Trigger Button */}
      <button
        onClick={ringTempleBell}
        className="w-12 h-12 rounded-full bg-green border border-green-light text-green-darker hover:text-pink flex items-center justify-center shadow-gold-glow cursor-pointer transition-all duration-300 transform hover:scale-110 active:scale-95 bg-gradient-to-br from-green-light via-green to-green-dark hover:from-green-dark hover:to-green-light"
        title="Ring Temple Bell"
      >
        <Bell className="w-5 h-5 animate-pulse" />
      </button>

      {/* Music Toggle Button */}
      <button
        onClick={toggleMusic}
        className="w-12 h-12 rounded-full bg-pink text-pink-light border border-pink-medium flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-110 active:scale-95 bg-gradient-to-br from-pink-soft via-pink to-pink-dark"
        title={isPlaying ? "Mute Background Music" : "Play Background Music"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 animate-bounce" />
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>

      {/* Floating text prompt */}
      {!isPlaying && (
        <div className="absolute right-28 bg-green-darker/90 text-green-medium border border-green-medium/40 text-xs px-3 py-1.5 rounded-md font-cinzel tracking-wider whitespace-nowrap shadow-lg animate-pulse backdrop-blur-sm pointer-events-none">
          Click to hear Music & Bells 🪔
        </div>
      )}
    </div>
  );
}
