// ------------------------------
// File: Business.js
// ------------------------------
// Description: React component for displaying products, a digital footprint for the user to interact

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

// Import components needed
import FirstPerformance from './FirstPerformance';
import SecondPerformance from './SecondPerformance';
import ThirdPerformance from './ThirdPerformance';
import { useEffect, useState } from 'react';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledPerformance = styled.div`
  background: var(--color-black);
  color: var(--color-white);
  padding: var(--padding-medium);
  height: 75vh; /* Set the height to fill the viewport */
  overflow-y: auto; /* Enable vertical scrolling */
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

const Intro = styled.div`
  color: var(--color-tan);
  font-size: var(--font-xxxsmall);
  padding: var(--padding-small) 0;
`;

const Special = styled.span`
  color: var(--color-tan);
`;

const Title = styled.span`
  font-size: var(--font-medium);
`;

const Img = styled.img`
  padding: var(--padding-medium) 0;
`;

const Description = styled.span`
  font-size: var(--font-small);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Performance() {
  const [activeComponent, setActiveComponent] = useState(1);

  // Handle scroll event to switch between components
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Determine which component should be active based on scroll position
      if (scrollPosition < window.innerHeight) {
        setActiveComponent(1);
      } else if (scrollPosition < window.innerHeight * 2) {
        setActiveComponent(2);
      } else {
        setActiveComponent(3);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <LazyLoad>
      <StyledPerformance>
        <Information>
          <FirstPerformance />
          <SecondPerformance />
          <ThirdPerformance />
        </Information>
      </StyledPerformance>
    </LazyLoad>
  );
}

// Export reusable Component
export default Performance;
