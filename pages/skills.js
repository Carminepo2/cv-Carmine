import Layout from "../components/Layout";
import SkillBar from "../components/skills/SkillBar";

export default function Projects() {
  return (
    <Layout title="Skills">
      <SkillBar name="HTML & CSS" progress={90} delay_animation={0.1} />
      <SkillBar name="Javascript" progress={70} delay_animation={0.2} />
      <SkillBar name="Python" progress={85} delay_animation={0.3} />
      <SkillBar name="React & Next.js" progress={50} delay_animation={0.4} />
    </Layout>
  );
}
