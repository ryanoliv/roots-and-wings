import styles from "../../OurProgramme.module.scss";
import CalendlyCTA from "@/app/components/calendlyCTA";
import Separator from "@/app/components/separator";
import Image from "next/image";

const steps = [
  {
    blobSrc: "/svgs/blob-purp.svg",
    blobAlt: "purple blob",
    stepNumber: "Step 1",
    title: "Book a free consultation",
    description:
      "Tell us about your child: what's been hard, what they love, and what you've already tried. Together we'll work out which support fits best, whether that's after-school tutoring, coaching, or home education and flexi-school. If your child has an EHCP, we'll talk through how funding might work. There's no pressure, and if we're not the right fit, we'll point you towards something that might help.",
    stepClr: "var(--clr-purple)",
  },
  {
    blobSrc: "/svgs/blob-yellow.svg",
    blobAlt: "yellow blob",
    stepNumber: "Step 2",
    title: "Home visit",
    description:
      "We come to you. Meeting your child at home, where they feel most comfortable, lets us get to know them properly: their strengths, their needs and how they like to learn. If online, we book a call in with you and your child. An hour to get to know them.",
    stepClr: "var(--clr-yellow)",
  },
  {
    blobSrc: "/svgs/blob-turq.svg",
    blobAlt: "turq blob",
    stepNumber: "Step 3",
    title: "Meet your Roots & Wings expert",
    description:
      "We match your child with the tutor or coach most likely to click with them. That relationship matters more than anything else, because a child who feels understood is a child who's ready to learn.",
    stepClr: "var(--clr-turq)",
  },
  {
    blobSrc: "/svgs/blob-red.svg",
    blobAlt: "red blob",
    stepNumber: "Step 4",
    title: "Start, and see the difference",
    description:
      "Sessions begin, in your home or online. Every session starts by settling your child, then the work builds from there. You're kept in the loop through our parent WhatsApp group and regular feedback sessions, so you always know how they're getting on and what's coming next.",
    stepClr: "var(--clr-red)",
  },
  // {
  //   blobSrc: "/svgs/blob-blue.svg",
  //   blobAlt: "blue blob",
  //   stepNumber: "Step 5",
  //   title: "Parent consultation (2 of 3)",
  //   description:
  //     "During our next check-in session, we prioritise assessing your child’s progress, addressing any lingering questions or concerns. In doing so, we can identify areas that may require additional attention or improvement. We maintain channels of open communication and address any queries or uncertainties.",
  //   stepClr: "var(--clr-blue)",
  // },
  // {
  //   blobSrc: "/svgs/blob-purp.svg",
  //   blobAlt: "purple blob",
  //   stepNumber: "Step 6",
  //   title: "Roots to Wings programme cont.",
  //   description:
  //     "In our next part of the journey, we focus on nurturing harmonious relationships and explore the power of positive self-talk, boundary-setting, and growth mindsets. This transformative process elevates us from comfort to courage, empowering us to cultivate authentic connections and unlock our full potential.",
  //   stepClr: "var(--clr-purple)",
  // },
  // {
  //   blobSrc: "/svgs/blob-yellow.svg",
  //   blobAlt: "yellow blob",
  //   stepNumber: "Step 7",
  //   title: "Parent consultation (3 of 3)",
  //   description:
  //     "As we wrap up our exciting 12-week adventure, it's time for a little reflection and celebration! We'll revisit all of the fun that your child has had and the deep learning that we have uncovered together. Then, it's decision time: do we want to keep the tutoring train rolling, or are we ready to fly solo with our newfound skills?",
  //   stepClr: "var(--clr-yellow)",
  // },
];

export default function YourJourney() {
  return (
    <div className="flex flex-col pt-lg md:pt-0">
      <div className="container flex flex-col md:flex-row w-full justify-between gap-xl md:gap-md items-start">
        <div className={styles.yourJourneyStickyContainer}>
          <div className="flex flex-col gap-xs text-center md:text-start">
            <h1>Our Services</h1>
            <p className="italic" style={{ opacity: 0.8 }}>
              Every family deserves an education path that works for them.
            </p>
            <p style={{ maxWidth: "505px" }}>
              We work with children who are finding school really hard right
              now, whether they&apos;re struggling to attend or they&apos;re
              there every day struggling to access their learning. We support
              them through one-to-one and group tutoring, coaching,
              flexi-schooling and home education.
              <br />
              <br />
              That includes children with SEND and those with EHCPs, and
              children dealing with anxiety, emotionally based school
              avoidance, ADHD, autism, dyslexia and other specific learning
              difficulties.
            </p>
          </div>
          <CalendlyCTA />
          <div className="flex flex-col">
            <small className="flex items-center">
              * For optimal success we suggest one session per week (online or
              in-person).
            </small>
            <small className="flex items-center">
              * Three parent consultations included ensuring a holistic approach
              with comprehensive care.
            </small>
          </div>
        </div>
        <div className="flex flex-col gap-lg text-center md:text-start">
          <div className="flex flex-col gap-xs">
            <h2>How it works</h2>
            <p className="italic" style={{ opacity: 0.8 }}>
              Starting with us is simple, and you&apos;re involved at every
              step.
            </p>
          </div>
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-xs xl:gap-lg"
              style={{ maxWidth: "685px" }}
            >
              <div className="flex flex-col gap-xs items-center">
                <div style={{ width: "41px", height: "39px" }}>
                  <Image
                    src={step.blobSrc}
                    alt={step.blobAlt}
                    width={41}
                    height={39}
                  />
                </div>
                <div
                  style={{ width: "2px", height: "100%", position: "relative" }}
                >
                  <div className="journey-line"></div>
                </div>
              </div>
              <div className="flex flex-col gap-sm">
                <span style={{ fontStyle: "italic", color: step.stepClr }}>
                  {step.stepNumber}
                </span>
                <div className="flex flex-col gap-xs">
                  <h2
                    className="text-center md:text-start"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1.7rem",
                      fontWeight: "bold",
                    }}
                  >
                    {step.title}
                  </h2>
                  <p>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Separator />
    </div>
  );
}
