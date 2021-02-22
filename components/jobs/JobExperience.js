export default function JobExperience({ date, title, location, children }) {
  return (
    <>
      <div className="pr-5 my-5">
        <span className="job-date text-muted">{date}</span>
        <h2>{title}</h2>
        <small className="text-muted">{location}</small>
        <p>{children}</p>
      </div>
      <hr />

      <style jsx>{`
        .job-date {
          font-size: 1.8rem;
          font-weight: 100;
          margin-bottom: 10px;
        }
        h2 {
          margin: 0;
          line-height: 0.8;
        }
        p {
          margin-top: 15px;
        }
      `}</style>
    </>
  );
}
