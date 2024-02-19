import { useEffect, useState } from 'react';
import Footer from '../../components/footer/Footer';
import Leads from '../../components/leads/Leads';
import styled from 'styled-components';

const StyledContact = styled.div`
  height: 100vh;
  background-color: var(--color-black);
`;

const Container = styled.div`
  position: absolute;

  bottom: 0;
  width: 100vw;
`;
function Contact() {
  // GRAB STATE for opening/closing modal component
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen]);
  return (
    <StyledContact>
      <Leads
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <Container>
        <Footer />
      </Container>
    </StyledContact>
  );
}

export default Contact;
