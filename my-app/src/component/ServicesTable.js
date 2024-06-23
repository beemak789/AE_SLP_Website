import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { fontFamily } from '@mui/system';

function createData(services, secondColServices) {
  return { services, secondColServices };
}

const rows = [
  createData('Articulation', 'Expressive Language Disorders'),
  createData('Language Delays', 'AAC'),
  createData('Social Language Skills', 'Functional Communication'),
  createData('Literacy Based Interventions', 'Listening Comprehension'),
  createData('Writing Interventions', 'Oral Motor Skills'),
  createData('Stuttering', 'Executive Functioning Difficulties'),
  createData('Accent Modification', 'Phonological Awareness'),
  createData('Auditory Processing', 'Receptive Language Disorders'),
];

const ServicesTable = () => {
  return (
    <TableContainer className="table-container" sx={{ backgroundColor: '#FDF5E6' }}>
      <Table className="table-container">
        <TableHead>
          <TableRow></TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
            className='table-row'
              key={row.name}
            >
              <TableCell>{row.services}</TableCell>
              <TableCell>{row.secondColServices}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ServicesTable;
