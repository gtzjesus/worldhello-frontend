import styled from 'styled-components';
import TriggerButton from '../../ui/buttons/TriggerButton';
import Modal from '../../ui/modals/Modal';

const StyledLeads = styled.div`
  height: 60vh;
  background-color: var(--color-black);
  color: var(--color-white);
  padding: var(--padding-xlarge) var(--padding-medium);
`;

const LeadsHook = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-large);
`;

const Title = styled.span`
  font-size: var(--font-medium);
`;
function Leads({ isModalOpen, openModal, closeModal }) {
  return (
    <StyledLeads>
      <LeadsHook>
        <Title>Hire a WorldHello Expert</Title>
        <TriggerButton openModal={openModal} text={`Click to start for free`} />
        {isModalOpen && <Modal closeModal={closeModal} />}
      </LeadsHook>
    </StyledLeads>
  );
}

export default Leads;
