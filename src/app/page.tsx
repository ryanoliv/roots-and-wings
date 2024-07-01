"use client";

// import { useState, useEffect } from "react";
import Loader from "./components/loader";
import Head from "next/head";
import Hero from "./components/hero";
import LearnPlayGrow from "./components/learnplaygrow";
import ProgrammeIntro from "./components/programme-intro";
import Testimonials from "./components/testimonials";
import CTA from "./components/cta";
import LandingBlog from "./blog/components/landing-blog";

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
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // }, []);
  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Head>
      {/* {isLoading && <Loader />}
      {!isLoading && (
        <>
          <section>
            <Hero />
          </section>
          <section>
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
        </>
      )} */}
      <section>
        <Hero />
      </section>
      <section>
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
    </>
  );
}
