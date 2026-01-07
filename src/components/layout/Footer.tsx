import Link from "next/link";
import { Instagram, Twitter, Linkedin, Facebook} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1B29] text-white pt-24 pb-0 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        
        {/* --- TOP SECTION: Newsletter & Links --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          
          {/* 1. Left: Newsletter / Call to Action */}
          <div className="max-w-md w-full">
            <h5 className="text-sm font-semibold text-gray-400 mb-6 uppercase tracking-wider">
              Stay Inspired
            </h5>
            
            {/* Input Field & Button */}
            <div className="flex items-center gap-2 w-full mb-8">
              <input 
                type="email" 
                placeholder="email@address.com" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors"
              />
              <button className="bg-[#F9F9F7] text-[#1C1B29] px-6 py-3 rounded-lg text-sm font-bold hover:bg-white transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Facebook} />
            </div>
          </div>

          {/* 2. Right: Navigation Columns */}
          <div className="flex flex-wrap gap-12 md:gap-24">
            
            {/* Column 1 */}
            <div>
              <h4 className="font-bold text-lg mb-6">Studio</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Philosophy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Awards</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-bold text-lg mb-6">Work</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Residential</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Commercial</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Landscape</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Interiors</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-bold text-lg mb-6">Connect</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Press Inquiries</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Consultations</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* --- BOTTOM SECTION: Massive Typography --- */}
        <div className="border-t border-white/10 pt-10 pb-10 flex flex-col md:flex-row justify-between items-end">
            
            {/* Copyright Small Text */}
            <div className="flex gap-8 text-xs text-gray-500 mb-4 md:mb-0">
                <span>© 2026 Lumina Arch.</span>
                <Link href="#" className="hover:text-white">Privacy</Link>
                <Link href="#" className="hover:text-white">Terms</Link>
            </div>

            {/* THE BIG BRAND TEXT */}
            {/* text-[18vw] makes it scale massively based on screen width */}
            <h1 className="text-[18vw] leading-[0.8] font-bold tracking-tighter text-white select-none pointer-events-none translate-y-4 md:translate-y-6">
              Lumina.
            </h1>

        </div>

      </div>
    </footer>
  );
}

// Helper Component for Social Icons
function SocialIcon({ icon: Icon }: { icon: React.ComponentType<{ size?: number }> }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#1C1B29] transition-all duration-300">
      <Icon size={18} />
    </a>
  );
}