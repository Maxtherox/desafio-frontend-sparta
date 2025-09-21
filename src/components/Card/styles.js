import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CardContainer = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing(3)};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export const CardDescription = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;

export const CardContent = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const CardFooter = styled.small`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.8;
`;
