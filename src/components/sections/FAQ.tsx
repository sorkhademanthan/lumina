"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "What is your design philosophy?",
    answer: "We believe architecture is an extension of the natural world. Our approach blends organic materials with computational precision to create spaces that are not just inhabited, but felt. Every project is a dialogue between the environment and the individual."
  },
  {
    question: "Do you work internationally?",
    answer: "Yes. Lumina accepts commissions globally. We have successfully delivered private estates and commercial landmarks in Europe, North America, and parts of Asia. Our logistics team handles all cross-border regulatory and sourcing requirements."
  },
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary by complexity. A bespoke residential estate typically requires 18–24 months from concept to completion. Commercial projects follow a more rigorous schedule tailored to business objectives. We prioritize precision over speed."
  },
  {
    question: "Do you handle construction management?",
    answer: "We offer end-to-end oversight. While we partner with trusted local contractors for physical construction, Lumina retains strict control over the design fidelity, material sourcing, and final detailing to ensure the vision remains compromised."
  },
  {
    question: "What is your sustainability standard?",
    answer: "Sustainability is not an addon; it is our baseline. We utilize passive solar design, locally sourced regenerative materials, and smart-energy systems to aim for carbon-neutral or carbon-negative footprints in all our structures."
  }
];

export default function FAQ() {
  // Track which FAQ is open (null = all closed)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full px-6 md:px-10 py-24 bg-[#F9F9F7] font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* --- LEFT COLUMN: Title --- */}
        <div className="lg:col-span-4">
          <span className="text-sm font-semibold text-gray-400 mb-4 block tracking-wider uppercase">
            Inquiries
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1B29] tracking-tight leading-tight">
            Common <br /> Questions.
          </h2>
        </div>

        {/* --- RIGHT COLUMN: Accordion List --- */}
        <div className="lg:col-span-8 flex flex-col">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 last:border-0"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full py-8 flex items-start justify-between gap-6 text-left group"
              >
                {/* Question */}
                <span className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${openIndex === index ? "text-[#1C1B29]" : "text-gray-500 group-hover:text-[#1C1B29]"}`}>
                  {faq.question}
                </span>

                {/* Icon (Plus / Minus) */}
                <span className="mt-1 text-[#1C1B29] shrink-0">
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>

              {/* Answer (Animated reveal) */}
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-96 opacity-100 mb-8" : "max-h-0 opacity-0"}`}
              >
                <p className="text-lg text-[#5A5A65] leading-relaxed max-w-2xl">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}