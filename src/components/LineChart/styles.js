import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ChartContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing(3)};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ChartTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;
