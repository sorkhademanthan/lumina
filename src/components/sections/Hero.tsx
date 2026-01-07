import { ArrowRight, Sparkles } from "lucide-react"; // 1. Imported Sparkles

export default function Hero() {
  return (
    <section className="w-full px-4 md:px-6 pb-12">
      <div className="max-w-[1400px] mx-auto w-full relative">
        
        {/* THE MAIN CARD CONTAINER */}
        <div 
            className="
                relative w-full min-h-[650px] md:h-[85vh] 
                rounded-[2.5rem] overflow-hidden 
                bg-gray-50 flex flex-col items-center 
                pt-20 md:pt-36 
                bg-cover bg-center bg-no-repeat
            "
            style={{ backgroundImage: "url('/images/bloom-hero.png')" }}
        >
          
          {/* Global Gradient Overlay (Optional, keeps top area generally clean) */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-transparent pointer-events-none"></div>

          {/* TEXT CONTENT WRAPPER 
              Added 'bg-white/40' and 'backdrop-blur-md' to create a soft glass effect 
              that makes text pop against any background.
          */}
          <div className="relative z-10 flex flex-col items-center text-center px-8 py-10 max-w-4xl mx-auto rounded-3xl bg-white/30 backdrop-blur-sm border border-white/20 shadow-sm">
            
            {/* 1. LOGO ICON (Updated to Sparkles) */}
            <div className="mb-6 opacity-90 animate-fade-in-up flex items-center justify-center bg-white/50 w-12 h-12 rounded-full shadow-sm">
                <Sparkles className="w-6 h-6 text-[#1C1B29] fill-[#1C1B29]" />
            </div>

            {/* 2. Headline */}
            <h1 className="text-5xl md:text-8xl font-bold text-[#1C1B29] tracking-tight mb-8 leading-[1.1] md:leading-[0.95] drop-shadow-sm">
              Form, Light, <br />
              & Intelligence.
            </h1>

            {/* 3. Subheadline - Visibility Fixed
               - Changed text color to darker gray (#1C1B29) for contrast.
               - Added font-medium to make letters slightly thicker.
            */}
            <p className="text-lg md:text-2xl text-[#1C1B29] max-w-2xl leading-relaxed mb-10 font-medium opacity-90">
              We blend organic materials with computational design to construct 
              adaptive, sustainable environments for the modern world.
            </p>

            {/* 4. CTA Button */}
            <button className="bg-[#1C1B29] text-white px-10 py-4 md:px-12 md:py-5 rounded-full font-semibold text-base md:text-lg hover:scale-105 transition-transform duration-200 shadow-xl shadow-indigo-900/10">
              Explore Our Work
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}