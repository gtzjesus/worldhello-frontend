import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const StyledAnalytics = styled.div`
  background: url('backgrounds/monitor.webp');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 35vh;
  margin-bottom: var(--padding-xxlarge);

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 47.25em) {
    width: 100%;
  }

  /* Add additional styles to control the zoom effect */
  transition: transform 0.5s ease;
  transform-origin: center;
`;

function Analytics() {
  return (
    <LazyLoad>
      <StyledAnalytics />
    </LazyLoad>
  );
}

export default Analytics;
