// ------------------------------
// File: Craft.js
// ------------------------------
// Description: React component for displaying Craft page (first thing USER sees).
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

const StyledCraft = styled.div`
  // Code logic for setting the background
  // Design background from Figma software
  background: url('backgrounds/craft.webp');
  background-size: contain;
  background-repeat: no-repeat;
  // Code logic for covering full-screen devices
  height: 100vh;
`;

const Hook = styled.div`
  // Code logic for positioning all information inside our hook
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--height-navigation-padding) var(--padding-small);
`;

const Title = styled.span`
  // Code logic for title element
  font-size: var(--font-large);
  letter-spacing: var(--spacing-title);
  // Code logic shadow beneath text (more visibility)
  text-shadow: var(--text-shadow-font);
  text-transform: uppercase;
  overflow: hidden;
`;

const Subtitle = styled.span`
  // Code logic for subtitle element
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.05rem;
  line-height: var(--line-height-xxsmall);
  text-transform: uppercase;
  opacity: 0.75;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Craft() {
  return (
    <LazyLoad>
      <StyledCraft>
        <Hook>
          <Title>
            Join us <Subtitle>and</Subtitle>
          </Title>
          <br />
          <Subtitle>
            Expand your business <br /> by harnessing <br /> our combined
            resources.
          </Subtitle>
        </Hook>
      </StyledCraft>
    </LazyLoad>
  );
}

// Export the Component (reusable)
export default Craft;
