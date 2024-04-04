// ------------------------------
// File: Performance.jsx
// ------------------------------
// Description: React complete Home page

import GrowClientele from './sub-performances/GrowClientele';
import Responsiveness from './sub-performances/Responsiveness';
import ShowcaseProducts from './sub-performances/ShowcaseProducts';
import CollectPayments from './sub-performances/CollectPayments';

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
      <CollectPayments />
    </>
  );
}

export default Performance;
