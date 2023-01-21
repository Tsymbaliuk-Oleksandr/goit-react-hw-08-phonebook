import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;

  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;

  tbody > tr:hover {
    background-color: #eeffee;
  }

  th,
  td {
    padding: 10px;
  }
`;

export const Thead = styled.thead`
  text-align: left;
  color: ${p => p.theme.colors.muted};
`;
