import styled from 'styled-components';

const StyledSecondPerformance = styled.div`
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

function SecondPerformance({ handleScrollToSecond }) {
  return (
    <StyledSecondPerformance>
      <Information onClick={handleScrollToSecond}>
        <Img src="/backgrounds/brand.webp" alt="brand"></Img>
        <Intro>
          Showcase <br /> products
        </Intro>
        <Description>
          Deliver a unique experience while customers browse your products.
        </Description>
      </Information>
    </StyledSecondPerformance>
  );
}

export default SecondPerformance;
