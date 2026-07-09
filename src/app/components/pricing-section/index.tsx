// src/app/components/pricing-section/index.tsx
import React from 'react';
import Link from 'next/link';
import styles from "../../our-programme/OurProgramme.module.scss";

export default function PricingSection() {
  return (
    <section className="container mx-auto px-4 my-16 md:my-24 flex flex-col gap-10 items-center">
      
      <div className="flex flex-col items-center text-center gap-4">
        <h2>Invest in your child’s potential</h2>
        <p className="italic text-gray-600 max-w-3xl">
          &ldquo;We aren&apos;t just tutoring. We are building the foundations your child will stand on for the rest of their life.&rdquo;
        </p>
      </div>
      
      {/* 
        Thematic Cards Wrapper using the "Unveil The Magic" aesthetic 
      */}
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
        
        {/* Card 1: Tutoring (Purple Theme) */}
        <div 
          className="flex flex-col p-8 md:p-10 w-full md:w-1/2 rounded-2xl bg-white text-gray-900"
          style={{ 
            border: "1px solid var(--clr-purple)",
            boxShadow: "var(--card-shadow)" 
          }}
        >
          <div className="pb-6 flex flex-col gap-2" style={{ borderBottom: "1px solid var(--border)" }}>
            <h3 className="text-2xl font-bold text-gray-900">After-School Tutoring</h3>
          </div>
          <div className="pt-2 flex flex-col flex-grow">
            <PricingRow title="Starter Block" price="£320" feature="4-week introduction" />
            <PricingRow title="Confidence Builder" price="£640" feature="8 weeks · most popular" />
            <PricingRow title="Tutoring Programme" price="£1,200" feature="12 weeks · full transformation" isLast />
          </div>
        </div>

        {/* Card 2: Homeschool (Turquoise Theme) */}
        <div 
          className="flex flex-col p-8 md:p-10 w-full md:w-1/2 rounded-2xl bg-white text-gray-900"
          style={{ 
            border: "1px solid var(--clr-turq)",
            boxShadow: "var(--card-shadow)" 
          }}
        >
          <div className="pb-6 flex flex-col gap-2" style={{ borderBottom: "1px solid var(--border)" }}>
            <h3 className="text-2xl font-bold text-gray-900">Flex & Home Education</h3>
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

// Sub-component updated for the new clean aesthetic
function PricingRow({ title, price, feature, isLast = false }: { title: string, price: string, feature: string, isLast?: boolean }) {
  return (
    <div 
      className="flex justify-between items-center py-6 hover:opacity-80 transition-opacity"
      style={{ borderBottom: isLast ? "none" : "1px solid var(--border)" }}
    >
      <div className="flex flex-col gap-1 pr-4">
        <h4 className="font-bold text-lg text-gray-900">{title}</h4>
        <p className="text-sm text-gray-600">{feature}</p>
      </div>
      <div className="text-xl font-bold whitespace-nowrap text-gray-900">{price}</div>
    </div>
  );
}