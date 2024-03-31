import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import FirstPerformance from './FirstPerformance';
import SecondPerformance from './SecondPerformance';
import ThirdPerformance from './ThirdPerformance';

const StyledPerformance = styled.div`
  background: var(--color-black);
  color: var(--color-white);
  padding: var(--padding-medium);
  height: 100vh; /* Adjusted height */
  overflow-y: auto; /* Enable vertical scrolling */
  scroll-behavior: smooth; /* Add smooth scroll behavior */
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

function Performance() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const activeIndex = Math.floor(
        (scrollPosition + windowHeight / 2) / windowHeight
      );
      setActiveSection(activeIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (index) => {
    if (sectionsRef.current[index]) {
      sectionsRef.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleScrollEnd = (event) => {
    const target = event.target;
    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      // Reached the bottom of the component
      target.style.overflowY = 'visible'; // Allow browser scrolling
    } else {
      target.style.overflowY = 'hidden'; // Disable browser scrolling
    }
  };

  return (
    <LazyLoad>
      <StyledPerformance onScroll={handleScrollEnd}>
        <Information>
          <FirstPerformance
            ref={(el) => (sectionsRef.current[0] = el)}
            handleScrollToNext={() => scrollToSection(1)}
          />
          <SecondPerformance
            ref={(el) => (sectionsRef.current[1] = el)}
            handleScrollToPrev={() => scrollToSection(0)}
            handleScrollToNext={() => scrollToSection(2)}
          />
          <ThirdPerformance
            ref={(el) => (sectionsRef.current[2] = el)}
            handleScrollToPrev={() => scrollToSection(1)}
          />
        </Information>
      </StyledPerformance>
    </LazyLoad>
  );
}

export default Performance;
