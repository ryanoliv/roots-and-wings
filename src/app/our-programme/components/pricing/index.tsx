import Image from "next/image";

const pricing = [
  {
    bgColor: "var(--card-bg)",
    textColor: "var(--clr-black)",
    type: "In-Person Programme",
    price: "1499",
    features: [
      "3 x Parent education consults",
      "12 x In-person tutoring sessions from the comfort of your home",
      "1 x Workbook to keep for life",
      "12 x Weekly feedback via WhatsApp",
      "3 x Parent goal check-in session",
      "In person, interactive play-based learning activities",
    ],
    excludes: [],
  },
  {
    bgColor: "var(--clr-black)",
    textColor: "var(--clr-white)",
    type: "Online Programme",
    price: "1199",
    features: [
      "3 x Parent education consults",
      "12 x Online tutoring sessions from the comfort of your home",
      "1 x Workbook to keep for life",
      "12 x Weekly feedback via WhatsApp",
    ],
    excludes: [
      "3 x Parent goal check-in session",
      "In person, interactive play-based learning activities",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="container flex flex-col gap-xl items-center">
      <div className="flex flex-col items-center">
        <h2>Pricing</h2>
        <p style={{ maxWidth: "840px", textAlign: "center" }}>
          Unlock the door to your child&apos;s individual success with our
          affordable tutoring packages expertly designed with holistic care.
          Whether you choose in-person sessions or virtual learning, our prices
          resonate with the value of a tailored education.
        </p>
      </div>
      <div className="flex gap-md">
        {pricing.map((price, index) => (
          <div
            key={index}
            className="flex flex-col p-12"
            style={{
              border: "1px solid var(--border)",
              backgroundColor: price.bgColor,
              color: price.textColor,
              boxShadow: "var(--card-shadow)",
              maxWidth: "480px",
              borderRadius: "24px",
            }}
          >
            <div
              className="pb-8"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <h3 className="font-bold" style={{ fontSize: "1.125rem" }}>
                {price.type}
              </h3>
            </div>
            <div
              className="py-8 flex flex-col"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <h4 style={{ fontSize: "3.5rem" }}>£ {price.price}</h4>
              <span className="italic" style={{ fontSize: "0.8rem" }}>
                All prices are VAT exclusive. <br /> Payment plans of 3–6 months
                may be arranged upon request.
              </span>
            </div>
            <div className="pt-8 flex flex-col gap-sm">
              {price.features.map((feature, index) => (
                <div key={index} className="flex gap-xs items-start">
                  <Image
                    src="/svgs/checkmark.svg"
                    alt="check mark"
                    width={20}
                    height={20}
                  />
                  <span style={{ lineHeight: "125%" }}>{feature}</span>
                </div>
              ))}
              {price.excludes.map((exclude, excludeIndex) => (
                <div
                  key={excludeIndex}
                  className="flex gap-xs items-start opacity-30"
                >
                  <Image
                    src="/svgs/cross-mark.svg"
                    alt="cross mark"
                    width={20}
                    height={20}
                  />
                  <span style={{ lineHeight: "125%" }}>{exclude}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
