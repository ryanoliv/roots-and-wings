"use client";

import { useState } from "react";
import styles from "../../OurProgramme.module.scss";
import Link from "next/link";
import Image from "next/image";
import Separator from "@/app/components/separator";

interface Card {
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  title: string;
  description: string;
  listTitle: string;
  listItems: string[];
  borderColor: string;
  linkTextBefore?: string; // Text before the link
  linkText?: string; // The actual link text
  linkUrl?: string; // URL for the link
  linkTextAfter?: string; // Text after the link
}

const cards: Card[] = [
  {
    imgSrc: "/svgs/rootswingsway.svg",
    imgAlt: "purple rainbow",
    imgWidth: 71,
    imgHeight: 40,
    title: "The Roots & Wings Way",
    description:
      "Recognising the core principles in education is pivotal; it's where the magic unfolds. Our Roots & Wings Way consists of four main pillars.",
    listTitle: "Our four pillars:",
    listItems: [
      "Wellbeing underpins success",
      "Play is the child's work",
      "The brain is incredibly malleable",
      "21st century skills start with us",
    ],
    borderColor: "var(--clr-purple)",
  },
  {
    imgSrc: "/svgs/method.svg",
    imgAlt: "hierarchy laddder",
    imgWidth: 52,
    imgHeight: 40,
    title: "Our Method",
    description:
      "We empower children to reach their potential through supportive, nurturing connections that foster personal and collective growth.",
    listTitle: "Our method:",
    listItems: ["Connect", "Empower", "Cultivate", "Enhance"],
    borderColor: "var(--clr-yellow)",
  },
  {
    imgSrc: "/svgs/whoitsfor.svg",
    imgAlt: "people",
    imgWidth: 48,
    imgHeight: 50,
    title: "Who It’s For",
    description:
      "We help children aged 5 to 11 to thrive through tailored support, fostering growth, confidence, and essential skills for future success.",
    listTitle: "Does your child:",
    listItems: [
      "Get frustrated by setbacks and lack resilience?",
      "Have a negative attitude towards school work?",
      "Act disruptively in class?",
      "Struggle with confidence and communication?",
      "Hesitate to participate in class?",
      "Have trouble transitioning between year levels?",
      "Fear making mistakes?",
    ],
    borderColor: "var(--clr-turq)",
  },
  {
    imgSrc: "/svgs/benefitsforyourchild.svg",
    imgAlt: "star",
    imgWidth: 50,
    imgHeight: 50,
    title: "Benefits For Your Child",
    description:
      "We prioritise emotional and mental health, engaging in playful learning for a comprehensive educational experience.",
    listTitle: "",
    listItems: [
      "Strong emotional and mental health foundations",
      "Engaging, practical learning through play",
      "Enhanced brain development",
      "Fostered critical thinking, collaboration, creativity, communication and care",
    ],
    borderColor: "var(--clr-red)",
    linkTextBefore: "Read the ",
    linkText: "testimonials",
    linkUrl: "/#testimonials",
    linkTextAfter: " for the proof in the pudding.",
  },
];

export default function UnveilTheMagic() {
  const [openStates, setOpenStates] = useState<{ [key: number]: boolean }>({});

  const toggleAccordion = (index: number) => {
    setOpenStates((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="flex flex-col pt-lg">
      <div className="container flex flex-col gap-xl">
        <div className="flex flex-col items-center">
          <h2>Let&apos;s Unveil The Magic</h2>
          <p style={{ maxWidth: "821px", textAlign: "center" }}>
            Understanding our methodology is paramount, as it lays the
            groundwork for fostering growth and success in your child. Take a
            closer look at The Roots & Wings Way, Who It&apos;s for, Our Method
            and Benefits for Your Child.
          </p>
        </div>
        <div className="flex gap-md justify-center items-start flex-wrap">
          {cards.map((card, index) => (
            <div
              key={index}
              className={styles.unveilTheMagicCard}
              style={{
                border: `1px solid ${card.borderColor}`,
                boxShadow: "var(--card-shadow)",
              }}
            >
              <Image
                src={card.imgSrc}
                alt={card.imgAlt}
                width={card.imgWidth}
                height={card.imgHeight}
              />
              <div className="flex flex-col">
                <h3 className={styles.unveilTheMagicCardTitle}>{card.title}</h3>
                <p>{card.description}</p>
              </div>
              <button
                className="flex gap-xs items-center font-bold cursor-pointer transition-all"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openStates[index] || false}
              >
                {openStates[index] ? "Less" : "More"}
                <span>
                  <Image
                    src="/svgs/drop-down-arrow.svg"
                    alt="drop down arrow"
                    width={9}
                    height={6}
                    className={`${
                      openStates[index] ? "rotate-180" : ""
                    } transition-all`}
                  />
                </span>
              </button>
              {openStates[index] && (
                <div>
                  <p style={{ fontSize: "1.2rem" }}>{card.listTitle}</p>
                  <ul className="flex flex-col list-disc ml-sm">
                    {card.listItems.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                  {card.linkUrl && (
                    <p className="mt-md">
                      {card.linkTextBefore}
                      <Link href={card.linkUrl} className="underline font-bold">
                        {card.linkText}
                      </Link>
                      {card.linkTextAfter}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Separator />
    </div>
  );
}
