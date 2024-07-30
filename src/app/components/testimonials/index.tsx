"use client";

import TestimonialsCarousel from "./testimonials-carousel";
import styles from "./testimonials-carousel/TestimonialsCarousel.module.scss";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  testimonial: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.gradientOverlay}></div>
      <div className="container relative flex flex-col justify-center gap-xl mb-md">
        <div className="flex flex-col gap-xs text-center">
          <h2>Testimonials</h2>
          <p>Here’s what parents and educators have to say.</p>
        </div>
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </div>
  );
}
