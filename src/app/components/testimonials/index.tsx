"use client";

import Image from "next/image";
import TestimonialsCarousel from "./testimonials-carousel";
import styles from "./testimonials-carousel/TestimonialsCarousel.module.scss";

export default function Testimonials() {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.gradientOverlay}></div>
      <div className="container relative flex flex-col justify-center gap-xl mb-md">
        {/* <Image
          src="/images/characters/callie-kite.png"
          alt="callie taking off on a kite"
          width={235}
          height={123}
          className={styles.callieKite}
        />
        <Image
          src="/images/characters/callie-surf.png"
          alt="callie surfing a hairclip"
          width={200}
          height={194}
          className={styles.callieSurf}
        /> */}
        <div className="flex flex-col gap-xs text-center">
          <h2>Testimonials</h2>
          <p>Here’s what parents and educators have to say.</p>
        </div>
        <TestimonialsCarousel />
      </div>
    </div>
  );
}
