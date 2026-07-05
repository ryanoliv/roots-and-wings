import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className="hero-container relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 
        Fixed the picture container: 
        Added absolute positioning, inset-0, and a negative z-index so the images 
        act strictly as a background pattern and do not disrupt the flex layout. 
      */}
      <div className="landing-hero-pattern-container absolute inset-0 -z-10">
        <picture>
          <source
            srcSet="/images/hero-pattern-mobile.png"
            media="(max-width: 500px)"
          />
          <source
            srcSet="/images/hero-pattern-tablet.png"
            media="(max-width: 1024px)"
          />
          <source
            srcSet="/images/hero-pattern.png"
            media="(min-width: 1025px)"
          />
          <img
            src="/images/hero-pattern.png"
            alt="roots and wings confetti pattern"
            className="w-full h-full object-cover opacity-40"
          />
        </picture>
      </div>

      <div className="container relative z-10 flex flex-col gap-10 md:gap-14 items-center text-center px-4 max-w-5xl">
        <div className="flex flex-col items-center gap-6">
          {/* 
            Maintained the semantic <h1> tag for SEO, but overrode the global sizing 
            using a CSS clamp. This ensures it scales fluidly and elegantly across devices.
            "text-balance" prevents awkward trailing words.
          */}
          <h1 
            className="font-bold tracking-tight text-balance"
            style={{ 
              fontSize: "clamp(2.25rem, 5vw, 4rem)", 
              lineHeight: "1.1", 
              color: "var(--clr-black)" 
            }}
          >
            Redesigning education for neurodivergent children and the families who love them.
          </h1>
          
          {/* 
            Optimized the copy: Removed the company definition (which is implied) 
            and focused directly on the core philosophy and the immediate value provided.
          */}
          <p 
            className="text-lg md:text-xl text-balance max-w-3xl"
            style={{ opacity: 0.85, lineHeight: "160%", color: "var(--clr-black)" }}
          >
            Children learn best when they feel safe, understood, and genuinely connected. Through bespoke tutoring, flexi-schooling, and our Connect-Ed Method, we build the academic and emotional foundations your child needs to thrive.
          </p>
        </div>

        <div className="relative p-4 mt-2">
          <Image
            src="/svgs/btn-accent-top.svg"
            alt="accent lines"
            width={20}
            height={19}
            className="absolute top-0 left-0"
          />
          <Link 
            href="/#learnplaygrow" 
            className="btn btn-primary"
            style={{ 
              backgroundColor: "var(--clr-black)", 
              color: "var(--clr-white)", 
              border: "none",
              padding: "1rem 2.5rem",
              fontWeight: "bold",
              borderRadius: "0.5rem"
            }}
          >
            Explore More
          </Link>
          <Image
            src="/svgs/btn-accent-bottom.svg"
            alt="accent lines"
            width={20}
            height={16}
            className="absolute bottom-0 right-0"
          />
        </div>

        <div className="hand-drawn-arrow-container mt-4 xl:mt-8">
          <Image
            src="/svgs/drawn-arrow.svg"
            alt="hand drawn arrow"
            width={31}
            height={92}
            className="hand-drawn-arrow opacity-80"
          />
        </div>
      </div>
    </div>
  );
}