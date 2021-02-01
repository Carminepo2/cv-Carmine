import { GrGithub, GrInstagram } from "react-icons/gr";

export default function Socials() {
  const ICON_SIZE = 30;

  return (
    <>
      <span className="p-2">
        <a href="#">
          <GrGithub size={ICON_SIZE} />
        </a>
      </span>
      <span className="p-2">
        <a href="#" id="instagram-icon">
          <GrInstagram size={ICON_SIZE} />
        </a>
      </span>
      <div>
        <small className="text-muted">@2021 Carmine Porricelli</small>
      </div>
    </>
  );
}
