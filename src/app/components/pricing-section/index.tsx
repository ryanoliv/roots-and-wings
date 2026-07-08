// src/app/components/pricing-section/index.tsx
import React from 'react';
import Link from 'next/link';
import styles from "../../our-programme/OurProgramme.module.scss";

export default function PricingSection() {
  return (
    <section className="container mx-auto px-4 my-16 md:my-24 flex flex-col gap-10 items-center">
      
      {/* 
        Removed manual sizing (text-4xl, etc.) and inline max-widths. 
        Now inheriting from the global <h2> styles. 
      */}
      <div className="flex flex-col items-center text-center gap-4">
        <h2>Invest in your child’s potential</h2>
        <p className="italic text-gray-600 max-w-3xl">
          &ldquo;We aren&apos;t just tutoring. We are building the foundations your child will stand on for the rest of their life.&rdquo;
        </p>
      </div>
      
      {/* 
        Thematic Cards Wrapper using the styling from your main programme pages
      */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
        
        {/* Card 1: Tutoring Column (Light Theme) */}
        <div 
          className={`${styles.PricingCard} flex flex-col p-8 w-full md:w-1/2 rounded-xl`}
          style={{ backgroundColor: "var(--card-bg)", color: "var(--clr-black)" }}
        >
          <div className="pb-6 flex flex-col gap-2" style={{ borderBottom: "1px solid var(--border)" }}>
            <h3 className={styles.PricingCardType}>After-School Tutoring</h3>
          </div>
          <div className="pt-2 flex flex-col flex-grow">
            <PricingRow title="Starter Block" price="£320" feature="4-week introduction" />
            <PricingRow title="Confidence Builder" price="£640" feature="8 weeks · most popular" />
            <PricingRow title="Tutoring Programme" price="£1,200" feature="12 weeks · full transformation" isLast />
          </div>
        </div>

        {/* Card 2: Homeschool Column (Dark Theme) */}
        <div 
          className={`${styles.PricingCard} flex flex-col p-8 w-full md:w-1/2 rounded-xl`}
          style={{ backgroundColor: "var(--clr-black)", color: "var(--clr-white)" }}
        >
          <div className="pb-6 flex flex-col gap-2" style={{ borderBottom: "1px solid var(--border)" }}>
            <h3 className={styles.PricingCardType}>Flex & Home Education</h3>
          </div>
          <div className="pt-2 flex flex-col flex-grow">
            <PricingRow title="Flex-school support" price="£320–480/mo" feature="4–6 sessions/month" />
            <PricingRow title="Homeschool foundation" price="£640/mo" feature="8 sessions/month" />
            <PricingRow title="Homeschool full programme" price="£960–1,200/mo" feature="12-15 sessions/month" isLast />
          </div>
        </div>

      </div>

      {/* Central CTA */}
      <div className="mt-4">
        <Link href="/contact" className="btn btn-primary">
          Book a Consultation
        </Link>
      </div>
      
      {/* Footer Note */}
      <div className="text-center">
          <p className="text-sm text-gray-500">
            * Payment plans available across all programmes. Every journey begins with a free discovery call.
          </p>
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
      <div className="flex flex-col gap-1 pr-4">
        <h4 className="font-bold text-lg" style={{ color: "inherit" }}>{title}</h4>
        <p style={{ color: "inherit", opacity: 0.7, fontSize: "0.875rem" }}>{feature}</p>
      </div>
      <div className="text-xl font-bold whitespace-nowrap" style={{ color: "inherit" }}>{price}</div>
    </div>
  );
}