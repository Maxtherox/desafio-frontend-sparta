import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-repeat: no-repeat;
  background-size: 800px 400px;
  animation: ${shimmer} 1s linear infinite;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
  font-size: 1rem;
`;

export default function ChartLoader() {
  return <LoaderContainer>Carregando gráfico...</LoaderContainer>;
}
