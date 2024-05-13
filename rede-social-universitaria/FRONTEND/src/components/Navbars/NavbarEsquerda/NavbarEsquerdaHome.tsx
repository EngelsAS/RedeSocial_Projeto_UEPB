import { NavbarContainer } from "./Styles";
import LogoUepb from "../../../assets/icons/uepb_logo.png";
import { NavLink } from "react-router-dom";

const NavbarEsquerdaHome = () => {
  return (
    <NavbarContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={LogoUepb} width={30} />
      </div>

      <nav>
        <NavLink to={"/home"}>Página Inicial</NavLink>
        <NavLink to={"/home"}>Explorar</NavLink>
        <NavLink to={"/home"}>Notificações</NavLink>
        <NavLink to={"/home"}>Mensagens</NavLink>
        <NavLink to={"/home"}>Perfil</NavLink>
      </nav>
    </NavbarContainer>
  );
};

export default NavbarEsquerdaHome;
