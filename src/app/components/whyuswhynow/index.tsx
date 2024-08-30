"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import OurTutorsHave from "../ourtutorshave";

interface Statistics {
  value: string;
  description: string;
}

const statistics: Statistics[] = [
  { value: "300,000", description: "Unhappy children in the UK" },
  { value: "90%", description: "Of time spent at school" },
  { value: "40,000", description: "Teachers leaving annually" },
];

export default function WhyUsWhyNow() {
  const [startCount, setStartCount] = useState<boolean[]>(
    new Array(statistics.length).fill(false)
  );
  const countRefs = useRef<(HTMLDivElement | null)[]>(
    new Array(statistics.length).fill(null)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = countRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (entry.isIntersecting) {
            setStartCount((prev) => {
              const newCounts = [...prev];
              newCounts[index] = true;
              return newCounts;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px", threshold: 0.5 }
    );

    countRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="container flex flex-col justify-center gap-xl">
      <div className="flex flex-col items-center gap-xs text-center">
        <h2>The Education Problem</h2>
        <p style={{ maxWidth: "590px" }}>
          Today&apos;s educational landscape often overlooks the emotional and
          social development of students, focusing predominantly on academic
          achievements. At Roots & Wings, we believe in a balanced approach that
          nurtures both the mind and the spirit.
        </p>
      </div>
      <div className="flex flex-col items-center gap-md">
        <div className="flex flex-col md:flex-row gap-xl items-center md:items-start justify-center">
          {statistics.map((stat, index) => (
            <div
              key={index}
              ref={(el) => {
                countRefs.current[index] = el;
              }}
              className="flex flex-col items-center text-center"
            >
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2.5rem",
                }}
              >
                {startCount[index] ? (
                  <CountUp
                    end={parseFloat(stat.value.replace(/,/g, ""))}
                    duration={2.5}
                    suffix={stat.value.includes("%") ? "%" : ""}
                  />
                ) : (
                  "0"
                )}
              </h3>
              <p>{stat.description}</p>
            </div>
          ))}
        </div>
        <small className="text-center">
          *{" "}
          <Link
            href="https://www.childrenssociety.org.uk/information/professionals/resources/good-childhood-report-2023"
            target="_blank"
            className="underline"
          >
            The Children&apos;s Society 2023, The Good Childhood Report,{" "}
            <span className="italic">www.childrenssociety.org.uk</span>
          </Link>
        </small>
      </div>
      <OurTutorsHave />
    </div>
  );
}
