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

const Title = styled.span`
  font-size: var(--font-medium);
`;

const SubTitle = styled.span`
  font-size: var(--font-xxxsmall);
`;

const Img = styled.img``;

const Description = styled.span`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.05rem;
  opacity: 0.8;
  padding-bottom: var(--padding-giant);
`;

function FirstPerformance() {
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
    <GrowClientele>
      <div ref={firstPerformanceRef} className="hidden">
        <Information>
          <Img src="/backgrounds/signin.webp" alt="signin"></Img>
        </Information>
      </div>

      <Information>
        <Intro>
          <div ref={secondPerformanceRef} className="hidden">
            <Title>
              Grow <br /> Clientele.
            </Title>
          </div>
        </Intro>

        <Description>
          <div ref={thirdPerformanceRef} className="hidden">
            <SubTitle>
              Effortlessly have people subscribe and remain loyal, paying
              customers.
            </SubTitle>
          </div>
        </Description>
      </Information>
      <Information>
        <Description>
          <div ref={fourthPerformanceRef} className="hidden">
            <Title>
              Gain leads <br /> from anywhere <br /> right in your inbox.
            </Title>
          </div>
        </Description>
      </Information>
    </GrowClientele>
  );
}

export default FirstPerformance;
