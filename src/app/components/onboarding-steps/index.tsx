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
    <section>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Your four-step journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full font-bold text-xl mb-4">
                {index + 1}
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}