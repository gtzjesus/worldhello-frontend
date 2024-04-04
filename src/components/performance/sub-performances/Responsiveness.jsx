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

const StyledResponsiveness = styled.div`
  // Code logic for setting the background
  // Design background from Figma software
  background: url('backgrounds/responsiveness.webp');
  background-size: contain;
  background-position: center;

  background-repeat: no-repeat;

  // Code logic for covering full-screen devices
  min-height: 100vh;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Responsiveness() {
  return (
    <LazyLoad>
      <StyledResponsiveness />
    </LazyLoad>
  );
}

// Export the Component (reusable)
export default Responsiveness;
