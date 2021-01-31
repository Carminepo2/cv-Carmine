import Link from "next/link";

export default function MenuItem({ children, title, url }) {
  return (
    <>
      <Link href={url}>
        <a className="link d-block py-4 px-5">
          <span className="link-icon">{children}</span>
          {title}
        </a>
      </Link>
      <style jsx>
        {`
          .link {
            width: 100%;
            font-size: 1.15rem;
          }
          .link-icon {
            position: relative;
            padding-left: 2px;
            margin-right: 80px;
            bottom: 2px;
          }
        `}
      </style>
    </>
  );
}
