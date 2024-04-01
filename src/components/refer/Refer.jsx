// ------------------------------
// File: Business.js
// ------------------------------
// Description: React component for displaying products, a digital footprint for the user to interact

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledRefer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('/backgrounds/refer.webp');
  background-size: cover;
  color: var(--color-white);
  padding: var(--padding-xlarge) var(--padding-medium);
  gap: var(--gap-xlarge);
`;

const Information = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  gap: var(--gap-medium);
`;

const Title = styled.span`
  font-size: var(--font-large);
`;

const Special = styled.span`
  color: var(--color-tan);
`;

const Description = styled.span`
  font-size: var(--font-xsmall);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the data

function Refer() {
  return (
    <LazyLoad>
      {/* <!-- Main Container --> */}
      <StyledRefer>
        {/* <!-- Information Big Container --> */}
        <Information>
          {/* <!-- All necessary info --> */}
          <Title>
            Refer and <Special>Earn</Special>
          </Title>
          <Description>
            WorldHello <Special>offers rewards</Special> for every successful
            referral you make to us.
            <br />
            <br />
            Upon completion, <Special>we&rsquo;ll compensate</Special> you with
            10% of the total value. All you need to do is share our services
            with your friends.
          </Description>
        </Information>
        {/* <!-- Information Big Container --> */}
        <Information>
          {/* <!-- All necessary info --> */}
          <Title>Contact us</Title>
          <Description>
            We have a team available at <Special>WorldHello</Special> if you
            have a general inquiry, you can contact us by
            <br />
            <br />
          </Description>
        </Information>
      </StyledRefer>
    </LazyLoad>
  );
}

// Export reusable Component
export default Refer;
