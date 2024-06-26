import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Nav.module.scss";

interface NavProps {
  isNavOpen: boolean;
}

export default function Nav({ isNavOpen }: NavProps) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      // If the clicked target is not within the dropdown container, close the dropdown.
      if (
        !(event.target as HTMLElement).closest(`.${styles.dropdownContainer}`)
      ) {
        setIsDropdownVisible(false);
      }
    }

    if (isDropdownVisible) {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener when the component unmounts or when the dropdown is closed.
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownVisible]); // Only re-run the effect if isDropdownVisible changes

  // function toggleDropdown(): void {
  //   setIsDropdownVisible(!isDropdownVisible);
  // }

  // Show dropdown on mouse enter
  function handleMouseEnter() {
    setIsDropdownVisible(true);
  }

  // hide dropdown on mouse leave
  function handleMouseLeave() {
    setIsDropdownVisible(false);
  }

  const arrowClassName = isDropdownVisible ? styles.arrowOpen : "";

  return (
    <nav className="flex">
      <ul className="flex items-center gap-xl">
        <li className={`flex ${styles.navItem}`}>
          <Link href="/about-us" className={styles.navLink}>
            About Us
          </Link>
        </li>
        <li className={`flex ${styles.navItem}`}>
          <Link href="/blog" className={styles.navLink}>
            Blog
          </Link>
        </li>
        <li
          className={`relative ${styles.navItem}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            href="/our-programme"
            className={`flex gap-xs items-center ${styles.navLink}`}
          >
            Our Programme{" "}
            <div className={arrowClassName}>
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
                <Link href="/our-programme" className={styles.navLink}>
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
    </nav>
  );
}
