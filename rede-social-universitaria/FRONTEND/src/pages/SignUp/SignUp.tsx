import { Row } from "react-bootstrap";
import {
  ButtonStyled,
  ColDireita,
  ColEsquerda,
  DivTituloAndSubtitulo,
  FormSign,
  FotoPerfilContainer,
} from "./Styles";
import LogoUepb from "../../assets/icons/uepb_logo.png";
import PerfilIcon from "../../assets/icons/icon_perfil.png";
import { ColInterna, RowInterna } from "../../StyledComponentsGerais";
import React from "react";
import { NavLink } from "react-router-dom";
import { axiosLocalApi } from "../../utils/axiosInstance";
import { useState } from "react";


const SignUp = () => {
  const [signUpValues, setSignUpValues] = useState({
    name: "",
    academicEmail: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("teste");

    try{
      const response = await axiosLocalApi.post("/users", signUpValues);
      console.log("Usuario cadastradooo",response.data);
    }
    catch(error){
      console.error("Deu erro meu bom",error);
    }
  };

  return (
    <Row>
      <ColEsquerda md={7}>
        <RowInterna>
          <ColInterna>
            <div style={{ marginTop: "10px" }}>
              <img src={LogoUepb} width={30} />
            </div>
          </ColInterna>
        </RowInterna>

        <RowInterna>
          <ColInterna>
            <DivTituloAndSubtitulo>
              <h1>Crie Sua Conta</h1>
              <p>Use seus dados de matrícula para se cadastrar</p>
            </DivTituloAndSubtitulo>
          </ColInterna>
        </RowInterna>

        <RowInterna>
          <ColInterna md={{ span: 10, offset: 1 }}>
            <RowInterna>
              <ColInterna
                xs={12}
                md={4}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  marginBottom: "20px",
                }}
              >
                <FotoPerfilContainer>
                  <img src={PerfilIcon} />
                </FotoPerfilContainer>
              </ColInterna>
              <ColInterna>
                <FormSign onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    placeholder="Nome"
                    onChange={(e) =>
                      setSignUpValues((prev) => ({
                        ...prev,
                        name: e.target.value,
                      }))
                    }
                    />
                  <input 
                    type="text" 
                    placeholder="Nome de Usuário"
                    onChange={(e) =>
                      setSignUpValues((prev) => ({
                        ...prev,
                        username: e.target.value,
                      }))
                    } />
                  <input 
                    type="text" 
                    placeholder="E-mail Institucional" 
                    onChange={(e) =>
                      setSignUpValues((prev) => ({
                        ...prev,
                        academicEmail: e.target.value,
                      }))
                    }
                    />
                  <input 
                    type="password" 
                    placeholder="Senha" 
                    onChange={(e) =>
                      setSignUpValues((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    />
                  <input 
                    type="password" 
                    placeholder="Cofirmação de Senha" 
                    onChange={(e) =>
                      setSignUpValues((prev) => ({
                        ...prev,
                        confirm_password: e.target.value,
                      }))
                    }
                    />
                  <ButtonStyled
                    $variant="red"
                    style={{ marginTop: "20px" }}
                    type="submit"
                  >
                    CADASTRAR-SE
                  </ButtonStyled>
                </FormSign>
              </ColInterna>
            </RowInterna>
          </ColInterna>
        </RowInterna>
      </ColEsquerda>
      <ColDireita md={5} className="d-none d-md-flex">
        <DivTituloAndSubtitulo>
          <h1 style={{ color: "#fff" }}>Já possui uma conta?</h1>
          <p
            style={{
              maxWidth: "300px",
              margin: "0 auto",
            }}
          >
            Faça login pra se manter conectado com a gente!
          </p>
        </DivTituloAndSubtitulo>
        <div style={{ textAlign: "center" }}>
          <NavLink to={"/sign-in"}>
            <ButtonStyled>LOGAR</ButtonStyled>
          </NavLink>
        </div>
      </ColDireita>
    </Row>
  );
};

export default SignUp;
