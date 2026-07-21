"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

interface LoaderProps {
  onComplete: () => void;
}

interface SvgFiles {
  [key: string]: string;
}

interface SvgSizes {
  [key: string]: { width: string; height: string };
}

const svgFiles: SvgFiles = {
  R: "/logos/logo-separated/r.svg",
  OYellow: "/logos/logo-separated/o-yellow.svg",
  Opurp: "/logos/logo-separated/o-purple.svg",
  T: "/logos/logo-separated/t-turq.svg",
  SBlue: "/logos/logo-separated/s-blue.svg",
  CallieAnd: "/logos/logo-separated/callie-and.svg",
  W: "/logos/logo-separated/w.svg",
  I: "/logos/logo-separated/i.svg",
  N: "/logos/logo-separated/n.svg",
  G: "/logos/logo-separated/g.svg",
  SPurp: "/logos/logo-separated/s-purple.svg",
};

const svgSizes: SvgSizes = {
  R: { width: "32px", height: "41px" },
  OYellow: { width: "40px", height: "40px" },
  Opurp: { width: "40px", height: "40px" },
  T: { width: "21px", height: "51px" },
  SBlue: { width: "34px", height: "42px" },
  CallieAnd: { width: "36px", height: "54px" },
  W: { width: "59px", height: "39px" },
  I: { width: "21px", height: "50px" },
  N: { width: "43px", height: "39px" },
  G: { width: "44px", height: "55px" },
  SPurp: { width: "32px", height: "40px" },
};

const topRowKeys = ["R", "OYellow", "Opurp", "T", "SBlue", "CallieAnd"];
const bottomRowKeys = ["W", "I", "N", "G", "SPurp"];

export default function Loader({ onComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const onCompleteRef = useRef(onComplete);
  // Guards against React Strict Mode's double-invocation calling onComplete twice
  const isActiveRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = Array.from(
      container.querySelectorAll<HTMLImageElement>("img")
    );
    if (elements.length === 0) return;

    isActiveRef.current = true;

    gsap.set(elements, { opacity: 0, x: 200 });

    const tl = gsap.timeline({
      delay: 0.5,
      onComplete: () => {
        if (isActiveRef.current) onCompleteRef.current();
      },
    });

    tl.to(elements, {
      opacity: 1,
      x: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.out",
    });

    return () => {
      isActiveRef.current = false;
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-dvh md:min-h-screen flex flex-col items-center justify-center"
    >
      <div className="flex items-center justify-center">
        {topRowKeys.map((key) => (
          <img
            key={key}
            src={svgFiles[key]}
            alt={key}
            style={{
              width: svgSizes[key].width,
              height: svgSizes[key].height,
              opacity: 0,
            }}
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        {bottomRowKeys.map((key) => (
          <img
            key={key}
            src={svgFiles[key]}
            alt={key}
            style={{
              width: svgSizes[key].width,
              height: svgSizes[key].height,
              opacity: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
