import { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import LazyLoad from 'react-lazyload';
import FirstPerformance from './FirstPerformance';
import SecondPerformance from './SecondPerformance';
import ThirdPerformance from './ThirdPerformance';

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const delay = 5; // Adjust the delay value as needed

const AnimatedComponent = styled.div`
  opacity: 0;
  animation: ${fadeIn} 15s forwards;
  animation-delay: ${({ index }) =>
    index * delay}s; // Apply delay based on index
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
          <AnimatedComponent
            style={{ opacity: activeSection === 0 ? 1 : 0 }}
            index={0}
          >
            <FirstPerformance ref={(el) => (sectionsRef.current[0] = el)} />
          </AnimatedComponent>

          <AnimatedComponent
            style={{ opacity: activeSection === 1 ? 1 : 0 }}
            index={1}
          >
            <SecondPerformance ref={(el) => (sectionsRef.current[1] = el)} />
          </AnimatedComponent>

          <AnimatedComponent
            style={{ opacity: activeSection === 2 ? 1 : 0 }}
            index={2}
          >
            <ThirdPerformance ref={(el) => (sectionsRef.current[2] = el)} />
          </AnimatedComponent>
        </Information>
      </StyledPerformance>
    </LazyLoad>
  );
}

export default Performance;
