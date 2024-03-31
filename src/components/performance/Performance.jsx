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
  padding-bottom: var(--padding-xxlarge);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

function Performance() {
  return (
    <LazyLoad>
      <StyledPerformance>
        <Information>
          <FirstPerformance />
          <SecondPerformance />
          <ThirdPerformance />
        </Information>
      </StyledPerformance>
    </LazyLoad>
  );
}

export default Performance;
