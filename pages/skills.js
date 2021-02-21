import Layout from "../components/Layout";
import SkillBar from "../components/skills/SkillBar";
import CircleBar from "../components/skills/CircleBar";

import { useEffect, useState, useRef } from "react";

export default function Projects() {
  const circleBarRef = useRef(null);
  const [circleAnimate, setCircleAnimate] = useState(false);

  const startAnimationOnScroll = () => {
    if (circleBarRef.current.getBoundingClientRect().x - 400 <= window.scrollY) {
      setCircleAnimate(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", startAnimationOnScroll);

    return () => {
      document.removeEventListener("scroll", startAnimationOnScroll);
    };
  });
  return (
    <Layout title="Skills">
      <section>
        <SkillBar name="HTML & CSS" progress={90} delay_animation={0} />
        <SkillBar name="Javascript" progress={70} delay_animation={0.12} />
        <SkillBar name="Python" progress={85} delay_animation={0.24} />
        <SkillBar name="React & Next.js" progress={50} delay_animation={0.36} />
      </section>
      <section ref={circleBarRef} className="d-flex justify-content-center py-5 pr-5 mt-5">
        <CircleBar circleAnimate={circleAnimate} progress={50} />
        <CircleBar circleAnimate={circleAnimate} progress={100} />
        <CircleBar circleAnimate={circleAnimate} progress={70} />
      </section>
      <style jsx>
        {`
          label {
            font-weight: 100;
            font-size: 1.8rem;
            margin-bottom: 0;
          }
        `}
      </style>
    </Layout>
  );
}
