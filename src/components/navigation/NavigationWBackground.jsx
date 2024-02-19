// File: Navigation.js
// Description: React navigation Component (header).
// LazyLoading from React for optimization (images & web app loading time).
// Global Styles from /src/styles/ used for global variables.
// useNavigate react hook to navigate react router (links)

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';
import { useNavigate } from 'react-router';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledNav = styled.nav`
  // Code logic to arrange children
  display: flex;
  align-items: center;
  justify-content: space-between;
  // Code logic for positioning fixed in all web app + header config
  position: fixed;
  background: var(--color-black);
  color: var(--color-white);
  width: var(--width-full-window);
  z-index: var(--z-top);
  height: var(--height-navigation);
  font-size: var(--font-xxxsmall);
`;

const Logo = styled.img`
  // Code logic to arrange children

  padding: 0 0 0 var(--padding-small);
  gap: var(--gap-small);
  // Code logic to modify logo
  height: var(--logo-height);
`;

const Menu = styled.a`
  // Code logic for contact link a element
  padding: 0 var(--padding-small) 0 0;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function NavigationWBackground() {
  // Grab react hook to navigate the router
  const navigate = useNavigate();
  // Handles the navigation to contact page
  function handleContact() {
    navigate('/contact');
  }
  // Handles the navigation to home page
  function handleHome() {
    navigate('/');
  }
  return (
    <StyledNav>
      {/* <!-- Container for logo and title --> */}
      <Logo onClick={handleHome} src="/logos/helloworld.png" alt="globe"></Logo>
      {/* <!-- Menu Container for links --> */}
      <Menu onClick={handleContact}>Contact</Menu>
    </StyledNav>
  );
}

export default NavigationWBackground;
