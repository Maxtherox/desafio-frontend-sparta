import styled from "styled-components";

const PlaceholderContainer = styled.div`
  padding: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
`;

export default function Contato() {
  return (
    <PlaceholderContainer>
      <Title>Página de Contato</Title>
      <Message>Esta página está em desenvolvimento.</Message>
      <Message>Atualmente, apenas as páginas Home, Dados e Gráficos foram implementadas para a visualização de dados.</Message>
    </PlaceholderContainer>
  );
}
