// src/app/components/partner-logos/index.tsx
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { name: "MMM Main Logo", src: "/partnerlogos/Logo1.png" },
  { name: "The Sensory Haven Logo", src: "/partnerlogos/Logo2.png" },
];

export default function PartnerLogos() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // Since you only have 2 logos, we set slidesToShow to 2 
    // to prevent slider duplication issues
    slidesToShow: 2, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="py-12 w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
          Trusted by
        </h3>
        <div className="w-full">
          <Slider {...settings}>
            {logos.map((logo, index) => (
            <div key={index} className="outline-none flex justify-center items-center">
  <img 
    src={logo.src} 
    alt={logo.name} 
    // Removed 'grayscale' and 'opacity' to see if it renders clearly
    className="h-20 w-auto object-contain" 
    onError={(e) => {
      e.currentTarget.style.display = 'none';
      console.error(`Failed to load image: ${logo.src}`);
    }}
  />
</div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}