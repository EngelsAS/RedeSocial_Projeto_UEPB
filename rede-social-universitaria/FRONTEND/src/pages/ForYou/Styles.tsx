import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: end;
`;

export const ContentContainer = styled.div`
  border: 1px solid #c62727;
  flex-basis: 645px;
  flex-shrink: 0;

  @media only screen and (max-width: 1320px) {
    & {
      flex-basis: 420px;
      flex-grow: 1;
      margin-left: 50px;
    }
  }
`;
