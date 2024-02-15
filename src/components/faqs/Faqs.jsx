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
    title: 'What advantages come with a personalized website?',
    text: 'Crafting a distinct brand that effectively communicates the value you offer to your audience is vital for establishing a robust business presence. Tailored website designs empower you to construct your online platform in a manner that lays the foundation for your success!',
  },
  {
    title: 'What sets WorldHello apart from the rest?',
    text: 'Our website development agency prioritizes delivering tangible business outcomes rather than merely ticking off tasks. We firmly believe in the pursuit of perfection, emphasizing focused expertise, which is why we specialize exclusively in web development services!',
  },
  {
    title: 'What services do you offer?',
    text: 'WorldHello specializes in crafting websites tailored to your specific niche by employing strategic design, compelling copywriting, and intuitive user experience. If you already have a design in mind, we can handle the development process, ensuring it reflects and supports your business objectives.',
  },
  {
    title: 'What is the typical timeframe for website development?',
    text: 'The duration for crafting a website fluctuates depending on the intricacy and specifications of your project. Generally, our team dedicates approximately 5 to 9 weeks, starting from the initial discovery session to the final launch of your new website.',
  },
  {
    title: 'Is there ongoing support once website is complete?',
    text: 'At WorldHello, our dedication lies in nurturing enduring partnerships with our clients, prioritizing ongoing support and maintenance services over one-time transactions. We are here to ensure your website remains current and operates at its best.',
  },
  {
    title: 'What does the web development process entail?',
    text: 'To optimize outcomes aligned with your business objectives, we adhere to a meticulous development process: We commence by defining your websites purpose, conduct thorough market research, devise a performance strategy to attract new clients, design a bespoke layout tailored for conversions, execute the design, and ultimately launch your new website. ',
  },
  {
    title: 'Where is WorldHello located?',
    text: 'WorldHello, a Texas-based Website Development Agency, extends its services globally! Whether you are in close proximity or across the globe, our commitment remains unwavering to deliver outstanding results for every online venture.',
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

  // ------------------------------
  // @Media Queries
  // ------------------------------
  // These are used for responsive design, for all screens we can modify the web application based on the screen size
  @media (min-width: 61.25em) {
    font-size: var(--font-large);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-xlarge);
  }
`;

const Special = styled.span`
  color: var(--color-tan);
  font-size: var(--font-large);

  // ------------------------------
  // @Media Queries
  // ------------------------------
  @media (min-width: 61.25em) {
    font-size: var(--font-xlarge);
  }

  @media (min-width: 150.15em) {
    font-size: var(--font-xxlarge);
  }
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
