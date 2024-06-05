import styled from 'styled-components';

const CardContainer = styled.div`
  /* Styles */
`;

const ClientName = styled.h2`
  /* Styles */
`;

const ClientEmail = styled.p`
  /* Styles */
`;

function ClientCard({ client }) {
  return (
    <CardContainer>
      <ClientName>{client.name}</ClientName>
      <ClientEmail>{client.email}</ClientEmail>
      {/* Add more client information as needed */}
    </CardContainer>
  );
}

export default ClientCard;
