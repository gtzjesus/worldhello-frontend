import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledShowcaseProducts = styled.div`
  color: var(--color-white);
`;

const Information = styled.div`
  padding: var(--padding-medium);
`;

const Intro = styled.span`
  font-size: var(--font-smmd);
  line-height: var(--line-height-xsmall);
`;

const Img = styled.img`
  display: flex;
  margin: 0 auto;
  max-width: 50%; /* Set the maximum width to 100% of its container */
  max-height: 50%; /* Set the maximum height to 100% of its container */
`;

const Description = styled.span`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.05rem;
  opacity: 0.8;
`;

function ShowcaseProducts() {
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
    <StyledShowcaseProducts>
      <div ref={firstPerformanceRef} className="hidden">
        <Img src="/backgrounds/brand.webp" alt="signin"></Img>
      </div>
      <Information>
        <Intro>
          <div ref={secondPerformanceRef} className="hidden">
            Showcase <br /> Products
          </div>
        </Intro>
        <br />
        <Description>
          <div ref={thirdPerformanceRef} className="hidden">
            Deliver a unique experience while customers browse your products
          </div>
        </Description>
      </Information>
    </StyledShowcaseProducts>
  );
}

export default ShowcaseProducts;
