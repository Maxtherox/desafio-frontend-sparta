import styled from "styled-components";
import { motion } from "framer-motion";

export const NotificationContainer = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  cursor: pointer;
`;

export const NotificationMessage = styled.p`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
`;
