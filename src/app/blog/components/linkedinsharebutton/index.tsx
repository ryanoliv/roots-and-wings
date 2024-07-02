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
      <Image
        src="/svgs/linkedin-black.svg"
        alt="linkedin icon"
        width={17}
        height={21}
      />
    </button>
  );
}
