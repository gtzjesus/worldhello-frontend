import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ShowcaseProducts = styled.div`
  color: var(--color-white);
  padding: 0 var(--padding-large);
  padding-bottom: var(--padding-xxlarge);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
`;

const Intro = styled.div`
  font-size: var(--font-smmd);
  padding: var(--padding-small) 0;
  line-height: var(--line-height-xsmall);
`;

const Img = styled.img``;

const Description = styled.span`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.05rem;
  opacity: 0.8;
`;

function SecondPerformance() {
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
    <ShowcaseProducts>
      <div ref={firstPerformanceRef} className="hidden">
        <Information>
          <Img src="/backgrounds/brand.webp" alt="signin"></Img>
        </Information>
      </div>

      <Information>
        <Intro>
          <div ref={secondPerformanceRef} className="hidden">
            Showcase <br /> Products
          </div>
        </Intro>

        <Description>
          <div ref={thirdPerformanceRef} className="hidden">
            Deliver a unique experience while customers browse your products.
          </div>
        </Description>
      </Information>
    </ShowcaseProducts>
  );
}

export default SecondPerformance;
