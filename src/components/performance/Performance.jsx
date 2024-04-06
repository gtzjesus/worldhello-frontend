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

// ------------------------------
// Return Components here for Home page
// ------------------------------
// This section has all necessary additional components
function Performance() {
  return (
    <>
      <Responsiveness />
      <GifResponsive />
      <GrowClientele />
      <Email />
      <ShowcaseProducts />
      <CollectPayments />
      <EarthZoom />
    </>
  );
}

export default Performance;
