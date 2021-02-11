import Layout from "../components/Layout";
import SkillBarr from "../components/skills/SkillBar";

export default function Projects() {
  return (
    <Layout title="Skills">
      <SkillBarr name="HTML & CSS" progress={90} delay_animation={0.1} />
      <SkillBarr name="Javascript" progress={70} delay_animation={0.2} />
      <SkillBarr name="Python" progress={85} delay_animation={0.3} />
      <SkillBarr name="React & Next.js" progress={50} delay_animation={0.4} />
    </Layout>
  );
}
