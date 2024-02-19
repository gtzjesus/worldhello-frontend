import styled from 'styled-components';
import TriggerButton from '../../ui/buttons/TriggerButton';
import Modal from '../../ui/modals/Modal';

const StyledLeads = styled.div`
  background-color: var(--color-black);
  color: var(--color-white);
  height: var(--height-full-window);
  padding: var(--padding-xlarge) var(--padding-medium) var(--padding-medium)
    var(--padding-medium);
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
        <Title>Contact a WorldHello Developer.</Title>
        <SubTitle>launch your website today!</SubTitle>

        <TriggerButton openModal={openModal} text={`click to make it real`} />
        {isModalOpen && <Modal closeModal={closeModal} />}
      </LeadsHook>
    </StyledLeads>
  );
}

export default Leads;
