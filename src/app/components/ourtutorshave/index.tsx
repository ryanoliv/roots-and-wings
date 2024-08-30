import Link from "next/link";
import Image from "next/image";

export default function OurTutorsHave() {
  return (
    <div className="mx-auto">
      <div className="flex flex-col gap-sm">
        <h3
          className="text-center"
          style={{ fontFamily: "var(--font-heading)", fontSize: "2.2rem" }}
        >
          Our Tutors Have:
        </h3>
        <div className="flex flex-col md:flex-row gap-md xl:gap-xl">
          <div className="flex flex-col gap-md items-center">
            <Image
              src="/svgs/experience.svg"
              alt="experience icon"
              width={80}
              height={78}
            />
            <div className="flex flex-col gap-xs">
              <h4 className="font-bold text-center">Experience</h4>
              <p className="text-center whoweare-description">
                11+ years of qualified teaching experience and have enhanced
                DBS-checks.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-md items-center">
            <Image
              src="/svgs/sendtraining.svg"
              alt="SEND training icon"
              width={81}
              height={77}
            />
            <div className="flex flex-col gap-xs">
              <h4 className="font-bold text-center">S.E.N.D Training</h4>
              <p className="text-center whoweare-description">
                Experience with children who have special educational needs and
                disabilities (SEND).
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-md items-center">
            <Image
              src="/svgs/adaptiveteaching.svg"
              alt="adaptive teaching icon"
              width={63}
              height={77}
            />
            <div className="flex flex-col gap-xs">
              <h4 className="font-bold text-center">Adaptive Teaching</h4>
              <p className="text-center whoweare-description">
                Been trained in adaptive teaching interventions for specific
                learning difficulties (SpLDs).
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-md items-center">
            <Image
              src="/svgs/playfulapproach.svg"
              alt="playful approach icon"
              width={85}
              height={77}
            />
            <div className="flex flex-col gap-xs">
              <h4 className="font-bold text-center">Playful Approach</h4>
              <p className="text-center whoweare-description">
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
  );
}
