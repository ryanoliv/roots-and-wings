// src/app/components/onboarding-steps/index.tsx
import React from 'react';

const steps = [
  {
    title: "Book a free discovery call",
    description: "Every Roots & Wings journey begins with a conversation — not a sales pitch. We want to hear about your child: what they find hard, what lights them up, and what you’ve already tried. This call is free, relaxed and completely without obligation.",
    borderColor: "var(--clr-purple)"
  },
  {
    title: "We match your child with the right programme",
    description: "Using everything we learn on the discovery call — your child’s learning profile, emotional needs, diagnosis, and goals — we recommend the right fit. That might be after-school tutoring, a flex-school arrangement, or a full homeschool programme.",
    borderColor: "var(--clr-yellow)"
  },
  {
    title: "Choose your programme",
    description: "Whether you’re looking for confidence-building after-school sessions, a bespoke homeschool curriculum, or our full 12-week Wellbeing Programme — we’ll talk you through the options clearly, with no jargon and no pressure.",
    borderColor: "var(--clr-turq)"
  },
  {
    title: "Your child begins their journey",
    description: "From the very first session, your child is met with warmth, curiosity and a complete absence of pressure. We move at their pace. We celebrate what they can do. And we keep you closely involved every step of the way.",
    borderColor: "var(--clr-red)"
  }
];

export default function OnboardingSteps() {
  return (
    <section className="container mx-auto px-4 my-16 md:my-24 flex flex-col gap-10 items-center">
      
      <div className="flex flex-col items-center text-center gap-4">
        <h2>Your Four-Step Journey</h2>
        <p className="max-w-2xl text-gray-700" style={{ fontSize: "1.125rem" }}>
          A clear, pressure-free path to finding the right support for your child.
        </p>
      </div>
      
      {/* 2x2 Grid exactly mirroring the Unveil The Magic layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="flex flex-col p-8 md:p-10 bg-white"
            style={{
              borderRadius: "2rem", // matching the heavy rounding from the screenshot
              border: `1px solid ${step.borderColor}`,
              boxShadow: "var(--card-shadow)",
            }}
          >
            {/* Acting as the "Icon": A color-coordinated step number 
              to match the brand border color of the card.
            */}
            <div 
              className="text-3xl md:text-4xl font-black mb-6"
              style={{ color: step.borderColor }}
            >
              Step 0{index + 1}
            </div>
            
            <h3 className="text-2xl mb-4 font-normal text-gray-900">
              {step.title}
            </h3>
            
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {step.description}
            </p>
          </div>
        ))}
      </div>
      
    </section>
  );
}