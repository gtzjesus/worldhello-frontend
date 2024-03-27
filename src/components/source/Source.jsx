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

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.
const StyledSource = styled.div`
  // Code logic for arranging children
  display: flex;
  // Code logic for figma design blackening
  /* filter: brightness(1) saturate(100%); */
  // Code logic for setting the background
  background-image: url('/backgrounds/source.webp');
  background-size: cover;
  color: var(--color-white);
  padding: var(--padding-large) var(--padding-medium);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

const Intro = styled.div`
  // Code logic to style div element
  color: var(--color-tan);
  font-size: var(--font-xxxsmall);
  padding: var(--padding-small) 0;
`;

const Title = styled.span`
  align-items: center;
  font-size: var(--font-medium);
  width: fit-content;

  text-shadow: 0.03em 0 black, 0 0.03em black, -0.03em 0 black, 0 -0.03em black;
`;

const Description = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

const Quote = styled.span`
  font-size: var(--font-small);
  background-color: var(--color-black);
  color: var(--color-white);
  padding: var(--padding-xxsmall);
  margin: var(--padding-medium) 0;
`;

const Quotation = styled.span`
  font-weight: 9999;
`;

const Last = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  padding: var(--padding-xlarge) 0 0 0;
  gap: var(--gap-small);
`;

const Ending = styled.span`
  font-size: var(--font-xsmall);
  text-shadow: 0.03em 0 black, 0 0.03em black, -0.03em 0 black, 0 -0.03em black;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Source() {
  return (
    <LazyLoad>
      {/* <!-- Main Container --> */}
      <StyledSource>
        {/* <!-- Information Big Container --> */}
        <Information>
          {/* <!-- All necessary info --> */}
          <Intro>[ a website that will serve as a ]</Intro>
          <Title>Gateway to connect with the world.</Title>
          <Description>
            <Quote>
              <Quotation>&ldquo;</Quotation>80% of consumers are more likely to
              buy from brands that offer personalized website experiences.
              <Quotation>&rdquo;</Quotation>
            </Quote>
            <a
              href="https://bloggingwizard.com/website-statistics/"
              target="_blank"
              rel="noreferrer"
            >
              <Button>visit article</Button>
            </a>
          </Description>
          <Last>
            <Ending>Foster global reach and interaction!</Ending>
          </Last>
        </Information>
      </StyledSource>
    </LazyLoad>
  );
}

// Export reusable Component
export default Source;
