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
              Children who understand their thoughts and emotions will know
              their self-worth, for life. <br />
              Roots & Wings Tutoring supports primary-aged children to succeed
              both academically and emotionally, through our playful,
              personalised and specialised approach to tutoring. <br /> <br />
              The Roots to Wings Way combines expert teachers, wellbeing
              practices, play-based learning & psychological developmental
              skills to help your child activate their full potential. <br />{" "}
              <br />
              Our commitment is simple: to empower your child holistically
              through transformative tutoring, helping them reach their full
              potential. We are here to transform education, prioritising
              wellbeing, individual growth, and comprehensive care. Together,
              let&apos;s re-imagine education for a brighter future.
            </p>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
}
