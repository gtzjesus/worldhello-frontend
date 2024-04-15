import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const StyledWebGif = styled.div`
  background: url('backgrounds/gifresponsive.gif');
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: var(--padding-xlarge) var(--padding-small);

  /* Apply CSS filter to make the background black and white */
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

function WebGif() {
  return (
    <LazyLoad>
      <StyledWebGif>
        <SubTitle>
          What better <br /> way to start <br /> other than
        </SubTitle>
        <SpiderTitle>with a</SpiderTitle>
      </StyledWebGif>
    </LazyLoad>
  );
}

export default WebGif;
