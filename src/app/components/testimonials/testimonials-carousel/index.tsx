import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./TestimonialsCarousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  testimonial: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{
        ...style,
        borderRadius: "50%",
        backgroundColor: "var(--clr-purple)",
        border: "1px solid var(--clr-purple-dark)",
        width: "60px",
        height: "60px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        zIndex: "35",
      }}
      onClick={onClick}
    >
      <Image
        src="/svgs/carousel-arrow-next.svg"
        alt="carousel arrow next"
        width={20}
        height={18}
      />
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow`}
      style={{
        ...style,
        borderRadius: "50%",
        backgroundColor: "var(--clr-purple)",
        border: "1px solid var(--clr-purple-dark)",
        width: "60px",
        height: "60px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        zIndex: "35",
      }}
      onClick={onClick}
    >
      <Image
        src="/svgs/carousel-arrow-prev.svg"
        alt="carousel arrow prev"
        width={20}
        height={18}
      />
    </div>
  );
}

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const [centerPadding, setCenterPadding] = useState("50px");
  const [variableWidth, setVariableWidth] = useState(true);

  useEffect(() => {
    function updateSettings() {
      const screenwidth = window.innerWidth;
      if (screenwidth < 768) {
        setCenterPadding("10px");
        setVariableWidth(false);
      } else {
        setCenterPadding("50px");
        setVariableWidth(true);
      }
    }

    updateSettings();
    window.addEventListener("resize", updateSettings);

    return () => window.removeEventListener("resize", updateSettings);
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 6000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: centerPadding,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: false,
    variableWidth: variableWidth,
    centerMode: true,
  };
  return (
    <div>
      <Slider {...carouselSettings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialsCard}>
            <p className={styles.testimonialQuote}>{testimonial.testimonial}</p>
            <div className="flex flex-col">
              <h3 className={styles.testimonialName}>{testimonial.name}</h3>
              <h4 className={styles.testimonialTitle}>{testimonial.title}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
