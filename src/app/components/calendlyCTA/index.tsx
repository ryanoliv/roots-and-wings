"use client";

import { useState } from "react";
import Portal from "../portal";
import styles from "./Calendly.module.scss";
import useCalendly from "@/app/hooks/useCalendly";

export default function CalendlyCTA() {
  const [showCalendly, setShowCalendly] = useState(false);

  useCalendly();

  function handleClose() {
    setShowCalendly(false);
  }

  return (
    <>
      <button className="btn btn-primary" onClick={() => setShowCalendly(true)}>
        Book a Consultation
      </button>
      {showCalendly && (
        <Portal>
          <div className={styles.calendlyModal}>
            <div className={styles.calendlyOverlay} onClick={handleClose}></div>
            <div className={styles.calendlyContent}>
              <iframe
                src="https://calendly.com/abvrootsandwings/consultation-call"
                width="100%"
                height="100%"
                style={{ borderRadius: "12px" }}
              ></iframe>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
