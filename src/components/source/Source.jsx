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
  background-image: url('/backgrounds/earth.jpg');
  background-size: cover;
  color: var(--color-white);
  padding: var(--padding-large) var(--padding-medium);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  // These are used for responsive design, for all screens we can modify the web application based on the screen size

  @media (min-width: 40.25em) {
    padding: var(--padding-large) var(--padding-xlarge);
  }

  @media (min-width: 61.25em) {
    padding: var(--padding-xlarge) var(--padding-xxlarge);
  }

  @media (min-width: 78.15em) {
    padding: var(--padding-xlarge) var(--padding-xxxlarge);
  }

  @media (min-width: 150.15em) {
    padding: var(--padding-xxxlarge) var(--padding-giant);
  }
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

  // ------------------------------
  // @Media Queries
  // ------------------------------
  // These are used for responsive design, for all screens we can modify the web application based on the screen size
  @media (min-width: 61.25em) {
    font-size: var(--font-large);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-xlarge);
  }
`;

const Description = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

const Quote = styled.span`
  font-size: var(--font-small);
  background-color: var(--color-white);
  color: var(--color-black);
  padding: var(--padding-xxsmall);
  margin: var(--padding-medium) 0;

  // ------------------------------
  // @Media Queries
  // ------------------------------
  // These are used for responsive design, for all screens we can modify the web application based on the screen size
  @media (min-width: 61.25em) {
    font-size: var(--font-medium);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-large);
  }
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

  // ------------------------------
  // @Media Queries
  // ------------------------------
  // These are used for responsive design, for all screens we can modify the web application based on the screen size
  @media (min-width: 61.25em) {
    font-size: var(--font-small);
  }

  @media (min-width: 78.15em) {
    font-size: var(--font-medium);
  }
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
          <Intro>[ why it matters ]</Intro>
          <Title>
            Greet the world and establish your brand&rsquo;s presence.
          </Title>
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
              <Button>view article</Button>
            </a>
          </Description>
          <Last>
            <Ending>
              Ensure your initial impression resonates long after the first
              encounter, particularly online.
            </Ending>
          </Last>
        </Information>
      </StyledSource>
    </LazyLoad>
  );
}

// Export reusable Component
export default Source;
