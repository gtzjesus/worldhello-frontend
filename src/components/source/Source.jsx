import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import { useEffect, useRef } from 'react';

const StyledSource = styled.div`
  position: relative;
  overflow: hidden;
  height: 75vh;
  color: var(--color-white);
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('/backgrounds/source.webp');
  background-size: cover;
  background-repeat: no-repeat;
`;

const Information = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.span`
  font-size: var(--font-large);
  font-weight: bold; /* Add font weight for emphasis */
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5); /* Add a subtle text shadow */
`;

const Last = styled.div`
  margin-top: var(--margin-xlarge);
`;

const Ending = styled.span`
  font-size: var(--font-links); /* Increase font size for readability */
  line-height: 1.5; /* Increase line spacing */
`;

function Source() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      backgroundRef.current.style.transform = `translateY(-${
        scrollPosition * 0.2
      }px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <LazyLoad>
      <StyledSource>
        <Background ref={backgroundRef} />
        <Information>
          <Title>Be seen</Title>
          <Last>
            <Ending>with a website accessible all over the world.</Ending>
          </Last>
        </Information>
      </StyledSource>
    </LazyLoad>
  );
}

export default Source;
