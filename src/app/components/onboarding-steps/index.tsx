// src/app/components/onboarding-steps/index.tsx
import React from "react";

const steps = [
  {
    title: "First, we help them feel safe",
    description:
      "Nothing sinks in while a child feels anxious or on edge. So we start by helping yours feel calm, settled and genuinely at ease with us — because a relaxed child is a child who's ready to take things in.",
    borderColor: "var(--clr-purple)",
  },
  {
    title: "Then we build their belief",
    description:
      "So many children have quietly decided they're \"no good\" at something. We gently rebuild that, growing the confidence and self-belief that makes a child want to have a go, even at the things they've found hard before.",
    borderColor: "var(--clr-yellow)",
  },
  {
    title: "Now the real learning grows",
    description:
      "With a settled, willing child, teaching finally does what it's meant to. We build the skills — maths, phonics, reading, thinking, problem-solving — through the ways children learn best, at a pace that's theirs and never forced.",
    borderColor: "var(--clr-turq)",
  },
  {
    title: "And it stays with them",
    description:
      "Because it's rooted in something deeper than pressure and repetition, the change tends to last. Children don't just catch up, they carry a new relationship with learning into everything they do next.",
    borderColor: "var(--clr-red)",
  },
];

export default function OnboardingSteps() {
  return (
    <section className="container mx-auto px-4 my-16 md:my-24 flex flex-col gap-10 items-center">
      <div className="flex flex-col items-center text-center gap-4">
        <h2>Your Four-Step Journey</h2>
        <p className="italic max-w-2xl" style={{ opacity: 0.8 }}>
          A clear, pressure-free path to finding the right support for your
          child.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col p-8 md:p-10 rounded-2xl bg-white"
            style={{
              border: `1px solid ${step.borderColor}`,
              boxShadow: "var(--card-shadow)",
              color: "var(--clr-black)",
            }}
          >
            <div
              className="font-black text-5xl md:text-6xl mb-6"
              style={{ color: step.borderColor }}
            >
              0{index + 1}
            </div>

            <h3
              className="text-xl md:text-2xl font-bold mb-4"
              style={{ color: "inherit" }}
            >
              {step.title}
            </h3>

            <p className="leading-relaxed flex-grow" style={{ opacity: 0.8 }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
