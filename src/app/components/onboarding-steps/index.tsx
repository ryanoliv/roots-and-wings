// src/app/components/onboarding-steps/index.tsx
import React from 'react';

const steps = [
  {
    title: "Book a free discovery call",
    description: "Every Roots & Wings journey begins with a conversation — not a sales pitch. We want to hear about your child: what they find hard, what lights them up, and what you’ve already tried. This call is free, relaxed and completely without obligation."
  },
  {
    title: "We match your child with the right programme",
    description: "Using everything we learn on the discovery call — your child’s learning profile, emotional needs, diagnosis, and goals — we recommend the right fit. That might be after-school tutoring, a flex-school arrangement, or a full homeschool programme."
  },
  {
    title: "Choose your programme",
    description: "Whether you’re looking for confidence-building after-school sessions, a bespoke homeschool curriculum, or our full 12-week Wellbeing Programme — we’ll talk you through the options clearly, with no jargon and no pressure."
  },
  {
    title: "Your child begins their journey",
    description: "From the very first session, your child is met with warmth, curiosity and a complete absence of pressure. We move at their pace. We celebrate what they can do. And we keep you closely involved every step of the way."
  }
];

export default function OnboardingSteps() {
  return (
    <section className="container mx-auto px-4 my-16 md:my-24 flex flex-col gap-10 items-center">
      
      {/* 
        Removed manual text sizing. Relying on global styles for the <h2> tag.
      */}
      <div className="flex flex-col items-center text-center gap-4">
        <h2>Your Four-Step Journey</h2>
        <p className="italic text-gray-600 max-w-2xl">
          A clear, pressure-free path to finding the right support for your child.
        </p>
      </div>
      
      {/* 
        Grid layout strictly set for 4 steps (2x2 grid).
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="flex flex-col p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
          >
            {/* Top border accent for brand color impact */}
            <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 opacity-80"></div>
            
            {/* 
              Vibrant circular indicators for higher impact.
            */}
            <div className="w-16 h-16 flex items-center justify-center bg-purple-100 text-purple-700 rounded-full font-bold text-2xl mb-6 shadow-sm">
              {index + 1}
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-gray-900">
              {step.title}
            </h3>
            
            <p className="text-gray-600 leading-relaxed flex-grow">
              {step.description}
            </p>
          </div>
        ))}
      </div>
      
    </section>
  );
}