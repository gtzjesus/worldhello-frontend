// ------------------------------
// File: Achievements.jsx
// ------------------------------
// Description: A React Component showcasing all of our achievements (websites)

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import React, { useContext, useEffect, useRef, useState } from 'react';
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
  background-color: var(--color-blue);
  color: var(--color-white);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Intro = styled.div`
  color: var(--color-tan);
  font-size: var(--font-xxxsmall);
  padding: var(--padding-small) 0;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-xsmall);
  padding: var(--padding-app);
`;

const Additional = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
  padding: var(--padding-medium);
`;

const SubTitle = styled.span`
  font-size: var(--font-small);
`;

const StyledFinish = styled.div`
  display: flex;
  flex-direction: column;
  font-size: var(--font-small);
`;

const Caption = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: var(--font-medium);
  align-items: center;
  text-transform: uppercase;
  padding: var(--padding-large) 0 var(--padding-small) 0;
  width: fit-content;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which displays our achievements (websites)
function Achievements() {
  const { designs, isLoading, error } = useContext(DesignsContext);
  const [index, setIndex] = useState(0);

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

  if (isLoading) return <Spinner />;
  if (error) throw new Error('Failed to grab designs');

  return (
    <LazyLoad>
      <StyledAchievements>
        <Information>
          <Intro>[ we offer a way for you to ]</Intro>
          <SubTitle>
            Connect with your desired audience with a website.
          </SubTitle>
          <Caption>Explore some of our websites,</Caption>
        </Information>
        <GridContainer>
          {designs.map((design, idx) => (
            <Design design={design} key={idx} />
          ))}
        </GridContainer>
        <Additional>
          <StyledFinish>
            <Intro>[ our approach ]</Intro>
            Is on optimizing conversions to elevate your business&rsquo;s
            potential for success. <br />
            <br />
            Transforming your clientele into loyal, paying customers through a
            top-performing website.
            <br />
            <br />
          </StyledFinish>
        </Additional>
      </StyledAchievements>
    </LazyLoad>
  );
}

export default Achievements;
