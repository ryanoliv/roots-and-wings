type ToggleIconProps = {
  isOpen: boolean;
};

export default function ToggleIcon({ isOpen }: ToggleIconProps) {
  return (
    <svg
      viewBox="0 0 32 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={`hamburger-svg ${isOpen ? "open" : ""}`}
      style={{ margin: "auto", display: "block", overflow: "visible" }}
    >
      <path className="bar1" d="M8 6h16" strokeLinecap="round" />
      <path className="bar2" d="M8 12h16" strokeLinecap="round" />
      <path className="bar3" d="M8 18h16" strokeLinecap="round" />
    </svg>
  );
}
