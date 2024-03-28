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
  overflow-y: hidden;
`;

// Styled component for each individual design
const StyledDesign = styled.div`
  display: flex;
  transform: rotate(90deg);
  margin-bottom: 2.5rem;
`;

// Styled component for the video element
const Video = styled.video`
  width: 100%; /* Ensure the video fills its container horizontally */
  height: auto; /* Let the height adjust proportionally based on the width */
  max-height: 100%; /* Limit the height to prevent it from exceeding the container */
  object-fit: contain; /* Maintain aspect ratio while fitting the video within the container */
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
