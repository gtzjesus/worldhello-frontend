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

const StyledContact = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('/backgrounds/contact.png');
  background-size: cover;
  color: var(--color-white);
  padding: var(--padding-xlarge) var(--padding-medium);
  gap: var(--gap-xlarge);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  // These are used for responsive design, for all screens we can modify the web application based on the screen size
  @media (min-width: 61.25em) {
    padding: var(--padding-xxlarge) var(--padding-large);
  }

  @media (min-width: 78.15em) {
    padding: var(--padding-xxxlarge) var(--padding-xxlarge);
  }

  @media (min-width: 150.15em) {
    padding: var(--padding-giant) var(--padding-xxxlarge);
    gap: var(--gap-giant);
  }
`;

const Information = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

const Title = styled.span`
  font-size: var(--font-large);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  @media (min-width: 61.25em) {
    font-size: var(--font-xlarge);
  }

  @media (min-width: 78.15em) {
    font-size: var(--font-xlarge);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-xxlarge);
  }
`;

const Special = styled.span`
  color: var(--color-tan);
`;

const Description = styled.span`
  font-size: var(--font-xsmall);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  @media (min-width: 61.25em) {
    font-size: var(--font-small);
  }

  @media (min-width: 78.15em) {
    font-size: var(--font-medium);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-medium);
  }
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the data

function Contact({ isModalOpen, openModal, closeModal }) {
  return (
    <LazyLoad>
      {/* <!-- Main Container --> */}
      <StyledContact>
        {/* <!-- Information Big Container --> */}
        <Information>
          {/* <!-- All necessary info --> */}
          <Title>
            Refer and <Special>Earn</Special>
          </Title>
          <Description>
            WorldHello <Special>offers rewards</Special> for every successful
            referral you make to us.
            <br />
            <br />
            Upon completion, <Special>we&rsquo;ll compensate</Special> you with
            10% of the total value. All you need to do is share our services
            with your friends.
          </Description>
        </Information>
        {/* <!-- Information Big Container --> */}
        <Information>
          {/* <!-- All necessary info --> */}
          <Title>Contact us</Title>
          <Description>
            We have a team available at <Special>WorldHello</Special> if you
            have a general inquiry, you can contact us by
            <br />
            <br />
          </Description>
          <TriggerButton openModal={openModal} text={`Clicking here`} />
          {isModalOpen && <Modal closeModal={closeModal} />}
        </Information>
      </StyledContact>
    </LazyLoad>
  );
}

// Export reusable Component
export default Contact;
