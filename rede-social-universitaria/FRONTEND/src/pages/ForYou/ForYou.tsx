import CardPublicacao from "../../components/Publicacao/CardPublicacao";
import { TypePublicacao } from "../../types/publicacao";

const ForYou = () => {
  const publicacoes: TypePublicacao[] = [
    {
      fotoPerfil:
        "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9DC6/production/_101909304_bbc_news_tile_rgb.png",
      nomeUsuario: "BBC",
      conteudo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, alias consectetur. Quo totam distinctio temporibus eligendi aperiam laboriosam minima beatae perspiciatis, pariatur repellendus iste animi odio quisquam quaerat iure qui!",
      dateTimePost: new Date(),
      curtidas: 572,
      reposts: 25,
      comentarios: 180,
    },
    {
      fotoPerfil:
        "https://theme.zdassets.com/theme_assets/968999/d8a347b41db1ddee634e2d67d08798c102ef09ac.jpg",
      nomeUsuario: "New York Times",
      conteudo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, alias consectetur. Quo totam distinctio temporibus eligendi aperiam laboriosam minima beatae perspiciatis, pariatur repellendus iste animi odio quisquam quaerat iure qui!",
      dateTimePost: new Date(),
      curtidas: 612,
      reposts: 32,
      comentarios: 220,
    },
    {
      fotoPerfil:
        "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9DC6/production/_101909304_bbc_news_tile_rgb.png",
      nomeUsuario: "BBC",
      conteudo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, alias consectetur. Quo totam distinctio temporibus eligendi aperiam laboriosam minima beatae perspiciatis, pariatur repellendus iste animi odio quisquam quaerat iure qui!",
      dateTimePost: new Date(),
      curtidas: 572,
      reposts: 25,
      comentarios: 180,
    },
    {
      fotoPerfil:
        "https://theme.zdassets.com/theme_assets/968999/d8a347b41db1ddee634e2d67d08798c102ef09ac.jpg",
      nomeUsuario: "New York Times",
      conteudo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, alias consectetur. Quo totam distinctio temporibus eligendi aperiam laboriosam minima beatae perspiciatis, pariatur repellendus iste animi odio quisquam quaerat iure qui!",
      dateTimePost: new Date(),
      curtidas: 612,
      reposts: 32,
      comentarios: 220,
    },
    {
      fotoPerfil:
        "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/9DC6/production/_101909304_bbc_news_tile_rgb.png",
      nomeUsuario: "BBC",
      conteudo:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, alias consectetur. Quo totam distinctio temporibus eligendi aperiam laboriosam minima beatae perspiciatis, pariatur repellendus iste animi odio quisquam quaerat iure qui!",
      dateTimePost: new Date(),
      curtidas: 572,
      reposts: 25,
      comentarios: 180,
    },
  ];

  return (
    <div>
      {publicacoes.map((item, index) => (
        <CardPublicacao publicacao={item} key={index} />
      ))}
    </div>
  );
};

export default ForYou;
