import Image from "next/image";

export default function LearnPlayGrow() {
  return (
    <div className="flex flex-col pt-lg">
      <div className="container flex gap-lg items-center justify-center">
        <Image
          src="/svgs/learnplaygrow.svg"
          alt="learn play grow graphic"
          width={468}
          height={342}
        />
        <div className="flex flex-col gap-xs">
          <h2 style={{ fontSize: "2.625rem" }}>We Believe in Children</h2>
          <p style={{ maxWidth: "655px" }}>
            Children who understand their thoughts and emotions will know their
            self-worth, for life. <br />
            Roots & Wings Tutoring supports primary-aged children to succeed
            both academically and emotionally, through our playful, personalised
            and specialised approach to tutoring. <br /> <br />
            The Roots to Wings Way combines expert teachers, wellbeing
            practices, play-based learning & psychological developmental skills
            to help your child activate their full potential. <br /> <br />
            Become part of this thriving community, either in-person or online,
            so that your child&apos;s academics and relationships can flourish
            together.
          </p>
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
