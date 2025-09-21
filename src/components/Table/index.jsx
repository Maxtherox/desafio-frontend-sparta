import { TableContainer, StyledTable } from './styles';

const tableVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export default function Table({ columns, data, onRowClick }) {
  return (
    <TableContainer variants={tableVariants} initial="hidden" animate="visible">
      <StyledTable>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} onClick={() => onRowClick && onRowClick(row)}>
              {columns.map((col) => (
                <td key={`${rowIndex}-${col.key}`}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}
