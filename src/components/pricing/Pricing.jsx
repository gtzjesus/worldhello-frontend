import styled from 'styled-components';

const StyledPricing = styled.div`
  color: var(--color-white);
  overflow: hidden;
  padding-bottom: var(--padding-xxlarge);
`;

const Title = styled.span`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.05rem;
  opacity: 0.8;
`;

const Caption = styled.span`
  font-size: var(--font-medium);

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 61.25em) {
    // Design background from Figma software
    padding-top: var(--padding-medium);
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: var(--padding-small);
`;

function Pricing() {
  return (
    <StyledPricing>
      <Information>
        <Caption>Turn that idea</Caption>
        <Caption>into a website.</Caption>
        <br />
        <br />
        <br />
        <br />

        <Caption>as low as $49/mo.</Caption>
      </Information>
      <Information>
        <Title>our lowest subscription $49/mo.</Title>
        <Title>includes design, web, hosting, support, security & more.</Title>
      </Information>
    </StyledPricing>
  );
}

export default Pricing;
