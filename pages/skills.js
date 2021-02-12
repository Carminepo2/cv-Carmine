import Layout from "../components/Layout";
import SkillBar from "../components/skills/SkillBar";
import CircleBar from "../components/skills/CircleBar";

export default function Projects() {
  return (
    <Layout title="Skills">
      <section>
        <SkillBar name="HTML & CSS" progress={90} delay_animation={0.12} />
        <SkillBar name="Javascript" progress={70} delay_animation={0.24} />
        <SkillBar name="Python" progress={85} delay_animation={0.36} />
        <SkillBar name="React & Next.js" progress={50} delay_animation={0.48} />
      </section>
      <section className="d-flex justify-content-center py-5 pr-5 mt-5 ">
        <CircleBar progress={80} />
        <CircleBar progress={100} />
        <CircleBar progress={20} />
        <CircleBar progress={90} />
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
