import Image from "next/image";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <div className="relative">
      <div
        className="container flex flex-col gap-xl"
        style={{ maxWidth: "1218px" }}
      >
        <div className="flex gap-xl items-center justify-center">
          <div className="flex flex-col gap-lg items-start">
            <div className="flex flex-col">
              <h2>Who We Are</h2>
              <p style={{ maxWidth: "580px" }}>
                Our mission is to empower children to understand their thoughts
                and emotions, know their self-worth and approach learning with
                resilience, so that they can thrive in learning and in life. Our
                diverse team of nurturing tutors, mental health advocates and
                creative champions are bringing a fresh perspective to primary
                learning.
              </p>
            </div>
            <button className="btn btn-primary">Book a Consultation</button>
          </div>
          <div className="relative">
            <Image
              src="/images/Lions.png"
              alt="lions playing and laughing"
              width={495}
              height={362}
              // fill
              // style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="mx-auto">
          <div className="flex flex-col gap-sm">
            <h3>Our Tutors Have:</h3>
            <div className="flex gap-xl">
              <div className="flex flex-col gap-md">
                <Image
                  src="/svgs/experience.svg"
                  alt="experience icon"
                  width={80}
                  height={78}
                />
                <div className="flex flex-col gap xs">
                  <h4 className="font-bold">Experience</h4>
                  <p style={{ maxWidth: "240px" }}>
                    11+ years of qualified teaching experience and have enhanced
                    DBS-checks.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-md">
                <Image
                  src="/svgs/sendtraining.svg"
                  alt="SEND training icon"
                  width={81}
                  height={77}
                />
                <div className="flex flex-col gap xs">
                  <h4 className="font-bold">S.E.N.D Training</h4>
                  <p style={{ maxWidth: "240px" }}>
                    Experience with children who have special educational needs
                    and disabilities (SEND).
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-md">
                <Image
                  src="/svgs/adaptiveteaching.svg"
                  alt="adaptive teaching icon"
                  width={63}
                  height={77}
                />
                <div className="flex flex-col gap xs">
                  <h4 className="font-bold">Adaptive Teaching</h4>
                  <p style={{ maxWidth: "240px" }}>
                    Been trained in adaptive teaching interventions for specific
                    learning difficulties (SpLDs).
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-md">
                <Image
                  src="/svgs/playfulapproach.svg"
                  alt="playful approach icon"
                  width={85}
                  height={77}
                />
                <div className="flex flex-col gap xs">
                  <h4 className="font-bold">Playful Approach</h4>
                  <p style={{ maxWidth: "240px" }}>
                    Been trained in the{" "}
                    <Link
                      href="https://pz.harvard.edu/projects/pedagogy-of-play"
                      target="_blank"
                      className="underline"
                    >
                      Harvard Pedagogy of Play
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="https://learningthroughplay.com/explore-the-research/the-scientific-case-for-learning-through-play"
                      target="_blank"
                      className="underline"
                    >
                      Lego Foundation
                    </Link>{" "}
                    play-based approach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative separator-container">
        <Image
          src="/svgs/separator.svg"
          alt="squiggle"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
