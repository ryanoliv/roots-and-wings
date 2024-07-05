import Image from "next/image";
import Link from "next/link";
import styles from "./TeamMember.module.scss";

interface TeamMemberProps {
  title: string;
  role: string;
  imageSrc: string;
  name: string;
  description: string;
  linkedinUrl: string;
}

export default function TeamMember({
  title,
  role,
  imageSrc,
  name,
  description,
  linkedinUrl,
}: TeamMemberProps) {
  return (
    <div className={styles.teamMemberContainer}>
      <div className={styles.teamMemberImgContainer}>
        <Image
          src={imageSrc}
          alt={name}
          width={396}
          height={386}
          className={styles.teamMemberImg}
        />
        <div className={styles.teamMemberOverlay}></div>
        <div className={styles.teamMemberOverlayText}>
          <span className={styles.teamMemberOverlayTextTitle}>{title}</span>
          <span className={styles.teamMemberOverlayTextRole}>{role}</span>
        </div>
      </div>
      <div className="flex flex-col gap-md justify-center">
        <div className="flex flex-col">
          <h3 className={styles.teamMemberName}>{name}</h3>
          <p className={styles.teamMemberDescription}>{description}</p>
        </div>
        <Link href={linkedinUrl} target="_blank">
          <Image
            src="/svgs/linkedin-rainbow.svg"
            alt="linkedin icon"
            width={36}
            height={37}
          />
        </Link>
      </div>
    </div>
  );
}
