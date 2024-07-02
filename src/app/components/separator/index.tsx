import Image from "next/image";

export default function Separator() {
  return (
    <div className="separator-container">
      <Image
        src="/images/separator.png"
        alt="squiggle"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
