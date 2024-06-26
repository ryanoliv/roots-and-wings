import styles from "./Footer.module.scss";
import MailchimpForm from "../MailchimpForm";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className="flex flex-col gap-sm items-start w-full">
          <div className="flex flex-col items-start gap-xl w-full">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-sm md:gap-0 w-full">
              <Link href="/">
                <div className="primary-logo">
                  <Image
                    src="/logos/primary-logo.svg"
                    alt="Roots & Wings Logo"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Link>
              <div className="flex flex-col gap-xs">
                <p className={styles.footerLinkTitle}>Contact us</p>
                <div className="flex flex-col gap-xs">
                  <ul className={styles.footerLinkList}>
                    <Link href="mailto:abvrootsandwings@gmail.com">
                      <li>Email</li>
                    </Link>
                    <Link href="tel:447958266921">
                      <li>Phone</li>
                    </Link>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-sm">
                <p className={styles.footerSubscribeText}>
                  Subscribe to our newsletter to stay in touch with the latest.
                </p>
                <MailchimpForm />
              </div>
            </div>
            <div className={styles.line}></div>
          </div>
          <div className="flex gap-xs items-center justify-between w-full">
            <span className={styles.footerCopywrite}>
              &copy; 2024 Roots & Wings. All Rights Reserved.
            </span>
            <div className="flex gap-xs">
              <Link
                href="https://www.instagram.com/rootsandwingstutoring/"
                target="_blank"
              >
                <div className={styles.footerSocials}>
                  <Image
                    src="/svgs/instagram.svg"
                    alt="instagram icon"
                    width={14}
                    height={14}
                  />
                </div>
              </Link>
              <Link
                href="https://linkedin.com/in/ally-boyes-varley-a56376105"
                target="_blank"
              >
                <div className={styles.footerSocials}>
                  <Image
                    src="/svgs/linkedin.svg"
                    alt="linkedin icon"
                    width={13}
                    height={14}
                  />
                </div>
              </Link>
            </div>
            <div className="flex gap-sm">
              <Link href="/privacy-policy" className={styles.footerLegal}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className={styles.footerLegal}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
