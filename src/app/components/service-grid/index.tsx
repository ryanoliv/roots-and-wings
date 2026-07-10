// src/app/components/service-grid/index.tsx
import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: "After-school tutoring",
    tagline: "Your child doesn’t need more pressure. They need someone who gets them.",
    description: "We use the Connect-Ed Method to help your child re-engage with learning, rebuild confidence and make real academic progress. Every session is tailored to your child’s pace, learning profile and emotional state on that day.",
    bgColor: "var(--card-bg)",
    textColor: "var(--clr-black)",
  },
  {
    title: "Homeschool & flex-school",
    tagline: "A complete education, built entirely around your child.",
    description: "Whether you’re home educating full-time, flexi-schooling, or supporting a child who’s recently left school — we build a bespoke programme around your child. Academic structure and emotional safety, together.",
    bgColor: "var(--clr-black)", 
    textColor: "var(--clr-white)",
  },
  {
    title: "Emotional Resilience products",
    tagline: "The tools from our sessions, now for home and classroom.",
    description: "12 animal characters. 12 emotional skills. One beautifully designed resource that children return to again and again. Our curriculum and workbooks are grounded in the Connect-Ed Method.",
    bgColor: "var(--card-bg)",
    textColor: "var(--clr-black)",
  }
];

export default function ServiceGrid() {
  return (
    <div className="container flex flex-col gap-10 items-center mx-auto px-4 md:my-24">
      <div className="flex flex-col items-center text-center">
        <h2>Our Services</h2>
      </div>
      
      {/* Mirroring the flex/gap structure completely independently of the SCSS file */}
      <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            // Replaced styles.PricingCard with native Tailwind classes for layout and subtle hover effects
            className="flex flex-col p-8 w-full md:w-1/3 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{
              backgroundColor: service.bgColor,
              color: service.textColor,
              border: service.bgColor === "var(--card-bg)" ? "1px solid var(--border)" : "none"
            }}
          >
            {/* Section 1: Title and Tagline */}
            <div
              className="pb-6 flex flex-col gap-2"
              // Using inline opacity for the border so it looks good on both light and dark cards
              style={{ borderBottom: "1px solid currentColor", borderBottomOpacity: 0.15 }}
            >
              {/* Replaced styles.PricingCardType with standard Tailwind typography classes */}
              <h3 className="text-2xl font-bold">{service.title}</h3>
              <p style={{ color: "inherit", fontStyle: "italic", opacity: 0.9 }}>
                {service.tagline}
              </p>
            </div>

            {/* Section 2: Main Description */}
            <div className="pt-6 flex flex-col flex-grow">
              <p style={{ color: "inherit", lineHeight: "160%", opacity: 0.85 }}>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Section 3: Consolidated CTA */}
      <div className="mt-6">
        <Link href="/our-programme" className="btn btn-primary">
          Explore Our Programmes
        </Link>
      </div>
    </div>
  );
}