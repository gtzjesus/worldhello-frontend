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

import Spinner from '../../ui/spinners/Spinner';
import Design from '../designs/Design';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

import { useContext, useEffect, useRef, useState } from 'react';
import { DesignsContext } from '../../context/DesignsContext';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.
const ParentAchievements = styled.div`
  // Code logic for arranging the children
  display: flex;
  flex-direction: column;

  // @MEDIAQUERY logic for bigger devices
  @media (min-width: 150.15em) {
    flex-direction: row;
  }
`;

const StyledAchievements = styled.div`
  // Code logic for setting the background and overflow
  background-color: var(--color-black);
  color: var(--color-white);
  overflow: hidden;
`;

const AchievementsArea = styled.div`
  // Code logic to cover the full screen of the device user is in
  margin: 0 auto;
  max-width: var(--width-filled-window);
`;

const AchievementsAreaSlider = styled.div`
  // Code logic for slider (multiple videos)
  white-space: nowrap;
  transition: ease 1100ms;
`;

const AchievementsDots = styled.div`
  // Code logic for achievement dots, where user can navigate between apps
  text-align: center;

  // @MEDIAQUERY logic for bigger devices
  @media (min-width: 150.15em) {
    text-align: right;
    padding-right: var(--padding-xxxlarge);
  }
`;

const AchievementsDot = styled.div`
  // Code logic for displaying single dot
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  cursor: pointer;
  margin: 15px 7px 0px;
  background-color: var(--color-white);

  // @MEDIAQUERY logic for bigger devices
  @media (min-width: 78.15em) {
    height: 30px;
    width: 30px;
    margin: 20px 10px 0px;
  }
`;

const Intro = styled.div`
  // Code logic to style div element
  color: var(--color-tan);
  font-size: var(--font-xxxsmall);
  padding: var(--padding-small) 0;
`;

const Information = styled.div`
  // Code logic to arrange children (our information)
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
  padding: var(--padding-app);

  // @MEDIAQUERY logic for medium devices
  @media (min-width: 78.15em) {
    padding: var(--padding-large);
  }
`;

const Additional = styled.div`
  // Code logic to arrange children (our information)
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
  padding: var(--padding-medium);
  // @MEDIAQUERY logic for medium devices
  @media (min-width: 78.15em) {
    padding: var(--padding-large);
  }
`;

const SubTitle = styled.span`
  // Code logic to style span element
  font-size: var(--font-small);

  // @MEDIAQUERY logic for small devices
  @media (min-width: 40.25em) {
    font-size: var(--font-medium);
  }

  // @MEDIAQUERY logic for medium devices
  @media (min-width: 78.15em) {
    font-size: var(--font-large);
  }
`;

const StyledFinish = styled.div`
  // Code logic to arrange children (our information)
  display: flex;
  flex-direction: column;
  font-size: var(--font-small);

  // @MEDIAQUERY logic for small devices
  @media (min-width: 40.25em) {
    font-size: var(--font-medium);
  }

  // @MEDIAQUERY logic for medium devices
  @media (min-width: 78.15em) {
    font-size: var(--font-medium);
    width: var(--width-half-window);
  }
`;

const Caption = styled.div`
  // Code logic to arrange children (our information)
  display: flex;
  justify-content: space-between;
  font-size: var(--font-medium);
  align-items: center;
  text-transform: uppercase;

  padding: 0 var(--padding-xxsmall);
  width: fit-content;

  // @MEDIAQUERY logic for small devices
  @media (min-width: 40.25em) {
    font-size: var(--font-large);
  }

  // @MEDIAQUERY logic for medium devices
  @media (min-width: 78.15em) {
    font-size: var(--font-xlarge);
  }
`;

const MiniDescription = styled.span`
  // Code logic to style span element
  font-size: var(--font-xsmall);

  // @MEDIAQUERY logic for small devices
  @media (min-width: 40.25em) {
    font-size: var(--font-small);
  }

  // @MEDIAQUERY logic for medium devices
  @media (min-width: 78.15em) {
    font-size: var(--font-small);
  }
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the achievements data located at supabase backend

function Achievements() {
  // Code logic for delay carousel
  const delay = 16000;
  // Code logic useState react hook to keep track
  const [index, setIndex] = useState(0);
  // Code logic useRef react hook to clear time on user's interaction
  const timeoutRef = useRef(null);
  // Handle reseting the time
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  // Code logic to grab designs from useContext react hook (context API)
  const { designs, isLoading, error } = useContext(DesignsContext);

  // Code logic useEffect react hook for setting the timeout functionality
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === designs.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, designs]);

  // Code logic to check if state is loading
  if (isLoading) return <Spinner />;
  // Code logic to handle any errors
  if (error) throw new Error('Failed to grab designs');

  return (
    <LazyLoad>
      {/* <!-- Main Container --> */}
      <StyledAchievements>
        {/* <!-- Another Parent Achievements Container --> */}
        <ParentAchievements>
          {/* <!-- All information Container --> */}
          <Information>
            <Intro>[ what we offer ]</Intro>
            <SubTitle>
              Connect with your desired audience with a customized website.
            </SubTitle>

            <Caption>our achievements,</Caption>
          </Information>

          {/* <!-- Achivements HERE Container --> */}
          <AchievementsArea>
            <AchievementsAreaSlider
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
              {/* <!-- Map the array of designs and display all as new Design Component --> */}
              {designs.map((design) => (
                <Design design={design} key={design.id} />
              ))}
            </AchievementsAreaSlider>
          </AchievementsArea>
        </ParentAchievements>
        {/* <!-- Dots for User Navigation Container --> */}
        <AchievementsDots>
          {designs.map((_, idx) => (
            <AchievementsDot
              key={idx}
              className={`AchievementsDot${index === idx ? ' active' : ''}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></AchievementsDot>
          ))}
        </AchievementsDots>
        {/* <!-- Additional Ending Container --> */}
        <Additional>
          <StyledFinish>
            <Intro>[ our approach ]</Intro>
            Our focus is on optimizing conversions to elevate your
            business&rsquo;s potential for success. <br />
            <br />
            Transforming your clientele into loyal, paying customers through a
            top-performing website.
            <br />
            <br />
            <MiniDescription>
              Ultimately driving revenue growth and profitability.
            </MiniDescription>
          </StyledFinish>
        </Additional>
      </StyledAchievements>
    </LazyLoad>
  );
}

// Export reusable Carousel Achivements component
export default Achievements;
