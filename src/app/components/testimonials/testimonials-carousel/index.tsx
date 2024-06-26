import Image from "next/image";
import styles from "./TestimonialsCarousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const testimonialsData = [
  {
    id: 1,
    name: "Parent",
    title: "Year 2 Child",
    testimonial:
      "Alex has been a fantastic tutor for my daughter. Her focus on wellbeing and resilience is invaluable and my daughter's confidence and communication has improved as a result. I'd highly recommend her.",
  },
  {
    id: 2,
    name: "Parent",
    title: "Year 1 Child",
    testimonial:
      "Rex's confidence has skyrocketed this year! He seems to enjoy every class. Overall we are thrilled with him!",
  },
  {
    id: 3,
    name: "Teacher Feedback",
    title: "Year 2 Child",
    testimonial:
      "He always shows impeccable manners and conducts himself well, both in and out of school. He has matured and his confidence has developed immensely. He now makes sensible decisions for his leanings such as avoiding sitting next to his friends to ensure that he stays focused and produces work to the best of his ability. He is a delight to have in class, his love of learning is a joy.",
  },
  {
    id: 4,
    name: "Teacher Feedback",
    title: "Year 2 Child",
    testimonial:
      "E comes into the classroom with a big smile and an open mind, ready and willing to learn. At the start of the year, she was not the confident, knowledge seeker that she presents today. She has come on tremendously with her understanding and ability to communicate her ideas, particularly in DT and Science. She deals positively with praise but can sometimes get frustrated with setbacks and can become disheartened. This said she is beginning to realise that it is not a bad thing to get something wrong and that we can learn from our mistakes. She has a positive attitude towards her studies, has a strong sense of responsibility, and strives hard to do her best!",
  },
  {
    id: 5,
    name: "Parent",
    title: "Year 2 Child",
    testimonial:
      "Aurelia has gained a lot more confidence this year and is far more vocal in class and has demonstrated increasing sureness in new and unfamiliar situations. She is also facing challenges with a positive attitude. She is beginning to not be deterred by difficult tasks and has shown a lot more resilience particularly in maths and learning lessons from her mistakes.",
  },
];

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

export default function TestimonialsCarousel() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "50px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: false,
    variableWidth: true,
    centerMode: true,
  };
  return (
    <div>
      <Slider {...carouselSettings}>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className={styles.testimonialsCard}>
            <p className={styles.testimonialQuote}>
              &quot;{testimonial.testimonial}&quot;
            </p>
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
