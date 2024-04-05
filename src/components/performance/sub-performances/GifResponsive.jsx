import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const StyledGifResponsive = styled.div`
  background: url('backgrounds/gifresponsive.gif');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 50vh;

  /* Apply CSS filter to make the background black and white */
  filter: grayscale(100%);

  /* Add additional styles to control the zoom effect */
  transition: transform 0.5s ease;
  transform-origin: center;
`;

const Title = styled.span`
  display: flex;
  justify-content: center;
  font-size: var(--font-medium);
  color: var(--color-white);
  z-index: 999;
`;

function GifResponsive() {
  return (
    <LazyLoad>
      <StyledGifResponsive>
        <Title>Accessibility </Title>
        <Title>across all devices</Title>
      </StyledGifResponsive>
    </LazyLoad>
  );
}

export default GifResponsive;
