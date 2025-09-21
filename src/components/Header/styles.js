import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 60px;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "200px" : "80px")};
  width: ${({ isOpen }) => (isOpen ? "calc(100% - 200px)" : "calc(100% - 60px)")};
  z-index: 10;
  padding-left: 20px;
  transition: all 0.3s ease;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 2px;
`;
