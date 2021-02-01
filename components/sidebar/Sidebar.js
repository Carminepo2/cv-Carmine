import InfoCard from "./InfoCard";
import MenuItem from "./MenuItem";
import Socials from "./Socials";
import { MdWork, MdContactMail } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { IoHandRight } from "react-icons/io5";

import Link from "next/link";

export default function Sidebar() {
  const ICON_SIZE = 25;

  return (
    <>
      <aside className="d-flex justify-content-start align-items-center py-5 flex-column">
        <Link href="/">
          <a>
            <InfoCard />
          </a>
        </Link>

        <section id="sidebar-links" className="w-100 mt-4 mb-5 d-flex flex-column align-items-center">
          <div>
            <MenuItem title="Progetti" url="/projects">
              <BiCodeAlt size={ICON_SIZE} />
            </MenuItem>
            <MenuItem title="Esperienze lavorative" url="/jobs">
              <MdWork size={ICON_SIZE} />
            </MenuItem>
            <MenuItem title="Skills" url="/skills">
              <IoHandRight size={ICON_SIZE} />
            </MenuItem>
            <MenuItem title="Contatti" url="/contacts">
              <MdContactMail size={ICON_SIZE} />
            </MenuItem>
          </div>
        </section>
        <section id="sidebar-socials" className="text-center mt-auto">
          <Socials />
        </section>
      </aside>

      <style jsx>
        {`
          #sidebar-socials {
          }
          #sidebar-links {
          }
          aside {
            width: 30vw;
            height: 100vh;
            background: url("/gradient-2.png");
            background-repeat: no-repeat;
            background-position: top center;
            background-size: contain;
          }
        `}
      </style>
    </>
  );
}
