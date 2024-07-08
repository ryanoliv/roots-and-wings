import CalendlyCTA from "@/app/components/calendlyCTA";
import Separator from "@/app/components/separator";
import Image from "next/image";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <div className="relative">
      <div
        className="container flex flex-col gap-xl"
        style={{ maxWidth: "1218px" }}
      >
        <div className="flex flex-col-reverse md:flex-row gap-md xl:gap-xl items-center justify-center">
          <div className="flex flex-col gap-lg items-center md:items-start">
            <div className="flex flex-col">
              <h2>Who We Are</h2>
              <p
                className="text-center md:text-left"
                style={{ maxWidth: "580px" }}
              >
                Our mission is to empower children to understand their thoughts
                and emotions, know their self-worth and approach learning with
                resilience, so that they can thrive in learning and in life. Our
                diverse team of nurturing tutors, mental health advocates and
                creative champions are bringing a fresh perspective to primary
                learning.
              </p>
            </div>
            {/* <button className="btn btn-primary">Book a Consultation</button> */}
            <CalendlyCTA />
          </div>
          <div className="relative">
            <Image
              src="/images/Lions.png"
              alt="lions playing and laughing"
              width={495}
              height={362}
            />
          </div>
        </div>
        <div className="mx-auto">
          <div className="flex flex-col gap-sm">
            <h3 className="text-center md:text-start">Our Tutors Have:</h3>
            <div className="flex flex-col md:flex-row gap-md xl:gap-xl">
              <div className="flex flex-col gap-md items-center md:items-start">
                <Image
                  src="/svgs/experience.svg"
                  alt="experience icon"
                  width={80}
                  height={78}
                />
                <div className="flex flex-col gap-xs">
                  <h4 className="font-bold text-center md:text-start">
                    Experience
                  </h4>
                  <p className="text-center md:text-start whoweare-description">
                    11+ years of qualified teaching experience and have enhanced
                    DBS-checks.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-md items-center md:items-start">
                <Image
                  src="/svgs/sendtraining.svg"
                  alt="SEND training icon"
                  width={81}
                  height={77}
                />
                <div className="flex flex-col gap-xs">
                  <h4 className="font-bold text-center md:text-start">
                    S.E.N.D Training
                  </h4>
                  <p className="text-center md:text-start whoweare-description">
                    Experience with children who have special educational needs
                    and disabilities (SEND).
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-md items-center md:items-start">
                <Image
                  src="/svgs/adaptiveteaching.svg"
                  alt="adaptive teaching icon"
                  width={63}
                  height={77}
                />
                <div className="flex flex-col gap-xs">
                  <h4 className="font-bold text-center md:text-start">
                    Adaptive Teaching
                  </h4>
                  <p className="text-center md:text-start whoweare-description">
                    Been trained in adaptive teaching interventions for specific
                    learning difficulties (SpLDs).
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-md items-center md:items-start">
                <Image
                  src="/svgs/playfulapproach.svg"
                  alt="playful approach icon"
                  width={85}
                  height={77}
                />
                <div className="flex flex-col gap-xs">
                  <h4 className="font-bold text-center md:text-start">
                    Playful Approach
                  </h4>
                  <p className="text-center md:text-start whoweare-description">
                    Been trained in the{" "}
                    <Link
                      href="https://pz.harvard.edu/sites/default/files/PoP%20Book%203.27.23.pdf"
                      target="_blank"
                      className="underline"
                    >
                      Harvard Pedagogy of Play
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="https://www.lego.com/cdn/cs/sustainability/assets/blt7aaec03836d94291/LtP_What_Is_It_-_Parents_PDF.pdf"
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
      <Separator />
    </div>
  );
}
