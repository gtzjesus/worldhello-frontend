// ------------------------------
// File: Home.jsx
// ------------------------------
// Description: React complete Home page

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import Navigation from '../../navigation/Navigation';
import Achievements from '../../components/achievements/Achievements';
import Source from '../../components/source/Source';
import Faqs from '../../components/faqs/Faqs';
import { useState } from 'react';
import Modal from '../../ui/modals/Modal';
import TriggerButton from '../../ui/buttons/TriggerButton';
import Craft from '../../components/craft/Craft';
import Landing from '../../components/landing/Landing';
import Performance from '../../components/performance/Performance';
import Footer from '../../footer/Footer';
import styled from 'styled-components';
import WebGif from '../../components/webGif/WebGif';
import Pricing from '../../components/pricing/Pricing';
/* Media query for larger devices */
const ResponsiveContainer = styled.div`
  @media (min-width: 768px) {
    max-width: 600px; /* Adjust as needed */
    margin: 0 auto; /* Center the container horizontally */
    padding: 0 20px;
  }
`;

const SourceContainer = styled.div``;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the data
function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Code Logic HTML (styled-components)
  return (
    <>
      <Navigation />
      <Landing />
      <SourceContainer>
        <Source />
      </SourceContainer>
      {/* Performance component has many sub-components making up most of the app */}
      <Performance />
      {/* Performance component has many sub-components making up most of the app */}
      <ResponsiveContainer id="clients-section">
        <Achievements />
      </ResponsiveContainer>
      <ResponsiveContainer id="pricing-section">
        <Craft />
      </ResponsiveContainer>
      <ResponsiveContainer>
        <Pricing />
      </ResponsiveContainer>
      <ResponsiveContainer>
        <WebGif />
        <Faqs />
        <Footer />
      </ResponsiveContainer>
      <TriggerButton openModal={openModal} text={`Click to start`} />
      {isModalOpen && <Modal closeModal={closeModal} />}
    </>
  );
}

// Export Home page
export default Home;
