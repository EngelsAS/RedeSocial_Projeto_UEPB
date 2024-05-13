import React from "react";
import { ButtonStyled, FormSign } from "../../../pages/SignUp/Styles";
import { ContainerContent } from "./Styles";

const ForgotPasswordModalContent = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <ContainerContent>
      <p>
        <span>Informe seu email.</span> Enviaremos um código de recuperação de
        senha por lá.
      </p>
      <FormSign
        style={{ padding: "0", margin: "15px 0px" }}
        onSubmit={handleSubmit}
      >
        <input type="text" placeholder="E-mail" />
        <ButtonStyled $variant="red">Solicitar Código</ButtonStyled>
      </FormSign>
    </ContainerContent>
  );
};

export default ForgotPasswordModalContent;
