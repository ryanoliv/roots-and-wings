import { Metadata } from "next";
import CTA from "../components/cta";
import Pricing from "./components/pricing";
import UnveilTheMagic from "./components/unveilthemagic";
import YourJourney from "./components/yourjourney";

export const metadata: Metadata = {
  title: "Our Programme | Roots & Wings",
  description:
    "Empower your child with Roots & Wings tutoring: a blend of academic enrichment and emotional growth in a 12-week transformative journey.",
  openGraph: {
    title: "Our Programme | Roots & Wings",
    description:
      "Empower your child with Roots & Wings tutoring: a blend of academic enrichment and emotional growth in a 12-week transformative journey.",
    url: "https://www.rootsandwings.education/our-programme",
    siteName: "Our Programme | Roots & Wings",
  },
};

export default function OurProgramme() {
  return (
    <>
      <section className="pt-sm md:pt-xl">
        <YourJourney />
      </section>
      <section id="our-method">
        <UnveilTheMagic />
      </section>
      <section id="pricing">
        <Pricing />
        <CTA />
      </section>
    </>
  );
}
