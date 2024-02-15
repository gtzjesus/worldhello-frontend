// ------------------------------
// File: Footer.js
// ------------------------------
// Description: Last React reusable Component, our web application's footer

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';
import TriggerButton from '../../ui/buttons/TriggerButton';
import Modal from '../../ui/modals/Modal';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledFooter = styled.footer`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  background-color: var(--color-black);
  color: var(--color-white);
  padding: var(--padding-medium);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  // These are used for responsive design, for all screens we can modify the web application based on the screen size
  @media (min-width: 61.25em) {
  }

  @media (min-width: 78.15em) {
  }

  @media (min-width: 150.15em) {
    padding: var(--padding-medium) var(--padding-giant);
  }
`;

const FooterInfo = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

const Intro = styled.span`
  // Code logic to style div element
  color: var(--color-tan);
  font-size: var(--font-xxxsmall);
  padding: var(--padding-small) 0;
`;

const Ending = styled.span`
  font-size: var(--font-xxxsmall);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  @media (min-width: 78.15em) {
    font-size: var(--font-small);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-medium);
  }
`;

const Mark = styled.div`
  // Code logic to arrange children
  display: flex;
  align-items: center;
  gap: var(--gap-small);
  margin: 0 auto;
`;

const Logo = styled.img`
  // Code logic to modify logo
  height: var(--logo-height-big);
`;

const Brand = styled.span`
  font-size: var(--font-large);
  color: var(--color-tan);
  padding: 0 var(--padding-xxsmall);
`;

const Contact = styled.div`
  // Code logic for arranging children
  display: flex;
  padding: var(--padding-xsmall) 0;
  justify-content: space-between;

  // ------------------------------
  // @Media Queries
  // ------------------------------
  @media (min-width: 78.15em) {
    padding: var(--padding-small) 0;
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-small);
    padding: var(--padding-medium) 0;
  }
`;

const Icon = styled.img`
  // Code logic to modify logo
  height: var(--logo-height);
`;

const Label = styled.div`
  color: var(--color-tan);
`;

const Result = styled.div`
  color: var(--color-tan);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles footer

function Footer({ isModalOpen, openModal, closeModal }) {
  return (
    <StyledFooter>
      {/* <!-- Footer Container (2 for responsive design) --> */}
      <FooterInfo>
        {/* <!-- All necessary info --> */}
        <Intro>[ thank you ]</Intro>
        <Ending>WorldHello is a US based Website Development Agency.</Ending>

        <Ending>
          We excel in transforming client requirements using strategic web
          development strategies designed to address business needs effectively.
        </Ending>
      </FooterInfo>
      <br />
      <br />
      <br />

      <hr />
      {/* <!-- Mark Brand Container --> */}
      <Mark>
        <Logo src="/logos/helloworldy.png" alt="globe"></Logo>
        <Brand>WorldHello </Brand>
      </Mark>
      <hr />

      {/* <!-- Footer Container --> */}
      <FooterInfo>
        <Intro>
          <Label>[ contact us ]</Label>
        </Intro>
        {/* <!-- One of our Contact Containers --> */}
        <Contact>
          <Icon src="/icons/phone.png" alt="Telephone"></Icon>
          <Result>
            <a href="tel:+1 915-471-9129">+1 915-471-9129</a>
          </Result>
        </Contact>
        {/* <!-- One of our Contact Containers --> */}
        <Contact>
          <Label>Based in</Label>
          <Result>Texas, US</Result>
        </Contact>
        <TriggerButton openModal={openModal} text={`start now for free`} />

        {isModalOpen && <Modal closeModal={closeModal} />}
      </FooterInfo>
    </StyledFooter>
  );
}

// Export reusable Component
export default Footer;
