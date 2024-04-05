import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const StyledGifResponsive = styled.div`
  background: url('backgrounds/gifresponsive.gif');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 35vh;

  /* Apply CSS filter to make the background black and white */
  filter: contrast(250%);

  /* Add additional styles to control the zoom effect */
  transition: transform 0.5s ease;
  transform-origin: center;

  margin: var(--margin-large) 0;
`;

const Title = styled.span`
  display: flex;
  justify-content: center;
  font-size: var(--font-medium);
  color: var(--color-white);
  font-weight: bold; /* Add font weight for emphasis */
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
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
