import { useEffect, useRef } from "react";

export default function SkillBar({ name, progress, delay_animation }) {
  const progressRef = useRef(null);
  const leftBarRed = useRef(null);
  const intervalRef = useRef(null);
  const progressValueRef = useRef(null);
  const COLOR_GRADIENT_BG_BAR = ["#dc2626", "#ea5d20", "#f38721", "#f9ae31", "#fcd34d", "#dcd444", "#b9d444", "#93d44b", "#65d159", "#0ace6a"];
  let width_progress = 2;

  const frame = () => {
    if (progressValueRef.current) {
      width_progress++;
      if (width_progress >= progress) {
        clearInterval(intervalRef.current);
      }
      progressValueRef.current.innerText = `${width_progress}%`;
      if (width_progress % 10 === 0) {
        leftBarRed.current.style.backgroundColor = COLOR_GRADIENT_BG_BAR[width_progress / 10];
        progressRef.current.style.backgroundColor = COLOR_GRADIENT_BG_BAR[width_progress / 10];
      }
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(frame, 15);

    const timeout = setTimeout(() => {
      progressRef.current.classList.add("show-progress");
    }, delay_animation * 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <>
      <div className="skill-bar-wrapper mb-2">
        <div className="d-flex justify-content-between align-items-end">
          <label>{name}</label>
          <div className="progress-value-wrapper mr-5 pr-5">
            <span ref={progressValueRef} className="progress-value">
              0%
            </span>
          </div>
        </div>
        <div className="skill-bar rounded-pill">
          <div className="left-progress" ref={leftBarRed}></div>
          <div className="skill-progress" ref={progressRef}></div>
        </div>
      </div>

      <style jsx>
        {`
          .skill-progress,
          .left-progress {
            position: absolute;
            top: 0;
            bottom: 0;
            height: 100%;
            background-color: #dc2626;
          }
          .skill-bar {
            width: 90%;
            height: 20px;
            position: relative;
            animation-name: shadow;
            animation-duration: 1s;
            animation-delay: ${delay_animation}s;
            animation-timing-function: ease-out;
            animation-fill-mode: forwards;
          }

          .progress-value {
            color: rgba(0, 0, 0, 0.15);
            font-size: 3.9rem;
            font-weight: 100;
            user-select: none;
            position: relative;
            top: 10px;
          }

          @keyframes shadow {
            from {
              box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.2) 0px 1px 2px 0px;
              transform: scale(1);
            }
            to {
              box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 10px 10px -5px;
              transform: scale(1.03);
            }
          }

          .skill-progress {
            display: inline-block;
            overflow: hidden;
            width: 100%;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 1.5s ease-out, background-color 0.75s, box-shadow 0.2s ease-in-out;
            left: 20px;
          }
          .show-progress {
            transform: scaleX(${progress / 100});
          }

          .left-progress {
            width: 21px;
            border-radius: 50rem 0 0 50rem;
            transition: background-color 0.75s;
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
