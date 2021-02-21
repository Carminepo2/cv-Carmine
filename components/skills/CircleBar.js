import { useEffect, useRef } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";
import { useAnimation } from "framer-motion";

export default function CircleBar({ circleAnimate, progress }) {
  const animationControl = useAnimation();
  const shadowControl = useAnimation();
  const progressNumberRef = useRef(null);
  const motionPathRef = useRef(null);
  const x = useMotionValue(0);
  const colors = useTransform(x, [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], ["#dc2626", "#ea5d20", "#f38721", "#f9ae31", "#fcd34d", "#dcd444", "#b9d444", "#93d44b", "#65d159", "#0ace6a"]);

  useEffect(() => {
    if (circleAnimate) {
      animationControl.start({ pathLength: progress / 100 });
    }
  }, [circleAnimate]);

  useEffect(() => {
    x.onChange((x) => {
      const actual_progress = Math.round(x * 100);
      if (actual_progress === progress) {
        motionPathRef.current.setAttribute("filter", "url(#shadow)");
        shadowControl.start({ floodOpacity: 10 });
      }
      progressNumberRef.current.textContent = `${actual_progress}%`;
    });
  }, []);

  return (
    <>
      <div>
        <svg className="progress-icon" height="100%" width="100%" viewBox="0 0 60 60">
          <defs>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <motion.feDropShadow initial={{ floodOpacity: 0 }} transition={{ duration: 10, ease: "easeOut" }} animate={shadowControl} dx="2" dy="0" stdDeviation="2" floodColor="rgba(0,0,0,0.1)" />
            </filter>
          </defs>
          <motion.path
            ref={motionPathRef}
            fill="white"
            strokeWidth="4"
            strokeDasharray="0 1"
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{
              rotate: 90,
              translateX: 5,
              translateY: 5,
              scaleX: -1,
              pathLength: x,
              stroke: colors,
            }}
            initial={{ pathLength: 0 }}
            animate={animationControl}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          <text ref={progressNumberRef} x="24%" y="48%" fill="rgba(0, 0, 0, 0.15)"></text>
        </svg>
      </div>

      <style jsx>{`
        svg {
          overflow: visible !important;
        }
        text {
          font-size: 0.7rem;
          font-weight: 100;
          user-select: none;
        }
      `}</style>
    </>
  );
}
