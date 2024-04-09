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
  filter: invert(100%);
  /* filter: hue-rotate(90deg); */
`;

const SubTitle = styled.span`
  display: flex;
  justify-content: left;
  font-size: var(--font-small);
`;

const SpiderTitle = styled.span`
  display: flex;
  justify-content: left;
  font-size: var(--font-medium);
`;

function GifResponsive() {
  return (
    <LazyLoad>
      <StyledGifResponsive>
        <SubTitle>
          Connect with <br /> the world.
        </SubTitle>
        <br />
        <br />
        <SpiderTitle>Need a</SpiderTitle>
      </StyledGifResponsive>
    </LazyLoad>
  );
}

export default GifResponsive;
