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
      <aside className={`${showSidebar && "show-sidebar"} d-flex justify-content-start align-items-center py-5 flex-column disable-scrollbar`}>
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
          aside {
            width: 35vw;
            height: 100vh;
            background: url("/gradient-2.png");
            background-repeat: no-repeat;
            background-position: 60% 60%;
            background-size: cover;
            overflow-y: scroll;
            white-space: nowrap;
            user-select: none;
          }

          @media only screen and (max-width: 991px) {
            aside {
              z-index: 99;
              width: 0;
              opacity: 0;
            }
            .show-sidebar {
              width: 400px !important;
              opacity: 1;
            }
          }

          @media only screen and (max-width: 580px) {
            aside {
              z-index: 99;
              position: fixed;
              transition: opacity 0.4s linear;
            }
            .show {
              width: 400px !important;
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
}
