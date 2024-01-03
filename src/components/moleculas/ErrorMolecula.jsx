import styled from "styled-components";
export function ErrorMolecula({mensaje}) {
  return (
    <Container>
      <span>Error... {mensaje}</span>
    </Container>
  );
}
const Container = styled.div`
  color: ${({ theme }) => theme.text};
`;
