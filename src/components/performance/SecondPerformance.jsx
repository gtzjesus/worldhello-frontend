// ------------------------------
// File: SecondPerformance.js
// ------------------------------
// Description: React component for displaying products, a digital footprint for the user to interact

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

const StyledSecondPerformance = styled.div`
  background: var(--color-black);
  color: var(--color-white);
  padding: var(--padding-medium);
`;

const Information = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;
const Intro = styled.div`
  // Code logic to style div element
  font-size: var(--font-medium);
  padding: var(--padding-small) 0;
`;

const Img = styled.img`
  padding: var(--padding-medium) 0;
`;

const Description = styled.span`
  font-size: var(--font-xsmall);
  letter-spacing: var(--spacing-subtitle);
  line-height: var(--line-height-xsmall);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function SecondPerformance() {
  return (
    <LazyLoad>
      {/* <!-- Main Container --> */}
      <StyledSecondPerformance>
        {/* <!-- Information Big Container --> */}
        <Information>
          {/* <!-- All necessary info --> */}
          <Intro> Performance all across </Intro>
          <Description></Description>
          <Img src="/backgrounds/brand.webp" alt="brand"></Img>
        </Information>
        {/* <!-- Information Big Container --> */}
        <Information>{/* <!-- All necessary info --> */}</Information>
      </StyledSecondPerformance>
    </LazyLoad>
  );
}

// Export reusable Component
export default SecondPerformance;
