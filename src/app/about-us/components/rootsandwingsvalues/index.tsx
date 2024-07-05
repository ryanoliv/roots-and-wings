import Image from "next/image";
import YouTubeVideo from "../../../components/youtubevideo";
import ValueCard from "./valuecard";
import { valuesData } from "./valuecard/valuesData";

export default function RootsAndWingsValues() {
  return (
    <div className="relative py-lg">
      <div className="about-squiggle-container">
        <Image
          src="/svgs/about-squiggle.svg"
          alt="purple squiggle"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="container flex flex-col gap-md items-center">
        <h2>Our Roots & Wings Values</h2>
        <div className="flex flex-col items-center justify-center gap-md xl:gap-xl">
          <div className="flex gap-sm justify-center flex-wrap xl:flex-nowrap">
            {valuesData.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
          <div className="flex flex-col gap-xs items-center">
            <div style={{ width: "100%" }}>
              <YouTubeVideo />
            </div>
            <span className="italic" style={{ fontSize: "14px" }}>
              Our idea Sprout, Ally.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
