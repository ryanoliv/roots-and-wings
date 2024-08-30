import styles from "../../OurProgramme.module.scss";
import Image from "next/image";

interface Pricing {
  type: string;
  typeDescription: string;
  price: string;
  paymentPlan: string;
  pricePerHour: string;
  features: string[];
  bgColor: string;
  textColor: string;
}

const pricing = [
  {
    type: "1:1 Bespoke Tutoring Packages",
    typeDescription:
      "Weekly bespoke tutoring sessions are bundled in 4, 8, or 12-week packages, delivered by our expert tutors using a holistic, play-based approach.",
    // typeDescription: "Weekly sessions, every week for 12 weeks.",
    price: "320",
    paymentPlan: "Bundled in 4, 8 or 12 week packages.",
    pricePerHour: "80",
    features: [
      "4, 8 or 12 x 1:1 tutoring sessions",
      "Weekly feedback sessions via WhatsApp",
      "The Happy Confident Company Wellbeing Journal",
      "Specific Learning Programmes for targeted learning barriers",
    ],
    bgColor: "var(--card-bg)",
    textColor: "var(--clr-black)",
  },
  {
    type: "The Roots to Wings Wellbeing Programme",
    typeDescription:
      "Watch your child go from struggling to thriving, in our 1:1 - in person or online - 12 week wellbeing programme delivered weekly by expert tutors.",
    price: "1200",
    pricePerHour: "80",
    paymentPlan: "Payment plan options of 3 or 4 months.",
    features: [
      "12 x 1:1 sessions",
      "3 x Pupil Progress Sessions/ Parent Consultations ",
      "Comprehensive Workbook",
      "Weekly session feedback via whatsapp",
    ],
    bgColor: "var(--clr-black)",
    textColor: "var(--clr-white)",
  },
];

export default function Pricing() {
  return (
    <div className="relative">
      <Image
        src="/images/characters/whale.png"
        alt="whale"
        width={473}
        height={381}
        className="whale"
      />
      <Image
        src="/images/characters/giraffe.png"
        alt="giraffe"
        width={243}
        height={323}
        className="giraffe"
      />
      <div className="container flex flex-col gap-xl items-center">
        <div className="flex flex-col items-center">
          <h2>Pricing</h2>
          <p style={{ maxWidth: "840px", textAlign: "center" }}>
            Unlock the door to your child&apos;s individual success with our
            affordable tutoring packages expertly designed with holistic care.
            Whether you choose in-person sessions or virtual learning, our
            prices resonate with the value of a tailored education.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-md md:gap-xs xl:gap-md">
          {pricing.map((price, index) => (
            <div
              key={index}
              className={`${styles.PricingCard} flex flex-col p-6 xl:p-12`}
              style={{
                backgroundColor: price.bgColor,
                color: price.textColor,
              }}
            >
              <div
                className="pb-4 xl:pb-8"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <h3 className={styles.PricingCardType}>{price.type}</h3>
                <p style={{ color: "inherit" }}>{price.typeDescription}</p>
              </div>
              <div
                className="py-8 flex flex-col"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <h4 className={styles.PricingCardPrice}>
                  £ {price.price}{" "}
                  {index === 0 && (
                    <span style={{ fontSize: "1.2rem" }}>/ month</span>
                  )}
                </h4>
                <span
                  className="italic text-center md:text-start"
                  style={{ fontSize: "0.8rem" }}
                >
                  {price.paymentPlan}
                </span>
                <p style={{ color: "inherit", marginTop: "var(--gap-sm)" }}>
                  Price per hour:{" "}
                  <span className="font-bold">£{price.pricePerHour}</span>
                </p>
              </div>
              <div className="pt-8 flex flex-col gap-sm">
                {price.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex gap-xs items-start">
                    <Image
                      src="/svgs/checkmark.svg"
                      alt="check mark"
                      width={20}
                      height={20}
                    />
                    <span style={{ lineHeight: "125%" }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
