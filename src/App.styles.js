import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const ContentContainer = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const MainContent = styled.main`
  flex-grow: 1;
  margin-left: ${({ isOpen }) => (isOpen ? '200px' : '80px')};
  margin-top: 60px;
  padding: 20px;
  transition: margin-left 0.3s ease;
  overflow-y: auto;
`;
