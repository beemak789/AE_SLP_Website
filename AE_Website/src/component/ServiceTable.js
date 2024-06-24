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
    fontWeightRegular: 100,
  },
});

const ServiceTable = () => {
  const createData1 = (services, description, price) => {
    return { services, description, price };
  };

  const createData2 = (services, sessionLength, price) => {
    return { services, sessionLength, price };
  };
  const rows1 = [
    createData1(
      'Speech-Only Evaluation',
      'This evaluation includes an oral motor examination, as well as an articulation and/or motor speech evaluation. The SLP may use both standardized and dynamic assessment measures to determine if the child presents with an articulation, phonological, and/or motor speech disorder such as Apraxia or Dysarthria.',
      '$200'
    ),
    createData1(
      'Comprehensive Language Evaluation',
      'This assessment measures a child’s auditory comprehension and expressive language skills. For older children, this may include literacy skills including phonemic/phonological awareness, reading comprehension and/or writing skills. A comprehensive parent interview and participation is an essential part of this evaluation along with a combination of standardized and dynamic assessment measures. This evaluation may also include an articulation evaluation if needed.',
      '$350'
    ),
  ];

  const rows2 = [
    createData2('Direct Therapy', '30 minutes', '$62.50'),
    createData2('Direct Therapy', '45 minutes', '$93.75'),

    createData2('Direct Therapy', '60 minutes', '$125'),
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='left'>Evaluation Service</TableCell>
                <TableCell align='left'>Description</TableCell>
                <TableCell align='left'>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows1.map((row, id) => (
                <TableRow key={id}>
                  <TableCell width='25%'>{row.services}</TableCell>
                  <TableCell width='60%'>{row.description}</TableCell>
                  <TableCell width='20%'>{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableHead>
              <TableRow>
                <TableCell align='left'>Therapy Service</TableCell>
                <TableCell align='left'>Session Length</TableCell>
                <TableCell align='left'>Price</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows2.map((row, id) => (
                <TableRow key={id}>
                  <TableCell width='25%'>{row.services}</TableCell>
                  <TableCell width='60%'>{row.sessionLength}</TableCell>
                  <TableCell width='20%'>{row.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    </>
  );
};

export default ServiceTable;
