// ------------------------------
// File: Design.js
// ------------------------------
// Description: React individual component for each achievement done by WorldHello (the design videos will be displayed with this reusable component dynamically), using supabase integration (backend)
// ------------------------------
// Figma Designs + Video Screen Editor/Recording.
// ------------------------------
// Global Styles from /src/styles/ used for global variables.

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Create 2 equal-width columns */
  grid-template-rows: repeat(2, auto); /* Create 2 rows with auto height */
  gap: 20px; /* Add some gap between grid items */
`;

// Styled component for each individual design
const StyledDesign = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(90deg);
`;

// Styled component for the video element
const Video = styled.video`
  width: 100%; /* Ensure the video fills its container */
  height: 100%; /* Ensure the video fills its container */
  object-fit: cover; /* Ensure the video fills its container without stretching */
`;

function Design({ design }) {
  const finalDesign = {
    id: design.id,
    creator: design.creator,
    title: design.title,
    description: design.description,
    video: design.video,
    link: design.link,
  };

  function handleNavigation() {
    window.open(finalDesign.link, '_blank');
  }

  return (
    <GridContainer>
      <StyledDesign onClick={handleNavigation}>
        {/* Video container */}
        <Video preload="auto" autoPlay loop muted playsInline>
          {/* Video source */}
          <source src={finalDesign.video} type="video/mp4" />
        </Video>
      </StyledDesign>
    </GridContainer>
  );
}

export default Design;
