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
  filter: saturate(1250%);
`;

const Title = styled.span`
  display: flex;
  position: absolute;
  top: 0;
  justify-content: left;
  font-size: var(--font-large);
  color: var(--color-white);
  font-weight: bold; /* Add font weight for emphasis */
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
  text-transform: uppercase;
`;

const SubTitle = styled.span`
  position: absolute;
  top: 50;
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
        <Title>
          <SubTitle>A web</SubTitle> Accessible
        </Title>
        <SubTitle>across all devices.</SubTitle>z
      </StyledGifResponsive>
    </LazyLoad>
  );
}

export default GifResponsive;
