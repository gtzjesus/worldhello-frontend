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
  // Code logic to rotate videos that are horizontal for my designs
  transform: rotate(90deg);
`;

const Video = styled.video`
  // Code logic to style video (mp4)
  width: 100vw;
  height: 65vh;

  // @MEDIAQUERY logic for medium devices
  @media (min-width: 55.25em) {
    padding-top: var(--padding-xlarge);
  }

  // @MEDIAQUERY logic for medium devices
  @media (min-width: 65.25em) {
    height: 40vh;

    padding-top: var(--padding-xxxlarge);
  }

  // @MEDIAQUERY logic for medium devices
  @media (min-width: 75.25em) {
    height: 40vh;

    padding-top: var(--padding-xxxlarge);
  }
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
    window.open(finalDesign.link, '_blank');
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
