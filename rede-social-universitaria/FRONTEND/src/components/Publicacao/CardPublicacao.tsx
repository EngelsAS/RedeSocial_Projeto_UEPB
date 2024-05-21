import { TypePublicacao } from "../../types/publicacao";
import {
  ContainerPublicacao,
  IconPerfil,
  ConteudoPublicacao,
  TopoPublicacao,
  FooterPublicacao,
} from "./Styles";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ICardPublicacao {
  publicacao: TypePublicacao;
}

const CardPublicacao = ({ publicacao }: ICardPublicacao) => {
  return (
    <ContainerPublicacao>
      <IconPerfil src={publicacao.fotoPerfil} />
      <ConteudoPublicacao>
        <TopoPublicacao>
          <h6>
            {publicacao.nomeUsuario}
            <span>
              • {publicacao.dateTimePost.getDate()}/
              {publicacao.dateTimePost.getMonth()}/
              {publicacao.dateTimePost.getFullYear()}
            </span>
          </h6>

          <Icon width={28} icon="tabler:dots" />
        </TopoPublicacao>

        <p>{publicacao.conteudo}</p>

        <FooterPublicacao>
          <div>
            <Icon icon="gravity-ui:comment" />
            <span>{publicacao.comentarios}</span>
          </div>
          <div>
            <Icon icon="fluent:arrow-sort-28-filled" />
            <span>{publicacao.reposts}</span>
          </div>
          <div>
            <Icon icon="ph:heart" />
            <span>{publicacao.curtidas}</span>
          </div>
        </FooterPublicacao>
      </ConteudoPublicacao>
    </ContainerPublicacao>
  );
};

export default CardPublicacao;
