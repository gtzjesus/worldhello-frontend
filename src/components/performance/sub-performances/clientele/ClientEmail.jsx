import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const StyledClientEmail = styled.div`
  background: url('backgrounds/monitor.webp');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 135vw;
  min-height: 40vh;

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 47.25em) {
    width: 100%;
  }

  /* Add additional styles to control the zoom effect */
  transition: transform 0.5s ease;
  transform-origin: center;
`;

function ClientEmail() {
  return (
    <LazyLoad>
      <StyledClientEmail />
    </LazyLoad>
  );
}

export default ClientEmail;
