import Image from "next/image";
import Separator from "../separator";

export default function LearnPlayGrow() {
  return (
    <div className="flex flex-col xl:pt-lg">
      <div className="container flex items-center justify-center">
        <div className="flex gap-lg flex-col items-center xl:flex-row">
          <Image
            src="/images/learnplaygrow.png"
            alt="learn play grow graphic"
            width={468}
            height={389}
            className="px-4 md:px-0"
          />
          <div className="flex flex-col gap-xs">
            <h2 className="learnplaygrow-title">We Believe in Children</h2>
            <p className="webelieveinchildren-text">
              Not in fixing them or managing their behaviour, but in recognising
              their capacity to grow when the right conditions are in place.
              <br /> <br />
              Roots &amp; Wings was built on a simple observation: traditional
              education isn&apos;t built around how neurodivergent children learn.
              A one-size-fits-all pace, constant testing, rigid classroom
              routines. These work well enough for some children. For others,
              they slowly chip away at confidence, until anxiety and
              disengagement take its place.
              <br /> <br />
              We think education can be designed more intelligently. The
              Connect-Ed Method puts managing emotions, emotional development
              and feeling safe with the people around them at the centre of
              learning, not as add-ons but as the foundation everything else is
              built on.
              <br /> <br />
              Because when a child feels calm, understood and genuinely
              engaged, progress starts to hold. It stops being a battle. That
              is the work.
            </p>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
}