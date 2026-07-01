// src/app/components/partner-logos/index.tsx
"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  { name: "Partner 1", src: "/images/logo-placeholder-1.png" },
  { name: "Partner 2", src: "/images/logo-placeholder-2.png" },
  { name: "Partner 3", src: "/images/logo-placeholder-3.png" },
  { name: "Partner 4", src: "/images/logo-placeholder-4.png" },
];

export default function PartnerLogos() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Turn off arrows as they often cause overflow
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } }
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
              <div key={index} className="outline-none">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-12 mx-auto grayscale opacity-60 object-contain" 
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}