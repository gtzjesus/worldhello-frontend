import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const GrowClientele = styled.div`
  color: var(--color-white);
  padding: 0 var(--padding-medium);
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

const SpecialTitle = styled.span`
  font-size: var(--font-large);
`;

const SubTitle = styled.span`
  font-size: var(--font-xxxsmall);
`;

const Img = styled.img``;

const Description = styled.span`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.05rem;
  opacity: 0.8;
  padding-bottom: var(--padding-xxxlarge);
`;

function FirstPerformance() {
  const firstPerformanceRef = useRef(null);
  const secondPerformanceRef = useRef(null);
  const thirdPerformanceRef = useRef(null);
  const fourthPerformanceRef = useRef(null);
  const fivethPerformanceRef = useRef(null);
  const sixthPerformanceRef = useRef(null);
  const seventhPerformanceRef = useRef(null);
  const eighthPerformanceRef = useRef(null);
  const ninththPerformanceRef = useRef(null);
  const tenthPerformanceRef = useRef(null);

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
      fivethPerformanceRef,
      sixthPerformanceRef,
      seventhPerformanceRef,
      eighthPerformanceRef,
      ninththPerformanceRef,
      tenthPerformanceRef,
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
            <SpecialTitle>
              Receive <br />
            </SpecialTitle>
          </div>
          <div ref={fivethPerformanceRef} className="hidden">
            <SpecialTitle>
              leads <br />
            </SpecialTitle>
          </div>
          <div ref={sixthPerformanceRef} className="hidden">
            <SpecialTitle>
              directly <br />
            </SpecialTitle>
          </div>
          <div ref={seventhPerformanceRef} className="hidden">
            <SpecialTitle>
              to your <br />
            </SpecialTitle>
          </div>
          <div ref={eighthPerformanceRef} className="hidden">
            <SpecialTitle>
              inbox <br />
            </SpecialTitle>
          </div>
          <div ref={ninththPerformanceRef} className="hidden">
            <SpecialTitle>
              from <br />
            </SpecialTitle>
          </div>
          <div ref={tenthPerformanceRef} className="hidden">
            <SpecialTitle>
              website visits. <br />
            </SpecialTitle>
          </div>
        </Description>
      </Information>
    </GrowClientele>
  );
}

export default FirstPerformance;
