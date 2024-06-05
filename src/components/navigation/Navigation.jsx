import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const StyledNav = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== 'isScrolled',
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  background: ${({ isScrolled }) =>
    isScrolled ? 'var(--color-black)' : 'transparent'};
  width: var(--width-full-window);
  z-index: var(--z-top);
  height: var(--height-navigation);
  padding-top: var(--padding-xxsmall);
  transition: background-color 0.3s ease;
`;

const Object = styled.div`
  padding: 0 var(--padding-small);
  @media (min-width: 61.25em) {
    padding: 0 var(--padding-xxlarge);
  }
`;

const Icon = styled.a`
  height: var(--font-small);
  cursor: pointer;
`;

const Logo = styled.img`
  height: var(--font-medium);
`;

const MenuContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  z-index: 999;
  background-color: transparent;
`;

const Menu = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})`
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
  flex-direction: column;
  height: 100%;
  background-color: var(--color-black);
  padding-top: var(--padding-xlarge);
  padding-left: var(--padding-medium);
`;

const MenuItem = styled.div`
  display: inline-block;
  padding: 8px 16px;
  color: var(--color-white);
  text-decoration: none;
  font-size: var(--font-links);
  cursor: pointer;
`;

const MenuImg = styled.img`
  height: 2rem;
`;

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }

    scrollToHashSection();
    window.addEventListener('hashchange', scrollToHashSection);

    return () => {
      window.removeEventListener('hashchange', scrollToHashSection);
    };
  }, []);

  return (
    <>
      <StyledNav isScrolled={isScrolled}>
        <Object>
          <Icon onClick={scrollToTop}>
            <Logo src="/logos/helloworld.webp" alt="worldhello"></Logo>
          </Icon>
        </Object>
        <Object>
          <Menu onClick={toggleMenu} isOpen={isMenuOpen}>
            {isMenuOpen ? (
              <MenuImg src="/icons/close.webp" alt="Close"></MenuImg>
            ) : (
              <MenuImg src="/icons/menu.webp" alt="Menu"></MenuImg>
            )}
          </Menu>
        </Object>
      </StyledNav>
      <MenuContainer isOpen={isMenuOpen}>
        <MenuContent>
          <MenuItem className="menu-item">
            <Link to="performance-section">Performance</Link>
          </MenuItem>
          <br />
          <br />
          <MenuItem>
            <Link to="clients-section">Clients</Link>
          </MenuItem>
          <br />
          <br />
          <MenuItem>
            <Link to="pricing-section">Pricing</Link>
          </MenuItem>
        </MenuContent>
      </MenuContainer>
    </>
  );
}

export default Navigation;
