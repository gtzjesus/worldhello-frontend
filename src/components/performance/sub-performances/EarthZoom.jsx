import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const StyledEarthZoom = styled.div`
  background: url('backgrounds/earthzoom.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;

  /* Add additional styles to control the zoom effect */
  transition: transform 0.5s ease;
  transform-origin: center;
`;

function EarthZoom() {
  const earthRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const zoomLevel = 1 + scrollPosition * 0.0005; // Adjust the factor for desired zoom speed

      // Apply zoom effect using CSS transform
      earthRef.current.style.transform = `scale(${zoomLevel})`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <LazyLoad>
      <StyledEarthZoom ref={earthRef} />
    </LazyLoad>
  );
}

export default EarthZoom;
