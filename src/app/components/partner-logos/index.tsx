// src/app/components/partner-logos/index.tsx
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
      
      <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-widest mb-10 text-gray-900">
        Trusted by
      </h2>
      
      {/* 
        Changed to a strict grid (2 columns on mobile, 4 on desktop) 
        to ensure every logo gets an equal "cell" and stays aligned.
      */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full max-w-6xl">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center hover:opacity-80 transition-opacity">
            <img 
              src={logo.src} 
              alt={logo.name} 
              /* 
                1. Used max-h and max-w instead of fixed height so wide logos don't blow out.
                2. mix-blend-multiply drops the white background from the JPGs automatically!
              */
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