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
import LazyLoad from 'react-lazyload';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledLanding = styled.div`
  // Code logic for setting the background
  // Design background from Figma software
  background: url('backgrounds/landing.webp');
  background-size: cover;

  // Code logic for covering full-screen devices
  min-height: 100vh;

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
    // Design background from Figma software
    background-image: url('backgrounds/landing_second.webp');
  }
`;

const Hook = styled.div`
  // Code logic for positioning all information inside our hook
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--padding-xlarge) var(--padding-small);
`;

const Title = styled.span`
  line-height: var(--line-height-small);
  font-size: var(--font-large);
  letter-spacing: var(--spacing-title);
  text-transform: uppercase;
  overflow: hidden;
  z-index: var(--z-top);
`;

const Subtitle = styled.span`
  // Code logic for subtitle element
  font-size: var(--font-xsmall);
  letter-spacing: var(--spacing-subtitle);
  line-height: var(--line-height-xsmall);
  overflow: hidden;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Landing() {
  return (
    <LazyLoad>
      {/* <!-- Main Container --> */}
      <StyledLanding>
        {/* <!-- Hook Container --> */}
        <Hook>
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
          <Subtitle>that transforms</Subtitle>
          <Subtitle>your visitors</Subtitle>
          <Subtitle>into customers.</Subtitle>
          <br />
        </Hook>
      </StyledLanding>
    </LazyLoad>
  );
}

// Export the Component (reusable)
export default Landing;
