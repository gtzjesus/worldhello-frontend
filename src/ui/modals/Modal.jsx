import styled from 'styled-components';
import { useEffect } from 'react';
import Form from '../../components/form/Form';
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
    // Disable scrolling on the body when the modal is open
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling on the body when the modal is closed
    return () => {
      document.body.style.overflow = 'unset';
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
