import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const StyledAnalytics = styled.div`
  background: url('backgrounds/analytics.webp');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 35vh;
  margin-bottom: var(--padding-xxlarge);

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
  color: var(--color-white);
`;

const Title = styled.span`
  font-size: var(--font-medium);
`;

const SubTitle = styled.span`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.05rem;
  opacity: 0.8;
`;

function Analytics() {
  return (
    <LazyLoad>
      <Details>
        <Title>Experience peak</Title>
        <br />
        <SubTitle>website performance.</SubTitle>
        <br />
        <br />
        <br />
        <br />
        <SubTitle>
          We ensure your website operates efficiently while providing invaluable
          insights.
        </SubTitle>
      </Details>
      <StyledAnalytics />
    </LazyLoad>
  );
}

export default Analytics;
