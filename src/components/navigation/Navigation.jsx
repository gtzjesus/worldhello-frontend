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
  background: transparent;
  width: var(--width-full-window);
  z-index: var(--z-top);
  height: var(--height-navigation);
  font-size: var(--font-xxxsmall);
`;

const MenuImg = styled.img`
  height: var(--menu-height);
  padding-top: var(--padding-small);
  padding-right: var(--padding-xsmall);
`;

const Object = styled.div`
  padding: 0 var(--padding-small);
`;

const Icon = styled.a``;

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
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '100%')}; /* Adjusted left property */
  width: 100%;
  height: 100vh;
  background-color: transparent;
  transition: left 0.3s ease-in-out;
  z-index: 999;
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const MenuItem = styled.a`
  display: inline-block;
  padding: 8px 16px;
  background-color: black;
  color: white;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  margin: 8px;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    function handleClick() {
      setIsMenuOpen(false);
    }

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach((item) => {
      item.addEventListener('click', handleClick);
    });

    return () => {
      menuItems.forEach((item) => {
        item.removeEventListener('click', handleClick);
      });
    };
  }, []);

  useEffect(() => {
    function scrollToHashSection() {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
        const section = document.getElementById(sectionId);
        console.log(section);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }

    // Scroll to the section when the component mounts and when the hash changes
    scrollToHashSection();
    window.addEventListener('hashchange', scrollToHashSection);

    return () => {
      window.removeEventListener('hashchange', scrollToHashSection);
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
      <MenuContainer isOpen={isMenuOpen}>
        <MenuContent>
          <MenuItem className="menu-item">contact</MenuItem>
        </MenuContent>
      </MenuContainer>
    </>
  );
}

// Export the Component (reusable)
export default Navigation;
