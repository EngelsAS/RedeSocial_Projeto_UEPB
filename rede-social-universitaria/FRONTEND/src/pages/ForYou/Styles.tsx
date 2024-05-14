import styled from "styled-components";

export const ContainerPrincipal = styled.div`
  display: flex;
  justify-content: end;
`;

export const ContentContainer = styled.div`
  border-bottom: 1px solid #e6ebec;
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
