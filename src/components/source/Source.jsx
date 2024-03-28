// ------------------------------
// File: Source.js
// ------------------------------
// Description: React component for our source being displayed
// ------------------------------
// Figma Design.
// ------------------------------
// LazyLoading from React for optimization (images & web app loading time).
// ------------------------------
// Global Styles from /src/styles/ used for global variables.

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';

import LazyLoad from 'react-lazyload';
import { useEffect, useRef } from 'react';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.
const StyledSource = styled.div`
  position: relative;
  overflow: hidden;
  height: 75vh; /* Adjust the height as needed */
  color: var(--color-white);
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Set height to 100% */
  background-image: url('/backgrounds/source.webp');
  background-size: cover; /* Adjust to cover the entire area */
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`;

const Information = styled.div`
  position: absolute;
  top: 50%; /* Position the content vertically in the middle */
  left: 50%; /* Position the content horizontally in the middle */
  transform: translate(-50%, -50%); /* Center the content */
  z-index: 1;
  display: flex;
  flex-direction: column;
  text-align: center; /* Center-align text */
`;

const Title = styled.span`
  font-size: var(--font-large);
`;

const Last = styled.div`
  margin-top: var(--margin-xlarge);
`;

const Ending = styled.span`
  font-size: var(--font-xsmall);
`;

function Source() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      backgroundRef.current.style.transform = `translateY(-${
        scrollPosition * 0.2 /* Adjust the multiplier to slow down the effect */
      }px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <LazyLoad>
      <StyledSource>
        <Background ref={backgroundRef} />
        <Information>
          <Title>A Website seen all over the world.</Title>
          <Last>
            <Ending>First impressions are vital on the web.</Ending>
            <br />
          </Last>
        </Information>
      </StyledSource>
    </LazyLoad>
  );
}

export default Source;
