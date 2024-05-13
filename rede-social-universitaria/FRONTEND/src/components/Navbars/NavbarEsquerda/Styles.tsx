import styled from "styled-components";

export const NavbarContainer = styled.div`
  border: 1px solid black;
  width: 275px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;

  & > nav {
    display: flex;
    flex-direction: column;
  }

  & > nav > a {
    margin: 5px 0;
  }

  @media only screen and (max-width: 1320px) {
    & {
      width: 50px;
    }
  }
`;
