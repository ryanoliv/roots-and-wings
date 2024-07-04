"use client";

import { useState } from "react";
import CalendlyCTA from "../calendlyCTA";
import ToggleIcon from "./toggleIcon";
import Image from "next/image";
import Link from "next/link";
import Nav from "./nav";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="py-8">
      <div className="nav-container flex justify-between items-center">
        <Link href="/">
          <div className="primary-logo">
            <Image
              src="/logos/logo-stacked.png"
              alt="Roots & Wings Logo"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </Link>

        <div className="desktop-nav">
          <Nav />
        </div>

        <div className={`mobile-nav ${isNavOpen ? "open" : ""}`}>
          <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          <CalendlyCTA />
        </div>

        {!isNavOpen && (
          <div className="desktop-nav-cta">
            <CalendlyCTA />
          </div>
        )}

        {/* <div className="hamburger-icon" onClick={toggleMenu}>
          {isNavOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div> */}
        <div
          className={`hamburger-icon ${isNavOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <ToggleIcon isOpen={isNavOpen} />
        </div>
      </div>
    </div>
  );
}
