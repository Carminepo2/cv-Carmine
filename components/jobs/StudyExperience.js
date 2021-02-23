export default function JobExperience({ date, title, location, description }) {
  return (
    <>
      <div className="shadow-sm mr-3 pb-5 px-5 pt-4 my-3">
        <span className="job-date text-muted">{date}</span>
        <h2>{title}</h2>
        <small className="text-muted">{location}</small>
        <p>{description}</p>
      </div>

      <style jsx>{`
        div {
          background-color: rgba(248, 249, 250, 0.6);
          display: inline-block;
          border-radius: 25px;
          position: relative;
        }
        .job-date {
          font-size: 1.8rem;
          font-weight: 100;
          margin-bottom: 10px;
        }
        span {
        }
        h2 {
          margin: 0;
          line-height: 0.8;
        }
        p {
          margin-top: 5px;
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
}
