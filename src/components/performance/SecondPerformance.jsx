import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledFirstPerformance = styled.div`
  background: var(--color-black);
  color: var(--color-white);
  padding: 0 var(--padding-large);
  padding-bottom: var(--padding-xxlarge);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

const Intro = styled.div`
  font-size: var(--font-smmd);
  padding: var(--padding-small) 0;
  line-height: var(--line-height-xsmall);
  text-transform: uppercase;
`;

const Img = styled.img``;

const Description = styled.span`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  opacity: 0.75;
`;

function SecondPerformance() {
  const sourceRef = useRef(null);
  const firstPerformanceRef = useRef(null);
  const secondPerformanceRef = useRef(null);
  const thirdPerformanceRef = useRef(null);

  // ------------------------------
  // useEffect
  // ------------------------------
  // Code logic Animation for the whole app, a useEffect so that it happens once component mounts
  useEffect(() => {
    // Grab the Intersection Observer API
    const observer = new IntersectionObserver(
      // Check for each entry viewpoint based on user scroll
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (sourceRef.current) {
      observer.observe(sourceRef.current);
    }
    if (firstPerformanceRef.current) {
      observer.observe(firstPerformanceRef.current);
    }
    if (secondPerformanceRef.current) {
      observer.observe(secondPerformanceRef.current);
    }
    if (thirdPerformanceRef.current) {
      observer.observe(thirdPerformanceRef.current);
    }

    return () => {
      if (sourceRef.current) {
        observer.unobserve(sourceRef.current);
      }
      if (firstPerformanceRef.current) {
        observer.unobserve(firstPerformanceRef.current);
      }
      if (secondPerformanceRef.current) {
        observer.unobserve(secondPerformanceRef.current);
      }
      if (thirdPerformanceRef.current) {
        observer.unobserve(thirdPerformanceRef.current);
      }
    };
  }, []);
  return (
    <StyledFirstPerformance>
      <div ref={firstPerformanceRef} className="hidden">
        <Information>
          <Img src="/backgrounds/brand.webp" alt="signin"></Img>
        </Information>
      </div>

      <Information>
        <Intro>
          <div ref={secondPerformanceRef} className="hidden">
            Showcase <br /> products
          </div>
        </Intro>

        <Description>
          <div ref={thirdPerformanceRef} className="hidden">
            Deliver a unique experience while customers browse your products.
          </div>
        </Description>
      </Information>
    </StyledFirstPerformance>
  );
}

export default SecondPerformance;
