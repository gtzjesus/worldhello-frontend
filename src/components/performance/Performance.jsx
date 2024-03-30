import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

// Import components needed
import FirstPerformance from './FirstPerformance';
import SecondPerformance from './SecondPerformance';
import ThirdPerformance from './ThirdPerformance';

const StyledPerformance = styled.div`
  background: var(--color-black);
  color: var(--color-white);
  padding: var(--padding-medium);
  height: auto; /* Set the height to auto to accommodate dynamic content */
  overflow-y: auto; /* Enable vertical scrolling */
  scroll-behavior: smooth; /* Add smooth scroll behavior */
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

function Performance() {
  const [activeComponent, setActiveComponent] = useState(1);
  const [isPerformanceActive, setIsPerformanceActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (!isPerformanceActive) {
        setIsPerformanceActive(true);
      }

      // Determine the active component based on scroll position
      if (scrollPosition < windowHeight) {
        setActiveComponent(1);
      } else if (scrollPosition < windowHeight * 2) {
        setActiveComponent(2);
      } else {
        setActiveComponent(3);
      }

      // Allow scrolling past the component when at the bottom
      if (scrollPosition + windowHeight >= documentHeight) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPerformanceActive]);

  const handleComponentChange = () => {
    setActiveComponent((prevComponent) =>
      prevComponent < 3 ? prevComponent + 1 : prevComponent
    );
  };

  return (
    <LazyLoad>
      <StyledPerformance>
        {isPerformanceActive && (
          <Information onClick={handleComponentChange}>
            {activeComponent === 1 && <FirstPerformance />}
            {activeComponent === 2 && <SecondPerformance />}
            {activeComponent === 3 && <ThirdPerformance />}
          </Information>
        )}
      </StyledPerformance>
    </LazyLoad>
  );
}

export default Performance;
