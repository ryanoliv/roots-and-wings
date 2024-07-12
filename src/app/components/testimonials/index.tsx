"use client";

import Image from "next/image";
import TestimonialsCarousel from "./testimonials-carousel";
import styles from "./testimonials-carousel/TestimonialsCarousel.module.scss";

export default function Testimonials() {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.gradientOverlay}></div>
      <div className="container relative flex flex-col justify-center gap-xl mb-md">
        <div className="flex flex-col gap-xs text-center">
          <h2>Testimonials</h2>
          <p>Here’s what parents and educators have to say.</p>
        </div>
        <TestimonialsCarousel />
      </div>
    </div>
  );
}
