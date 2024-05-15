import React from "react";
import { ExitIconContainer, Fade, ModalContainer } from "./ModalStyles";
import { Icon } from "@iconify/react";

interface IModalProps {
  width?: string;
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal = (props: IModalProps) => {
  return (
    <>
      <Fade opened={props.opened} onClick={() => props.setOpened(false)}></Fade>
      <ModalContainer opened={props.opened} width={props.width}>
        <ExitIconContainer>
          <Icon
            icon="ion:close-outline"
            style={{
              color: "#BDBDBD",
            }}
            height={24}
            onClick={() => props.setOpened(false)}
          />
        </ExitIconContainer>

        {props.children}
      </ModalContainer>
    </>
  );
};

export default Modal;
