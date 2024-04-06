import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const StyledEmail = styled.div`
  background: url('backgrounds/monitor.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 175vw;
  min-height: 35vh;

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
