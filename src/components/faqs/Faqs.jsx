// ------------------------------
// File: Business.js
// ------------------------------
// Description: React component for displaying our frequently asked questions.

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

import styled from 'styled-components';
import FaqsItem from './FaqsItem';
import { useState } from 'react';
import LazyLoad from 'react-lazyload';

// ------------------------------
// FAQs
// ------------------------------
// This section contains an array of objects. Our frequently asked questions with the provided answers
const faqs = [
  {
    title: 'What is on the $49/mo.?',
    text: 'This minimum monthly subscription gives you a complete custom website with Hosting, Security, Maintenance, Analytics, and more! Keep in mind there are other subscriptions available depending on project.',
  },
  {
    title: 'What is the timeframe for my new website?',
    text: 'The duration for crafting a website varies per project. Generally, our team dedicates approximately 5 to 9 weeks, starting from the initial discovery session to the final launch of your new website.',
  },
  {
    title: 'What does the web development process look like?',
    text: 'We commence by defining your websites purpose. Followed by conducting thorough market research, where we then create a performance strategy to attract new clients. Next, we design a layout tailored for conversions,  then execute the design, and ultimately launch your new website. ',
  },
  {
    title: 'Is there ongoing support once website is complete?',
    text: 'Our dedication lies in nurturing enduring partnerships with our clients, prioritizing ongoing support and maintenance services over one-time transactions. We are here to ensure your website remains current and operates at its best.',
  },
];

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledFaqs = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  background: var(--color-black);
  color: var(--color-white);
`;

const Intro = styled.div`
  // Code logic for arranging children
  display: flex;
  flex-direction: column;
  padding: var(--padding-large) var(--padding-small);
`;

const Title = styled.span`
  font-size: var(--font-medium);
`;

const Special = styled.span`
  font-size: var(--font-large);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data

function Faqs() {
  // React hook useState to control user interaction when clicking on FAQ, displaying and not displaying answers
  const [currentOpen, setCurrentOpen] = useState(null);
  return (
    <LazyLoad>
      {/* <!-- Main Container --> */}
      <StyledFaqs>
        <Intro>
          <Title>
            Frequently <Special>Asked Questions</Special>
          </Title>
        </Intro>
        {/* <!-- Map all array to display every FAQ --> */}
        {faqs.map((element, index) => (
          <FaqsItem
            currentOpen={currentOpen}
            onOpen={setCurrentOpen}
            title={element.title}
            num={index}
            key={element.title}
          >
            {element.text}
          </FaqsItem>
        ))}
      </StyledFaqs>
    </LazyLoad>
  );
}

// Export reusable Component
export default Faqs;
