// ------------------------------
// File: Performance.jsx
// ------------------------------
// Description: React complete Home page

import GrowClientele from './sub-performances/GrowClientele';
import Responsiveness from './sub-performances/Responsiveness';
import ShowcaseProducts from './sub-performances/ShowcaseProducts';
import CollectPayments from './sub-performances/CollectPayments';
import EarthZoom from './sub-performances/EarthZoom';

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary additional components with animations

function Performance() {
  return (
    <>
      <ShowcaseProducts />
      <Responsiveness />
      <GrowClientele />
      <EarthZoom />
      <CollectPayments />
    </>
  );
}

export default Performance;
