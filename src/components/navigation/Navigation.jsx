// File: Navigation.js
// Description: React navigation Component (header).
// LazyLoading from React for optimization (images & web app loading time).
// Global Styles from /src/styles/ used for global variables.
// useNavigate react hook to navigate react router (links)

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

// Define keyframe animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const rotateIn = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background: ${({ isScrolled }) =>
    isScrolled
      ? 'var(--color-black)'
      : 'transparent'}; /* Change background based on isScrolled */
  width: var(--width-full-window);
  z-index: var(--z-top);
  height: var(--height-navigation);
  padding-top: var(--padding-xxsmall);
  transition: background-color 0.3s ease; /* Smooth transition for background color */
`;

const Object = styled.div`
  padding: 0 var(--padding-small);
`;

const Icon = styled.a`
  height: var(--font-small);
`;

const Logo = styled.img`
  height: var(--font-medium);
`;

const MenuContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  z-index: 999;
  background-color: transparent;
  animation: ${fadeIn} 0.5s ease, ${slideIn} 0.5s ease;
`;

const Menu = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: var(--font-xsmall);
  ::before,
  ::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 3px;
    background-color: white;
    transition: all 0.3s ease;
  }
  ::before {
    top: 12px;
  }
  ::after {
    top: 24px;
  }
  &.open-menu::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &.open-menu::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  ${({ isOpen }) =>
    isOpen &&
    `
    ::before {
      top: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
    }
    ::after {
      top: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  `}
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

const MenuImg = styled.img``;

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
      <StyledNav isScrolled={isScrolled}>
        <Object>
          <Icon target="_blank" href="https://www.worldhello.us/">
            {/* <!--  Container for logo and title --> */}
            <Logo src="/logos/helloworld.png" alt="worldhello"></Logo>
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
      <MenuContainer isOpen={isMenuOpen}>
        <MenuContent>
          <MenuItem>Contact</MenuItem>
        </MenuContent>
      </MenuContainer>
    </>
  );
}

// Export the Component (reusable)
export default Navigation;
