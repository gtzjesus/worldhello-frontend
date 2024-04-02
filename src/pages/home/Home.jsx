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
import Footer from '../../footer/Footer';

import Craft from '../../components/craft/Craft';
import Landing from '../../components/landing/Landing';
import Performance from '../../components/performance/Performance';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
/* Media query for larger devices */
const ResponsiveContainer = styled.div`
  @media (min-width: 768px) {
    max-width: 600px; /* Adjust as needed */
    margin: 0 auto; /* Center the container horizontally */
    padding: 0 20px;
  }
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the data
function Home() {
  // ------------------------------
  // Animation Logic
  // ------------------------------
  // Animate using react hooks on components
  const firstPerformanceRef = useRef(null);
  const secondPerformanceRef = useRef(null);

  // ------------------------------
  // useEffect
  // ------------------------------
  // Code logic Animation for the whole app, a useEffect so that it happens once component mounts
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
      { threshold: 0.5 }
    );

    // Observing all elements of interest
    const elementsToObserve = [firstPerformanceRef, secondPerformanceRef];
    elementsToObserve.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup function
    return () => {
      elementsToObserve.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);
  // Code Logic HTML (styled-components)
  return (
    <>
      <Navigation />
      <Landing />
      <ResponsiveContainer id="about-section">
        <Source />
      </ResponsiveContainer>
      <ResponsiveContainer>
        <Performance />
        <ResponsiveContainer id="join-section">
          <Craft />
        </ResponsiveContainer>
        <div ref={firstPerformanceRef} className="hidden">
          <ResponsiveContainer id="portfolio-section">
            <Achievements />
          </ResponsiveContainer>
        </div>
        <Faqs />
        <Footer />
      </ResponsiveContainer>
    </>
  );
}

// Export Home page
export default Home;
