import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const StyledBookings = styled.div`
  background: url('backgrounds/bookings.webp');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: var(--padding-xxxlarge);

  /* Add additional styles to control the zoom effect */
  transition: transform 0.5s ease;
  transform-origin: center;
`;

function Bookings() {
  return (
    <LazyLoad>
      <StyledBookings />
    </LazyLoad>
  );
}

export default Bookings;
