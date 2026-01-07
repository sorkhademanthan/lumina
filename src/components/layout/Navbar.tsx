"use client";

import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react"; 
import { useState } from "react";

// 1. UPDATED LINKS: Changed from Fintech -> Architecture/Design Niche
const NAV_LINKS = [
  { label: "Residential", href: "#" },  // Was "USD bloom"
  { label: "Commercial", href: "#" },   // Was "Business"
  { label: "Studio", href: "#" },       // Was "Treasury"
  { label: "Process", href: "#" },      // Was "Developers"
  { label: "Journal", href: "#" },      // Was "Join us"
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-6 px-6 md:px-10 flex items-center justify-between bg-transparent max-w-[1440px] mx-auto z-50 relative">
      
      {/* 2. UPDATED LOGO: "Lumina" fits the clean, light aesthetic */}
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 flex items-center justify-center bg-transparent">
            <Sparkles className="w-6 h-6 text-dark-indigo fill-dark-indigo" />
        </div>
        <span className="text-xl font-bold text-dark-indigo tracking-tight">
          Lumina.
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-text-main hover:text-gray-500 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* 3. UPDATED CTA: Fits a service/consultancy business */}
      <div className="hidden md:block">
        <button className="bg-[#1C1B29] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity">
          Book Consultation
        </button>
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white p-6 shadow-xl rounded-b-2xl border-t flex flex-col gap-4 md:hidden">
            {NAV_LINKS.map((link) => (
                <Link key={link.label} href={link.href} className="text-lg font-medium">{link.label}</Link>
            ))}
        </div>
      )}
    </nav>
  );
}