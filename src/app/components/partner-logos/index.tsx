// src/app/components/partner-logos/index.tsx
"use client";

import React from "react";

const logos = [
  { name: "MMM Main Logo", src: "/partnerlogos/Logo1.png" },
  { name: "The Sensory Haven Logo", src: "/partnerlogos/Logo2.png" },
];

export default function PartnerLogos() {
  return (
    <section className="container mx-auto px-4 mt-16 md:mt-24 mb-4 md:mb-8 flex flex-col items-center">
      
      {/* 
        Massively scaled up to text-4xl, 5xl, and 6xl on large screens.
        Added text-gray-900 for stronger contrast and visual weight.
      */}
      <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest mb-10 text-gray-900">
        Trusted by
      </h2>
      
      {/* 
        Static flex layout remains, but the container spacing is tighter.
      */}
      <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 w-full max-w-4xl">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center hover:opacity-80 transition-opacity">
            <img 
              src={logo.src} 
              alt={logo.name} 
              className="h-20 md:h-28 w-auto object-contain" 
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                console.error(`Failed to load image: ${logo.src}`);
              }}
            />
          </div>
        ))}
      </div>
      
    </section>
  );
}