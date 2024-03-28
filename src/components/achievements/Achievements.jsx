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
import Button from '../../ui/buttons/Button';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledAchievements = styled.div`
  color: var(--color-white);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Title = styled.span`
  font-size: var(--font-small);
  padding-bottom: var(--padding-small);
`;

const Caption = styled.span`
  font-size: var(--font-medium);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  padding: var(--padding-medium);
`;

const Additional = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const StyledFinish = styled.div`
  display: flex;
  flex-direction: column;
`;

const SeeMoreButton = styled.button`
  border: none;
  margin: var(--margin-medium) auto;
  width: fit-content;
  cursor: pointer;
  border-radius: 100px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  background-color: var(--color-tan);
  color: var(--color-black);
  font-size: var(--font-xxxsmall);
  padding: 0.8rem 1.2rem;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which displays our achievements (websites)
function Achievements() {
  const { designs, isLoading, error } = useContext(DesignsContext);
  const [index, setIndex] = useState(0);
  const [visibleAchievements, setVisibleAchievements] = useState(4);

  // Ref to hold the interval ID
  const intervalRef = useRef(null);

  useEffect(() => {
    // Start the interval to auto-slide
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === designs.length - 1 ? 0 : prevIndex + 1
      );
    }, 7500); // Adjust the interval time as needed

    // Cleanup function to clear the interval when the component unmounts or when designs change
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [designs]); // Re-run effect when designs change

  // Handler function to display more achievements
  const handleSeeMore = () => {
    setVisibleAchievements((prevVisible) => prevVisible + 4);
  };

  if (isLoading) return <Spinner />;
  if (error) throw new Error('Failed to grab designs');

  return (
    <LazyLoad>
      <StyledAchievements>
        <Information>
          <Title>World Hello</Title>
          <Caption>Turn that Idea</Caption>
          <Caption>Into a Website.</Caption>
        </Information>
        <GridContainer>
          {designs.slice(0, visibleAchievements).map((design, idx) => (
            <Design design={design} key={idx} />
          ))}
        </GridContainer>
        {visibleAchievements < designs.length && (
          <Additional>
            <SeeMoreButton onClick={handleSeeMore}>See More</SeeMoreButton>
          </Additional>
        )}
        {/* <Additional>
          <StyledFinish>
            <Title>[ our approach ]</Title>
            Is on optimizing conversions to elevate your business&rsquo;s
            potential for success. <br />
            <br />
            Transforming your clientele into loyal, paying customers through a
            top-performing website.
            <br />
            <br />
          </StyledFinish>
        </Additional> */}
        <Information>
          <Title>From $49/mo.</Title>
        </Information>
      </StyledAchievements>
    </LazyLoad>
  );
}

export default Achievements;
