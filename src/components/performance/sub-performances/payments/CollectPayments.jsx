import styled from 'styled-components';

const StyledCollectPayments = styled.div`
  color: var(--color-white);
`;

const Information = styled.div`
  padding: var(--padding-medium);
`;

const Intro = styled.span`
  font-size: var(--font-smmd);
  line-height: var(--line-height-xsmall);
`;

const Img = styled.img`
  display: flex;
  margin: 0 auto;
  max-width: 50%; /* Set the maximum width to 100% of its container */
  max-height: 50%; /* Set the maximum height to 100% of its container */
`;

const Description = styled.span`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.05rem;
  opacity: 0.8;
`;

function CollectPayments() {
  return (
    <StyledCollectPayments>
      <Img src="/backgrounds/baggy.webp" alt="signin"></Img>
      <Information>
        <Intro>
          Collect <br /> Payments.
        </Intro>
        <br />
        <Description>
          Monetize your products or services with a revenue-generating platform.
        </Description>
      </Information>
    </StyledCollectPayments>
  );
}

export default CollectPayments;
