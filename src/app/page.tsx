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
  metadataBase: new URL("https://www.rootsandwings.education/"),
  alternates: {
    canonical: "/",
  },
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
        <Testimonials />
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
