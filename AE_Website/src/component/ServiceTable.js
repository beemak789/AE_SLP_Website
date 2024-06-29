import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import { createTheme, ThemeProvider } from '@mui/material';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Solway',
    fontWeightRegular: 100,
    fontSize: '15',
  },
});

const useStyles = makeStyles({
  content: {
    justifyContent: 'center',
  },
});

const ServiceTable = () => {
  const createData1 = (services, description) => {
    return { services, description };
  };

  const rows1 = [
    createData1(
      'What is a Speech-Only Evaluation?',
      'This evaluation includes an oral motor examination, as well as an articulation and/or motor speech evaluation. The SLP may use both standardized and dynamic assessment measures to determine if the child presents with an articulation, phonological, and/or motor speech disorder such as Apraxia or Dysarthria.',
      '$200'
    ),
    createData1(
      'What is a Comprehensive Language Evaluation?',
      'This assessment measures a child’s auditory comprehension and expressive language skills. For older children, this may include literacy skills including phonemic/phonological awareness, reading comprehension and/or writing skills. A comprehensive parent interview and participation is an essential part of this evaluation along with a combination of standardized and dynamic assessment measures. This evaluation may also include an articulation evaluation if needed.',
      '$350'
    ),
  ];

  const createData2 = (question, answer) => {
    return { question, answer };
  };

  const rows2 = [
    createData2(
      'What is Speech-Language Therapy?',
      'Therapy sessions include direct treatment time and consultation with parents including carryover activities for home practice. We bill by the amount of time we spend with the child and the time we consult with the parent. Typically, our appointments are 45 minutes; however, 30 and 60 minute sessions may be considered if deemed appropriate for the child.'
    ),

    createData2(
      'Where does the therapy session take place?',
      'Most sessions are in our clinic space; however, occasional home or school visits may be considered. If this is agreed upon by the SLP a travel fee will be included and agreed upon prior.'
    ),

    createData2(
      'Do we take insurance?',
      'Full Bloom Speech Language Pathology offers private pay/self pay services thus we are considered an out of network provider and do not bill to your insurance. We encourage you to file your claim and will provide a superbill upon request. You will be required to pay for therapy and evaluations at the time of service. We require a card on file which is kept secure in our electronic medical record system, Simple Practice.'
    ),

    createData2(
      'What are the forms of payment?',
      'You can pay via cash, or check at the beginning of your appointment, or your card will be charged following each therapy visit. If you choose to submit your superbill to your insurance company for reimbursement, it is your responsibility to follow up on reimbursement with your insurance provider. Full Bloom Speech Language Pathology cannot make any representation that your insurance company will reimburse you in part or in full for our services, and payment to us in full is required regardless of the final determination of coverage by your carrier.'
    ),
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <TableParent>
          <TableContainer>
            <TableTitle background='#008080' fontSize='20px' color='white'>
              Evaluations
            </TableTitle>

            {rows1.map((row, idx) => {
              return (
                <Accordion
                  disableGutters
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    {row.services}
                  </AccordionSummary>
                  <AccordionDetails>{row.description}</AccordionDetails>
                </Accordion>
              );
            })}

            <TableTitle background='#008080' fontSize='20px' color='white'>
              Therapy
            </TableTitle>

            {rows2.map((row, idx) => {
              return (
                <Accordion disableGutters>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls='panel1-content'
                    id='panel1-header'

                  >
                    {row.question}
                  </AccordionSummary>
                  <AccordionDetails>{row.answer}</AccordionDetails>
                </Accordion>
              );
            })}
          </TableContainer>
        </TableParent>
      </ThemeProvider>
    </>
  );
};

export default ServiceTable;

const TableParent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  border-radius: 5px;
  width: 90%;
  margin: auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const TableTitle = styled.p`
  font-size: ${(props) => props.fontSize};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  text-align: center;
  margin: auto;
  padding: 1rem;
`;
