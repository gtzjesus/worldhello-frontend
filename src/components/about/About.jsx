// ------------------------------
// File: About.js
// ------------------------------
// Description: React component showcasing about WorldHello.

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

const StyledAbout = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  background-color: var(--color-tan);
  padding: var(--padding-large) var(--padding-medium);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  // These are used for responsive design, for all screens we can modify the web application based on the screen size
  @media (min-width: 61.25em) {
    padding: var(--padding-large) var(--padding-xxlarge);
  }

  @media (min-width: 78.15em) {
    padding: var(--padding-xlarge) var(--padding-large);
    flex-direction: row;
  }

  @media (min-width: 150.15em) {
    padding: var(--padding-xlarge) var(--padding-xxxlarge);
    gap: var(--gap-giant);
  }
`;

const Information = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  gap: var(--gap-large);
`;

const Extra = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  gap: var(--gap-large);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  @media (min-width: 78.15em) {
    padding-top: 35rem;
  }

  @media (min-width: 150.15em) {
    padding-top: 45rem;
  }
`;

const Intro = styled.div`
  // Code logic to style div element
  color: var(--color-purple);
  font-size: var(--font-xxxsmall);
  padding: var(--padding-small) 0;
`;

const Title = styled.span`
  font-size: var(--font-medium);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  @media (min-width: 61.25em) {
    font-size: var(--font-large);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-xlarge);
  }
`;

const Description = styled.span`
  font-size: var(--font-small);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  @media (min-width: 61.25em) {
    font-size: var(--font-medium);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-large);
  }
`;

const Special = styled.a`
  color: var(--color-purple);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  @media (min-width: 61.25em) {
    font-size: var(--font-small);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-medium);
  }
`;

const Img = styled.img`
  // Code logic for black and white effect on image
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  padding: var(--padding-medium) 0;

  // ------------------------------
  // @Media Queries
  // ------------------------------
  @media (min-width: 78.15em) {
    padding: var(--padding-xlarge);
    width: 40vw;
  }

  @media (min-width: 100.15em) {
    padding: var(--padding-xxlarge);
    width: 30vw;
  }

  @media (min-width: 150.15em) {
    padding: var(--padding-xxlarge);
    width: 25vw;
  }
`;

const MiniDescription = styled.span`
  font-size: var(--font-xsmall);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  @media (min-width: 61.25em) {
    font-size: var(--font-small);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-medium);
  }
`;
//
// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the  data

function About() {
  return (
    <LazyLoad>
      {/* <!-- Main Container --> */}
      <StyledAbout>
        {/* <!-- Information Big Container --> */}
        <Information>
          {/* <!-- All necessary info --> */}
          <Title>About us</Title>
          <Description>
            At <Special>WorldHello</Special>, we guarantee that teaming up with
            us is a strategic investment in expanding your business,
            <br />
            <Special>not just an extra cost.</Special>
          </Description>
          <Img src="/backgrounds/company.jpg" alt="About"></Img>
        </Information>
        {/* <!-- Extra Container to end --> */}
        <Extra>
          <Intro>[ why we do what we do ]</Intro>
          <MiniDescription>
            At WorldHello, our core is rooted in solving challenges and we take
            immense pride in our relentless pursuit of excellence.
          </MiniDescription>
          <MiniDescription>
            We aim to surpass expectations with each website we undertake,
            driven by our passion for delivering top-notch, high-performance
            websites.
          </MiniDescription>
        </Extra>
      </StyledAbout>
    </LazyLoad>
  );
}

// Export reusable Component
export default About;
