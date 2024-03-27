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
`;

const Information = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
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

function Business({ isModalOpen, openModal, closeModal }) {
  return (
    <LazyLoad>
      {/* <!-- Main Container --> */}
      <StyledBusiness>
        {/* <!-- Information Big Container --> */}
        <Information>
          {/* <!-- All necessary info --> */}
          <Title>
            <Intro>[ We seek partnerships to ]</Intro>
            <br />
            Enhance sales, drive lead generation, and expand customer reach.
          </Title>
          <Img src="/backgrounds/brand.webp" alt="brand"></Img>
        </Information>
        {/* <!-- Information Big Container --> */}
        <Information>
          {/* <!-- All necessary info --> */}
          <Description>
            Fully maximize the capabilities of your business with a strong
            digital presence with <Special>WorldHello!</Special>
            <br />
            <br />
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
