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
  const [header, setHeader] = useState(false);
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

  const changeHeader = () => {
    if (window.scrollY >= 40) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  const craftRef = useRef(null);
  const achievementsRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const craftOffset = craftRef.current.offsetTop;
    const achievementsOffset = achievementsRef.current.offsetTop;

    // Check if the user has scrolled past the Craft section
    if (scrollPosition >= craftOffset && scrollPosition < achievementsOffset) {
      // Smooth scroll to the Achievements section
      window.scrollTo({
        top: achievementsOffset,
        behavior: 'smooth',
      });
    }
  };

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
        <Achievements ref={achievementsRef} />
        <Performance />
        <Craft ref={craftRef} />
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
