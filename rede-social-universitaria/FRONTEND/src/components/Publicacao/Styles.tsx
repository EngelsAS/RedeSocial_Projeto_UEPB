import styled from "styled-components";

export const ContainerPublicacao = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #e6ebec;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #e6ebec;
  }
`;

export const IconPerfil = styled.img`
  min-height: 40px;
  max-height: 40px;
  max-width: 40px;
  min-width: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

export const ConteudoPublicacao = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 5px;

  & > p {
    margin: 0;
    margin-top: -6px;
    margin-bottom: 3px;
  }
`;

export const TopoPublicacao = styled.div`
  display: flex;
  justify-content: space-between;

  & > h6 {
    font-weight: 600;
    margin-bottom: 3px;
  }

  & > h6 > span {
    margin-left: 5px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 400;
  }

  & > svg {
    border-radius: 50%;
    padding: 5px;
    transition: all 0.2s;
  }

  & > svg:hover {
    background-color: rgba(149, 1, 1, 0.1);
    color: rgb(149, 1, 1);
  }
`;

export const FooterPublicacao = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div:hover > svg {
    background-color: rgba(149, 1, 1, 0.1);
  }

  & > div > svg {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    padding: 7px;
    transition: all 0.2s;
  }

  & > div > span {
    font-size: 13px;
  }
`;
