// Performance Component (Parent)
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import FirstPerformance from './FirstPerformance';
import SecondPerformance from './SecondPerformance';
import ThirdPerformance from './ThirdPerformance';

const StyledPerformance = styled.div`
  background: var(--color-black);
  color: var(--color-white);
  padding: var(--padding-medium);
  height: 75vh;
  overflow: hidden;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

function Performance() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);
  const scrollToSection = (index) => {
    setActiveSection(index);
    sectionsRef.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const activeIndex = Math.floor(
      (scrollPosition + windowHeight / 2) / windowHeight
    );
    setActiveSection(activeIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <LazyLoad>
      <StyledPerformance>
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
