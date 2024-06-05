// ------------------------------
// File: FaqsItem.jsx
// ------------------------------
// Description: React component for displaying individual frequently asked question.

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import { useEffect, useRef } from 'react';
import styled from 'styled-components';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledItem = styled.div`
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  padding: 20px 24px;
  cursor: pointer;

  // Code logic for arranging children
  display: grid;
  grid-template-columns: auto 1fr auto;
  column-gap: 24px;
  row-gap: 32px;
  align-items: center;
`;

const Number = styled.p`
  font-weight: 500;
`;

const Title = styled.p`
  font-weight: 500;
`;

const Icon = styled.p`
  font-weight: 500;
`;

const Content = styled.p`
  grid-column: 2 / -1;
  padding-bottom: 16px;
  line-height: 1.6;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the data
// Receives multiple parameters to be used to interact with displaying/not displaying modal

function FaqsItem({ num, title, currentOpen, onOpen, children }) {
  const firstPerformanceRef = useRef(null);

  // ------------------------------
  // useEffect
  // ------------------------------
  // Code logic Animation , a useEffect so that happens once component mounts
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
    const elementsToObserve = [firstPerformanceRef];
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
  // Code logic to check which faq number is currently open
  const isOpen = num === currentOpen;

  // Handles opening and closing the modal (toggle)
  function handleToggle() {
    onOpen(isOpen ? null : num);
  }
  return (
    <>
      <div ref={firstPerformanceRef} className="hidden">
        {/* <!-- Main Container with state dynamic class names --> */}
        <StyledItem
          className={`${isOpen ? 'open' : ''}`}
          onClick={handleToggle}
        >
          <Number className="number">
            {num < 9 ? `0${num + 1}` : num + 1}
          </Number>
          <Title>{title}</Title>
          <Icon>{isOpen ? '-' : '+'}</Icon>
          {isOpen && <Content>{children}</Content>}
        </StyledItem>
        <hr />
      </div>
    </>
  );
}

// Export reusable Component
export default FaqsItem;
