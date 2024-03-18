// ------------------------------
// File: Achievements.js
// ------------------------------
// Description: React component for displaying carousel videos of all business web applications, using supabase integration (backend)
// ------------------------------
// Figma Designs + Video Screen Editor/Recording.
// ------------------------------
// LazyLoading from React for optimization (images & web app loading time).
// ------------------------------
// Global Styles from /src/styles/ used for global variables.

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

const ParentAchievements = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledAchievements = styled.div`
  background-color: var(--color-blue);
  color: var(--color-white);
`;

const AchievementsArea = styled.div`
  margin: 0 auto;
  max-width: var(--width-filled-window);
  overflow: hidden; /* Ensure no scrollbar is visible */
`;

const AchievementsAreaSlider = styled.div`
  display: flex;
  flex-wrap: nowrap;
  transition: transform 0.5s ease; /* Transition effect for smooth scrolling */
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
    }, 5000); // Adjust the interval time as needed

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
        <ParentAchievements>
          <Information>
            <Intro>[ we offer a way for you to ]</Intro>
            <SubTitle>
              Connect with your desired audience with a website.
            </SubTitle>
            <Caption>Explore some of our websites,</Caption>
          </Information>
          <AchievementsArea>
            <AchievementsAreaSlider
              style={{ transform: `translateX(${-index * 100}%)` }}
            >
              {designs.map((design, idx) => (
                <Design design={design} key={idx} />
              ))}
            </AchievementsAreaSlider>
          </AchievementsArea>
        </ParentAchievements>
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
