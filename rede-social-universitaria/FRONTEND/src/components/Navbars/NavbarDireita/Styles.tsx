import styled from "styled-components";

export const NavbarContainer = styled.div`
  border-left: 1px solid #e6ebec;
  float: right;
  width: 380px;
  height: 1000px;

  @media only screen and (max-width: 1320px) {
    & {
      width: 330px;
    }
  }

  @media only screen and (max-width: 820px) {
    & {
      width: 315px;
    }
  }

  @media only screen and (max-width: 801px) {
    & {
      display: none;
    }
  }
`;
