import styled from "styled-components";

export const NavContent = styled.div`
  border-bottom: 1px solid #e6ebec;
  height: 40px;
  display: flex;
  align-items: center;

  p {
    margin: 0;
  }

  & > a {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #000;
    font-size: 12px;
  }

  & > a:hover {
    background-color: #e7e7e7;
  }

  & > p {
    padding-bottom: 2px;
  }

  & > a.active > p {
    width: fit-content;
    font-weight: 600;
  }

  & > a.active > p > div {
    margin-top: 7px;
    margin-bottom: -10px;
    border: 2px solid #950101;
    border-radius: 50px;
  }
`;
