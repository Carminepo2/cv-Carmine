import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

import Sidebar from "./sidebar/Sidebar";
import Head from "next/head";
import PageTransition from "./PageTransition";
import TitleAnimation from "./TitleAnimation";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Layout({ children, title }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`${title} | Carmine Porricelli`}</title>
      </Head>

      <div id="wrapper" className="">
        <div id="menu-toggler" className="pl-3 pt-3">
          <span
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
          >
            {showSidebar ? <GrClose size={40} /> : <AiOutlineMenu size={40} />}
          </span>
        </div>
        <section id="sidebar">
          <Sidebar page={title} showSidebar={showSidebar} />
        </section>

        <PageTransition router={router}>
          <main className={`${showSidebar && "hide-main"}`}>
            <TitleAnimation>
              <h1 className="display-1">{title}</h1>
            </TitleAnimation>
            {children}
          </main>
        </PageTransition>
      </div>
      <style jsx>
        {`
          #sidebar {
            height: 100%;
            padding-left: 100px;
            padding-top: 50px;
            width: 400px;
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
          }
          main {
            margin-left: 600px;
            margin-top: 100px;
          }
          #menu-toggler {
            display: none;
          }

          @media only screen and (max-width: 1200px) {
            #sidebar {
              padding-left: 20px;
            }
            main {
              margin-left: 450px;
            }
          }

          @media only screen and (max-width: 991px) {
            #sidebar {
              left: -450px;
              ${showSidebar ? "left: 0 !important;" : ""}
            }
            main {
              margin-top: 100px;
              margin-left: 110px;
              ${showSidebar ? "margin-left: 450px !important;" : ""}
            }
            #menu-toggler {
              display: block;
              position: absolute;
              top: 20px;
              left: 20px;
              z-index: 99;
            }
          }

          @media only screen and (max-width: 580px) {
          }
          @media only screen and (max-width: 380px) {
          }
        `}
      </style>
    </>
  );
}
