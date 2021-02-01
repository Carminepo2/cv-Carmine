import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

import Sidebar from "./sidebar/Sidebar";
import Head from "next/head";
import PageTransition from "./PageTransitions"
import { useState } from "react";
import { useRouter } from 'next/router';


export default function Layout({ children, title }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{`${title} | Carmine Porricelli`}</title>
      </Head>

      <div id="wrapper" className="d-flex justify-sidebar-center">
        <div id="menu-toggler" className="pl-3 py-4">
          <span
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
          >
            {showSidebar ? <GrClose size={40} /> : <AiOutlineMenu size={40} />}
          </span>
        </div>
        <Sidebar page={title} showSidebar={showSidebar} />
        
        <PageTransition router={router}>
          <main className={`${showSidebar && "hide-main"} pt-5 pl-3`}>
            <h1 className="display-1">{title}</h1>
            {children}
          </main>
        </PageTransition>
        

        
      </div>
      <style jsx>
        {`
          #menu-toggler {
            display: none;
            width: 100%;
          }
          main {
            overflow-x: hidden;
          }

          @media only screen and (max-width: 991px) {
            #menu-toggler {
              display: block;
              position: absolute !important;
              z-index: 9999;
            }
          }
          @media only screen and (max-width: 580px) {
            main {
              padding: 1.5rem !important;
              transition: opacity 0.2s linear;
            }
            .hide-main {
              opacity: 0.04;
            }
            .justify-sidebar-center {
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  );
}
