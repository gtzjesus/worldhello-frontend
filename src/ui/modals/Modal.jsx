import styled from 'styled-components';
import Form from '../form/Form';
import { useEffect } from 'react';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  color: var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: var(--z-toppest);
  overflow: hidden;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 10px;
  width: 100%;
  max-width: 355px;
  text-align: center;
  z-index: var(--z-toppest);
  overflow-y: auto; /* Enable scrolling inside the modal content */
  -webkit-overflow-scrolling: touch; /* Enable smooth scrolling on iOS devices */
`;

function Modal({ closeModal }) {
  useEffect(() => {
    // Set body overflow to 'hidden' when modal is opened
    document.body.style.overflow = 'hidden';

    // Revert body overflow to 'auto' when modal is closed
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <StyledModal onClick={handleOutsideClick}>
      <ModalContent>
        <Form closeModal={closeModal} />
      </ModalContent>
    </StyledModal>
  );
}

export default Modal;
