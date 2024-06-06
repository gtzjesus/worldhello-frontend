import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border-radius: 10px; */
  margin: 0 var(--margin-xsmall);
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ClientName = styled.h2`
  color: #333;
`;

const ClientImg = styled.img`
  width: 100%;
`;

function ClientCard({ client }) {
  return (
    <CardContainer>
      <ClientName>{client.name}</ClientName>
      <ClientImg src={client.image} alt={client.name} />
    </CardContainer>
  );
}

export default ClientCard;
