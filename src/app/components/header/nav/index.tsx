import { useState } from "react";
// import TransitionLink from "@/app/utils/TransitionLink";
import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.scss";

interface NavProps {
  isNavOpen?: boolean;
  setIsNavOpen?: (isOpen: boolean) => void;
}

export default function Nav({ isNavOpen, setIsNavOpen }: NavProps) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  function closeNav() {
    setIsDropdownVisible(false);
    if (setIsNavOpen) setIsNavOpen(false);
  }

  const arrowClassName = isDropdownVisible ? styles.arrowOpen : "";

  return (
    <nav className="flex">
      <ul className="flex items-center gap-xl">
        <li className={`flex ${styles.navItem}`}>
          <Link href="/about-us" className={styles.navLink} onClick={closeNav}>
            About Us
          </Link>
        </li>
        <li className={`flex ${styles.navItem}`}>
          <Link href="/blog" className={styles.navLink} onClick={closeNav}>
            Blog
          </Link>
        </li>
        <li
          className={`relative ${styles.navItem}`}
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          <Link
            href="/our-programme"
            className={`gap-xs items-center ${styles.navLink}`}
            onClick={closeNav}
          >
            Our Programme{" "}
            <div className={`drop-down-arrow ${arrowClassName}`}>
              <Image
                src="/svgs/drop-down-arrow.svg"
                alt="drop down arrow"
                width={9}
                height={6}
              />
            </div>
          </Link>
          {isDropdownVisible && (
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>
                <Link href="/our-programme#" className={styles.navLink}>
                  Programme Structure
                </Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link
                  href="/our-programme#our-method"
                  className={styles.navLink}
                >
                  Our Method
                </Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/our-programme#pricing" className={styles.navLink}>
                  Pricing
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
      {/* <ul className="flex items-center gap-xl">
        <li className={`flex ${styles.navItem}`}>
          <TransitionLink
            href="/about-us"
            className={styles.navLink}
            onClick={closeNav}
          >
            About Us
          </TransitionLink>
        </li>
        <li className={`flex ${styles.navItem}`}>
          <TransitionLink
            href="/blog"
            className={styles.navLink}
            onClick={closeNav}
          >
            Blog
          </TransitionLink>
        </li>
        <li
          className={`relative ${styles.navItem}`}
          onMouseEnter={() => setIsDropdownVisible(true)}
          onMouseLeave={() => setIsDropdownVisible(false)}
        >
          <TransitionLink
            href="/our-programme"
            className={`gap-xs items-center ${styles.navLink}`}
            onClick={closeNav}
          >
            Our Programme{" "}
            <div className={`drop-down-arrow ${arrowClassName}`}>
              <Image
                src="/svgs/drop-down-arrow.svg"
                alt="drop down arrow"
                width={9}
                height={6}
              />
            </div>
          </TransitionLink>
          {isDropdownVisible && (
            <ul className={styles.dropdownMenu}>
              <li className={styles.dropdownItem}>
                <Link href="/our-programme#" className={styles.navLink}>
                  Programme Structure
                </Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link
                  href="/our-programme#our-method"
                  className={styles.navLink}
                >
                  Our Method
                </Link>
              </li>
              <li className={styles.dropdownItem}>
                <Link href="/our-programme#pricing" className={styles.navLink}>
                  Pricing
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul> */}
    </nav>
  );
}
