"use client";

import { useState } from "react";
import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Who do you work with?",
    answer:
      "Children aged 5 to 11 who are finding school really hard right now, whether they’re struggling to attend or they’re in school but struggling to access learning. We support children with SEND, including those with EHCPs, and children dealing with anxiety, emotionally based school avoidance, ADHD, autism, dyslexia and other specific learning difficulties. No diagnosis is needed. If your child is struggling, that’s enough reason to talk to us.",
  },
  {
    question:
      "My child hasn’t been in school for months, or has refused other tutors. Can you help?",
    answer:
      "Yes, that’s often where we start. We don’t push a plan onto a child who isn’t ready. We get to know what they love and build from there, sometimes through games, play or time outdoors, until they feel safe enough to learn.",
  },
  {
    question: "Who will be working with my child?",
    answer:
      "Every Roots & Wings expert is a qualified teacher with years of SEND experience, trained in the Connect-Ed Method. Every one of them is also neurodivergent or parents a neurodivergent child, so they understand your family from the inside.",
  },
  {
    question: "How do you keep my child safe?",
    answer:
      "Safeguarding sits at the heart of everything we do. Every member of our team holds an enhanced DBS check, and our founder, Alex Boyes-Varley, is our Designated Safeguarding Lead. If you ever have a concern, you can speak to Alex directly.",
  },
  {
    question:
      "What is the Connect-Ed Method, and will my child still make progress?",
    answer:
      "It’s our evidence-informed approach, built on one idea: regulate first, then educate. It has four steps: Connect, Empower, Enhance and Cultivate. Regulation comes first because it’s what makes progress possible, not instead of it. We teach reading through the Science of Reading and maths through Singapore Maths, and the aim is always real academic movement.",
  },
  {
    question: "What’s the difference between tutoring and coaching?",
    answer:
      "Tutoring focuses on learning: reading, writing, maths and rebuilding confidence along the way. Coaching focuses on what’s underneath: worry, focus, self-belief and the emotional skills that make learning possible. Not sure which your child needs? We’ll work it out together at your consultation.",
  },
  {
    question: "We home educate, or are thinking about it. Can you help?",
    answer:
      "Yes. We can plan a full primary programme following the National Curriculum, teach alongside you, or take on specific subjects, whether you’re home educating full-time, flexi-schooling or your child has recently left school. You stay in charge of your child’s education, and we’ll support you in conversations with your local authority.",
  },
  {
    question: "Where do sessions happen?",
    answer:
      "In your home or online. We work in person across Kent, Medway, East Sussex and London, and online anywhere.",
  },
  {
    question: "How can I pay? Can we use EHCP funding?",
    answer:
      "Families pay privately, with payment plans available on request for coaching and home education. If your child has an EHCP, its funding can often be directed towards provision like ours, including EOTAS packages. Personal budgets and school-funded places can also be used. We’ll support you with conversations with your local authority. We currently deliver council-funded SEND provision for East Sussex County Council.",
  },
  {
    question:
      "How will I know how my child is getting on, and do you work with schools?",
    answer:
      "You’ll have a place in our parent WhatsApp group and regular feedback sessions. For children with an EHCP, we write termly progress reports linked to their outcomes. We’re happy to work alongside your child’s school and local authority caseworker, whether the goal is progress where they are or a return to school.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="container flex flex-col gap-xl items-center">
      <div className="flex flex-col items-center text-center">
        <h2>Your questions, answered</h2>
      </div>

      <div className="flex flex-col gap-md w-full" style={{ maxWidth: "840px" }}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="flex flex-col"
              style={{
                border: "1px solid var(--border)",
                borderRadius: "16px",
                backgroundColor: "var(--card-bg)",
                boxShadow: "var(--card-shadow)",
                padding: "1.5rem 2rem",
              }}
            >
              <button
                className="flex gap-md items-center justify-between w-full text-left font-bold cursor-pointer"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <Image
                  src="/svgs/drop-down-arrow.svg"
                  alt="drop down arrow"
                  width={9}
                  height={6}
                  className={`${isOpen ? "rotate-180" : ""} transition-all`}
                  style={{ flexShrink: 0 }}
                />
              </button>
              {isOpen && <p className="pt-sm">{faq.answer}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
