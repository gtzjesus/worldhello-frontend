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
  padding: var(--padding-xlarge) var(--padding-medium);
`;

const Subtitle = styled.span`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.05rem;
  line-height: var(--line-height-xxsmall);
  opacity: 0.75;
`;

const SlideText = styled.span`
  font-size: var(--font-medium);
  text-transform: uppercase;
  opacity: 0.75;
  transition: opacity 0.5s ease-in-out;
`;

function Craft() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideTexts = ['Hosted', 'Monetized', 'Performant', 'Unique'];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slideTexts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <LazyLoad>
      <StyledCraft>
        <Hook>
          <Subtitle>With your own</Subtitle>
          <SlideText>
            {slideTexts[slideIndex]} <Subtitle>Website. </Subtitle>
          </SlideText>
        </Hook>
      </StyledCraft>
    </LazyLoad>
  );
}

export default Craft;
