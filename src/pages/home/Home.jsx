import { useEffect, useState } from 'react';
import Navigation from '../../components/navigation/Navigation';
import Achievements from '../../components/achievements/Achievements';
import Source from '../../components/source/Source';
import Trial from '../../components/trial/Trial';
import Performance from '../../components/performance/Performance';
import Footer from '../../components/footer/Footer';
import Faqs from '../../components/faqs/Faqs';
import Craft from '../../components/craft/Craft';
import Refer from '../../components/refer/Refer';
import Landing from '../../components/landing/Landing';

function Home() {
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

  return (
    <>
      <Navigation />
      <Landing
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <Source />
      <div className="responsive-container">
        <Performance />

        <Achievements />
        <Craft />
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
      </div>
    </>
  );
}

export default Home;
