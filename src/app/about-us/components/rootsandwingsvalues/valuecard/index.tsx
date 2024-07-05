import Image from "next/image";

interface ValueCardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  description: string;
  borderColor: string;
}

export default function ValueCard({
  src,
  alt,
  width,
  height,
  title,
  description,
  borderColor,
}: ValueCardProps) {
  return (
    <div
      className="flex flex-col gap-sm items-center md:items-start values-card"
      style={{
        border: `1px solid ${borderColor}`,
        backgroundColor: "var(--clr-white)",
        borderRadius: "18px",
        boxShadow: "var(--card-shadow)",
      }}
    >
      <Image src={src} alt={alt} width={width} height={height} />
      <div className="gap-xs">
        <h3 className="text-center md:text-left">{title}</h3>
        <p className="text-center md:text-left values-subtext">{description}</p>
      </div>
    </div>
  );
}
