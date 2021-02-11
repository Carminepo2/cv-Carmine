import Tilt from "react-parallax-tilt";
import { useRef } from "react";

export default function InfoCard() {
  const cardRef = useRef();
  const addShadow = () => {
    cardRef.current.classList.add("info-card-hovered");
  };
  const removeShadow = () => {
    cardRef.current.classList.remove("info-card-hovered");
  };

  return (
    <>
      <Tilt glareEnable={true} tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.1} onEnter={addShadow} onLeave={removeShadow}>
        <article ref={cardRef} id="info-card" className="rounded shadow-sm p-4 mt-2 d-flex align-items-center">
          <img className="rounded-circle mr-3" src="https://via.placeholder.com/60" alt="my face" />
          <div>
            <div id="name">Carmine Porricelli</div>
            <small className="text-muted position-relative">carmineporricelli96@gmail.com</small>
          </div>
        </article>
      </Tilt>

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

          #info-card {
            transition: box-shadow 0.2s ease-in;
          }

          .info-card-hovered {
            box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.1) !important;
          }

          @media only screen and (max-width: 380px) {
            article {
              padding: 15px 15px !important;
            }
            #name {
              font-size: 1rem !important;
            }
            small {
              font-size: 0.7rem;
              bottom: 5px;
            }
          }
        `}
      </style>
    </>
  );
}
