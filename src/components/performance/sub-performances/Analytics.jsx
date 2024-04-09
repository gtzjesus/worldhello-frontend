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
`;

function Analytics() {
  return (
    <LazyLoad>
      <Details>
        <Title>High Performance</Title>
        <br />
        <SubTitle>
          Our websites priority is performance and how users interact with you
          webstie, we use tools to ensure that our websites are top notch in
          performance + we have analytical data that helps us see how we perform
          with your brand new website today!
        </SubTitle>
      </Details>
      <StyledAnalytics />
    </LazyLoad>
  );
}

export default Analytics;
