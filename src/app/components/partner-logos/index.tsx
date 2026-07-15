// src/app/components/partner-logos/index.tsx
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

const logos = [
  { name: "MMM Main Logo", src: "/partnerlogos/Logo1.png" },
  { name: "The Sensory Haven Logo", src: "/partnerlogos/Logo2.png" },
  { name: "parentteacher", src: "/partnerlogos/Logo3.JPG" },
  { name: "eastsussex", src: "/partnerlogos/Logo4.JPG" },
];

export default function PartnerLogos() {
  return (
    <section className="container mx-auto px-4 mt-16 md:mt-24 mb-4 md:mb-8 flex flex-col items-center">
      
      {/* Restored the global typography standard for the H2 tag */}
      <h2 className="text-center mb-10">
        Trusted by
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-6xl">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center hover:opacity-80 transition-opacity">
            <img 
              src={logo.src} 
              alt={logo.name} 
              className="max-h-16 md:max-h-24 w-auto max-w-full object-contain mix-blend-multiply" 
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