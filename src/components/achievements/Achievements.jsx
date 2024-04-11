// ------------------------------
// File: Achievements.jsx
// ------------------------------
// Description: A React Component showcasing all of our achievements (websites)

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import { useContext, useState } from 'react';
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
  padding: var(--padding-xlarge) 0;
`;

const Title = styled.span`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.05rem;
  opacity: 0.8;
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

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which displays our achievements (websites)
function Achievements() {
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

  if (isLoading) return <Spinner />;
  if (error) throw new Error('Failed to grab designs');

  return (
    <LazyLoad>
      <StyledAchievements>
        <Information>
          <Title>Browse some of our clients</Title>
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
