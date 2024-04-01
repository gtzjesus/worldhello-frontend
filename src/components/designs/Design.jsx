// ------------------------------
// File: Design.jsx
// ------------------------------
// Description: React individual component for each achievement done by WorldHello (the design videos will be displayed with this reusable component dynamically), using supabase integration (backend)

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
  padding: 0.25rem;
`;

// Styled component for the image element
const Image = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer; /* Add cursor pointer for interaction */
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the data
function Design({ design }) {
  const finalDesign = {
    id: design.id,
    creator: design.creator,
    title: design.title,
    description: design.description,
    image: design.image, // Assuming 'image' is the property for the image URL
    link: design.link,
  };

  function handleNavigation() {
    window.open(finalDesign.link, '_blank');
  }

  return (
    <GridContainer>
      <StyledDesign onClick={handleNavigation}>
        {/* Image container */}
        <Image src={finalDesign.image} alt={finalDesign.title} />
      </StyledDesign>
    </GridContainer>
  );
}

export default Design;
