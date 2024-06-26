import AboutHero from "./components/aboutHero";
import CTA from "../components/cta";
import MeetTheTeam from "./components/meettheteam";
import RootsAndWingsValues from "./components/rootsandwingsvalues";
import WhoWeAre from "./components/whoweare";

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
