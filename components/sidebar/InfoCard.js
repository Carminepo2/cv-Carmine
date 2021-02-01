export default function InfoCard() {
  return (
    <>
      <article id="info-card" className="rounded shadow-sm p-4 mt-2 d-flex align-items-center">
        <img className="rounded-circle mr-3" src="https://via.placeholder.com/60" alt="my face" />
        <div>
          <div id="name">Carmine Porricelli</div>
          <small className="text-muted position-relative">carmineporricelli96@gmail.com</small>
        </div>
      </article>
      <style jsx>
        {`
          #name {
            font-size: 1.2rem;
            font-weight: 600;
          }
          small {
            bottom: 3px;
          }
          article {
            background-color: rgba(248, 249, 250, 0.6);
          }
        `}
      </style>
    </>
  );
}
