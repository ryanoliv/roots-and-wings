import styles from "./MeetTheTeam.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function MeetTheTeam() {
  return (
    <div className="container flex flex-col gap-xl items-center">
      <div className="flex flex-col items-center">
        <h2>Meet The Team</h2>
        <p>Meet the passionate individuals behind Roots & Wings Tutoring.</p>
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
        <div className="flex flex-col gap-md justify-center">
          <div className="flex flex-col">
            <h3 className={styles.teamName}>Ally</h3>
            <p style={{ maxWidth: "530px" }}>
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
            href="https://linkedin.com/in/ally-boyes-varley-a56376105"
            target="_blank"
          >
            <Image
              src="/svgs/linkedin-rainbow.svg"
              alt="linkedin icon"
              width={36}
              height={36}
            />
          </Link>
        </div>
      </div>

      <div className="flex gap-md md:gap-xs xl:gap-md flex-wrap xl:flex-nowrap justify-evenly">
        <div className="flex flex-col gap-sm">
          <div className="relative">
            <Image
              src="/images/team/team-chanel.jpg"
              alt="Chanel"
              width={300}
              height={293}
              className={styles.teamImg}
              style={{ borderRadius: "24px" }}
            />
            <div
              className={styles.teamOverlay}
              style={{ borderRadius: "24px" }}
            ></div>
            <div className={styles.teamOverlayTextSmall}>
              <span className={styles.teamOverlayTextTitleSmall}>
                Opportunista
              </span>
              <span className={styles.teamOverlayTextSubtitleSmall}>
                Teaching Lead & Tutor
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-md justify-center">
            <div className="flex flex-col">
              <h3 className={styles.teamNameSmall}>Chanel</h3>
              <p style={{ maxWidth: "300px" }}>
                Meet Opportunista, our otter of delightful teaching at Roots &
                Wings Tutoring. She brings us pebbles of opportunity and sticks
                of experience that pave the way for children to swim upstream
                with resilience and confidence. Holding hands with innovation
                and playing curiously with dedication, Chanel helps to shape our
                effective and engaging curriculum.
              </p>
            </div>
            <Link
              href="https://linkedin.com/in/chanel-irvine-25a0148a"
              target="_blank"
            >
              <Image
                src="/svgs/linkedin-rainbow.svg"
                alt="linkedin icon"
                width={36}
                height={36}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-sm">
          <div className="relative">
            <Image
              src="/images/team/team-sarah.jpg"
              alt="Sarah"
              width={300}
              height={293}
              className={styles.teamImg}
              style={{ borderRadius: "24px" }}
            />
            <div
              className={styles.teamOverlay}
              style={{ borderRadius: "24px" }}
            ></div>
            <div className={styles.teamOverlayTextSmall}>
              <span className={styles.teamOverlayTextTitleSmall}>
                Pixel Pioneer
              </span>
              <span className={styles.teamOverlayTextSubtitleSmall}>
                Designer
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-md justify-center">
            <div className="flex flex-col">
              <h3 className={styles.teamNameSmall}>Sarah</h3>
              <p style={{ maxWidth: "300px" }}>
                Meet Pixel Pioneer, the meerkat guiding our visual journey at
                Roots & Wings Tutoring. With pixels as her tools and creativity
                as her community, Sarah gracefully navigates the wide open
                plains of brand identity, crafting visuals that nestle in the
                hearts and minds of all who encounter them.
              </p>
            </div>
            <Link
              href="https://linkedin.com/in/sarah-dyson-78881a19b"
              target="_blank"
            >
              <Image
                src="/svgs/linkedin-rainbow.svg"
                alt="linkedin icon"
                width={36}
                height={36}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-sm">
          <div className="relative">
            <Image
              src="/images/team/team-cleo.jpg"
              alt="Cleo"
              width={300}
              height={293}
              className={styles.teamImg}
              style={{ borderRadius: "24px" }}
            />
            <div
              className={styles.teamOverlay}
              style={{ borderRadius: "24px" }}
            ></div>
            <div className={styles.teamOverlayTextSmall}>
              <span className={styles.teamOverlayTextTitleSmall}>
                Perfectionista
              </span>
              <span className={styles.teamOverlayTextSubtitleSmall}>
                Creative Lead
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-md justify-center">
            <div className="flex flex-col">
              <h3 className={styles.teamNameSmall}>Cleo</h3>
              <p style={{ maxWidth: "300px" }}>
                Meet Perfectionista, our penguin of collaboration and harmony at
                Roots & Wings Tutoring. With a waddle as fun as our core pillar
                of play and a keen eye for detail, Cleo leads our creative
                experience, crafting it into a masterpiece of precision and joy.
              </p>
            </div>
            <Link
              href="https://linkedin.com/in/cleo-vanessa-rowe-setz-900673149"
              target="_blank"
            >
              <Image
                src="/svgs/linkedin-rainbow.svg"
                alt="linkedin icon"
                width={36}
                height={36}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-sm">
          <div className="relative">
            <Image
              src="/images/team/team-steve.jpg"
              alt="Steph"
              width={300}
              height={293}
              className={styles.teamImg}
              style={{ borderRadius: "24px" }}
            />
            <div
              className={styles.teamOverlay}
              style={{ borderRadius: "24px" }}
            ></div>
            <div className={styles.teamOverlayTextSmall}>
              <span className={styles.teamOverlayTextTitleSmall}>
                Story Steward
              </span>
              <span className={styles.teamOverlayTextSubtitleSmall}>
                Illustrator & Author
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-md justify-center">
            <div className="flex flex-col">
              <h3 className={styles.teamNameSmall}>Steve</h3>
              <p style={{ maxWidth: "300px" }}>
                Meet Story Steward, our swallow of wisdom and adventure at Roots
                & Wings Tutoring. He brings with him the skies of endless
                creativity through extraordinary illustrations and captivating
                stories. With words as expansive as the African skies, Steve
                flies to the highest heights of storytelling, crafting tales
                that resonate deeply and stir the imagination of every child.
              </p>
            </div>
            <Link
              href="https://linkedin.com/in/stephen-hoffe-3aa15252"
              target="_blank"
            >
              <Image
                src="/svgs/linkedin-rainbow.svg"
                alt="linkedin icon"
                width={36}
                height={36}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
