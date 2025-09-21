import styled from "styled-components";
import { motion } from "framer-motion";
export const SidebarContainer = styled(motion.aside)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.sidebarIcon};
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; /* Garante que a sidebar fique na frente */
`;

export const ToggleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;
  width: 100%;

  background: none;
  border: none;
  font-family: 'Spartan', sans-serif;
  color: ${({ theme }) => theme.colors.sidebarIcon};
  font-size: 1.2rem;
  padding: 10px;
  cursor: pointer;
  text-align: center;


`;

export const IconList = styled.ul`
  list-style: none;
  margin: 20px 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const IconItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  padding: 10px 15px;
  cursor: pointer;
  transition: background 0.3s;
  color: ${({ theme }) => theme.colors.sidebarIcon};
  background-color: ${({ isActive, theme }) =>
    isActive ? "rgba(255, 255, 255, 0.2)" : "transparent"};
    border-radius: ${({ theme }) => theme.borderRadius};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  svg {
    font-size: 1.3rem;
  }

  span {
    white-space: nowrap;
  }
`;
