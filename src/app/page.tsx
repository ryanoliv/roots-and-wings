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
import MediaMentions from "./components/media-mentions";

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
  {
    id: 19,
    name: "Lisa Hyde",
    title: "Google Review",
    testimonial:
      "We are so grateful to Ally and everyone at Roots and Wings for the incredible support they have given Billy. After experiencing significant school trauma, he had completely lost trust in learning, but Ally immediately understood that emotional safety had to come first. Her calm, patient and relationship-based approach helped Billy begin to rebuild his confidence, engage with learning again and experience success without pressure. What impressed us most was how deeply Ally understood Billy's needs. She saw beyond his anxiety and recognised his strengths, adapting every session to suit him as an individual. Her report perfectly captured both his challenges and his potential, and we wouldn't hesitate to recommend Roots and Wings to any family looking for a compassionate, trauma-informed approach to supporting their child.",
  },
  {
    id: 20,
    name: "Neil Wiseman",
    title: "Google Review",
    testimonial:
      "Ally have been working with our son for 4 months now. He had been out of education for 2 years prior and didn't achieve much while there. They have been so good with him, he has come on leaps and bounds in such a short amount of time. It just shows what can be achieved when people care and understand. We would recommend Roots & Wings to everyone.",
  },
  {
    id: 21,
    name: "Hayley",
    title: "Google Review",
    testimonial:
      "I found Roots & Wings when searching for neuro-affirming tutors for my 10 year old AuDHD son who had been out of education for several years. I interviewed multiple tutors and only after speaking with Ally & Sarah did I really feel as though I had found people who understood what we were looking for. They understood when I said the traditional/stereotypical techniques used in SEN/mainstream schools wouldn't work for my son, and when they first met him they listened to his interests and tailored this to him perfectly. He was immediately engaged and interested in what they had to say. He is now engaging in learning which we were told wouldn't be possible and had flatly refused to do with previous tutors. Splitting the work between two tutors has worked well for us — even Sarah's guinea pigs have been helping! Who knew all it would take would be a pair of guinea pigs to sit on his lap to motivate him to write a book. Ally has been great in showing Wyatt how to manage his emotions and using games as an opportunity to learn. Sarah's performative and enthusiastic nature has helped steer Wyatt back on track when his ADHD is squirrelling away. We are really pleased with how the last 4 months is going and can't wait to see what they achieve with him.",
  },
  {
    id: 22,
    name: "Sherree Kendall",
    title: "Google Review",
    testimonial:
      "We have known Ally for a number of years, she has been close with our family and remains so. A wonderfully caring, curious and engaging professional, I trust her judgement and insight. She has had such a positive impact with the work she does and I know we will work together again! I value her very much.",
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
        <MediaMentions />
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
