import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const GrowClientele = styled.div`
  color: var(--color-white);
  padding: var(--padding-xxlarge) var(--padding-large);
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

function FirstPerformance() {
  const firstPerformanceRef = useRef(null);
  const secondPerformanceRef = useRef(null);
  const thirdPerformanceRef = useRef(null);
  const fourthPerformanceRef = useRef(null);
  const fifthPerformanceRef = useRef(null);

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
      fifthPerformanceRef,
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
    <GrowClientele>
      <div ref={firstPerformanceRef} className="hidden">
        <Information>
          <Img src="/backgrounds/signin.webp" alt="signin"></Img>
        </Information>
      </div>

      <Information>
        <Intro>
          <div ref={secondPerformanceRef} className="hidden">
            Grow <br /> Clientele.
          </div>
        </Intro>

        <Description>
          <div ref={thirdPerformanceRef} className="hidden">
            Effortlessly have people subscribe and remain loyal, paying
            customers where you can then
          </div>
        </Description>
      </Information>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Information>
        <Description>
          <Intro>
            <div ref={fourthPerformanceRef} className="hidden">
              Grow your <br /> Audience.
            </div>
          </Intro>
          <div ref={fifthPerformanceRef} className="hidden">
            Via emails, newsletters, promotions, or personalized notifications.
            <br />
            <br />
            Gain leads from anywhere.
          </div>
        </Description>
      </Information>
    </GrowClientele>
  );
}

export default FirstPerformance;
