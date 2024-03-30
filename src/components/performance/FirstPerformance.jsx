// ------------------------------
// File: FirstPerformance.js
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

const StyledFirstPerformance = styled.div`
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
  text-transform: uppercase;
`;

const Img = styled.img`
  padding: var(--padding-medium) 0;
`;

const Description = styled.span`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.2rem;
  line-height: var(--line-height-small);
  text-transform: uppercase;
  opacity: 0.75;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function FirstPerformance() {
  return (
    <LazyLoad>
      {/* <!-- Main Container --> */}
      <StyledFirstPerformance>
        {/* <!-- Information Big Container --> */}
        <Information>
          {/* <!-- All necessary info --> */}

          <Img src="/backgrounds/brand.webp" alt="brand"></Img>
          <Intro>
            Product <br /> spotlights
          </Intro>
          <Description>
            By delivering a seamless and responsive experience to every visitor
            .
          </Description>
        </Information>
        {/* <!-- Information Big Container --> */}
        <Information>{/* <!-- All necessary info --> */}</Information>
      </StyledFirstPerformance>
    </LazyLoad>
  );
}

// Export reusable Component
export default FirstPerformance;
