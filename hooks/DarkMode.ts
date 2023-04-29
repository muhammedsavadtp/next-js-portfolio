import React, { useState, useEffect } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");
    const body: HTMLElement | null = document.querySelector("body");

    if (isDarkMode) {
      html?.classList.add("dark");
      body?.classList.add("text-white");
    } else {
      html?.classList.remove("dark");
      body?.classList.remove("text-white");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    const body: HTMLElement | null = document.querySelector("body");
    if (body) {
      body.style.backgroundColor = isDarkMode ? "white" : "#120f16";
    }
  };

  return { isDarkMode, toggleDarkMode };
};

export default useDarkMode;

