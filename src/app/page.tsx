import { Metadata } from "next";
import Hero from "./components/hero";
import LearnPlayGrow from "./components/learnplaygrow";
import ProgrammeIntro from "./components/programme-intro";
import Testimonials from "./components/testimonials";
import CTA from "./components/cta";
import LandingBlog from "./blog/components/landing-blog";

export const metadata: Metadata = {
  title: "Roots & Wings | Specialist Tutoring For Growth",
  description:
    "Empower your child with Roots & Wings tutoring: a blend of academic enrichment and emotional growth in a 12-week transformative journey.",
  // metadataBase: new URL("https://www.rootsandwings.education/"),
  // alternates: {
  //   canonical: "/",
  // },
  verification: {
    google: "ISLD6BYNOPtmb0prcjvG_uMNToKgjyIXPNmblYFlui0",
  },
  openGraph: {
    title: "Roots & Wings | Specialist Tutoring For Growth",
    description:
      "Empower your child with Roots & Wings tutoring: a blend of academic enrichment and emotional growth in a 12-week transformative journey.",
    url: "https://www.rootsandwings.education/",
    siteName: "Roots & Wings | Specialist Tutoring For Growth",
    images: [
      {
        url: "https://www.rootsandwings.education/opengraph-image.png",
        width: "600",
        height: "340",
      },
    ],
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Roots & Wings",
  url: "https://www.rootsandwings.education/",
  logo: "https://www.rootsandwings.education/opengraph-image.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+44-7958-266921",
    contactType: "customer service",
  },
  sameAs: [
    "https://linkedin.com/in/ally-boyes-varley-a56376105",
    "https://www.instagram.com/rootsandwingstutoring/",
  ],
  description:
    "Empower your child with Roots & Wings tutoring: a blend of academic enrichment and emotional growth in a 12-week transformative journey.",
};

const testimonials = [
  {
    id: 1,
    name: "Parent",
    title: "Year 2 Child",
    testimonial:
      "Alex has been a fantastic tutor for my daughter. Her focus on wellbeing and resilience is invaluable and my daughter's confidence and communication has improved as a result. I'd highly recommend her.",
  },
  {
    id: 2,
    name: "Parent",
    title: "Year 1 Child",
    testimonial:
      "Rex's confidence has skyrocketed this year! He seems to enjoy every class. Overall we are thrilled with him!",
  },
  {
    id: 3,
    name: "Teacher Feedback",
    title: "Year 2 Child",
    testimonial:
      "He always shows impeccable manners and conducts himself well, both in and out of school. He has matured and his confidence has developed immensely. He now makes sensible decisions for his leanings such as avoiding sitting next to his friends to ensure that he stays focused and produces work to the best of his ability. He is a delight to have in class, his love of learning is a joy.",
  },
  {
    id: 4,
    name: "Teacher Feedback",
    title: "Year 2 Child",
    testimonial:
      "E comes into the classroom with a big smile and an open mind, ready and willing to learn. At the start of the year, she was not the confident, knowledge seeker that she presents today. She has come on tremendously with her understanding and ability to communicate her ideas, particularly in DT and Science. She deals positively with praise but can sometimes get frustrated with setbacks and can become disheartened. This said she is beginning to realise that it is not a bad thing to get something wrong and that we can learn from our mistakes. She has a positive attitude towards her studies, has a strong sense of responsibility, and strives hard to do her best!",
  },
  {
    id: 5,
    name: "Parent",
    title: "Year 2 Child",
    testimonial:
      "Aurelia has gained a lot more confidence this year and is far more vocal in class and has demonstrated increasing sureness in new and unfamiliar situations. She is also facing challenges with a positive attitude. She is beginning to not be deterred by difficult tasks and has shown a lot more resilience particularly in maths and learning lessons from her mistakes.",
  },
  {
    id: 6,
    name: "Parent",
    title: "Year 4 Child",
    testimonial:
      "As you know, we are all very fond of you and think highly of you and Alex. We are grateful for everything you have done and are doing!",
  },
  {
    id: 7,
    name: "Parent",
    title: "Year 2 Child",
    testimonial:
      "Hi Alex, a little feedback that I thought you might like following my parent-teacher meeting yesterday. Unprompted, the teacher opened by remarking on how much she has progressed this term in not getting bogged down and upset by making mistakes, and not freezing when confronted by an unexpected question! Apparently she is taking things in her stride much more, and unbothered by making a mistake. This is great to hear and I think testament to her growing resilience! The tools she is learning from you are working!",
  },
  {
    id: 8,
    name: "Teacher",
    title: "Year 3 Child",
    testimonial:
      "Absolutely love this! And the way you want to teach kids, it's so much better than the traditional way. I hope business is blooming and I think it's only going to get better!",
  },
];

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section id="learnplaygrow">
        <LearnPlayGrow />
      </section>
      <section>
        <ProgrammeIntro />
      </section>
      <section className="border-b" id="testimonials">
        <Testimonials testimonials={testimonials} />
        <CTA />
      </section>
      <section>
        <LandingBlog />
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  );
}
