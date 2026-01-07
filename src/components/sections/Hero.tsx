import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full px-4 md:px-6 pb-12">
      <div className="max-w-[1400px] mx-auto w-full relative">
        
        {/* THE MAIN CARD CONTAINER */}
        <div 
            className="
                relative w-full min-h-[650px] md:h-[85vh] 
                rounded-[2.5rem] overflow-hidden 
                bg-gray-100 flex flex-col items-center 
                /* UPDATED: Reduced padding-top to move text higher up */
                pt-16 md:pt-24
                bg-cover bg-center bg-no-repeat
            "
            style={{ backgroundImage: "url('/images/bloom-hero.png')" }}
        >
          
          {/* Gradient Overlay: Helps text stand out against the sky/ceiling of your image */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-transparent pointer-events-none h-[50%]"></div>

          {/* TEXT CONTENT */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">
            
            {/* 1. LOGO ICON */}
            <div className="mb-8 opacity-100 animate-fade-in-up">
                <Sparkles className="w-8 h-8 text-[#1C1B29] fill-[#1C1B29]" />
            </div>

            {/* 2. Headline */}
            <h1 className="text-6xl md:text-8xl font-bold text-[#1C1B29] tracking-tight mb-8 leading-[0.95] drop-shadow-sm">
              Form, Light, <br />
              & Intelligence.
            </h1>

            {/* 3. Subheadline */}
            <p className="text-xl md:text-2xl text-[#1C1B29] max-w-3xl leading-relaxed mb-12 font-medium">
              We blend organic materials with computational design to construct 
              adaptive, sustainable environments for the modern world.
            </p>

            {/* 4. CTA Button */}
            <button className="bg-[#1C1B29] text-white px-12 py-5 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-200 shadow-xl shadow-indigo-900/10">
              Explore Our Work
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}