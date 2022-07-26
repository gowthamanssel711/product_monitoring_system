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
    backgroundColor: theme.palette.common.black,
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('A', 10, 20, 30, 40),
  createData('B', 50, 60, 72, 90),
  createData('C', 30, 60, 74, 80),
  createData('D', 12, 40, 64, 70),
  createData('E', 20, 30, 54, 90),
  

 
];

export default function HoursTable() {
  return (
    <TableContainer component={Paper}>
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>

          <StyledTableCell align="right">TP</StyledTableCell>
            <StyledTableCell align="right">1</StyledTableCell>
            <StyledTableCell align="right">2</StyledTableCell>
            <StyledTableCell align="right">3</StyledTableCell>
            <StyledTableCell align="right">4</StyledTableCell>
             
            <StyledTableCell align="right">5</StyledTableCell>
            <StyledTableCell align="right">6</StyledTableCell>
            <StyledTableCell align="right">7</StyledTableCell>
            <StyledTableCell align="right">8</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow >
             
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
