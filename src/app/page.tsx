import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import BentoGrid from "@/components/sections/BentoGrid";
import UseCases from "@/components/sections/UseCases"; // 👈 Import the new section
import LogoSection from "@/components/sections/LogoSection"; // 👈 Import the new sectio
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* Navbar is in layout.tsx, but if you removed it from layout, add it here */}
      
      <Hero />
      <BentoGrid />
      <LogoSection /> {/* 👈 Add the component here */}
      <UseCases /> {/* 👈 Add the component here */}
       <FAQ />
      <Footer />
     
    </div>
  );
}