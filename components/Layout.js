import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

import Sidebar from "./sidebar/Sidebar";
import Head from "next/head";
import PageTransition from "./PageTransition";
import TitleAnimation from "./TitleAnimation";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

export default function Layout({ children, title }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const contentViewRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    console.log(contentViewRef.current);
    enableBodyScroll(contentViewRef.current);
  }, []);

  useEffect(() => {
    enableBodyScroll(contentViewRef.current);

    if (showSidebar) {
      disableBodyScroll(contentViewRef.current);
    }

    return () => {
      clearAllBodyScrollLocks(contentViewRef.current);
    };
  }, [showSidebar]);

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
          <main id="content" className={`${showSidebar && "hide-main"}`} ref={contentViewRef}>
            <TitleAnimation contentViewRef={contentViewRef}>
              <h1 style={{ position: "relative", zIndex: 9999 }} className="display-1">
                {title}
              </h1>
            </TitleAnimation>
            {children}
          </main>
        </PageTransition>
      </div>
      <style jsx>
        {`
          #sidebar {
            height: 100%;
            padding-left: 50px;
            padding-top: 50px;
            width: 400px;
            position: fixed;
            z-index: 9 !important;
            top: 0;
            left: 0;
            transition: left 0.2s, opacity 0.2s linear;
          }

          main {
            padding-left: 500px;

            margin-top: 90px;
            overflow-y: scroll !important;
            transition: margin-left 0.2s, opacity 0.2s linear;
          }
          #menu-toggler {
            display: none;
          }

          @media only screen and (max-width: 1200px) {
            #sidebar {
              padding-left: 20px;
            }
            main {
              padding-left: 450px;
            }
          }

          @media only screen and (max-width: 991px) {
            #sidebar {
              left: -450px;
              ${showSidebar ? "left: 0 !important;" : ""}
            }
            main {
              margin-top: 100px;
              padding-left: 110px;
              ${showSidebar ? "margin-left: 450px;opacity: 0.2; overflow: hidden !important;" : ""}
            }
            #menu-toggler {
              display: block;
              position: fixed;
              top: 20px;
              left: 20px;
              z-index: 10;
            }
          }

          @media only screen and (max-width: 580px) {
            #sidebar {
              position: fixed;
              top: 0;
              bottom: 0;
              height: 100vh;
              width: 100%;
              margin-right: 0;
              padding-left: 0;
              display: none;
              opacity: 0;
              ${showSidebar ? "display: block !important; opacity: 1;" : ""}
            }
            main {
              width: 100vw;
              margin-top: 50px;
              margin-left: 0 !important;
              padding-left: 35px !important;

              ${showSidebar ? "opacity: 0.05;overflow: hidden !important;" : ""}
            }
            #menu-toggler {
              padding-top: 0 !important;
            }
          }
          @media only screen and (max-width: 380px) {
            #sidebar {
            }
          }
        `}
      </style>
    </>
  );
}
