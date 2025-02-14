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
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-lg md:gap-0 w-full">
              <Link href="/">
                <Image
                  src="/logos/logo-stacked.png"
                  alt="Roots & Wings Logo"
                  width={110}
                  height={61}
                />
              </Link>
              <div className="flex flex-col gap-xs items-center md:items-start">
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
          <div className="flex flex-col-reverse md:flex-row gap-md md:gap-xs items-center justify-between w-full">
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
                href="https://www.linkedin.com/in/ally-boyes-varley-a56376105/"
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
              <span>
                <Image
                  src="/images/safeguarding.png"
                  alt="safeguarding logo"
                  width={36}
                  height={36}
                />
              </span>
            </div>
            <div className="flex gap-sm justify-end flex-1">
              <Link href="/privacy-policy" className={styles.footerLegal}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className={styles.footerLegal}>
                Terms of Service
              </Link>
            </div>
          </div>
          {/* <div className={styles.line}></div> */}
          <div className="w-full text-center">
            <p className="text-sm text-[#b5b1ad]">
              Designed & Developed @{" "}
              <Link
                href="https://www.konten.dev"
                target="_blank"
                className="underline"
              >
                Konten
              </Link>
            </p>
          </div>
          <div className="flex w-full justify-center">
            <p
              className={styles.footerLegal}
              style={{
                textDecoration: "none",
                opacity: 0.5,
                textAlign: "center",
              }}
            >
              This site is protected by reCAPTCHA and the Google{" "}
              <Link
                href="https://policies.google.com/privacy"
                className="underline"
                target="_blank"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="https://policies.google.com/terms"
                className="underline"
                target="_blank"
              >
                Terms of Service
              </Link>{" "}
              apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
