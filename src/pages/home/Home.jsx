import { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import NavigationWBackground from '../../components/navigation/NavigationWBackground';
import Achievements from '../../components/achievements/Achievements';
import Source from '../../components/source/Source';
import Trial from '../../components/trial/Trial';

import Business from '../../components/business/Business';
import Footer from '../../components/footer/Footer';
import Faqs from '../../components/faqs/Faqs';
import Craft from '../../components/craft/Craft';
import Refer from '../../components/refer/Refer';
import Landing from '../../components/landing/Landing';

function Home() {
  // GRAB STATE for navigation scroll
  const [header, setHeader] = useState(false);
  // GRAB STATE for opening/closing modal component
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen]);

  // Function TO change state on scroll
  const changeHeader = () => {
    if (window.scrollY >= 40) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  // CHECK for scroll with event listener
  window.addEventListener('scroll', changeHeader);
  return (
    <>
      {!header ? <Navigation /> : <NavigationWBackground />}
      <Landing
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />

      <Achievements />
      <Craft
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <Source />
      <Business
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <Faqs />
      <Refer
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <Trial
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />

      <Footer />
    </>
  );
}

export default Home;
