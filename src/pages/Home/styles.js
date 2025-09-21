import styled from "styled-components";
import { motion } from "framer-motion";

export const PageTitle = styled.h1`
  font-size: 6.4rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  font-weight: 700;
`;

export const HomeContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
`;

export const LoadingMessage = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  text-align: center;
  width: 100%;
`;
