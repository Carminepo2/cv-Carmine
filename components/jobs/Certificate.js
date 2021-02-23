export default function Certificate({ title, location, link }) {
  return (
    <>
      <div>
        <h2>{title}</h2>
        <small className="text-muted">{location}</small>
        {link && (
          <div className="certificate-link">
            <a href={link} target="__blank">
              Link Certificato
            </a>
          </div>
        )}
      </div>
      <style jsx>{`
        h2 {
          font-size: 1.3rem;
        }
        small {
          position: relative;
          bottom: 13px;
        }
        a {
          color: rgba(0, 112, 243, 1);
        }
        .certificate-link {
          font-size: 0.8rem;
          position: relative;
          bottom: 15px;
        }
      `}</style>
    </>
  );
}
