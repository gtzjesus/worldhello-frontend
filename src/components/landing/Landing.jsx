// ------------------------------
// File: Landing.js
// ------------------------------
// Description: React component for displaying landing page (first thing USER sees).
// ------------------------------

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';
import TriggerButton from '../../ui/buttons/TriggerButton';
import LazyLoad from 'react-lazyload';
import Modal from '../../ui/modals/Modal';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledLanding = styled.div`
  // Code logic for setting the background
  // Design background from Figma software
  background: url('backgrounds/landing.jpg');
  background-size: cover;

  // Code logic for covering full-screen devices
  min-height: 100vh;

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
    // Design background from Figma software
    background-image: url('backgrounds/landing_second.jpg');
  }
`;

const Hook = styled.div`
  // Code logic for positioning all information inside our hook
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--height-navigation-padding) var(--padding-small);

  // @MEDIAQUERY logic for small devices 600px
  @media (min-width: 40em) {
    padding: var(--height-navigation-padding-40-em) var(--padding-large);
  }

  // @MEDIAQUERY logic for small devices 980px
  @media (min-width: 61.25em) {
    padding: var(--height-navigation-padding) var(--padding-large);
  }
`;

const Title = styled.span`
  // Code logic for title element
  font-size: var(--font-xlarge);
  letter-spacing: var(--spacing-title);
  line-height: var(--line-height-small);
  // Code logic shadow beneath text (more visibility)
  text-shadow: var(--text-shadow-font);
  text-transform: uppercase;

  // @MEDIAQUERY logic for small devices 600px
  @media (min-width: 40em) {
    font-size: var(--font-xxlarge);
    line-height: var(--line-height-medium);
  }
`;

const Subtitle = styled.span`
  // Code logic for subtitle element
  font-size: var(--font-xsmall);
  letter-spacing: var(--spacing-subtitle);
  line-height: var(--line-height-xsmall);

  @media (min-width: 40em) {
    font-size: var(--font-medium);
    line-height: var(--line-height-small);
  }
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Landing({ isModalOpen, openModal, closeModal }) {
  return (
    <LazyLoad>
      {/* <!-- Main Container --> */}
      <StyledLanding>
        {/* <!-- Hook Container --> */}
        <Hook>
          {/* TODO: <!-- Span Elements Vertically Messy Implementation --> */}
          <Title>Web</Title>
          <Title>Dev</Title>
          <Title>Agency</Title>
          <br />
          <br />
          <br />
          <br />
          <br />

          <Subtitle>Get a </Subtitle>
          <Subtitle>website</Subtitle>
          <Subtitle>to tranform</Subtitle>
          <Subtitle>your visitors</Subtitle>
          <Subtitle>into customers.</Subtitle>
          <br />
          <TriggerButton openModal={openModal} text={`Click to start`} />
          {isModalOpen && <Modal closeModal={closeModal} />}
        </Hook>
      </StyledLanding>
    </LazyLoad>
  );
}

// Export the Component (reusable)
export default Landing;
