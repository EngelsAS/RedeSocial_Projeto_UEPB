import { Outlet } from "react-router-dom";
import NavbarDireitaHome from "../Navbars/NavbarDireita/NavbarDireitaHome";
import NavbarEsquerdaHome from "../Navbars/NavbarEsquerda/NavbarEsquerdaHome";
import { ContainerContent, ContainerEstructure } from "./Styles";

const RootEstructure = () => {
  return (
    <>
      <ContainerEstructure>
        <ContainerContent>
          <NavbarEsquerdaHome />
          <NavbarDireitaHome />
          <Outlet />
        </ContainerContent>
      </ContainerEstructure>
    </>
  );
};

export default RootEstructure;
