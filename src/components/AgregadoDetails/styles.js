import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const InfoHeader = styled.div`
  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing(1)};
  }
  p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
  }
`;

export const MetadataSection = styled.div`
  padding-top: ${({ theme }) => theme.spacing(2)};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const MetadataTitle = styled.h4`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing(1.5)};
`;

export const MetadataList = styled.ul`
  list-style: none;
  padding-left: ${({ theme }) => theme.spacing(2)};
  
  li {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.9;
    margin-bottom: ${({ theme }) => theme.spacing(1)};
  }
`;
