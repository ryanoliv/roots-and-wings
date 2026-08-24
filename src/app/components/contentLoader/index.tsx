"use client";

import { useState, useEffect } from "react";
import Loader from "../loader";

interface ContentLoaderProps {
  children: React.ReactNode;
}

const ContentLoader: React.FC<ContentLoaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fallback timeout to ensure content visibility
    const fallbackTimeout = setTimeout(() => {
      if (isLoading) {
        console.error("Loading timeout reached, forcing content visibility.");
        setIsLoading(false);
      }
    }, 7000);

    return () => clearTimeout(fallbackTimeout);
  }, [isLoading]);

  const handleLoaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader onComplete={handleLoaderComplete} />}
      <div
        id="main-content"
        style={{
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default ContentLoader;
