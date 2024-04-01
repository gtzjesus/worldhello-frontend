import React, { useEffect, useState, useRef } from 'react';
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

  const hiddenRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (hiddenRef.current) {
      observer.observe(hiddenRef.current);
    }

    return () => {
      if (hiddenRef.current) {
        observer.unobserve(hiddenRef.current);
      }
    };
  }, []);

  return (
    <>
      <Navigation />
      <Landing
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <div ref={hiddenRef} className="hidden">
        <Source />
      </div>
      <div className="responsive-container">
        <Performance />
        <Craft />
        <Achievements />
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
