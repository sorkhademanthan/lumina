import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer"; 
import "./globals.css";

// 1. Load the font
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap", // Important for loading speed
});

export const metadata: Metadata = {
  title: "BloomFi Portfolio",
  description: "A portfolio inspired by organic modernism.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 2. APPLY THE VARIABLE AND THE CLASS HERE 👇 */}
      <body className={`${jakarta.variable} font-sans bg-cream text-text-main antialiased flex flex-col min-h-screen`}>
        
        <Navbar />

        <main className="flex-grow pt-0"> 
          {children}
        </main>

        {/* <Footer /> */}
        
      </body>
    </html>
  );
}