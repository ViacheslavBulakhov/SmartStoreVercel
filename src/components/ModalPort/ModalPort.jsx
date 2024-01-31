/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
`;
export const ModalWrap = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

const modalRoot = document.querySelector("#modal-root");

const ModalPort = ({ toggleModal, children }) => {
  const onCloseModal = (e) => {
    if (e.target === e.currentTarget || e.code === "Escape") {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onCloseModal);
    return () => {
      window.removeEventListener("keydown", onCloseModal);
    };
  }, [onCloseModal]);

  return createPortal(
    <ModalOverlay onClick={onCloseModal}>
      <ModalWrap>{children}</ModalWrap>
    </ModalOverlay>,
    modalRoot
  );
};

export default ModalPort;