import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#095098',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(no, name, level) {
  return { no, name, level };
}

const rows = [
  createData(1, 'Frozen yoghurt', 15),
  createData(2, 'Ice cream sandwich', 23),
  createData(3, 'Eclair', 26),
  createData(4, 'Cupcake', 30),
  createData(5, 'Gingerbread', 35),
  createData(6, 'Muffin', 40),
	createData(7, 'Frozen yoghurt', 15),
	createData(8, 'Ice cream sandwich', 23),
	createData(9, 'Eclair', 26),
	createData(10, 'Cupcake', 30),
	createData(11, 'Gingerbread', 35),
	createData(12, 'Muffin', 40),
	createData(13, 'Frozen yoghurt', 15),
	createData(14, 'Ice cream sandwich', 23),
	createData(15, 'Eclair', 26),
	createData(16, 'Cupcake', 30),
	createData(17, 'Gingerbread', 35),
	createData(18, 'Muffin', 40),
	createData(19, 'Frozen yoghurt', 15),
	createData(20, 'Ice cream sandwich', 23),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: '100%' }}>
      <Table stickyHeader sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">No.</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Level</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.no}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.no}
              </StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.level}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
