import styled from 'styled-components';

const StyledThirdPerformance = styled.div`
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
  letter-spacing: 0.05rem;
  line-height: var(--line-height-xxsmall);
  text-transform: uppercase;
  opacity: 0.75;
`;

function ThirdPerformance({ handleScrollToThird }) {
  return (
    <StyledThirdPerformance>
      <Information onClick={handleScrollToThird}>
        <Img src="/backgrounds/baggy.webp" alt="bag"></Img>
        <Intro>
          Collect <br /> payments
        </Intro>
        <Description>
          Monetize your products with a revenue-generating platform.
        </Description>
      </Information>
    </StyledThirdPerformance>
  );
}

export default ThirdPerformance;
