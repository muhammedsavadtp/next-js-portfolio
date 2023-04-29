import { useState, useEffect } from "react";

const useScrollDown = (): boolean => {
  const [scrolledDown, setScrolledDown] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrolled = window.scrollY > 10;
      setScrolledDown(scrolled);
    };

    document.addEventListener("scroll", handleScroll);

    return (): void => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrolledDown;
};

export default useScrollDown;
