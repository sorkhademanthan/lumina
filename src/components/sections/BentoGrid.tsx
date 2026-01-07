import { ArrowRight } from "lucide-react";

export default function BentoGrid() {
  return (
    <section className="w-full px-6 md:px-10 py-24 bg-[#F9F9F7] font-sans">
      <div className="max-w-[1400px] mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-10">
          <div className="flex flex-col items-start gap-8">
            {/* New Title: Focus on Design Philosophy */}
            <h2 className="text-4xl md:text-6xl font-bold text-[#1C1B29] tracking-tight leading-tight">
              The Lumina <br /> Standard.
            </h2>
            <button className="bg-[#1C1B29] text-white px-10 py-4 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
              Our Philosophy
            </button>
          </div>
          {/* New Description: Focus on Experience & Space */}
          <p className="text-xl md:text-2xl text-[#5A5A65] max-w-lg leading-relaxed font-normal mt-2">
            We don&apos;t just build structures; we curate experiences. 
            Lumina merges art, nature, and engineering to create spaces that breathe.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-24">
          
          {/* CARD 1: Wide Card - Focus on "Living Architecture" */}
          <div 
            className="lg:col-span-2 min-h-[420px] rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden transition-transform hover:-translate-y-1 duration-300 bg-cover bg-center bg-no-repeat shadow-sm"
            // Note: You might want to update this image to an interior shot later
            style={{ backgroundImage: "url('/images/flowerImage.png')" }}
          >
            <div className="relative z-10 max-w-sm">
              <h3 className="text-3xl font-semibold text-[#1C1B29] mb-4 tracking-tight">
                Living Architecture
              </h3>
              <p className="text-[#5A5A65] text-lg leading-relaxed font-medium">
                Environments that adapt to their inhabitants. We prioritize natural light and organic flow to create homes that feel alive.
              </p>
            </div>
          </div>

          {/* CARD 2: Dark Card - Focus on Materials */}
          <div className="lg:col-span-1 min-h-[420px] rounded-[2.5rem] p-10 flex flex-col justify-between bg-[#1C1B29] text-white transition-transform hover:-translate-y-1 duration-300 shadow-sm">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-tight">
                Timeless <br /> Materiality
              </h3>
            </div>
            <p className="text-[#9CA3AF] text-base leading-relaxed font-medium">
              Sourcing the rarest stones and sustainable timber to ensure your space ages gracefully over generations.
            </p>
          </div>

          {/* CARD 3: Dark Card - Focus on Tech/Innovation */}
          <div className="lg:col-span-1 min-h-[420px] rounded-[2.5rem] p-10 flex flex-col justify-between bg-[#1C1B29] text-white transition-transform hover:-translate-y-1 duration-300 shadow-sm">
             <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 leading-tight">
                Invisible <br /> Intelligence
              </h3>
            </div>
            <p className="text-[#9CA3AF] text-base leading-relaxed font-medium">
              Integrated smart-home ecosystems that enhance comfort without cluttering the visual harmony.
            </p>
          </div>

        </div>
        
      </div>
    </section>
  );
}