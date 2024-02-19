import styled from 'styled-components';
import TriggerButton from '../../ui/buttons/TriggerButton';
import Modal from '../../ui/modals/Modal';

const StyledLeads = styled.div`
  background-color: var(--color-black);
  color: var(--color-white);
  height: fit-content;
  padding: var(--padding-xlarge) var(--padding-medium) var(--padding-medium)
    var(--padding-medium);

  // @MEDIAQUERY logic for bigger devices
  @media (min-width: 100.15em) {
    padding: var(--padding-xxlarge);
  }
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

        <TriggerButton openModal={openModal} text={`click to start for free`} />
        {isModalOpen && <Modal closeModal={closeModal} />}
      </LeadsHook>
    </StyledLeads>
  );
}

export default Leads;
