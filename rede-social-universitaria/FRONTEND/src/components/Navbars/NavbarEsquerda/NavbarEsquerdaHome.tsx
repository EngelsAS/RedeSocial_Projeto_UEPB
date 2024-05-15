import { NavbarContainer, ButtonPostarMinimizado } from "./Styles";
import LogoUepb from "../../../assets/icons/uepb_logo.png";
import { NavLink } from "react-router-dom";
import { ButtonStyled } from "../../../pages/SignUp/Styles";
import { Icon } from "@iconify/react/dist/iconify.js";

const NavbarEsquerdaHome = () => {
  return (
    <NavbarContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={LogoUepb} width={30} />
      </div>

      <nav>
        <NavLink to={"/home"}>
          <Icon
            icon="material-symbols:home-outline"
            style={{ color: "#000" }}
          />
          <span>Página Inicial</span>
          <div className="nav_tooltip">
            <span>Página Inicial</span>
          </div>
        </NavLink>
        <NavLink to={"/"}>
          <Icon icon="material-symbols:search" style={{ color: "#000" }} />
          <span>Explorar</span>
          <div className="nav_tooltip">
            <span>Explorar</span>
          </div>
        </NavLink>
        <NavLink to={"/"}>
          <Icon icon="mdi:bell-outline" style={{ color: "#000" }} />
          <span>Notificações</span>
          <div className="nav_tooltip">
            <span>Notificações</span>
          </div>
        </NavLink>
        <NavLink to={"/"}>
          <Icon
            icon="material-symbols:mail-outline"
            style={{ color: "#000" }}
          />
          <span>Mensagens</span>
          <div className="nav_tooltip">
            <span>Mensagens</span>
          </div>
        </NavLink>
        <NavLink to={"/"}>
          <Icon icon="tdesign:user" style={{ color: "#000" }} />
          <span>Perfil</span>
          <div className="nav_tooltip">
            <span>Perfil</span>
          </div>
        </NavLink>
        <ButtonStyled
          className="expanded"
          style={{ fontSize: "14px", width: "80%" }}
          $variant="red"
        >
          Postar
        </ButtonStyled>
        <ButtonPostarMinimizado>
          <div className="nav_tooltip">
            <span>Postar</span>
          </div>
          <Icon icon="icon-park-outline:write" height={25} />
        </ButtonPostarMinimizado>
      </nav>
    </NavbarContainer>
  );
};

export default NavbarEsquerdaHome;
