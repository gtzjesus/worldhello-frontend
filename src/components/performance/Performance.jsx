import React, { useRef } from 'react';
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
  height: 75vh; /* Set the height to fill the viewport */
  overflow-y: auto; /* Enable vertical scrolling */
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

function Performance() {
  const secondPerformanceRef = useRef(null);
  const thirdPerformanceRef = useRef(null);

  const handleScrollToSecond = () => {
    secondPerformanceRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToThird = () => {
    thirdPerformanceRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <LazyLoad>
      <StyledPerformance>
        <Information>
          <FirstPerformance handleScrollToSecond={handleScrollToSecond} />
          <SecondPerformance
            ref={secondPerformanceRef}
            handleScrollToThird={handleScrollToThird}
          />
          <ThirdPerformance ref={thirdPerformanceRef} />
        </Information>
      </StyledPerformance>
    </LazyLoad>
  );
}

export default Performance;
