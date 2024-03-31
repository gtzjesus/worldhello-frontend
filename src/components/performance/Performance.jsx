import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import LazyLoad from 'react-lazyload';
import FirstPerformance from './FirstPerformance';
import SecondPerformance from './SecondPerformance';
import ThirdPerformance from './ThirdPerformance';

const fadeIn = keyframes`
  0% { opacity: 0; }
  10% { opacity: 1; }
  100% { opacity: 1; }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
`;

const StyledPerformance = styled.div`
  background: var(--color-black);
  color: var(--color-white);
  padding: var(--padding-medium);
  overflow-y: auto; /* Enable vertical scrolling */
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

const AnimatedComponent = styled.div`
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.5s forwards;
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

  return (
    <LazyLoad>
      <StyledPerformance>
        <Information>
          <AnimatedComponent isVisible={activeSection === 0}>
            <FirstPerformance ref={(el) => (sectionsRef.current[0] = el)} />
          </AnimatedComponent>
          <AnimatedComponent isVisible={activeSection === 1}>
            <SecondPerformance ref={(el) => (sectionsRef.current[1] = el)} />
          </AnimatedComponent>
          <AnimatedComponent isVisible={activeSection === 2}>
            <ThirdPerformance ref={(el) => (sectionsRef.current[2] = el)} />
          </AnimatedComponent>
        </Information>
      </StyledPerformance>
    </LazyLoad>
  );
}

export default Performance;
