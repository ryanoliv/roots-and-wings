// src/app/components/pricing-section/index.tsx
import React from 'react';
import styles from "../../our-programme/OurProgramme.module.scss"


export default function PricingSection() {
  return (
    <section className="relative py-20">
      <div className="container flex flex-col gap-xl items-center mx-auto px-4 max-w-6xl">
        
        {/* Main Header inheriting the structural spacing */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Invest in your child’s potential</h2>
          <p style={{ maxWidth: "840px", textAlign: "center", fontStyle: "italic", opacity: 0.8 }}>
            &ldquo;We aren&apos;t just tutoring. We are building the foundations your child will stand on for the rest of their life.&rdquo;
          </p>
        </div>
        
        {/* Thematic Cards Wrapper */}
        <div className="flex flex-col md:flex-row gap-md md:gap-8 xl:gap-12 w-full justify-center">
          
          {/* Card 1: Tutoring Column (Light Theme) */}
          <div 
            className="flex flex-col p-6 xl:p-12 w-full md:w-1/2 rounded-xl"
            style={{ backgroundColor: "var(--card-bg)", color: "var(--clr-black)" }}
          >
            <div className="pb-4 xl:pb-8" style={{ borderBottom: "1px solid var(--border)" }}>
              <h3 className="text-2xl font-bold" style={{ color: "inherit" }}>After-School Tutoring</h3>
            </div>
            <div className="py-4 flex flex-col flex-grow">
              <PricingRow title="Starter Block" price="£320" feature="4-week introduction" />
              <PricingRow title="Confidence Builder" price="£640" feature="8 weeks · most popular" />
              <PricingRow title="Tutoring Programme" price="£1,200" feature="12 weeks · full transformation" isLast />
            </div>
          </div>

          {/* Card 2: Homeschool Column (Dark Theme to match central pricing focus) */}
          <div 
            className="flex flex-col p-6 xl:p-12 w-full md:w-1/2 rounded-xl"
            style={{ backgroundColor: "var(--clr-black)", color: "var(--clr-white)" }}
          >
            <div className="pb-4 xl:pb-8" style={{ borderBottom: "1px solid var(--border)" }}>
              <h3 className="text-2xl font-bold" style={{ color: "inherit" }}>Flex & Home Education</h3>
            </div>
            <div className="py-4 flex flex-col flex-grow">
              <PricingRow title="Flex-school support" price="£320–480/mo" feature="4–6 sessions/month" />
              <PricingRow title="Homeschool foundation" price="£640/mo" feature="8 sessions/month" />
              <PricingRow title="Homeschool full programme" price="£960–1,200/mo" feature="12-15 sessions/month" isLast />
            </div>
          </div>

        </div>
        
        {/* Footer Note */}
        <div className="mt-16 text-center">
            <p style={{ fontSize: "0.875rem", opacity: 0.6 }}>
              * Payment plans available across all programmes. Every journey begins with a free discovery call.
            </p>
        </div>
      </div>
    </section>
  );
}

// Sub-component updated to inherit colors and utilize standard border variables
function PricingRow({ title, price, feature, isLast = false }: { title: string, price: string, feature: string, isLast?: boolean }) {
  return (
    <div 
      className="flex justify-between items-center py-6 hover:opacity-80 transition-opacity"
      style={{ borderBottom: isLast ? "none" : "1px solid var(--border)" }}
    >
      <div className="flex flex-col gap-1">
        <h4 className="font-bold text-lg" style={{ color: "inherit" }}>{title}</h4>
        <p style={{ color: "inherit", opacity: 0.7, fontSize: "0.875rem" }}>{feature}</p>
      </div>
      <div className="text-xl font-bold" style={{ color: "inherit" }}>{price}</div>
    </div>
  );
}