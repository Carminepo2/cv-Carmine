import InfoCard from "./InfoCard";
import MenuItem from "./MenuItem";
import Socials from "./Socials";
import { MdWork, MdContactMail } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { IoHandRight } from "react-icons/io5";

import Link from "next/link";

export default function Sidebar({ showSidebar }) {
  const ICON_SIZE = 25;

  return (
    <>
      <aside className={`d-flex justify-content-start align-items-center py-5 flex-column ${showSidebar && "center-sidebar"}`}>
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
      </aside>

      <style jsx>
        {`
          aside {
            width: 400px;
            height: 100%;
            transition: width 0.4s, opacity 0.4s linear;
            background: url("/gradient-2.png");
            background-repeat: no-repeat;
            background-size: contain;
            overflow-y: scroll;
            background-size: 400px 600px;
            white-space: nowrap;
            user-select: none;
          }

          @media only screen and (max-width: 991px) {
          }

          @media only screen and (max-width: 580px) {
            .center-sidebar {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
}
