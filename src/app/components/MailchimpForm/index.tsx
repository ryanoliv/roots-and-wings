"use client";

import { useState } from "react";
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
      alert(data.message || "An error occured, please try again.");
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
          <p className="consent-msg">By signing up you agree to our terms.</p>
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
    </>
  );
}

const SuccessModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        paddingInline: "1rem",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 50,
      }}
    >
      <div
        style={{
          backgroundColor: "#f7f2ec",
          color: "#363433",
          padding: "40px",
          borderRadius: "28px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // gap: "1.5rem",
          maxWidth: "408px",
        }}
      >
        <h2 className={styles.successTitle}>Thanks for signing up</h2>
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
