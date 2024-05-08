import { Col } from "react-bootstrap";
import styled from "styled-components";

export const ColDireita = styled(Col)`
  background-color: #950101;
  min-height: 100vh;
`;

export const ColEsquerda = styled(Col)`
  background-color: #fff;
  min-height: 100vh;
  padding-bottom: 40px;
`;

export const DivTituloAndSubtitulo = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
    margin: 0;
    color: #950101;
  }

  p {
    color: #bdbdbd;
    font-size: 1.15em;
  }
`;

export const FotoPerfilContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const FormSign = styled.form`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;

  input[type="text"] {
    background-color: #bdbdbd;
    border: none;
    margin-bottom: 20px;
    border-radius: 15px;
    padding: 5px 10px;

    &::placeholder {
      color: #fff;
    }
  }
`;

export const ButtonStyled = styled.button`
  width: 240px;
  margin: 0 auto;
  border: none;
  border-radius: 20px;
  padding: 10px;
  background-color: #950101;
  color: #fff;
`;
