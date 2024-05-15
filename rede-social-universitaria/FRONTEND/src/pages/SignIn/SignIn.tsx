import { Row } from "react-bootstrap";
import {
  ButtonStyled,
  ColDireita,
  ColEsquerda,
  DivTituloAndSubtitulo,
  FormSign,
  ButtonCliqueAqui,
} from "../SignUp/Styles";
import { ColInterna, RowInterna } from "../../StyledComponentsGerais";
import LogoUepb from "../../assets/icons/uepb_logo.png";
import { NavLink } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import React, { useState } from "react";
import ForgotPasswordModalContent from "../../components/ConteudosModais/ForgotPasswordModalContent/ForgotPasswordModalContent";
import { axiosLocalApi } from "../../utils/axiosInstance";

const SignIn = () => {
  const [opened, setModalOpened] = useState<boolean>(false);
  const [signUpValues, setSignUpValues] = useState({
    academicEmail: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try{
      const response = await axiosLocalApi.post("/users/login", signUpValues);
      console.log("Tá logado",response.data);
    }
    catch(error){
      console.error("Deu erro meu bom",error);
    }
  };

  return (
    <Row>
      <Modal
        opened={opened}
        setOpened={setModalOpened}
        children={<ForgotPasswordModalContent />}
      />
      <ColEsquerda md={7}>
        <RowInterna>
          <ColInterna>
            <div style={{ marginTop: "10px" }}>
              <img src={LogoUepb} width={30} />
            </div>
          </ColInterna>
        </RowInterna>

        <RowInterna style={{ margin: "45px 0px 20px 0px" }}>
          <ColInterna>
            <DivTituloAndSubtitulo>
              <h1>Entre na sua conta</h1>
            </DivTituloAndSubtitulo>
          </ColInterna>
        </RowInterna>

        <Row>
          <ColInterna md={{ span: 10, offset: 1 }}>
            <RowInterna>
              <ColInterna>
                <FormSign onSubmit={handleSubmit}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <input
                      style={{ width: "400px" }}
                      type="text"
                      placeholder="E-mail institucional"
                      onChange={(e) =>
                        setSignUpValues((prev) => ({
                          ...prev,
                          academicEmail: e.target.value,
                        }))
                      }
                    />
                    <input
                      style={{ width: "400px" }}
                      type="password"
                      placeholder="Senha"
                      onChange={(e) =>
                        setSignUpValues((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                    />
                    <p>
                      esqueceu a senha num foi major? apois
                      <ButtonCliqueAqui onClick={() => setModalOpened(true)}>
                        clique aqui
                      </ButtonCliqueAqui>
                    </p>
                  </div>

                  <ButtonStyled $variant={"red"} style={{ marginTop: "19px" }}>
                    LOGAR
                  </ButtonStyled>
                </FormSign>
              </ColInterna>
            </RowInterna>
          </ColInterna>
        </Row>
      </ColEsquerda>
      <ColDireita md={5} className="d-none d-md-flex">
        <DivTituloAndSubtitulo>
          <h1 style={{ color: "#fff" }}>Ainda não tem uma conta?</h1>
          <p
            style={{
              maxWidth: "300px",
              margin: "0 auto",
            }}
          >
            Cadastre-se pra ficar conectado com a gente!
          </p>
        </DivTituloAndSubtitulo>
        <div style={{ textAlign: "center" }}>
          <NavLink to={"/"}>
            <ButtonStyled>CADASTRAR-SE</ButtonStyled>
          </NavLink>
        </div>
      </ColDireita>
    </Row>
  );
};

export default SignIn;
