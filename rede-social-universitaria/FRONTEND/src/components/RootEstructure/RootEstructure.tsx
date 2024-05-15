import { Outlet } from "react-router-dom";
import NavbarDireitaHome from "../Navbars/NavbarDireita/NavbarDireitaHome";
import NavbarEsquerdaHome from "../Navbars/NavbarEsquerda/NavbarEsquerdaHome";
import { ContainerContent, ContainerEstructure } from "./Styles";
import NavbarCentralConteudo from "../Navbars/NavbarCentralConteudo/NavbarCentralConteudo";
import { ContainerCentral, ContainerPrincipal } from "./Styles";

const RootEstructure = () => {
  return (
    <>
      <ContainerEstructure>
        <ContainerContent>
          <NavbarEsquerdaHome />
          <NavbarDireitaHome />
          <ContainerPrincipal>
            <ContainerCentral>
              <NavbarCentralConteudo />
              <Outlet />
            </ContainerCentral>
          </ContainerPrincipal>
        </ContainerContent>
      </ContainerEstructure>
    </>
  );
};

export default RootEstructure;
