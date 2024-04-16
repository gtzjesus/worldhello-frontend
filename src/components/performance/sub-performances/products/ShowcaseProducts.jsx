import styled from 'styled-components';

const StyledShowcaseProducts = styled.div`
  padding-top: var(--padding-xxxlarge);
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

function ShowcaseProducts() {
  return (
    <StyledShowcaseProducts>
      <Img src="/backgrounds/brand.webp" alt="signin"></Img>
      <Information>
        <Intro>
          Showcase <br /> Products
        </Intro>
        <br />
        <Description>
          Deliver a unique experience while customers browse your products.
        </Description>
      </Information>
    </StyledShowcaseProducts>
  );
}

export default ShowcaseProducts;
