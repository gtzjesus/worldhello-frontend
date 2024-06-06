import styled from 'styled-components';

const CardContainer = styled.div`
  /* Styles */
`;

const ClientName = styled.h2`
  /* Styles */
`;

const ClientImg = styled.img`
  /* Styles */
`;

function ClientCard({ client }) {
  return (
    <CardContainer>
      <ClientName>{client.name}</ClientName>
      <ClientImg src={client.image} alt={client.name} />
      {/* Add more client information as needed */}
    </CardContainer>
  );
}

export default ClientCard;
