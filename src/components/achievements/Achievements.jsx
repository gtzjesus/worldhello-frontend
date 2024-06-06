// ------------------------------
// File: Achievements.jsx
// ------------------------------
// Description: A React Component showcasing all of our achievements (websites)

// ------------------------------
// Imports
// ------------------------------
import { useEffect, useState } from 'react';
import Spinner from '../../ui/spinners/Spinner';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';
import ClientCard from './ClientCard';

// ------------------------------
// Styled Components
// ------------------------------
// This section has all CSS styles configured for every HTML element.

const StyledAchievements = styled.div`
  color: var(--color-white);
  overflow: hidden;
  padding-bottom: var(--padding-xlarge);
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--padding-small); /* Optional: Add some gap between tiles */
  padding: var(--padding-small) 0;
`;

const SpecialTitle = styled.span`
  font-size: var(--font-large);
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: var(--color-white);
  padding: var(--padding-small);
  padding-top: var(--padding-xlarge);
`;

const Additional = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const SeeMoreButton = styled.button`
  border: none;
  margin: var(--margin-medium) auto;
  width: fit-content;
  cursor: pointer;
  border-radius: 100px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
  background-color: var(--color-white);
  color: var(--color-black);
  font-size: var(--font-xxxsmall);
  padding: 0.8rem 1.2rem;
`;

const Description = styled.div`
  font-size: var(--font-xxxsmall);
  letter-spacing: 0.05rem;
  opacity: 0.8;
  padding-bottom: var(--padding-xlarge);
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which displays our achievements (websites)
function Achievements() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch clients data from backend
    const fetchClients = async () => {
      try {
        const response = await fetch('http://localhost:3000/clients'); // API
        const data = await response.json();
        setClients(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching clients:', error);
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return (
    <LazyLoad>
      <Information>
        <Description>
          <SpecialTitle>
            Browse <br />
          </SpecialTitle>
          <SpecialTitle>
            some <br />
          </SpecialTitle>
          <SpecialTitle>
            of our <br />
          </SpecialTitle>
          <SpecialTitle>clients.</SpecialTitle>
        </Description>
      </Information>
      <StyledAchievements>
        {loading ? (
          <Spinner />
        ) : (
          <GridContainer>
            {clients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </GridContainer>
        )}
      </StyledAchievements>
    </LazyLoad>
  );
}

export default Achievements;
