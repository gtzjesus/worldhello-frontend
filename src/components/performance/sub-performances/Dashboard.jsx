// ------------------------------
// File: Responsiveness.js
// ------------------------------
// Description: React component for displaying Responsiveness page (first thing USER sees).
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

const StyledDashboard = styled.div`
  // Code logic for setting the background
  // Design background from Figma software
  background: url('backgrounds/responsiveness.webp');
  background-size: contain;
  background-repeat: no-repeat;

  // Code logic for covering full-screen devices
  min-height: 100vh;
`;

const Hook = styled.div`
  // Code logic for positioning all information inside our hook
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--padding-small);
`;

const Title = styled.span`
  line-height: var(--line-height-small);
  font-size: var(--font-large);
  letter-spacing: var(--spacing-title);
  text-transform: uppercase;
  overflow: hidden;
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

function Dashboard() {
  return (
    <LazyLoad>
      {/* <!-- Main Container --> */}
      <StyledDashboard>
        {/* <!-- Hook Container --> */}
        <Hook>
          <Title>Look Good </Title>
          <Subtitle>on all screens</Subtitle>
        </Hook>
      </StyledDashboard>
    </LazyLoad>
  );
}

// Export the Component (reusable)
export default Dashboard;