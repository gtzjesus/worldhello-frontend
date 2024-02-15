// ------------------------------
// File: Business.js
// ------------------------------
// Description: React component for displaying products, a digital footprint for the user to interact

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';
import TriggerButton from '../../ui/buttons/TriggerButton';
import LazyLoad from 'react-lazyload';
import Modal from '../../ui/modals/Modal';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledBusiness = styled.div`
  background: var(--color-black);
  color: var(--color-white);
  padding: var(--padding-medium);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  // These are used for responsive design, for all screens we can modify the web application based on the screen size
  @media (min-width: 40.25em) {
    padding: 0 var(--padding-small);
  }

  @media (min-width: 150.15em) {
    padding: var(--padding-xlarge) var(--padding-giant);
  }
`;

const Information = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  @media (min-width: 78.15em) {
    flex-direction: row;
  }
`;
const Intro = styled.div`
  // Code logic to style div element
  color: var(--color-tan);
  font-size: var(--font-xxxsmall);
  padding: var(--padding-small) 0;
`;

const Special = styled.span`
  color: var(--color-tan);
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

const Closing = styled.span`
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

const Img = styled.img`
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

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Business({ isModalOpen, openModal, closeModal }) {
  return (
    <LazyLoad>
      {/* <!-- Main Container --> */}
      <StyledBusiness>
        {/* <!-- Information Big Container --> */}
        <Information>
          {/* <!-- All necessary info --> */}
          <Title>
            <Intro>[ who we look for ]</Intro>
            <br />
            Seeking to enhance your products?
          </Title>
          <Img src="/backgrounds/brand.jpg"></Img>
        </Information>
        {/* <!-- Information Big Container --> */}
        <Information>
          {/* <!-- All necessary info --> */}
          <Description>
            Fully maximize the capabilities of your business with a strong
            digital presence!
            <br />
            <br />
            <br />
            <Closing>
              Boost sales, generate leads, or broaden your customer base with
              <Special> WorldHello</Special>
              .
              <br />
              <br />
            </Closing>
            <TriggerButton openModal={openModal} text={`Click to begin`} />
            {isModalOpen && <Modal closeModal={closeModal} />}
          </Description>
        </Information>
      </StyledBusiness>
    </LazyLoad>
  );
}

// Export reusable Component
export default Business;
