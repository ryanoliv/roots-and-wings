// src/app/components/pricing-section/index.tsx
import React from 'react';

export default function PricingSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Invest in your child’s potential</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto italic">
            &ldquo;We aren&apos;t just tutoring. We are building the foundations your child will stand on for the rest of their life.&rdquo;
          </p>
        </div>
        
        {/* ... rest of your code remains the same */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Tutoring Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-900 border-b pb-2">After-School Tutoring</h3>
            <PricingCard title="Starter Block" price="£320" feature="4-week introduction" />
            <PricingCard title="Confidence Builder" price="£640" feature="8 weeks · most popular" />
            <PricingCard title="Tutoring Programme" price="£1,200" feature="12 weeks · full transformation" />
          </div>

          {/* Homeschool Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-900 border-b pb-2">Flex & Home Education</h3>
            <PricingCard title="Flex-school support" price="£320–480/mo" feature="4–6 sessions/month" />
            <PricingCard title="Homeschool foundation" price="£640/mo" feature="8 sessions/month" />
            <PricingCard title="Homeschool full programme" price="£960–1,200/mo" feature="12-15 sessions/month" />
          </div>
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-sm text-gray-500">* Payment plans available across all programmes. Every journey begins with a free discovery call.</p>
        </div>
      </div>
    </section>
  );
}

function PricingCard({ title, price, feature }: { title: string, price: string, feature: string }) {
  return (
    <div className="flex justify-between items-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
      <div>
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="text-sm text-gray-500">{feature}</p>
      </div>
      <div className="text-xl font-bold text-blue-600">{price}</div>
    </div>
  );
}