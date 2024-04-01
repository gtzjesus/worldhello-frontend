// ------------------------------
// File: Performance.jsx
// ------------------------------
// Description: React complete Home page

import { useState } from 'react';
import TriggerButton from '../../ui/buttons/TriggerButton';
import Modal from '../../ui/modals/Modal';

import FirstPerformance from './FirstPerformance';
import SecondPerformance from './SecondPerformance';
import ThirdPerformance from './ThirdPerformance';

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary additional components with animations

function Performance() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <FirstPerformance />
      <SecondPerformance />
      <ThirdPerformance />
      <TriggerButton openModal={openModal} text={`Click to start`} />
      {isModalOpen && <Modal closeModal={closeModal} />}
    </>
  );
}

export default Performance;
