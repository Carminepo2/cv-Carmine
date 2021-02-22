import { useEffect, useRef } from "react";
import Image from "next/image";

export default function ProductUse({ icon, type }) {
  return (
    <>
      <div className={`p-1 ${type}`}>
        <img draggable="false" src={`/icons/${icon}`} height="110px" width="110px" />
      </div>

      <style jsx>{`
        img {
          filter: grayscale(100%) blur(2px);
          opacity: 0.2;
          transform: scale(0.85);
          transition: opacity 0.2s ease-out, transform 0.2s ease-out;
          user-select: none;
        }
        .highlight > img {
          filter: none !important;
          opacity: 1 !important;
          transform: scale(1) !important;
        }
        @media only screen and (max-width: 991px) {
          img {
            height: 90px;
            width: 90px;
          }
        }
        @media only screen and (max-width: 580px) {
          img {
            height: 60px;
            width: 60px;
          }
        }
      `}</style>
    </>
  );
}
