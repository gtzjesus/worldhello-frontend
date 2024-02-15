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

const StyledDesign = styled.div`
  // Code logic to display every design side-by-side
  display: inline-block;
  overflow: hidden;
  width: fit-content;
  height: fit-content;
  width: var(--width-filled-window);
  height: fit-content;

  // @MEDIAQUERY logic for smaller devices
  @media (min-width: 40.25em) {
    width: 100vw;
    height: 80vh;
  }
  // @MEDIAQUERY logic for medium devices
  @media (min-width: 78.25em) {
    width: 100vw;
    height: 80vh;
  }
  // @MEDIAQUERY logic for bigger devices
  @media (min-width: 150.15em) {
    width: 100vw;
    height: 75vh;
  }
`;

const Video = styled.video`
  // Code logic to style video (mp4)
  width: 100%;
  height: 100%;
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the every individual design added to supabase

function Design({ design }) {
  // Code logic to create object (design)
  const finalDesign = {
    id: design.id,
    creator: design.creator,
    title: design.title,
    description: design.description,
    video: design.video,
    link: design.link,
  };

  // Handle navigation towards specific link dynamically
  function handleNavigation() {
    window.location.href = finalDesign.link;
  }

  return (
    <StyledDesign onClick={handleNavigation}>
      {/* <!-- Video Container --> */}
      <Video preload="auto" autoPlay="autoPlay" loop muted playsInline={true}>
        {/* <!-- Grab video source from each object --> */}
        <source src={finalDesign.video} type="video/mp4" />
      </Video>
    </StyledDesign>
  );
}

// Export reusable Individual Design component
export default Design;
