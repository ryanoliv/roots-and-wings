// src/app/components/service-grid/index.tsx
import React from 'react';
import Link from 'next/link';
import styles from "../../our-programme/OurProgramme.module.scss"

const services = [
  {
    title: "After-school tutoring",
    tagline: "Your child doesn’t need more pressure. They need someone who gets them.",
    description: "We use the Connect-Ed Method to help your child re-engage with learning, rebuild confidence and make real academic progress. Every session is tailored to your child’s pace, learning profile and emotional state on that day.",
    link: "/our-programme",
    bgColor: "var(--card-bg)",
    textColor: "var(--clr-black)",
  },
  {
    title: "Homeschool & flex-school",
    tagline: "A complete education, built entirely around your child.",
    description: "Whether you’re home educating full-time, flexi-schooling, or supporting a child who’s recently left school — we build a bespoke programme around your child. Academic structure and emotional safety, together.",
    link: "/our-programme",
    bgColor: "var(--clr-black)", // Dark card in the middle to match your pricing aesthetic
    textColor: "var(--clr-white)",
  },
  {
    title: "Emotional Resilience products",
    tagline: "The tools from our sessions, now for home and classroom.",
    description: "12 animal characters. 12 emotional skills. One beautifully designed resource that children return to again and again. Our curriculum and workbooks are grounded in the Connect-Ed Method.",
    link: "/shop",
    bgColor: "var(--card-bg)",
    textColor: "var(--clr-black)",
  }
];

export default function ServiceGrid() {
  return (
    <div className="relative py-20">
      <div className="container flex flex-col gap-xl items-center mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2>Our Services</h2>
        </div>
        
        {/* Mirroring the exact flex/gap structure from your Pricing component */}
        <div className="flex flex-col md:flex-row gap-md md:gap-xs xl:gap-md w-full justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${styles.PricingCard} flex flex-col p-6 xl:p-12 w-full md:w-1/3`}
              style={{
                backgroundColor: service.bgColor,
                color: service.textColor,
              }}
            >
              {/* Section 1: Title and Tagline */}
              <div
                className="pb-4 xl:pb-8 flex flex-col gap-sm"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <h3 className={styles.PricingCardType}>{service.title}</h3>
                <p style={{ color: "inherit", fontStyle: "italic" }}>
                  {service.tagline}
                </p>
              </div>

              {/* Section 2: Main Description */}
              <div
                className="py-8 flex flex-col flex-grow"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <p style={{ color: "inherit", lineHeight: "150%" }}>
                  {service.description}
                </p>
              </div>

              {/* Section 3: Call to Action */}
              <div className="pt-8 flex flex-col gap-sm">
                <div className="flex gap-xs items-start">
                  <Link 
                    href={service.link} 
                    style={{ color: "inherit", fontWeight: "bold", textDecoration: "underline" }}
                    className="hover:opacity-80 transition-opacity"
                  >
                    Find out more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}