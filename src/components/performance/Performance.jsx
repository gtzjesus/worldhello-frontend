// ------------------------------
// File: Performance.jsx
// ------------------------------
// Description: React complete Performance section for usability and readability

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary additional components with animations
import GrowClientele from './sub-performances/clientele/GrowClientele';
import ShowcaseProducts from './sub-performances/products/ShowcaseProducts';
import CollectPayments from './sub-performances/payments/CollectPayments';
import EarthZoom from './sub-performances/products/EarthZoom';
import ClientEmail from './sub-performances/clientele/ClientEmail';
import styled from 'styled-components';
import Analytics from './sub-performances/analytics/Analytics';
import Bookings from './sub-performances/bookings/Bookings';

/* Media query for larger devices */
const ResponsiveContainer = styled.div`
  @media (min-width: 768px) {
    max-width: 600px; /* Adjust as needed */
    margin: 0 auto; /* Center the container horizontally */
    padding: 0 20px;
  }
`;

const AnalyticsContainer = styled.div``;
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
      <ClientEmail />
      <Analytics />

      <ResponsiveContainer id="performance-section">
        <ShowcaseProducts />
      </ResponsiveContainer>
      <EarthZoom />
      <ResponsiveContainer>
        <CollectPayments />
        <Bookings />
      </ResponsiveContainer>
    </>
  );
}

export default Performance;
