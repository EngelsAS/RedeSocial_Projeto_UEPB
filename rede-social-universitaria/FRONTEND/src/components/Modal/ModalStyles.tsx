import styled from "styled-components";

interface IModalContainerProps {
  width?: string;
  opened: boolean;
}

interface IFadeProps {
  opened: boolean;
}

export const Fade = styled.div<IFadeProps>`
  position: fixed;
  top: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.3s;
  opacity: ${(props) => (props.opened ? "1" : "0")};
  pointer-events: ${(props) => (props.opened ? "auto" : "none")};
`;

export const ModalContainer = styled.div<IModalContainerProps>`
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: ${(props) => props.width || "600px"};
  max-width: 90%;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s;
  opacity: ${(props) => (props.opened ? "1" : "0")};
  pointer-events: ${(props) => (props.opened ? "auto" : "none")};
`;

export const ExitIconContainer = styled.div`
  display: flex;
  justify-content: end;

  & > svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
    margin: 0px 0px 15px 0px;
  }
`;
