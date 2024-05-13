import { Col } from "react-bootstrap";
import styled from "styled-components";

interface IButtonProps {
  $variant?: "red" | undefined;
}

export const ColDireita = styled(Col)`
  background-color: #950101;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

  p {
    font-size: 15px;
  }

  input[type="text"],
  input[type="password"] {
    background-color: #bdbdbd;
    border: none;
    margin-bottom: 20px;
    border-radius: 15px;
    padding: 5px 10px;
    outline: none;

    &::placeholder {
      color: #fff;
    }
  }
`;

export const ButtonCliqueAqui = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 15px;
  margin-left: 5px;
  text-decoration: underline;
  color: blue;
  background-color: transparent;
`;

export const ButtonStyled = styled.button<IButtonProps>`
  width: 240px;
  margin: 0 auto;
  border: none;
  border-radius: 20px;
  padding: 10px;
  background-color: ${({ $variant }) =>
    $variant === "red" ? "#950101" : "#fff"};
  color: ${({ $variant }) => ($variant === "red" ? "#fff" : "#950101")};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ $variant }) =>
      $variant === "red" ? "#d62c2c" : "#efdfdf"};
    color: ${({ $variant }) => ($variant === "red" ? "#efdfdf" : "#d62c2c")};
  }
`;
