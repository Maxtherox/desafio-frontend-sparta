import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TableContainer = styled(motion.div)`
  width: 100%;
  overflow-x: auto;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: ${({ theme }) => theme.spacing(2)};
    text-align: left;
    font-size: 0.9rem;
  }

  thead {
    background-color: #f9fafb;
    th {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.secondary};
      border-bottom: 2px solid ${({ theme }) => theme.colors.border};
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
      transition: background-color 0.2s ease;
      
      &:last-child {
        border-bottom: none;
      }
      
      &:hover {
        background-color: #f9fafb;
        cursor: pointer;
      }
    }

    td {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
