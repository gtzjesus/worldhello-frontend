import React from 'react';
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
  font-size: var(--font-medium);
  padding: var(--padding-small) 0;
  line-height: var(--line-height-small);
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

function SecondPerformance({ handleScrollToSecond }) {
  return (
    <StyledSecondPerformance>
      <Information onClick={handleScrollToSecond}>
        <Img src="/backgrounds/brand.webp" alt="brand"></Img>
        <Intro>
          Showcase <br /> products
        </Intro>
        <Description>
          Deliver a seamless experience to your customers while they browse your
          products.
        </Description>
      </Information>
    </StyledSecondPerformance>
  );
}

export default SecondPerformance;
