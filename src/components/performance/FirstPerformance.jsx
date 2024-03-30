import styled from 'styled-components';

const StyledFirstPerformance = styled.div`
  background: var(--color-black);
  color: var(--color-white);
  padding: var(--padding-medium);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

const Intro = styled.div`
  font-size: var(--font-smmd);
  padding: var(--padding-small) 0;
  line-height: var(--line-height-xsmall);
  text-transform: uppercase;
`;

const Img = styled.img`
  padding: var(--padding-medium) 0;
`;

const Description = styled.span`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.15rem;
  line-height: var(--line-height-xsmall);
  text-transform: uppercase;
  opacity: 0.75;
`;

function FirstPerformance({ handleScrollToSecond }) {
  return (
    <StyledFirstPerformance>
      <Information onClick={handleScrollToSecond}>
        <Img src="/backgrounds/signin.webp" alt="signin"></Img>
        <Intro>
          Grow <br /> clientele
        </Intro>
        <Description>
          Effortlessly have clients subscribe and be loyal.
        </Description>
      </Information>
    </StyledFirstPerformance>
  );
}

export default FirstPerformance;
