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
    <section className="relative py-20">
      <div className="container flex flex-col gap-xl items-center mx-auto px-4 max-w-6xl">
        
        <div className="flex flex-col items-center mb-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Your four-step journey</h2>
          <p style={{ maxWidth: "600px", textAlign: "center", fontStyle: "italic", opacity: 0.8 }}>
            A clear, pressure-free path to finding the right support for your child.
          </p>
        </div>
        
        {/* Switched from a cramped 4-column layout to a spacious 2x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col p-8 xl:p-12 rounded-xl relative overflow-hidden"
              style={{ 
                backgroundColor: "var(--card-bg)", 
                color: "var(--clr-black)",
                border: "1px solid var(--border)"
              }}
            >
              {/* Elegant, oversized typography watermark instead of colored circles */}
              <div 
                className="absolute top-4 right-6 font-bold pointer-events-none select-none" 
                style={{ fontSize: "8rem", opacity: 0.04, lineHeight: "1" }}
              >
                {index + 1}
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Clean, structured subheading inherited from the new design language */}
                <span 
                  className="text-sm uppercase tracking-widest font-semibold mb-4"
                  style={{ opacity: 0.6 }}
                >
                  Step 0{index + 1}
                </span>
                
                <h3 
                  className="text-2xl font-bold mb-6 pb-6" 
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  {step.title}
                </h3>
                
                <p 
                  style={{ lineHeight: "160%", opacity: 0.85 }} 
                  className="flex-grow text-base md:text-lg"
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}