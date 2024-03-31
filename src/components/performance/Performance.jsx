import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import FirstPerformance from './FirstPerformance';
import SecondPerformance from './SecondPerformance';
import ThirdPerformance from './ThirdPerformance';

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
          <FirstPerformance ref={(el) => (sectionsRef.current[0] = el)} />
          <SecondPerformance ref={(el) => (sectionsRef.current[1] = el)} />
          <ThirdPerformance ref={(el) => (sectionsRef.current[2] = el)} />
        </Information>
      </StyledPerformance>
    </LazyLoad>
  );
}

export default Performance;
