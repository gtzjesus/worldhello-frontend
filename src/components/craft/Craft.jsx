import { useState, useEffect } from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const StyledCraft = styled.div`
  background: url('backgrounds/craft.webp');
  background-size: contain;
  background-repeat: no-repeat;
  height: 100vh;
`;

const Hook = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--height-navigation-padding) var(--padding-small);
`;

const Title = styled.span`
  font-size: var(--font-large);
  letter-spacing: var(--spacing-title);
  text-shadow: var(--text-shadow-font);
  text-transform: uppercase;
  overflow: hidden;
`;

const Subtitle = styled.span`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.05rem;
  line-height: var(--line-height-xxsmall);
  text-transform: uppercase;
  opacity: 0.75;
`;

const SlideText = styled.span`
  font-size: var(--font-medium);
  opacity: 0;
  animation: fadeInOut 2.5s infinite; /* Smooth fade-in and fade-out animation */

  @keyframes fadeInOut {
    0%,
    100% {
      opacity: 0;
    }
    25% {
      opacity: 0.75;
    }
    75% {
      opacity: 0.75;
    }
  }
`;

function Craft() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideTexts = ['Support', 'Data Analytics', 'Collaboration', 'Hosting'];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slideTexts.length);
    }, 2500); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <LazyLoad>
      <StyledCraft>
        <Hook>
          <Title>
            Join us <Subtitle>and</Subtitle>
          </Title>
          <br />
          <Subtitle>
            Expand your business <br /> by harnessing <br /> our combined
            resources.
          </Subtitle>
          <br />
          <Subtitle>such as</Subtitle>
          <SlideText>{slideTexts[slideIndex]}</SlideText>
        </Hook>
      </StyledCraft>
    </LazyLoad>
  );
}

export default Craft;
