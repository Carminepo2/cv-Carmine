import { useEffect, useRef } from "react";
import getRandomInt from "../../lib/utils";

export default function CircleBar({ name, progress, delay_animation }) {
  const radius = 105;
  const stroke = 6;

  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <>
      <div className="circle-bar-wrapper mb-2 pb-2">
        <label>CIao</label>
        <svg height={radius * 2} width={radius * 2}>
          <circle
            stroke="#0ACE6A"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference + " " + circumference}
            style={{ strokeDashoffset }}
            stroke-width={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>
      </div>

      <style jsx>{`
        .circle-bar-wrapper {
          padding: 50px 30px 50px 30px;
        }
        svg {
          transform: rotate(-90deg);
        }
      `}</style>
    </>
  );
}
