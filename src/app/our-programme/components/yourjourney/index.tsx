import Image from "next/image";

const steps = [
  {
    blobSrc: "/svgs/blob-purp.svg",
    blobAlt: "purple blob",
    stepNumber: "Step 1",
    title: "Book a complimentary consultation",
    description:
      "At the heart of our approach lies the importance of building meaningful connections. Our educational specialists prioritise getting to know both you and your child, taking the time to understand their unique needs and learning preferences on a deeper level. By fostering this collaborative and personalised approach, we aim to empower your child to thrive academically and beyond.",
    stepClr: "var(--clr-purple)",
  },
  {
    blobSrc: "/svgs/blob-yellow.svg",
    blobAlt: "yellow blob",
    stepNumber: "Step 2",
    title: "Get matched with your Roots & Wings expert",
    description:
      "Tailoring our approach to your child's individual requirements, we carefully assess their strengths, weaknesses, and learning style to recommend the most suitable tutor for their Roots to Wings journey. By understanding their unique needs, we can provide a personalised tutoring experience that maximises trust, understanding, and confidence. Your child will receive both academic support and emotional guidance to foster their overall growth and development.",
    stepClr: "var(--clr-yellow)",
  },
  {
    blobSrc: "/svgs/blob-turq.svg",
    blobAlt: "turq blob",
    stepNumber: "Step 3",
    title: "Parent consultation (1 of 3)",
    description:
      "Throughout our collaborative process, we take the time to thoroughly review any challenges your family may be facing and identify opportunities for growth. By setting specific, achievable goals, we ensure that every step of the educational journey is purposeful and tailored to your family's unique needs and aspirations. We work together to paint a clear picture of where you want to be, empowering you to make informed decisions and take meaningful actions towards achieving your family objectives.",
    stepClr: "var(--clr-turq)",
  },
  {
    blobSrc: "/svgs/blob-red.svg",
    blobAlt: "red blob",
    stepNumber: "Step 4",
    title: "Start the Roots to Wings Programme",
    description:
      "Our journey begins with self-discovery, where we connect deeply with our personal identity and strengths. Through collaboration and support, we empower ourselves to fully embrace our unique qualities and abilities. By cultivating a positive self-image grounded in self-awareness, we lay the groundwork for personal growth and fulfillment.",
    stepClr: "var(--clr-red)",
  },
  {
    blobSrc: "/svgs/blob-blue.svg",
    blobAlt: "blue blob",
    stepNumber: "Step 5",
    title: "Parent consultation (2 of 3)",
    description:
      "During our next check-in session, we prioritise assessing your child’s progress, addressing any lingering questions or concerns. In doing so, we can identify areas that may require additional attention or improvement. We maintain channels of open communication and address any queries or uncertainties.",
    stepClr: "var(--clr-blue)",
  },
  {
    blobSrc: "/svgs/blob-purp.svg",
    blobAlt: "purple blob",
    stepNumber: "Step 6",
    title: "Roots to Wings programme cont.",
    description:
      "In our next part of the journey, we focus on nurturing harmonious relationships and explore the power of positive self-talk, boundary-setting, and growth mindsets. This transformative process elevates us from comfort to courage, empowering us to cultivate authentic connections and unlock our full potential.",
    stepClr: "var(--clr-purple)",
  },
  {
    blobSrc: "/svgs/blob-yellow.svg",
    blobAlt: "yellow blob",
    stepNumber: "Step 7",
    title: "Parent consultation (3 of 3)",
    description:
      "As we wrap up our exciting 12-week adventure, it's time for a little reflection and celebration! We'll revisit all of the fun that your child has had and the deep learning that we have uncovered together. Then, it's decision time: do we want to keep the tutoring train rolling, or are we ready to fly solo with our newfound skills?",
    stepClr: "var(--clr-yellow)",
  },
];

export default function YourJourney() {
  return (
    <div className="flex flex-col pt-lg">
      <div className="container flex justify-between w-full items-start">
        <div
          className="flex flex-col gap-md items-start"
          style={{ position: "sticky", top: "208px" }}
        >
          <div className="flex flex-col gap-xs">
            <h1>Your Journey</h1>
            <p style={{ maxWidth: "505px" }}>
              Guiding you on each step of our 12-week journey together. Our
              tutoring programme includes one session per week (online or
              in-person) for the 12 week journey. Included is three parent
              consultations. Each lesson is carefully crafted to blend academic
              enrichment with emotional wellbeing, by weaving together
              mindfulness, self-regulation and play-based academic learning.
            </p>
          </div>
          <button className="btn btn-primary">Book a Consultation</button>
        </div>
        <div className="flex flex-col gap-lg">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-lg"
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
