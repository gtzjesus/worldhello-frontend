import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import { useEffect, useRef } from 'react';

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
  const firstPerformanceRef = useRef(null);
  const secondPerformanceRef = useRef(null);
  const thirdPerformanceRef = useRef(null);
  const fourthPerformanceRef = useRef(null);

  // ------------------------------
  // useEffect
  // ------------------------------
  // Code logic Animation for the whole app, a useEffect so that it happens once component mounts
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observing all elements of interest
    const elementsToObserve = [
      firstPerformanceRef,
      secondPerformanceRef,
      thirdPerformanceRef,
      fourthPerformanceRef,
    ];
    elementsToObserve.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup function
    return () => {
      elementsToObserve.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <LazyLoad>
      <Details>
        <div ref={firstPerformanceRef} className="hidden">
          <Title>
            Quite <br />
          </Title>
        </div>
        <div ref={secondPerformanceRef} className="hidden">
          <Title>
            the <br />
          </Title>
        </div>
        <div ref={thirdPerformanceRef} className="hidden">
          <Title>
            Booking <br />
          </Title>
        </div>
        <div ref={fourthPerformanceRef} className="hidden">
          <Title>
            System <br />
          </Title>
        </div>
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
