import styles from "./ArticleCTA.module.scss";
import MailchimpForm from "@/app/components/MailchimpForm";
import Image from "next/image";

export default function ArticleCTA() {
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/svgs/cta-squiggle.svg"
        alt="squiggle"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className={styles.articleCTAContainer}>
        <div className={styles.articleCTACard}>
          <Image
            src="/svgs/cta-shape-top-small.svg"
            alt="shape 1"
            width={89}
            height={57}
            className={styles.articleCTAShapeTop}
          />
          <Image
            src="/svgs/cta-shape-bottom-small.svg"
            alt="shape 2"
            width={82}
            height={106}
            className={styles.articleCTAShapeBot}
          />
          <p className={styles.articleCTATitle}>Subscribe to our newsletter</p>
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
