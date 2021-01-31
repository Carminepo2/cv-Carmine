import InfoCard from "./InfoCard";
import MenuItem from "./MenuItem";
import { GrProjects } from "react-icons/gr";

export default function Sidebar() {
  return (
    <>
      <aside className="d-flex justify-content-center align-items-center py-5 h-100 flex-column">
        <InfoCard />

        <section className="w-100 mt-5">
          <MenuItem title="Projects" url="/projects">
            <GrProjects size={20} />
          </MenuItem>
          <MenuItem title="Projects" url="/projects">
            <GrProjects size={20} />
          </MenuItem>
          <MenuItem title="Projects" url="/projects">
            <GrProjects size={20} />
          </MenuItem>
        </section>
      </aside>

      <style jsx>
        {`
          aside {
            width: 400px;
            background: url("/gradient-2.png");
            background-repeat: no-repeat;
            background-size: contain;
          }
        `}
      </style>
    </>
  );
}
