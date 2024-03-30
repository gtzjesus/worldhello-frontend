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
import { useEffect, useState } from 'react';

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
  background: var(--color-white);
  width: var(--width-full-window);
  z-index: var(--z-top);
  height: var(--height-navigation);
`;

const MenuImg = styled.img``;

const Object = styled.div`
  padding: 0 var(--padding-small);
`;

const Icon = styled.a`
  height: var(--font-small);
`;

const Logo = styled.img`
  height: var(--font-medium);
  padding-left: var(--padding-xxsmall);
  color: white;
  @media (min-width: 61.25em) {
    padding: 0 var(--padding-medium) 0 0;
  }
`;

const Menu = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  width: 40px; /* Adjust the width as needed */
  height: 40px; /* Adjust the height as needed */
  cursor: pointer;
  font-size: var(--font-xsmall);

  ::before,
  ::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 80%; /* Adjust the width of the lines */
    height: 3px; /* Adjust the height of the lines */
    background-color: white; /* Adjust the color of the lines */
    transition: all 0.3s ease;
  }

  ::before {
    top: 12px;
  }

  ::after {
    top: 24px;
  }

  /* Animation for the middle line */
  &.open-menu::before {
    top: 18px;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &.open-menu::after {
    top: 18px;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const MenuContainer = styled.div`
  position: fixed;
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}; /* Adjusted top property */
  left: 0;
  width: 100%;
  height: 100vh;
  transition: top 0.5s ease-out; /* Updated transition with ease-out timing function */
  z-index: 999;

  background-color: ${({ isScrolled }) =>
    isScrolled ? 'black' : 'transparent'};
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column; /* Display menu items vertically */
  height: 100%;
  background-color: var(--color-black);
  padding-top: var(--padding-xlarge);
  padding-left: var(--padding-medium);
`;

const MenuItem = styled.a`
  display: inline-block;
  padding: 8px 16px;
  color: var(--color-white);
  text-decoration: none;
  font-size: var(--font-links);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Navigation() {
  // Set states for menu commands from UI
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Helper function to toggle menu
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  // useEffect to handle our scroll events
  useEffect(() => {
    // Create function to handle scroll
    function handleScroll() {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* <!-- Nav Container , the header --> */}
      <StyledNav>
        <Object>
          <Icon target="_blank" href="https://www.worldhello.us/">
            {/* <!--  Container for logo and title --> */}
            <Logo src="/logos/worldhello.png" alt="instagram"></Logo>
          </Icon>
        </Object>
        <Object>
          {/* <!-- Menu Container for links --> */}
          <Menu onClick={toggleMenu}>
            {' '}
            {isMenuOpen ? (
              <MenuImg src="/icons/close.png" alt="Close"></MenuImg>
            ) : (
              <>
                <MenuImg src="/icons/menu.png" alt="Menu"></MenuImg>
              </>
            )}
          </Menu>
        </Object>
      </StyledNav>
      <MenuContainer
        isopen={isMenuOpen ? 'true' : 'false'}
        isScrolled={isScrolled}
      >
        <MenuContent>
          <MenuItem>Contact</MenuItem>
        </MenuContent>
      </MenuContainer>
    </>
  );
}

// Export the Component (reusable)
export default Navigation;
