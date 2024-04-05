import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const StyledAnalytics = styled.div`
  background: url('backgrounds/analytics.gif');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;

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
