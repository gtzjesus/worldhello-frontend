import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const StyledEarthZoom = styled.div`
  background: url('backgrounds/earthzoom.webp');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 50vh;

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
