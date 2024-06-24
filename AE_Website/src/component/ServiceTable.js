import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Solway',
  }
});

const ServiceTable = () => {
  const createData = (services, description, price) => {
    return { services, description, price };
  };
  const rows = [
    createData(
      'Speech-Only Evaluation',
      'This evaluation includes an oral motor examination, as well as an articulation and/or motor speech evaluation. The SLP may use both standardized and dynamic assessment measures to determine if the child presents with an articulation, phonological, and/or motor speech disorder such as Apraxia or Dysarthria.',
      '$200'
    ),
    createData(
      'Comprehensive Language Evaluation',
      'This assessment measures a child’s auditory comprehension and expressive language skills. For older children, this may include literacy skills including phonemic/phonological awareness, reading comprehension and/or writing skills. A comprehensive parent interview and participation is an essential part of this evaluation along with a combination of standardized and dynamic assessment measures. This evaluation may also include an articulation evaluation if needed.',
      '$350'
    ),
  ];

  return (
    <>
      <TableContainer>
      <ThemeProvider theme={theme}>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell>Service</TableCell>
              <TableCell align='center'>Description</TableCell>
              <TableCell align='center'>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, id) => (
              <TableRow key={id}>
                <TableCell width="25%" >{row.services}</TableCell>
                <TableCell width="70%">{row.description}</TableCell>
                <TableCell width="10%">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </ThemeProvider>
      </TableContainer>
    </>
  );
};

export default ServiceTable;
