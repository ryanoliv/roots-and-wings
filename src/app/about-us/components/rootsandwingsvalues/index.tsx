import Image from "next/image";
import YouTubeVideo from "../../../components/youtubevideo";

export default function RootsAndWingsValues() {
  return (
    <div className="relative py-lg">
      <img
        src="/svgs/about-squiggle.svg"
        alt="purple squiggle"
        style={{
          objectFit: "cover",
          zIndex: "-1",
          opacity: "0.8",
          height: "115%",
          width: "115%",
          position: "absolute",
        }}
        className="values-squiggle"
      />

      <div className="container flex flex-col xl:flex-row items-center justify-center gap-md xl:gap-xl">
        <div
          className="flex flex-col gap-xs items-center"
          style={{ flexBasis: "40%" }}
        >
          <div style={{ width: "100%" }}>
            <YouTubeVideo />
          </div>
          <span className="italic" style={{ fontSize: "14px" }}>
            Our idea Sprout, Ally.
          </span>
        </div>
        <div className="flex items-center xl:items-start flex-col gap-sm">
          <h2>Our Roots & Wings Values</h2>
          <div className="flex flex-col gap-xl xl:gap-md">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-xl xl:gap-md">
              <div className="flex items-center md:items-start flex-col gap-sm">
                <Image
                  src="/svgs/empowerment.svg"
                  alt="empowerment icon"
                  width={33}
                  height={40}
                />
                <div className="gap-xs">
                  <h3 className="text-center md:text-left">Empowerment</h3>
                  <p className="text-center md:text-left values-subtext">
                    Giving each child the confidence to activate their full
                    potential, fostering resilience in learning and in life.
                  </p>
                </div>
              </div>
              <div className="flex items-center md:items-start flex-col gap-sm">
                <Image
                  src="/svgs/compassion.svg"
                  alt="compassion icon"
                  width={42}
                  height={39}
                />
                <div className="gap-xs">
                  <h3 className="text-center md:text-left">Compassion</h3>
                  <p className="text-center md:text-left values-subtext">
                    Empathetically addressing individual needs and challenges,
                    creating a nurturing environment where self-worth can
                    flourish.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-xl xl:gap-md">
              <div className="flex flex-col items-center md:items-start gap-sm">
                <Image
                  src="/svgs/community.svg"
                  alt="community icon"
                  width={42}
                  height={44}
                />
                <div className="gap-xs">
                  <h3 className="text-center md:text-left">Community</h3>
                  <p className="text-center md:text-left values-subtext">
                    Honouring and supporting the adult&apos;s role in empowering
                    their child, be it an educator, parent, carer or healthcare
                    professional.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-start gap-sm">
                <Image
                  src="/svgs/impact.svg"
                  alt="impact icon"
                  width={43}
                  height={47}
                />
                <div className="gap-xs">
                  <h3 className="text-center md:text-left">Impact</h3>
                  <p className="text-center md:text-left values-subtext">
                    Guiding the thinkers, dreamers and do-gooders of tomorrow,
                    today. We teach skills that will set the foundations for
                    life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
