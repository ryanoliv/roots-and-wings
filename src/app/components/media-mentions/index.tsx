// src/app/components/media-mentions/index.tsx
import React from "react";
import Link from "next/link";

const mentions = [
  {
    show: "The Female CEO™ Podcast",
    title: "Connection Before Correction, with Ally Boyes-Varley",
    description:
      "Ally joins host Mark Sephton to talk about the Connect-Ed Method and her own experience growing up with dyslexia and ADHD.",
    linkText: "Listen on Spotify",
    href: "https://open.spotify.com/episode/1CW4zJvSazFQnZcAf7QaWs?si=038leTc-T9qceWQNWbjYSg&utm_source=copy-link",
    bgColor: "var(--card-bg)",
    textColor: "var(--clr-black)",
  },
  {
    show: "Gina Gardiner & Friends",
    title: "Featured guest episode",
    description:
      "A conversation on personal empowerment and transformational leadership, exploring what helps children — and the adults around them — thrive.",
    linkText: "Listen on Pod.co",
    href: "https://pod.co/gina-gardiner-friends",
    bgColor: "var(--clr-black)",
    textColor: "var(--clr-white)",
  },
  {
    show: "Rooted",
    title: "Featured guest episode",
    description:
      "Frank conversations with educators and changemakers, sharing ideas and hard-won lessons for building a better future for children.",
    linkText: "Listen on Spotify",
    href: "https://open.spotify.com/show/033GTG62j1BbAAQpyPVjI3?si=TalrcyKSSue71sdC_v66Og&utm_source=copy-link",
    bgColor: "var(--card-bg)",
    textColor: "var(--clr-black)",
  },
];

export default function MediaMentions() {
  return (
    <div className="container flex flex-col gap-10 items-center mx-auto px-4">
      <div className="flex flex-col items-center text-center gap-4">
        <h2>As Featured In</h2>
        <p className="italic max-w-2xl" style={{ opacity: 0.8 }}>
          Hear more from Roots &amp; Wings on these podcasts.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
        {mentions.map((mention, index) => (
          <div
            key={index}
            className="flex flex-col p-8 w-full md:w-1/3 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            style={{
              backgroundColor: mention.bgColor,
              color: mention.textColor,
              border:
                mention.bgColor === "var(--card-bg)"
                  ? "1px solid var(--border)"
                  : "none",
            }}
          >
            <div
              className="pb-6 flex flex-col gap-2"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <h3 className="text-2xl font-bold">{mention.show}</h3>
              <p
                style={{ color: "inherit", fontStyle: "italic", opacity: 0.9 }}
              >
                {mention.title}
              </p>
            </div>

            <div className="pt-6 flex flex-col flex-grow gap-4">
              <p
                style={{ color: "inherit", lineHeight: "160%", opacity: 0.85 }}
              >
                {mention.description}
              </p>
              <Link
                href={mention.href}
                target="_blank"
                className="underline font-bold"
                style={{ color: "inherit" }}
              >
                {mention.linkText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
