// ------------------------------
// File: Achievements.jsx
// ------------------------------
// Description: A React Component showcasing all of our achievements (websites)

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import { useContext, useEffect, useRef, useState } from 'react';
import Spinner from '../../ui/spinners/Spinner';
import Design from '../designs/Design';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import { DesignsContext } from '../../context/DesignsContext';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledAchievements = styled.div`
  color: var(--color-white);
  overflow: hidden;
  padding-bottom: var(--padding-xlarge);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: var(--padding-small) 0;
`;

const Title = styled.span`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.05rem;
  opacity: 0.8;
`;

const SpecialTitle = styled.span`
  font-size: var(--font-large);
`;

const Caption = styled.span`
  font-size: var(--font-medium);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: var(--padding-small);
`;

const Additional = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const SeeMoreButton = styled.button`
  border: none;
  margin: var(--margin-medium) auto;
  width: fit-content;
  cursor: pointer;
  border-radius: 100px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  background-color: var(--color-white);
  color: var(--color-black);
  font-size: var(--font-xxxsmall);
  padding: 0.8rem 1.2rem;
`;

const Description = styled.div`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.05rem;
  opacity: 0.8;
  padding-bottom: var(--padding-large);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which displays our achievements (websites)
function Achievements() {
  const firstPerformanceRef = useRef(null);
  const secondPerformanceRef = useRef(null);
  const thirdPerformanceRef = useRef(null);
  const fourthPerformanceRef = useRef(null);
  const fivethPerformanceRef = useRef(null);
  const { designs, isLoading, error } = useContext(DesignsContext);
  const [visibleAchievements, setVisibleAchievements] = useState(2);
  const [showMore, setShowMore] = useState(true); // Track whether to show more or less

  // Handler function to display more or less achievements
  const handleToggleSeeMore = () => {
    if (showMore) {
      setVisibleAchievements(designs.length);
    } else {
      setVisibleAchievements(2);
    }
    setShowMore(!showMore); // Toggle the state
  };

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

  if (isLoading) return <Spinner />;
  if (error) throw new Error('Failed to grab designs');

  return (
    <LazyLoad>
      <StyledAchievements>
        <Information>
          <Description>
            <SpecialTitle>
              Browse <br />
            </SpecialTitle>
            <SpecialTitle>
              some <br />
            </SpecialTitle>
            <SpecialTitle>
              of our <br />
            </SpecialTitle>
            <SpecialTitle>clients.</SpecialTitle>
          </Description>
        </Information>
        <GridContainer>
          {designs.slice(0, visibleAchievements).map((design, idx) => (
            <Design design={design} key={idx} />
          ))}
        </GridContainer>
        {showMore && designs.length > visibleAchievements && (
          <Additional>
            <SeeMoreButton onClick={handleToggleSeeMore}>
              See more
            </SeeMoreButton>
          </Additional>
        )}
        {!showMore && (
          <Additional>
            <SeeMoreButton onClick={handleToggleSeeMore}>
              See less
            </SeeMoreButton>
          </Additional>
        )}
        <br />
        <br />
        <br />
        <br />

        <Information>
          <Caption>Turn that idea</Caption>
          <Caption>into a website.</Caption>
          <Information>
            <Title>From $49/mo.</Title>
          </Information>
        </Information>

        <Information>
          <Title>Lowest subscription $49/mo.</Title>
          <Title>includes web, hosting, support, security & more.</Title>
        </Information>
      </StyledAchievements>
    </LazyLoad>
  );
}

export default Achievements;
