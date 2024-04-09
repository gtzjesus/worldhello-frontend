// ------------------------------
// File: Performance.jsx
// ------------------------------
// Description: React complete Performance section for usability and readability

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary additional components with animations
import GrowClientele from './sub-performances/GrowClientele';
import Responsiveness from './sub-performances/Responsiveness';
import ShowcaseProducts from './sub-performances/ShowcaseProducts';
import CollectPayments from './sub-performances/CollectPayments';
import EarthZoom from './sub-performances/EarthZoom';
import GifResponsive from './sub-performances/GifResponsive';
import Email from './sub-performances/Email';
import styled from 'styled-components';
import Analytics from './sub-performances/Analytics';

/* Media query for larger devices */
const ResponsiveContainer = styled.div`
  @media (min-width: 768px) {
    max-width: 600px; /* Adjust as needed */
    margin: 0 auto; /* Center the container horizontally */
    padding: 0 20px;
  }
`;
// ------------------------------
// Return Components here for Home page
// ------------------------------
// This section has all necessary additional components
function Performance() {
  return (
    <>
      <ResponsiveContainer>
        <GrowClientele />
      </ResponsiveContainer>
      <Email />
      <ResponsiveContainer>
        <GifResponsive />
      </ResponsiveContainer>
      <Analytics />
      <ShowcaseProducts />
      <CollectPayments />
      <EarthZoom />
      <ResponsiveContainer>
        <Responsiveness />
      </ResponsiveContainer>
    </>
  );
}

export default Performance;
