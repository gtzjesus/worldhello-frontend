// ------------------------------
// File: Home.jsx
// ------------------------------
// Description: React complete Home page

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import Navigation from '../../components/navigation/Navigation';
import Achievements from '../../components/achievements/Achievements';
import Source from '../../components/source/Source';
import Trial from '../../components/trial/Trial';
import Footer from '../../components/footer/Footer';
import Faqs from '../../components/faqs/Faqs';
import Craft from '../../components/craft/Craft';
import Refer from '../../components/refer/Refer';
import Landing from '../../components/landing/Landing';
import FirstPerformance from '../../components/performance/FirstPerformance';
import SecondPerformance from '../../components/performance/SecondPerformance';
import ThirdPerformance from '../../components/performance/ThirdPerformance';
import { useEffect, useRef, useState } from 'react';
import TriggerButton from '../../ui/buttons/TriggerButton';
import Modal from '../../ui/modals/Modal';

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the data
function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showFixedButton, setShowFixedButton] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const sourceRef = useRef(null);
  const firstPerformanceRef = useRef(null);
  const secondPerformanceRef = useRef(null);
  const thirdPerformanceRef = useRef(null);
  const fourthPerformanceRef = useRef(null);

  // ------------------------------
  // useEffect
  // ------------------------------
  // Code logic Animation for the whole app, a useEffect so that it happens once component mounts
  useEffect(() => {
    // Grab the Intersection Observer API
    const observer = new IntersectionObserver(
      // Check for each entry viewpoint based on user scroll
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

    if (sourceRef.current) {
      observer.observe(sourceRef.current);
    }
    if (firstPerformanceRef.current) {
      observer.observe(firstPerformanceRef.current);
    }
    if (secondPerformanceRef.current) {
      observer.observe(secondPerformanceRef.current);
    }
    if (thirdPerformanceRef.current) {
      observer.observe(thirdPerformanceRef.current);
    }
    if (fourthPerformanceRef.current) {
      observer.observe(fourthPerformanceRef.current);
    }

    return () => {
      if (sourceRef.current) {
        observer.unobserve(sourceRef.current);
      }
      if (firstPerformanceRef.current) {
        observer.unobserve(firstPerformanceRef.current);
      }
      if (secondPerformanceRef.current) {
        observer.unobserve(secondPerformanceRef.current);
      }
      if (thirdPerformanceRef.current) {
        observer.unobserve(thirdPerformanceRef.current);
      }
      if (fourthPerformanceRef.current) {
        observer.unobserve(fourthPerformanceRef.current);
      }
    };
  }, []);

  // Code Logic HTML (styled-components)
  return (
    <>
      <Navigation />
      <Landing
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <div ref={sourceRef} className="hidden">
        <Source />
      </div>

      <div className="responsive-container">
        <div ref={firstPerformanceRef} className="hidden">
          <FirstPerformance />
        </div>
        <div ref={secondPerformanceRef} className="hidden">
          <SecondPerformance />
        </div>
        <div ref={thirdPerformanceRef} className="hidden">
          <ThirdPerformance />
        </div>
      </div>

      <div className="responsive-container">
        <Craft />
        <div ref={fourthPerformanceRef} className="hidden">
          <Achievements />
        </div>
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
      {showFixedButton && <TriggerButton openModal={openModal} text={`hi`} />}
      {isModalOpen && <Modal closeModal={closeModal} />}
    </>
  );
}

// Export Home page
export default Home;
