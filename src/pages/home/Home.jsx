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
import Performance from '../../components/performance/Performance';
import { useEffect, useRef } from 'react';
// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the data
function Home() {
  // ------------------------------
  // Animation Logic
  // ------------------------------
  // Animate using react hooks on components
  const sourceRef = useRef(null);
  const performanceRef = useRef(null);

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
    if (performanceRef.current) {
      observer.observe(performanceRef.current);
    }

    return () => {
      if (sourceRef.current) {
        observer.unobserve(sourceRef.current);
      }
      if (performanceRef.current) {
        observer.unobserve(performanceRef.current);
      }
    };
  }, []);
  // Code Logic HTML (styled-components)
  return (
    <>
      <Navigation />
      <Landing />
      <div ref={performanceRef} className="hidden">
        <Source />
      </div>
      <div className="responsive-container">
        <Performance />
        <Craft />
        <Achievements />
        <Faqs />
        <Refer />
        <Trial />
        <Footer />
      </div>
    </>
  );
}

// Export Home page
export default Home;
