import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function TitleAnimation({ children }) {
  const [scrollPosition, setScrollPosition] = useState(null);
  const divRef = useRef(null);
  const wrapperRef = useRef(null);

  const pageScrolled = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < divRef.current.offsetHeight) {
        setScrollPosition((1 / divRef.current.offsetHeight) * window.scrollY);
        console.log(scrollPosition);
      }
    }
  };
  useEffect(() => {
    wrapperRef.current.setAttribute("style", `height:${divRef.current.offsetHeight}px;`);
    window.addEventListener("scroll", pageScrolled);
    return () => {
      window.removeEventListener("scroll", pageScrolled);
    };
  }, []);

  return (
    <div id="animation-wrapper" ref={wrapperRef}>
      <motion.div
        ref={divRef}
        animate={
          scrollPosition < 0.652
            ? { x: typeof window !== "undefined" ? (window.innerWidth / 2) * scrollPosition : 0, scale: 1 - 0.4 * scrollPosition }
            : { x: (window.innerWidth / 2) * 0.652, y: -50, scale: 1 - 0.4 * 0.652 }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}
