// ------------------------------
// File: Footer.js
// ------------------------------
// Description: Last React reusable Component, our web application's footer

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';

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
  padding: var(--padding-large);
  gap: var(--gap-large);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  // These are used for responsive design, for all screens we can modify the web application based on the screen size
  @media (min-width: 61.25em) {
  }

  @media (min-width: 78.15em) {
    padding: var(--padding-xlarge);

    gap: var(--gap-xxlarge);
  }

  @media (min-width: 150.15em) {
  }
`;

const SocialMedia = styled.div`
  display: flex;
  margin: 0 auto;
  gap: var(--gap-large);

  @media (min-width: 78.15em) {
    gap: var(--gap-giant);
  }
`;

const Icon = styled.img`
  // Code logic to modify logo
  height: 1.5rem;

  @media (min-width: 78.15em) {
    // Code logic to modify logo
    height: 2.5rem;
  }
`;

const Signature = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  gap: var(--gap-small);
`;

const Logo = styled.img`
  // Code logic to modify logo
  height: var(--logo-height);
`;

const Brand = styled.span`
  font-size: var(--font-small);
  text-transform: uppercase;
  padding: 0 var(--padding-xxsmall);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles footer

function Footer() {
  return (
    <StyledFooter>
      {/* <!-- All necessary social medias --> */}
      <SocialMedia>
        <Icon src="/icons/instagram.png" alt="instagram"></Icon>
        <Icon src="/icons/facebook.png" alt="facebook"></Icon>
        <Icon src="/icons/tiktok.png" alt="tiktok"></Icon>
        <Icon src="/icons/linkedin.png" alt="linkedin"></Icon>
      </SocialMedia>

      <Signature>
        {/* <!-- Brand Container --> */}
        <Logo src="/logos/helloworld.png" alt="globe"></Logo>
        <Brand>WorldHello </Brand>
      </Signature>
    </StyledFooter>
  );
}

// Export reusable Component
export default Footer;
