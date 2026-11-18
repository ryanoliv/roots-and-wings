"use client";

import { useState } from "react";
import styles from "../../OurProgramme.module.scss";
import Link from "next/link";
import Image from "next/image";
import Separator from "@/app/components/separator";
import CalendlyCTA from "@/app/components/calendlyCTA";

type ExpandedBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; title?: string; items: string[] };

interface Card {
  imgSrc: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  title: string;
  description: string;
  listTitle: string;
  listItems: string[];
  expandedBlocks?: ExpandedBlock[]; // Ordered paragraphs/lists shown instead of listTitle/listItems when expanded
  showCalendlyCTA?: boolean; // Show the "Book a Consultation" button in the expanded area
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
    title: "Home education and flexi-school",
    description: "A complete education, built entirely around your child.",
    listTitle: "",
    listItems: [],
    expandedBlocks: [
      {
        type: "paragraph",
        text: "Whether you’re home educating full-time, flexi-schooling, or supporting a child who’s recently left school, we build a bespoke programme around your child, with academic structure and emotional safety together.",
      },
      {
        type: "list",
        items: [
          "A complete primary curriculum (ages 5–11) following the National Curriculum: English, maths, science and history",
          "Specialist programmes: reading built on the Science of Reading, Singapore Maths, and self-regulation through our own Roots to Wings programme",
          "Learning beyond the desk: forest school time through our outdoor learning partnership",
          "Sensory-informed support: through our collaboration with Natasha Grays at The Sensory Haven",
          "Holiday club: steady routines and friendships through the school breaks",
        ],
      },
      {
        type: "list",
        title: "Investment",
        items: [
          "POA. EOTAS, EHCP, personal budget and school funding options available. Payment plans available on request.",
        ],
      },
      {
        type: "list",
        title: "Every place includes:",
        items: [
          "Up to six hours of one-to-one teaching a week (24 hours a month) — can be less or more depending on your family’s needs",
          "All planning, preparation and resources, done for you",
          "Ongoing parent feedback via our WhatsApp group",
          "A monthly parent feedback session and report writing",
          "Holiday club",
        ],
      },
    ],
    showCalendlyCTA: true,
    borderColor: "var(--clr-purple)",
  },
  {
    imgSrc: "/svgs/method.svg",
    imgAlt: "hierarchy laddder",
    imgWidth: 52,
    imgHeight: 40,
    title: "Simon’s Circle: our picture book",
    description:
      "A rhyming picture book about friendship, belonging and finding your place.",
    listTitle: "",
    listItems: [],
    expandedBlocks: [
      {
        type: "paragraph",
        text: "Meet Simon, a little swallow who learns that he doesn’t have to fly alone. Simon’s Circle is a gentle, rhyming story for children aged 5 to 7 about friendship, belonging and the people who help us feel at home.",
      },
      {
        type: "paragraph",
        text: "Simon is one of the characters children meet in our coaching programme, and now he has a story of his own. Created by Steve, Alex and Sarah, every word and every picture is made by hand.",
      },
      {
        type: "paragraph",
        text: "It’s lovely for bedtime, the classroom, or any time your child needs reminding that they belong.",
      },
    ],
    borderColor: "var(--clr-yellow)",
    linkText: "Order your copy",
    linkUrl: "https://buy.stripe.com/5kQ4gy8hu6yy2Oa6JLeAg00",
  },
  {
    imgSrc: "/svgs/whoitsfor.svg",
    imgAlt: "people",
    imgWidth: 48,
    imgHeight: 50,
    title: "After-school tutoring",
    description:
      "Your child doesn’t need more pressure. They need someone who gets them.",
    listTitle: "",
    listItems: [],
    expandedBlocks: [
      {
        type: "paragraph",
        text: "By the end of a school day, most children have used up everything they’ve got, so the last thing they need is more of the same. Every session starts by settling your child and checking in on how they’re doing. Then we tailor the work to their pace, their learning profile and how they’re feeling that day. Confidence comes first, because often the block isn’t ability, it’s belief. The aim is real academic progress, not just a nicer hour after school.",
      },
      {
        type: "list",
        title: "Investment",
        items: [
          "One-to-one: £320 per month",
          "Small group: £220 per month per child (up to four children, minimum three to run)",
        ],
      },
      {
        type: "list",
        title: "Every place includes:",
        items: [
          "One hour a week, four sessions a month, in your home or online",
          "Whatsapp parent feedback group",
        ],
      },
    ],
    showCalendlyCTA: true,
    borderColor: "var(--clr-turq)",
  },
  {
    imgSrc: "/svgs/benefitsforyourchild.svg",
    imgAlt: "star",
    imgWidth: 50,
    imgHeight: 49,
    title: "Coaching",
    description: "One-to-one support for the child behind the schoolwork.",
    listTitle: "",
    listItems: [],
    expandedBlocks: [
      {
        type: "paragraph",
        text: "Sometimes what’s getting in the way isn’t the maths or the reading. It’s the worry underneath, the focus that won’t settle, the quiet belief that they can’t. Over twelve weeks, your child meets a new animal character each week, and each one brings a message and a tool that becomes theirs to keep.",
      },
      {
        type: "list",
        items: [
          "Callie the Chameleon: Wellbeing",
          "Olly & Fitz: Self-regulation",
          "Winston the Whale: Calmness",
          "Molly the Meerkat: Special skills",
          "Lesedi the Lion: Self-expression",
          "Simon the Swallow: Community",
          "Jerry the Giraffe: Feelings",
          "Penelope the Penguin: Self-talk",
          "Ella & Mooki: Boundaries",
          "Baya the Butterfly: Mindset",
          "Harambe the Honey Badger: Courage",
          "Ottie the Otter: Goals",
        ],
      },
      {
        type: "paragraph",
        text: "The characters build on each other, so by the end it all fits together.",
      },
      {
        type: "list",
        title: "Investment",
        items: ["£1,200 for 12 weeks. Payment plans available on request."],
      },
      {
        type: "list",
        title: "Every place includes:",
        items: [
          "One hour a week, 12 sessions in total, in your home or online",
          "Three parent feedback sessions, at the start, middle and end",
        ],
      },
    ],
    showCalendlyCTA: true,
    borderColor: "var(--clr-red)",
  },
];

export default function UnveilTheMagic() {
  const [openStates, setOpenStates] = useState<{ [key: number]: boolean }>({});

  const toggleAccordion = (index: number) => {
    setOpenStates((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="flex flex-col pt-0 md:pt-lg">
      <div className="container flex flex-col gap-xl">
        <div className="flex flex-col items-center">
          <h2>Our Services</h2>
          <p style={{ maxWidth: "821px", textAlign: "center" }}>
            Four ways we can help, one way of working. Tap each to find out
            more.
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
                  {card.expandedBlocks ? (
                    <div className="flex flex-col gap-sm">
                      {card.expandedBlocks.map((block, bIndex) =>
                        block.type === "paragraph" ? (
                          <p key={bIndex}>{block.text}</p>
                        ) : (
                          <div key={bIndex}>
                            {block.title && (
                              <p style={{ fontSize: "1.2rem" }}>{block.title}</p>
                            )}
                            <ul className="flex flex-col list-disc ml-sm">
                              {block.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <>
                      <p style={{ fontSize: "1.2rem" }}>{card.listTitle}</p>
                      <ul className="flex flex-col list-disc ml-sm">
                        {card.listItems.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  {card.showCalendlyCTA && (
                    <div className="mt-md">
                      <CalendlyCTA />
                    </div>
                  )}
                  {card.linkUrl && (
                    <p className="mt-md">
                      {card.linkTextBefore}
                      <Link
                        href={card.linkUrl}
                        className="underline font-bold"
                        target={card.linkUrl.startsWith("http") ? "_blank" : undefined}
                      >
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
