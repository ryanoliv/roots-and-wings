import styles from "./AboutHero.module.scss";
import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="relative">
      <Image
        src="/images/about-pattern.png"
        alt="roots and wings pattern"
        fill
        style={{ objectFit: "cover", opacity: "0.9" }}
      />
      <div className="min-h-screen flex flex-col justify-center items-center gap-xl">
        <h1 className={styles.h1}>
          <span className={styles.span}>Say Hello</span> <br /> to a journey of
          self-discovery!
        </h1>
        <Image
          src="/svgs/drawn-arrow.svg"
          alt="hand drawn arrow"
          width={33}
          height={98}
        />
      </div>
    </div>
  );
}
