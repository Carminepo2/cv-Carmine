import Link from "next/link";

export default function MenuItem({ children, title, url }) {
  return (
    <>
      <Link href={url} shallow={true}>
        <a className="link d-block px-4 py-3 my-3 rounded-pill">
          <span className="link-icon">{children}</span>
          {title}
        </a>
      </Link>

      <style jsx>
        {`
          .link {
            width: 100%;
            font-size: 1.1rem;
            font-weight: 600;
            transition: background-color 0.2s, color 0.2s, transform 0.5s;

          }
     
          .link-icon {
            position: relative;
            padding-left: 2px;
            margin-right: 40px;
            bottom: 2px;
          }
   
          .link:hover {
            background-color: rgba(0, 112, 243, 1);
            color: white;
            transform: scale(1.1);
            cursor: pointer;
          }
          
          @media only screen and (max-width: 350px) {
            .link {
              width: 95%;
              padding-left: 10px !important;
              margin-right: 0px !important;
              padding-top:8px !important;
              padding-bottom 8px !important;
              margin-right: 0 !important; 

            }
            .link-icon {
              margin-right: 30px;
              padding-left: 0;

            }
          }
        `}
      </style>
    </>
  );
}
