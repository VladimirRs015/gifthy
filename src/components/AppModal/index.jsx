import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { useRef } from "react";

const ModalOverlay = styled.div`
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 1);
  backdrop-filter:blur(5px);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.2s ease;
  z-index: 2;
`;
const ModalContaier = styled.section`
  flex-basis: 50%;
  padding: 1rem;
  background-color: #fff;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.darken};
`;
// const ModalHeader = styled.div`
//   display: flex;
//   font-weight: bold;
// `
const ModalClose = styled.button`
  margin-left: auto;
  color: inherit;
  text-decoration: none;
  margin-top: -0.5rem;
  font-size: 2rem;
  border: none;
  background-color: transparent;
`;
const ModalContent = styled.div`
  max-height: 600px;
  overflow: auto;
  padding: 20px;
`;

function AppModal({ children, isActive, isVisible, onClose }) {
  const ref = useRef();

  function handleClick(e) {
    if(ref.current === e.target) onClose()
  }

  return ReactDOM.createPortal(
    <ModalOverlay
      isActive={isActive}
      isVisible={isVisible}
      onClick={handleClick}
      ref={ref}
    >
      <ModalContaier>
        <ModalContent>
          <ModalClose onClick={onClose}>❌</ModalClose>
          {children}
        </ModalContent>
      </ModalContaier>
    </ModalOverlay>,
    document.querySelector("#root")
  );
}

export default AppModal;
