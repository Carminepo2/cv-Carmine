import { useEffect, useRef } from "react";
import getRandomInt from "../../lib/utils";

export default function SkillBar({ name, progress, delay_animation }) {
  const progressRef = useRef(null);
  const intervalRef = useRef(null);
  const progressValueRef = useRef(null);
  const COLOR_GRADIENT_BG_BAR = ["#dc2626", "#ea5d20", "#f38721", "#f9ae31", "#fcd34d", "#dcd444", "#b9d444", "#93d44b", "#65d159", "#0ace6a"];
  let width_progress = 2;

  const frame = () => {
    width_progress++;
    if (width_progress >= progress) {
      clearInterval(intervalRef.current);
    }
    progressValueRef.current.innerText = `${width_progress}%`;
    if (width_progress % 10 === 0) {
      progressRef.current.style.backgroundColor = COLOR_GRADIENT_BG_BAR[width_progress / 10];
      progressRef.current.style.boxShadow = `${COLOR_GRADIENT_BG_BAR[width_progress / 10]} 0px 2px 120px 1px`
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      intervalRef.current = setInterval(frame, 15);
      progressRef.current.classList.add("show-progress");
    }, delay_animation * 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <>
      <div className="skill-bar-wrapper mb-2 pb-2">
        <div className="d-flex justify-content-between align-items-end">
          <label>{name}</label>
          <div className="progress-value-wrapper mr-5 pr-5">
            <span ref={progressValueRef} className="progress-value">
              0%
            </span>
          </div>
        </div>
        <div className="skill-bar rounded-pill">
          <div className="skill-progress" ref={progressRef}></div>
        </div>
      </div>

      <style jsx>
        {`
          .skill-bar {
            width: 90%;
            height: 20px;
            animation-name: shadow;
            animation-duration: 1s;
            animation-delay: ${delay_animation}s;
            animation-timing-function: ease-out;
            animation-fill-mode: forwards;
          }

          .progress-value {
            color: rgba(0, 0, 0, 0.15);
            font-size: 3.5rem;
            font-weight: 100;
            position: relative;
            top: 10px;
          }

          @keyframes shadow {
            from {
              box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
              transform: scale(1);
            }
            to {
              box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
              transform: scale(1.03);
            }
          }

          .skill-progress {
            border-top-left-radius: 50rem !important;
            border-bottom-left-radius: 50rem !important;
            display: inline-block;
            position: absolute;
            overflow: hidden;
            width: 0%;
            transition: width 1.5s ease-out, background-color 0.75s, box-shadow 1s ease-in-out;
            

            background-color: #dc2626;
            height: 20px;
          }
          .show-progress {
            width: ${progress}%;
          }

          label {
            font-weight: 100;
            font-size: 1.8rem;
            margin-bottom: 0;
          }
          @media only screen and (max-width: 580px) {
            .progress-value-wrapper {
              margin-right: 25px !important;
              padding-right: 25px !important;
            }
            .progress-value {
              font-size: 2.6rem;
              top: 8px;
            }
            label {
              font-size: 1.3rem;
            }
          }
        `}
      </style>
    </>
  );
}
