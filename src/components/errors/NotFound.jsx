import styled from 'styled-components';

const StyledNotFound = styled.div`
  display: flex;
  justify-content: center;
  padding: var(--padding-medium);
`;

const Title = styled.span`
  height: 100vh;
  color: var(--color-white);
  font-size: var(--font-medium);
`;
function NotFound() {
  return (
    <>
      <StyledNotFound>
        <Title>Page not found</Title>
      </StyledNotFound>
    </>
  );
}

export default NotFound;
