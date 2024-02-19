import styled from 'styled-components';
import TriggerButton from '../../ui/buttons/TriggerButton';
import Modal from '../../ui/modals/Modal';

const StyledLeads = styled.div`
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

const SubTitle = styled.span`
  font-size: var(--font-xxxsmall);
`;

function Leads({ isModalOpen, openModal, closeModal }) {
  return (
    <StyledLeads>
      <LeadsHook>
        <Title>Contact a WorldHello Developer</Title>
        <SubTitle>today to launch your website!</SubTitle>

        <TriggerButton openModal={openModal} text={`Click to start for free`} />
        {isModalOpen && <Modal closeModal={closeModal} />}
      </LeadsHook>
    </StyledLeads>
  );
}

export default Leads;
