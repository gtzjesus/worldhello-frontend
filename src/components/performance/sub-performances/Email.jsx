import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const StyledEmail = styled.div`
  background: url('backgrounds/monitor.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 175vw;
  min-height: 55vh;

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 47.25em) {
    width: 100%;
    min-height: 100vh;
  }

  /* Add additional styles to control the zoom effect */
  transition: transform 0.5s ease;
  transform-origin: center;
`;

function Email() {
  return (
    <LazyLoad>
      <StyledEmail />
    </LazyLoad>
  );
}

export default Email;
