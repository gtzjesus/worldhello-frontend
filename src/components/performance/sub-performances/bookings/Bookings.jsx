import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const StyledBookings = styled.div`
  background: url('backgrounds/bookings.webp');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 50vh;

  /* Add additional styles to control the zoom effect */
  transition: transform 0.5s ease;
  transform-origin: center;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-white);
  padding: 0 var(--padding-medium);
  padding-top: var(--padding-xxxlarge);
`;

const Title = styled.span`
  font-size: var(--font-large);
`;

const SubTitle = styled.span`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.05rem;
  opacity: 0.8;
  padding-top: var(--padding-large);
`;

function Bookings() {
  return (
    <LazyLoad>
      <Details>
        <Title>Quite</Title>
        <Title>the</Title>
        <Title>Booking</Title>
        <Title>System.</Title>
        <SubTitle>
          Your customers can make bookings at any time, even outside business
          hours.
        </SubTitle>
      </Details>
      <StyledBookings />
    </LazyLoad>
  );
}

export default Bookings;
