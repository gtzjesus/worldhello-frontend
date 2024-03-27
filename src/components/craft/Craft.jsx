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
`;

const Information = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

const Title = styled.span`
  font-size: var(--font-medium);
`;

const Description = styled.span`
  font-size: var(--font-medium);
`;

const MiniDescription = styled.span`
  font-size: var(--font-xsmall);
`;

const Img = styled.img`
  padding: var(--padding-medium) 0;
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
          </Title>
        </Information>

        {/* <!-- Information Container (need 2 for responsiveness) --> */}
        <Information>
          <Img src="/backgrounds/craft.webp" alt="grow"></Img>
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
