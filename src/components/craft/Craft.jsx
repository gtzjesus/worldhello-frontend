// ------------------------------
// File: Craft.js
// ------------------------------
// Description: A React Component a crafted website using SEO, designs, and data
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
import TriggerButton from '../../ui/buttons/TriggerButton';
import LazyLoad from 'react-lazyload';
import Modal from '../../ui/modals/Modal';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledCraft = styled.div`
  // Code logic for arranging children + styles
  display: flex;
  flex-direction: column;
  background: var(--color-tan);
  padding: var(--padding-medium);
  color: var(--color-black);

  // @MEDIAQUERY logic for small devices
  @media (min-width: 40.25em) {
  }

  // @MEDIAQUERY logic for bigger devices
  @media (min-width: 78.15em) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

const Information = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

const Title = styled.span`
  font-size: var(--font-medium);

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
    font-size: var(--font-large);
  }
  // @MEDIAQUERY logic for desktop devices
  @media (min-width: 150.15em) {
    font-size: var(--font-xlarge);
  }
`;

const Description = styled.span`
  font-size: var(--font-medium);

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
    font-size: var(--font-large);
  }
  // @MEDIAQUERY logic for desktop devices
  @media (min-width: 150.15em) {
    font-size: var(--font-xlarge);
  }
`;

const MiniDescription = styled.span`
  font-size: var(--font-xsmall);

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
    font-size: var(--font-small);
  }
  // @MEDIAQUERY logic for desktop devices
  @media (min-width: 150.15em) {
    font-size: var(--font-medium);
  }
`;

const Img = styled.img`
  padding: var(--padding-medium) 0;
  @media (min-width: 40.25em) {
    padding: var(--padding-large);
  }

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
    width: 60vw;
  }

  @media (min-width: 78.15em) {
    width: 35vw;
  }
  // @MEDIAQUERY logic for desktop devices
  @media (min-width: 150.15em) {
    width: 30vw;
  }
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which displays our figma design + information

function Craft({ isModalOpen, openModal, closeModal }) {
  return (
    <LazyLoad>
      {/* <!-- Main Container --> */}
      <StyledCraft>
        {/* <!-- Information Container (need 2 for responsiveness) --> */}
        <Information>
          <Title>
            Crafting websites with high conversion rates, <br />
            <MiniDescription>
              utilizing strategic designs, data & SEO.
            </MiniDescription>
          </Title>
        </Information>

        {/* <!-- Information Container (need 2 for responsiveness) --> */}
        <Information>
          <Img src="/backgrounds/grow.jpg"></Img>
          <Description>
            Let&rsquo;s strive for greater success together.
          </Description>
          <br />
          <br />
          <Description>Join us and grow!</Description>
          <MiniDescription>
            Expand your business by harnessing the full advantages of our
            combined resources and extensive experience.
          </MiniDescription>
          <br />
          <TriggerButton openModal={openModal} text={`send us a message`} />
          {isModalOpen && <Modal closeModal={closeModal} />}
        </Information>
      </StyledCraft>
    </LazyLoad>
  );
}

// Export the Component (reusable)
export default Craft;
