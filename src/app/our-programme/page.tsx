import Image from "next/image";
import CTA from "../components/cta";
import Pricing from "./components/pricing";
import UnveilTheMagic from "./components/unveilthemagic";
import YourJourney from "./components/yourjourney";

export default function OurProgramme() {
  return (
    <>
      <section className="pt-xl">
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
