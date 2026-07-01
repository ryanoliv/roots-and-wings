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
              education structures do not always align with how neurodivergent
              children learn best. Standardised pacing, performance-based
              assessment and highly structured classroom environments work well
              for some learners. For others, they can contribute to anxiety,
              disengagement and a gradual erosion of confidence.
              <br /> <br />
              We believe education can be designed more intelligently. Through the
              Connect-Ed Method, we place self-regulation, emotional development
              and relational safety at the centre of learning. These are not
              add-ons. They are the foundation.
              <br /> <br />
              When a child feels regulated, understood and genuinely engaged,
              academic progress becomes sustainable. That is the work.
            </p>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
}