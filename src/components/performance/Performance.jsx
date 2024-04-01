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
