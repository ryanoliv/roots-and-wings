import styles from "../../OurProgramme.module.scss";
import CalendlyCTA from "@/app/components/calendlyCTA";
import Separator from "@/app/components/separator";
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
    title: "Select your Programme",
    description:
      "Whether you are looking for academic tutoring or our wellbeing programme. We are here to support you and your child’s needs. We help children that are struggling with anxious mindsets, friendships, challenges or barriers to learning.  Go from struggling to thriving resulting in resilient, confident and engaged learners.",
    stepClr: "var(--clr-turq)",
  },
  {
    blobSrc: "/svgs/blob-red.svg",
    blobAlt: "red blob",
    stepNumber: "Step 4",
    title: "Start your Programme",
    description:
      "Through collaboration and support, we empower your child to fully embrace their unique qualities and abilities.",
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
    <div className="flex flex-col pt-lg">
      <div className="container flex flex-col md:flex-row w-full justify-between gap-xl md:gap-md items-start">
        <div className={styles.yourJourneyStickyContainer}>
          <div className="flex flex-col gap-xs text-center md:text-start">
            <h1>Your Journey</h1>
            <p style={{ maxWidth: "505px" }}>
              Watch your child go from struggling to thriving! Guiding you on
              each step of our journey together. Whether you are choosing our
              academic tutoring or our wellbeing programme, our 4 step approach:
              Connect, Empower, Cultivate and Enhance transforms your child into
              a confident, resilient and engaged learner! It&apos;s the
              parents&apos; journey as much as the child&apos;s.
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
