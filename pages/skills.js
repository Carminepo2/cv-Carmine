import Layout from "../components/Layout";
import SkillBar from "../components/skills/SkillBar";
import CircleBar from "../components/skills/CircleBar";
import ProductList from "../components/skills/ProductList";

import { useEffect, useState, useRef } from "react";

export default function Projects() {
  return (
    <Layout title="Skills">
      <section>
        <SkillBar name="HTML & CSS" progress={90} delay_animation={0} />
        <SkillBar name="Javascript" progress={70} delay_animation={0.12} />
        <SkillBar name="Python" progress={85} delay_animation={0.24} />
        <SkillBar name="React & Next.js" progress={50} delay_animation={0.36} />
        <SkillBar name="React & Next.js" progress={30} delay_animation={0.48} />
      </section>
      <section id="circlebar-wrapper" className="d-flex pt-5 mt-5 flex-wrap justify-content-center">
        <CircleBar name="Inglese" progress={50} />
        <CircleBar name="Inglese" progress={100} />
        <CircleBar name="Inglese" progress={70} />
        <CircleBar name="Inglese" progress={90} />
      </section>
      <section className="pt-5 pr-4">
        <ProductList />
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
