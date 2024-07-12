"use client";

import { useState } from "react";
import Link from "next/link";
import { useReCaptcha } from "next-recaptcha-v3";
import styles from "./MailchimpForm.module.scss";
import Image from "next/image";

interface MailchimpFormProps {
  inputStyle?: React.CSSProperties;
  btnStyles?: React.CSSProperties;
  placeholderColorClass?: string;
}

export default function MailchimpForm({
  inputStyle,
  btnStyles,
  placeholderColorClass,
}: MailchimpFormProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  const { executeRecaptcha } = useReCaptcha();

  const validateEmail = (email: string): boolean => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Generate ReCaptcha token
    const token = await executeRecaptcha("signup_form").catch((e) =>
      console.error("reCAPTCHA error:", e)
    );

    // Send email and token to backend
    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, token }),
    });

    const data = await response.json();

    if (response.ok) {
      setIsModalVisible(true);
      setEmail("");
    } else {
      setError(data.message || "An error occured, please try again.");
      setIsErrorModalVisible(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="relative">
        <input
          className={`${styles.mailchimpInput} ${placeholderColorClass || ""}`}
          style={inputStyle}
          type="email"
          id="email"
          value={email}
          autoComplete="on"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          name="email"
        />
        {error ? (
          <p className="error-msg">{error}</p>
        ) : (
          <p className="consent-msg">
            By signing up you agree to{" "}
            <Link href="/terms-of-service" className="underline">
              our terms
            </Link>
            .
          </p>
        )}
        <button className={styles.signUpBtn} style={btnStyles} type="submit">
          <Image
            src="/svgs/email.svg"
            alt="email icon"
            width={18}
            height={14}
          />
        </button>
      </form>

      {isModalVisible && (
        <SuccessModal onClose={() => setIsModalVisible(false)} />
      )}

      {isErrorModalVisible && (
        <ErrorModal
          message={error}
          onClose={() => setIsErrorModalVisible(false)}
        />
      )}
    </>
  );
}

const SuccessModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalOverlayContent}>
        <h2 className={styles.successTitle}>Thanks for signing up!</h2>
        <p className={styles.successSubtext}>
          We&apos;ll keep you updated on the latest news and special offers from
          Roots & Wings.
        </p>
        <button className={styles.successBtn} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const ErrorModal: React.FC<{ onClose: () => void; message: string }> = ({
  onClose,
  message,
}) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalOverlayContent}>
        <h2 className={styles.modalOverlayErrorTitle}>Error</h2>
        <p className={styles.successSubtext}>{message}</p>
        <button className={styles.successBtn} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
