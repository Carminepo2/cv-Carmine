import Sidebar from "./sidebar/Sidebar";
import Head from "next/head";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{`${title} | Carmine Porricelli`}</title>
      </Head>
      <div id="wrapper" className="d-flex">
        <Sidebar />
        <main className="p-5">
          <h1 className="display-1">{title}</h1>
          {children}
        </main>
      </div>
    </>
  );
}
