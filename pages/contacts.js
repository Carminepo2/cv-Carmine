import Layout from "../components/Layout";

export default function Projects() {
  return (
    <Layout title="Contatti">
      <form action="" method="post">
        <label className="pl-2" htmlFor="user-name">
          Nome:
        </label>
        <input id="user-name" className="rounded-pill py-3 px-4 mb-3 mr-5" type="text" />
        <label className="pl-2" htmlFor="user-email">
          Email:
        </label>
        <input id="user-email" className="rounded-pill py-3 px-4 mb-3 mr-5" type="email" />
        <label className="pl-2" htmlFor="user-message">
          Messaggio:
        </label>
        <textarea id="user-message" className="mb-3 p-3" name="" id="" cols="30" rows="6"></textarea>
        <input className="rounded-pill py-3 px-4" type="submit" value="Invia" />
      </form>
      <style jsx>{`
        input,
        textarea {
          display: block;
          background-color: rgba(248, 249, 250, 0.6) !important;
          outline: none;
          border: none;
          transition: transform 0.1s linear, box-shadow 0.1s linear;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
        }
        input[type="email"] {
          width: 60%;
        }
        input[type="text"],
        input[type="submit"] {
          width: 50%;
        }
        textarea {
          border-radius: 25px;
          width: 80%;
          resize: none;
        }
        input:focus,
        textarea:focus {
          transform: scale(1.05);
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        }
      `}</style>
    </Layout>
  );
}
