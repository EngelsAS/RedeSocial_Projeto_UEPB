import styled from "styled-components";

export const NavbarContainer = styled.div`
  border-right: 1px solid #e6ebec;
  width: 275px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  overflow-y: hidden;

  & > nav {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
    align-items: start;
  }

  & > nav > a {
    display: flex;
    position: relative;
    align-items: center;
    margin: 5px 0;
    margin-left: 25px;
    text-decoration: none;
    padding: 5px 20px 5px 6px;
    border-radius: 20px;
    color: #000;
    transition: background-color 0.2s;
  }

  & > nav > a.active {
    font-weight: 600;
  }

  & > nav > a > div {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    left: 55px;
    padding: 5px 10px;
    background-color: #e7e7e7;
    transition: opacity 0.2s;
    border-radius: 20px;
  }

  & > nav > a > div > span {
    white-space: nowrap;
  }

  & > nav > a > svg {
    width: 25px;
    height: 25px;
  }

  & > nav > a > span {
    margin-left: 7px;
  }

  & > nav > a:hover {
    background-color: #e7e7e7;
  }

  & > nav > a:nth-child(5) {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 1320px) {
    & {
      width: 50px;
      overflow: visible;
    }

    & > nav > a {
      width: 40px;
      height: 40px;
      justify-content: center;
      border-radius: 50%;
      margin: 0 auto;
      padding: 5px;
    }

    & > nav > a > span {
      display: none;
    }

    & > nav > button.expanded {
      display: none;
    }

    & > nav > a:hover > div {
      opacity: 1;
    }

    & > nav > a:nth-child(5) {
      margin-bottom: 5px;
    }
  }
`;

export const ButtonPostarMinimizado = styled.button`
  display: none;
  position: relative;
  margin: 0 auto;
  padding: 5px;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: #950101;
  color: #fff;
  font-weight: 600;

  & > svg {
    color: #fff;
  }

  & > div {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    left: 55px;
    padding: 5px 10px;
    background-color: #950101;
    top: 1px;
    border-radius: 20px;
    transition: opacity 0.2s;
  }

  &:hover > div {
    opacity: 1;
  }

  @media only screen and (max-width: 1320px) {
    display: block;
  }
`;
