import { ArrowRight } from "lucide-react";

export default function UseCases() {
  return (
    <section className="w-full px-6 md:px-10 pb-32 pt-20 bg-[#F9F9F7] font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">
        
        {/* --- LEFT COLUMN: Header & Description --- */}
        <div className="flex flex-col pt-4 max-w-lg">
          {/* Updated Tagline */}
          <span className="text-sm font-semibold text-gray-400 mb-4 tracking-wide">
            Lumina in Practice
          </span>
          
          {/* Updated Heading */}
          <h2 className="text-5xl md:text-6xl font-bold text-[#1C1B29] mb-8 tracking-tight leading-tight">
            Our Expertise.
          </h2>
          
          {/* Updated Description */}
          <p className="text-xl text-[#5A5A65] leading-relaxed font-normal">
            From private estates to corporate headquarters, we apply computational precision to create spaces that inspire, adapt, and endure.
          </p>
        </div>

        {/* --- RIGHT COLUMN: The "Residential" Card --- */}
        <div 
          className="w-full rounded-[2.5rem] p-10 md:p-14 min-h-[600px] flex flex-col relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group bg-cover bg-bottom bg-no-repeat bg-white"
          style={{ backgroundImage: "url('/images/house-image.png')" }}
        >
          
          {/* Text Content */}
          <div className="relative z-10">
            {/* Updated Card Title */}
            <h3 className="text-4xl font-semibold text-[#1C1B29] mb-6 tracking-tight">
              Private Estates
            </h3>
            
            {/* Updated Card Copy */}
            <p className="text-[#5A5A65] text-lg leading-relaxed max-w-md mb-8 font-medium">
              We design bespoke sanctuaries that harmonize with their natural surroundings. Every curve and material is selected to enhance your daily rituals.
            </p>

            <button className="flex items-center gap-3 text-[#1C1B29] font-bold text-base hover:opacity-70 transition-opacity">
              <div className="w-8 h-8 rounded-full bg-[#F3F2F8] flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </div>
              View Portfolio
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}