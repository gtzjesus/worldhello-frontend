import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const StyledGifResponsive = styled.div`
  background: url('backgrounds/gifresponsive.gif');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 40vh;
  padding: var(--padding-xxlarge) var(--padding-small);

  /* Apply CSS filter to make the background black and white */
  /* filter: saturate(1250%); */
  /* filter: invert(100%); */
  filter: hue-rotate(90deg);
`;

const SubTitle = styled.span`
  display: flex;
  justify-content: left;
  font-size: var(--font-small);
  color: var(--color-white);
  font-weight: bold; /* Add font weight for emphasis */
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
`;

function GifResponsive() {
  return (
    <LazyLoad>
      <StyledGifResponsive>
        <SubTitle>Across all devices.</SubTitle>
      </StyledGifResponsive>
    </LazyLoad>
  );
}

export default GifResponsive;
