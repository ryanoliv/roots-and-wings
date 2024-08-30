import CalendlyCTA from "@/app/components/calendlyCTA";
import Separator from "@/app/components/separator";
import Image from "next/image";

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
      </div>
      <Separator />
    </div>
  );
}
