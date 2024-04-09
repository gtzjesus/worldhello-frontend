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
  padding: var(--padding-xxlarge) var(--padding-medium);
  color: var(--color-white);
`;

const Title = styled.span`
  font-size: var(--font-large);
  line-height: 2rem;
`;

const SubTitle = styled.span`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.05rem;
  opacity: 0.8;
`;

function Analytics() {
  const firstPerformanceRef = useRef(null);

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
    const elementsToObserve = [firstPerformanceRef];
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
      <>
        <Details>
          <Title>
            Experience <br /> Peak
          </Title>
          <br />
          <SubTitle>Website performance.</SubTitle>
          <br />
          <br />
          <br />
          <br />
          <div ref={firstPerformanceRef} className="hidden">
            <SubTitle>
              We ensure your website operates efficiently while providing
              invaluable insights into its performance.
            </SubTitle>
          </div>
        </Details>
        <StyledAnalytics />
      </>
    </LazyLoad>
  );
}

export default Analytics;
