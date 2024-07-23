import { Metadata } from "next";
import AboutHero from "./components/aboutHero";
import CTA from "../components/cta";
import MeetTheTeam from "./components/meettheteam";
import RootsAndWingsValues from "./components/rootsandwingsvalues";
import WhoWeAre from "./components/whoweare";

export const metadata: Metadata = {
  title: "About Us | Roots & Wings",
  description:
    "Learn more about Roots & Wings and our mission to combine education with emotional support.",
  openGraph: {
    title: "About Us | Roots & Wings",
    description:
      "Learn more about Roots & Wings and our mission to combine education with emotional support.",
    url: "https://www.rootsandwings.education/about-us",
    siteName: "About Us | Roots & Wings",
  },
};

export default function AboutUs() {
  return (
    <>
      <section>
        <AboutHero />
      </section>
      <section>
        <RootsAndWingsValues />
      </section>
      <section>
        <WhoWeAre />
      </section>
      <section>
        <MeetTheTeam />
        <CTA />
      </section>
    </>
  );
}
