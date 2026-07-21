import { Metadata } from "next";
import Hero from "./components/hero";
import LearnPlayGrow from "./components/learnplaygrow";
import WhyUsWhyNow from "./components/whyuswhynow";
import Testimonials from "./components/testimonials";
import CTA from "./components/cta";
import LandingBlog from "./blog/components/landing-blog";
import OnboardingSteps from "./components/onboarding-steps";
import ServiceGrid from "./components/service-grid";
import PartnerLogos from "./components/partner-logos";
import PricingSection from "./components/pricing-section";

export const metadata: Metadata = {
  title: "Roots & Wings | Specialist Tutoring For Growth",
  description:
    "Empower your child with Roots & Wings tutoring: a blend of academic enrichment and emotional growth in a 12-week transformative journey.",
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
    title: "Year 2, London",
    testimonial:
      "Alex has been a fantastic tutor for my daughter. Her focus on wellbeing and resilience is invaluable and my daughter's confidence and communication has improved as a result.",
  },
  {
    id: 2,
    name: "Parent",
    title: "Year 1, London",
    testimonial:
      "Rex's confidence has skyrocketed this year! He seems to enjoy every class. Overall we are thrilled with him!",
  },
  {
    id: 3,
    name: "Teacher Feedback",
    title: "Year 2, London",
    testimonial:
      "He always shows impeccable manners and conducts himself well... He now makes sensible decisions for his leanings such as avoiding sitting next to his friends to ensure that he stays focused.",
  },
  {
    id: 4,
    name: "Teacher Feedback",
    title: "Year 2, London",
    testimonial:
      "E comes into the classroom with a big smile and an open mind... She is beginning to realise that it is not a bad thing to get something wrong and that we can learn from our mistakes.",
  },
  {
    id: 5,
    name: "Parent",
    title: "Year 2, London",
    testimonial:
      "Aurelia has gained a lot more confidence this year and is far more vocal in class... she is beginning to not be deterred by difficult tasks.",
  },
  {
    id: 6,
    name: "Parent",
    title: "Year 4, London",
    testimonial:
      "As you know, we are all very fond of you and think highly of you and Alex. We are grateful for everything you have done and are doing!",
  },
  {
    id: 7,
    name: "Parent",
    title: "Year 2, London",
    testimonial:
      "Unprompted, the teacher opened by remarking on how much she has progressed this term in not getting bogged down and upset by making mistakes... The tools she is learning from you are working!",
  },
  {
    id: 8,
    name: "Teacher",
    title: "Year 3, London",
    testimonial:
      "Absolutely love this! And the way you want to teach kids, it's so much better than the traditional way.",
  },
  {
    id: 9,
    name: "Parent",
    title: "Year 4, London",
    testimonial:
      "When he was last tested on his comprehension he got 45%. His assessment he did two weeks ago he achieved... 75%! We are very happy and proud of him.",
  },
  {
    id: 10,
    name: "Parent",
    title: "Year 4, South Africa",
    testimonial:
      "Feedback from her side is she absolutely loved it and she can't wait for the next session.",
  },
  {
    id: 11,
    name: "Parent",
    title: "Year 2, London",
    testimonial:
      "Alex and the Roots & Wings Programmes were invaluable to our daughter in building her self-confidence and teaching her the skills to thrive in the world of learning.",
  },
  {
    id: 12,
    name: "JM Rowe-Setz",
    title: "MSc Applied Psych",
    testimonial:
      "A remarkable combination of educational excellence, psychological understanding, and emotional intelligence combined with delightful imagery.",
  },
  {
    id: 13,
    name: "Parent",
    title: "Nursery, London",
    testimonial:
      "Alex's expertise was also useful for my youngest daughter... implementing her advice let to a rapid improvement in her acceptance and enjoyment of the new set-up.",
  },
  {
    id: 14,
    name: "Parent",
    title: "Year 3, London",
    testimonial:
      "I feel very fortunate to have had Roots and Wings recommended to me... my daughter loved working with Alex, and by end of year her school report noted how much more engaged she had become.",
  },
  {
    id: 15,
    name: "Parent",
    title: "Year 3, London",
    testimonial:
      "I met with his form teacher yesterday who is absolutely delighted with how he's managing this year. Thank you for all your help in helping him get to this point!",
  },
  {
    id: 16,
    name: "Parent",
    title: "Year 3, London",
    testimonial:
      "Apparently he's working at Y3 level in all areas and is working ahead of Y3 level in maths... She said he's actually one of the calmest children in the class.",
  },
  {
    id: 17,
    name: "Parent",
    title: "Year 5, Zimbabwe",
    testimonial:
      "The emotional resilience course was great. It gave my daughter real coping skills, and Ally was phenomenal in the ways she delivered it.",
  },
  {
    id: 18,
    name: "Parent",
    title: "Year 4, London",
    testimonial:
      "I fully recommend Ally for her exceptional tutoring services... Through Ally's unique and empathetic approach, my daughter has made remarkable progress in all these areas.",
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
        <OnboardingSteps />
      </section>
      <section>
        <CTA />
      </section>
      <section>
        <ServiceGrid />
      </section>
      <section>
        <PartnerLogos />
      </section>
      <section>
        <PricingSection />
      </section>
      <section>
        <WhyUsWhyNow />
      </section>

      <section id="testimonials">
        <Testimonials testimonials={testimonials} />
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
