import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function CommercialPage() {
  return (
    <div className="w-full bg-[#F9F9F7] min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 px-6 md:px-10 max-w-[1400px] mx-auto w-full">
        {/* Header */}
        <div className="mb-24">
          <span className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-4 block">
            Selected Work
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-[#1C1B29] mb-8">
            Commercial <br /> Environments.
          </h1>
          <p className="text-xl text-[#5A5A65] max-w-2xl leading-relaxed">
             Workspaces, galleries, and headquarters designed to foster innovation and clarity.
          </p>
        </div>

        {/* Placeholder Grid for Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
           {/* Project 1 */}
           <div className="group cursor-pointer">
              <div className="w-full h-[400px] bg-gray-200 rounded-[2rem] mb-6 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
              </div>
              <h3 className="text-2xl font-bold text-[#1C1B29] group-hover:text-gray-600 transition-colors">
                Onyx Headquarters
              </h3>
              <p className="text-gray-500">Berlin, Germany</p>
           </div>

           {/* Project 2 */}
           <div className="group cursor-pointer md:mt-24">
              <div className="w-full h-[400px] bg-gray-200 rounded-[2rem] mb-6 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gray-300 animate-pulse delay-100"></div>
              </div>
              <h3 className="text-2xl font-bold text-[#1C1B29] group-hover:text-gray-600 transition-colors">
                Aeon Gallery
              </h3>
              <p className="text-gray-500">Kyoto, Japan</p>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}