import Image from "next/image";
import YouTubeVideo from "../../../components/youtubevideo";

export default function RootsAndWingsValues() {
  return (
    <div className="relative py-lg">
      {/* <Image
          src="/svgs/about-squiggle.svg"
          alt="purple squiggle"
          fill
          style={{
            objectFit: "cover",
            zIndex: "-1",
            opacity: "0.8",
          }}
        /> */}
      <img
        src="/svgs/about-squiggle.svg"
        alt="purple squiggle"
        style={{
          objectFit: "cover",
          zIndex: "-1",
          opacity: "0.8",
          height: "115%",
          width: "115%", // Ensure the width is also scaled if needed
          position: "absolute", // Position absolutely if needed
        }}
      />

      <div className="container flex gap-lg">
        {/* <YouTubeVideo /> */}
        <div className="flex flex-col gap-sm">
          <h2>Our Roots & Wings Values</h2>
          <div className="flex flex-col gap-md">
            <div className="flex gap-md">
              <div className="flex flex-col gap-sm">
                <Image
                  src="/svgs/empowerment.svg"
                  alt="empowerment icon"
                  width={33}
                  height={40}
                />
                <div className="gap-xs">
                  <h3>Empowerment</h3>
                  <p style={{ maxWidth: "255px" }}>
                    Giving each child the confidence to activate their full
                    potential, fostering resilience in learning and in life.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-sm">
                <Image
                  src="/svgs/compassion.svg"
                  alt="compassion icon"
                  width={42}
                  height={39}
                />
                <div className="gap-xs">
                  <h3>Compassion</h3>
                  <p style={{ maxWidth: "255px" }}>
                    Empathetically addressing individual needs and challenges,
                    creating a nurturing environment where self-worth can
                    flourish.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-md">
              <div className="flex flex-col gap-sm">
                <Image
                  src="/svgs/community.svg"
                  alt="community icon"
                  width={42}
                  height={44}
                />
                <div className="gap-xs">
                  <h3>Community</h3>
                  <p style={{ maxWidth: "255px" }}>
                    Honouring and supporting the adult&apos;s role in empowering
                    their child, be it an educator, parent, carer or healthcare
                    professional.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-sm">
                <Image
                  src="/svgs/impact.svg"
                  alt="impact icon"
                  width={43}
                  height={47}
                />
                <div className="gap-xs">
                  <h3>Impact</h3>
                  <p style={{ maxWidth: "255px" }}>
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
