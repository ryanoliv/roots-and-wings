"use client";

import Image from "next/image";

interface LinkedInShareProps {
  url: string;
  title: string;
}

export default function LinkedInShareButton({
  url,
  title,
}: LinkedInShareProps) {
  const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}&title=${encodeURIComponent(title)}`;

  function handleShare() {
    window.open(shareUrl, "_blank", "noopener, noreferrer");
  }

  return (
    <button onClick={handleShare} aria-label="Share on LinkedIn">
      <div
        style={{
          width: "2.25rem",
          height: "2.25rem",
          borderRadius: "50%",
          border: "0.5px solid var(--clr-black)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/svgs/linkedin-black.svg"
          alt="linkedin icon"
          width={13}
          height={14}
        />
      </div>
    </button>
  );
}
