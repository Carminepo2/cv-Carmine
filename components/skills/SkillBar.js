import { useEffect, useRef } from "react";
import getRandomInt from "../../lib/utils";

export default function SkillBarr() {
  const progressRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      progressRef.current.classList.add("show-progress");
    }, getRandomInt(100, 300));

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <>
      <div className="skill-bar-wrapper mb-5">
        <label>HTML & CSS</label>
        <div className="skill-bar rounded-pill shadow">
          <div className="skill-progress" ref={progressRef}></div>
        </div>
      </div>

      <style jsx>
        {`
          .skill-bar {
            width: 90%;
            height: 20px;
          }
          .skill-progress {
            border-top-left-radius: 50rem !important;
            border-bottom-left-radius: 50rem !important;
            display: inline-block;
            position: absolute;
            overflow: hidden;
            width: 0%;

            transition: width 1.5s ease-in-out;
            height: 20px;
            background-color: #0ace6a;
          }
          .show-progress {
            width: 50%;
          }
          label {
            font-weight: 100;
            font-size: 1.8rem;
            margin-bottom: 0;
          }
        `}
      </style>
    </>
  );
}
