import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function TitleAnimation({ children, showSidebar }) {
  const [scrollPosition, setScrollPosition] = useState(null);
  const divRef = useRef(null);

  const pageScrolled = () => {
    if (typeof window !== "undefined" && divRef.current) {
      if (window.scrollY < divRef.current.offsetHeight) {
        setScrollPosition((1 / divRef.current.offsetHeight) * window.scrollY);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", pageScrolled);
    return () => {
      window.removeEventListener("scroll", pageScrolled);
    };
  }, []);

  return (
    <motion.div
      ref={divRef}
      animate={
        scrollPosition < 0.652
          ? { x: typeof window !== "undefined" && divRef.current && scrollPosition > 0.2 ? (window.innerWidth / 2) * scrollPosition : 0, scale: 1 - 0.4 * scrollPosition }
          : { x: (window.innerWidth / 2) * 0.652, y: -100, scale: 1 - 0.6 * 0.652 }
      }
    >
      {children}
    </motion.div>
  );
}
