import { NavLink } from "react-router-dom";
import { NavContent } from "./Styles";

const NavbarCentralConteudo = () => {
  return (
    <NavContent>
      <NavLink to="/home/for-you">
        <p>
          Para Você <div></div>
        </p>
      </NavLink>
      <NavLink to="/home/seguindo">
        <p>
          Seguindo <div></div>
        </p>
      </NavLink>
    </NavContent>
  );
};

export default NavbarCentralConteudo;
