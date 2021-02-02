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
          }
          .link:hover {
            background-color: rgba(0, 112, 243, 0.75);
            box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
            color: white;
            cursor: pointer;
          }
          .link-icon {
            position: relative;
            padding-left: 2px;
            margin-right: 40px;
            bottom: 2px;
          }
          @media only screen and (max-width: 350px) {
            .link {
              font-size: 0.9rem;
              margin-top: 8px !important;
              margin-bottom: 8px !important;
              padding: 10px 10px 8px 5px !important;
            }
            .link-icon {
              left: 10px;
            }
          }
        `}
      </style>
    </>
  );
}
