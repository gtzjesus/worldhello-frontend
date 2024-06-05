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
  padding-bottom: var(--padding-large);
  gap: var(--gap-large);
`;

const Logo = styled.img`
  height: var(--font-medium);
`;

const SocialMedia = styled.div`
  display: flex;
  margin: 0 auto;
  gap: var(--gap-large);
`;

const Tag = styled.a`
  // Code logic to modify logo
`;

const Icon = styled.img`
  // Code logic to modify logo
  height: 1.5rem;
`;

const Signature = styled.div`
  display: flex;
  justify-content: center;
`;

const Copyright = styled.a`
  font-size: var(--font-xxxsmall);
  padding-bottom: var(--padding-xsmall);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles footer
function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <StyledFooter>
      {/* <!-- All necessary social medias --> */}
      <SocialMedia>
        <Tag target="_blank" href="https://www.instagram.com/worldhellous/">
          <Icon src="/icons/instagram.png" alt="instagram"></Icon>
        </Tag>
        <Tag
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61557119916592"
        >
          <Icon src="/icons/facebook.png" alt="facebook"></Icon>
        </Tag>
        <Tag target="_blank" href="https://www.tiktok.com/@worldhello.us">
          <Icon src="/icons/tiktok.png" alt="tiktok"></Icon>
        </Tag>
        <Tag
          target="_blank"
          href="https://www.linkedin.com/in/world-hello-421ba12b9/"
        >
          <Icon src="/icons/linkedin.png" alt="linkedin"></Icon>
        </Tag>
      </SocialMedia>
      <hr />
      <Signature onClick={scrollToTop}>
        <Logo src="/logos/helloworld.webp" alt="worldhello"></Logo>
      </Signature>
      <Signature>
        <Copyright>worldhello &copy; 2024 all rights reserved </Copyright>
      </Signature>
    </StyledFooter>
  );
}

// Export reusable Component
export default Footer;
