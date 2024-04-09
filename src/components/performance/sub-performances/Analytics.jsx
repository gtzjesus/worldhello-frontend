import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import { useEffect, useRef } from 'react';

const StyledAnalytics = styled.div`
  background: url('backgrounds/analytics.webp');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 35vh;
  margin-bottom: var(--padding-xxlarge);

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 47.25em) {
    width: 100%;
  }

  /* Add additional styles to control the zoom effect */
  transition: transform 0.5s ease;
  transform-origin: center;
`;

const Details = styled.div`
  padding: 0 var(--padding-medium);
  color: var(--color-white);
`;

const Title = styled.span`
  font-size: var(--font-medium);
`;

const SubTitle = styled.span`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.05rem;
  opacity: 0.8;
`;

function Analytics() {
  const firstPerformanceRef = useRef(null);
  const secondPerformanceRef = useRef(null);
  const thirdPerformanceRef = useRef(null);

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
          <Title>Experience peak</Title>
        </div>
        <br />
        <div ref={secondPerformanceRef} className="hidden">
          <SubTitle>website performance.</SubTitle>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div ref={thirdPerformanceRef} className="hidden">
          <SubTitle>
            We ensure your website operates efficiently while providing
            invaluable insights.
          </SubTitle>
        </div>
      </Details>
      <StyledAnalytics />
    </LazyLoad>
  );
}

export default Analytics;
