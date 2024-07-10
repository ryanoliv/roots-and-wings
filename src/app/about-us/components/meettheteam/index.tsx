import styles from "./MeetTheTeam.module.scss";
import Image from "next/image";
import TeamMember from "./teammember";
import { teamMembers } from "./teammember/teamMembers";
import Link from "next/link";

export default function MeetTheTeam() {
  return (
    <div className="container flex flex-col gap-xl items-center">
      <div className="flex flex-col items-center">
        <h2>Meet The Team</h2>
        <p className="text-center md:text-start">
          Meet the passionate individuals behind Roots & Wings Tutoring.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-md">
        <div className="relative">
          <Image
            src="/images/team/team-ally.jpg"
            alt="Ally"
            width={569}
            height={542}
            className={styles.teamImg}
            style={{ borderRadius: "32px" }}
          />
          <div
            className={styles.teamOverlay}
            style={{ borderRadius: "32px" }}
          ></div>
          <div className={styles.teamOverlayText}>
            <span className={styles.teamOverlayTextTitle}>Idea Sprout</span>
            <span className={styles.teamOverlayTextSubtitle}>
              Visionary Founder & Tutor
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-md justify-center relative">
          <Image
            src="/images/team/ally-shapes.png"
            alt="arty shapes"
            width={132}
            height={108}
            className="ally-shapes"
          />
          <div className="flex flex-col">
            <h3 className={styles.teamName}>Ally</h3>
            <p
              className="text-center md:text-left"
              style={{ maxWidth: "530px" }}
            >
              Meet Idea Sprout, the chameleon at the heart of Roots & Wings
              Tutoring. Ally&apos;s extensive knowledge allows the team to adapt
              and change to any challenge. Like the colours of a
              chameleon&apos;s skin, Ally blends innovation and growth
              seamlessly into our ecosystem, nurturing the curiosity and growth
              of young minds. She is our fearless leader, guiding us with love
              and light as we revolutionise the world of education.
            </p>
          </div>
          <Link
            href="https://www.linkedin.com/in/ally-boyes-varley-a56376105/"
            target="_blank"
          >
            <Image
              src="/svgs/linkedin-rainbow.svg"
              alt="linkedin icon"
              width={36}
              height={37}
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-start lg:justify-center gap-xl xl:gap-sm flex-wrap xl:flex-nowrap">
        {teamMembers.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}
