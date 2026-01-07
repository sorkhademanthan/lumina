import React from "react";

// --- INLINE SVG LOGO COMPONENTS ---
const LogoAethelred = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 140 24" fill="currentColor" {...props}>
    <text x="0" y="18" fontFamily="serif" fontSize="18" fontWeight="bold" letterSpacing="1.5">AETHELRED</text>
  </svg>
);

const LogoOnyx = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 90 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity=".5"/>
    <text x="32" y="18" fontFamily="sans-serif" fontSize="15" fontWeight="900" letterSpacing="3">ONYX</text>
  </svg>
);

const LogoNexus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 24" fill="currentColor" {...props}>
    <text x="0" y="18" fontFamily="sans-serif" fontSize="16" fontWeight="300" letterSpacing="5">NEXUS</text>
  </svg>
);

const LogoSovereign = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 150 24" fill="currentColor" {...props}>
     <text x="0" y="18" fontFamily="serif" fontSize="16" letterSpacing="2">SOVEREIGN</text>
  </svg>
);

const LogoArbor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 100 24" fill="currentColor" {...props}>
    <path d="M12 2L2 12h4v10h12V12h4L12 2z" opacity=".6"/>
    <text x="32" y="18" fontFamily="sans-serif" fontSize="15" fontWeight="bold" letterSpacing="3">ARBŌR</text>
  </svg>
);

const LogoCapital = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 130 24" fill="currentColor" {...props}>
      <text x="0" y="18" fontFamily="sans-serif" fontSize="15" fontWeight="700" letterSpacing="1">CAPITAL GRP.</text>
    </svg>
  );

// --- MAIN COMPONENT ---
export default function LogoSection() {
  const CLIENTS = [
    { component: LogoAethelred, name: "Aethelred" },
    { component: LogoOnyx, name: "Onyx" },
    { component: LogoNexus, name: "Nexus" },
  ,
    { component: LogoCapital, name: "Capital Group" },
  ];

  return (
    <section className="w-full px-6 md:px-10 py-20 md:py-24 bg-[#F9F9F7] border-b border-gray-200/40">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* --- Lead Text --- */}
        {/* IMPROVEMENT: Smaller text size (text-xs) but wider tracking (0.2em) for a premium feel */}
        <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase whitespace-nowrap lg:mr-8 shrink-0">
          Trusted by global visionaries
        </p>

        {/* --- Logo Grid --- */}
        {/* IMPROVEMENT: Increased gap-x to 16 for better separation. */}
        <div className="flex flex-wrap justify-center lg:justify-end items-center gap-x-12 md:gap-x-16 gap-y-10 w-full text-gray-400/80">
          {CLIENTS.map((client, index) =>
            client ? (
              <div 
                  key={index} 
                  className="h-6 md:h-7 hover:text-[#1C1B29] transition-colors duration-500 cursor-default group"
                  title={client.name}
              >
                {/* Render the SVG component dynamically */}
                <client.component className="h-full w-auto" />
              </div>
            ) : null
          )}
        </div>
        
      </div>
    </section>
  );
}