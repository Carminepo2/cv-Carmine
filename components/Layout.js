import { AiOutlineMenu } from "react-icons/ai"

import Sidebar from "./sidebar/Sidebar";
import Head from "next/head";
import { useState } from "react";


export default function Layout({ children, title }) {
  const [showSidebar, setShowSidebar] = useState(false)


  return (
    <>
      <Head>
        <title>{`${title} | Carmine Porricelli`}</title>
      </Head>
        <div id="wrapper" className="d-flex">
          <Sidebar page={title} showSidebar={showSidebar} />
          <main className="p-5">
            <div id="menu-toggler" className="pl-1" onClick={() => {
              setShowSidebar(!showSidebar)
            }}>
              <AiOutlineMenu size={35}/>
            </div>
            <h1 className="display-1">{title}</h1>
            {children}
          </main>
        </div>
        <style jsx>
        {`
          #menu-toggler {
            display: none;
          }
          main {
            overflow-x: hidden;
          }

          @media only screen and (max-width: 991px) {
            #menu-toggler {
              display: block;
            }
          }
        `}
      </style>
      
    </>
  );
}
