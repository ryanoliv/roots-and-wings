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

    let completed = false;

    // Bounded by a watchdog rather than the rAF-driven GSAP timeline alone,
    // since browsers pause/throttle requestAnimationFrame when the tab is
    // backgrounded — that can stall the timeline indefinitely. Force
    // elements to their final visible state directly via gsap.set (not
    // tl.progress, which doesn't reliably resolve a stalled/killed
    // timeline) so the letters can never be left frozen invisible when we
    // hand off to the page content.
    const finish = () => {
      if (completed || !isActiveRef.current) return;
      completed = true;
      tl.kill();
      gsap.set(elements, { opacity: 1, x: 0 });
      onCompleteRef.current();
    };

    const tl = gsap.timeline({
      delay: 0.5,
      onComplete: finish,
    });

    tl.to(elements, {
      opacity: 1,
      x: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: "power2.out",
    });

    const watchdog = window.setTimeout(finish, 4000);

    return () => {
      isActiveRef.current = false;
      window.clearTimeout(watchdog);
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
