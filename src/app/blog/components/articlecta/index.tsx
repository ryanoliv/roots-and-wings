import MailchimpForm from "@/app/components/MailchimpForm";
import Image from "next/image";

export default function ArticleCTA() {
  return (
    <div className="relative">
      <Image
        src="/svgs/cta-squiggle.svg"
        alt="squiggle"
        fill
        style={{ objectFit: "cover" }}
      />
      <div
        className="py-doublexl flex items-center justify-center"
        style={{ backgroundColor: "var(--clr-blue)" }}
      >
        <div
          className="px-10 md:px-28 py-12 flex flex-col gap-sm relative"
          style={{
            backgroundColor: "var(--clr-white)",
            borderRadius: "18px",
            border: "1px solid var(--border)",
            boxShadow: "var(--card-shadow)",
            zIndex: "5",
          }}
        >
          <Image
            src="/svgs/cta-shape-top-small.svg"
            alt="shape 1"
            width={89}
            height={57}
            style={{
              position: "absolute",
              top: "-35px",
              left: "-36px",
            }}
          />
          <Image
            src="/svgs/cta-shape-bottom-small.svg"
            alt="shape 2"
            width={82}
            height={106}
            style={{
              position: "absolute",
              bottom: "-33px",
              right: "-36px",
            }}
          />
          <p className="font-bold" style={{ fontSize: "1.2rem" }}>
            Subscribe to our newsletter
          </p>
          <MailchimpForm
            inputStyle={{
              border: "1px solid var(--clr-black)",
              backgroundColor: "var(--card-bg)",
            }}
            btnStyles={{
              border: "1px solid var(--clr-black)",
              backgroundColor: "var(--clr-blue)",
            }}
            placeholderColorClass="custom-placeholder"
          />
        </div>
      </div>
    </div>
  );
}
