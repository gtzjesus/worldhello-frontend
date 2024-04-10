import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

/* Media query for larger devices */
const ResponsiveContainer = styled.div`
  @media (min-width: 768px) {
    max-width: 600px; /* Adjust as needed */
    margin: 0 auto; /* Center the container horizontally */
    padding: 0 20px;
  }
`;

const StyledAnalytics = styled.div`
  background: url('backgrounds/analytics.webp');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 45vh;

  // @MEDIAQUERY logic for bigger devices 980px
  @media (min-width: 47.25em) {
    width: 100%;
  }

  /* Add additional styles to control the zoom effect */
  transition: transform 0.5s ease;
  transform-origin: center;
`;

const Details = styled.div`
  padding: 0 var(--padding-medium);
  padding-top: var(--padding-xxxlarge);
  color: var(--color-white);
`;

const Title = styled.span`
  font-size: var(--font-large);
  line-height: 1.5rem;
`;

const SubTitle = styled.span`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.05rem;
  opacity: 0.8;
`;

function Analytics() {
  return (
    <LazyLoad>
      <ResponsiveContainer>
        <Details>
          <SubTitle>Analytics &</SubTitle>
          <br />
          <Title>Performance.</Title>

          <br />
          <br />
          <br />
          <br />
          <SubTitle>
            We ensure your website operates efficiently while providing
            invaluable data.
          </SubTitle>
        </Details>
      </ResponsiveContainer>
      <StyledAnalytics />
    </LazyLoad>
  );
}

export default Analytics;
