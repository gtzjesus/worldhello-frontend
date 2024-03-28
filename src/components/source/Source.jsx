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
import Button from '../../ui/buttons/Button';

import LazyLoad from 'react-lazyload';
import { useEffect, useRef } from 'react';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.
const StyledSource = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh; /* Adjust the height as needed */
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/backgrounds/source.webp');
  background-size: contain; /* Change this property to adjust the image size */
  background-position: center;
  transform: translateY(-50%);
  background-repeat: no-repeat;
  z-index: -1;
`;
const Information = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Title = styled.span`
  font-size: var(--font-medium);
`;

const Quote = styled.span`
  font-size: var(--font-small);
  background-color: var(--color-black);
  color: var(--color-white);
  padding: var(--padding-xxsmall);
`;

const Quotation = styled.span`
  font-weight: 9999;
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
        scrollPosition * 0.5
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
          <Title>Gateway to connect with the world.</Title>
          <Quote>
            <Quotation>&ldquo;</Quotation>80% of consumers are more likely to
            buy from brands that offer personalized website experiences.
            <Quotation>&rdquo;</Quotation>
          </Quote>
          <Button
            href="https://bloggingwizard.com/website-statistics/"
            target="_blank"
            rel="noreferrer"
          >
            visit article
          </Button>
          <Last>
            <Ending>Foster global reach and interaction!</Ending>
          </Last>
        </Information>
      </StyledSource>
    </LazyLoad>
  );
}

export default Source;
