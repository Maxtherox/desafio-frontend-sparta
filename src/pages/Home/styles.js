import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HomeContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const LoadingMessage = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
  text-align: center;
  width: 100%;
`;
