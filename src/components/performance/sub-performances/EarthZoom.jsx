import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const StyledEarthZoom = styled.div`
  background: url('backgrounds/earthzoom.webp');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 70vh;
  padding-top: var(--padding-xxxlarge);

  /* Add additional styles to control the zoom effect */
  transition: transform 0.5s ease;
  transform-origin: center;
`;

function EarthZoom() {
  return (
    <LazyLoad>
      <StyledEarthZoom />
    </LazyLoad>
  );
}

export default EarthZoom;
