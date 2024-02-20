// ------------------------------
// File: Trial.js
// ------------------------------
// Description: React component showcasing Trial WorldHello.

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import TriggerButton from '../../ui/buttons/TriggerButton';
import Modal from '../../ui/modals/Modal';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledTrial = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  background-color: var(--color-black);
  color: var(--color-white);
  padding: var(--padding-large) var(--padding-medium);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  // These are used for responsive design, for all screens we can modify the web application based on the screen size
  @media (min-width: 61.25em) {
    padding: var(--padding-large) var(--padding-xxlarge);
  }

  @media (min-width: 78.15em) {
    padding: var(--padding-xlarge) var(--padding-large);
    flex-direction: row;
  }

  @media (min-width: 150.15em) {
    padding: var(--padding-xlarge) var(--padding-xxxlarge);
    gap: var(--gap-giant);
  }
`;

const Information = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  gap: var(--gap-large);
`;

const Title = styled.span`
  font-size: var(--font-medium);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  @media (min-width: 61.25em) {
    font-size: var(--font-large);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-xlarge);
  }
`;

const Description = styled.span`
  font-size: var(--font-small);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  @media (min-width: 61.25em) {
    font-size: var(--font-medium);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-large);
  }
`;

const Special = styled.a`
  font-size: var(--font-xxsmall);
  color: var(--color-tan);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  @media (min-width: 61.25em) {
    font-size: var(--font-small);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-medium);
  }
`;

//
// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the  data

function Trial({ isModalOpen, openModal, closeModal }) {
  return (
    <LazyLoad>
      {/* <!-- Main Container --> */}
      <StyledTrial>
        {/* <!-- Information Big Container --> */}
        <Information>
          {/* <!-- All necessary info --> */}
          <Title>Start your free website trial today.</Title>
          <Description>
            <Special>no credit card required.</Special>
          </Description>
          <TriggerButton openModal={openModal} text={`get started`} />
          {isModalOpen && <Modal closeModal={closeModal} />}
        </Information>
        {/* <!-- Extra Container to end --> */}
      </StyledTrial>
    </LazyLoad>
  );
}

// Export reusable Component
export default Trial;
