import styles from "./CTA.module.scss";
import Image from "next/image";

export default function CTA() {
  return (
    <div className={styles.ctaOuter}>
      <Image
        src="/svgs/cta-squiggle.svg"
        alt="squiggle"
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="flex justify-center">
        <div className={styles.ctaContainer}>
          <Image
            src="/svgs/cta-shape-top.svg"
            alt="shape 1"
            width={152}
            height={128}
            style={{
              position: "absolute",
              top: "-75px",
              left: "-55px",
            }}
          />
          <Image
            src="/svgs/cta-shape-bottom.svg"
            alt="shape 2"
            width={117}
            height={150}
            style={{
              position: "absolute",
              bottom: "-45px",
              right: "-55px",
            }}
          />
          <h2 className={styles.ctaTitle}>
            Book a free consultation call and kick-start your child&apos;s
            educational journey now.
          </h2>
          <div className="flex flex-col items-start gap-sm">
            <p className={styles.ctaSubTitle}>
              Chat with our team and find out more about how Roots & Wings
              Tutoring can help your child and the whole family.
            </p>
            <button className="btn btn-primary">Book a Consultation</button>
          </div>
        </div>
      </div>
    </div>
  );
}
