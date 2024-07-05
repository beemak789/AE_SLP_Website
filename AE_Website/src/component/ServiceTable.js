import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import { createTheme, ThemeProvider } from '@mui/material';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const theme = createTheme({
  typography: {
    fontFamily: 'Solway',
    fontSize: 15,
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
      'What forms of payment do we accept?',
      'Full Bloom Speech Language Pathology offers private pay/self pay services. We are considered an out of network provider and do not bill your insurance. We will provide a superbill upon request. Please call or email for pricing information. We accept HSA/FSA cards, credit/debit, checks or cash as forms of payment.'
    ),
  ];

  const areasOfExpertise1 = [
    'Early Intervention',
    'Late Talkers',
    'Articulation Disorders',
    'Receptive and Expressive Language Disorders',
  ];

  const areasOfExpertise2 = [
    'Childhood Apraxia of Speech',
    'Phonological Disorders',
    'Literacy',
    'Gestalt Language Development',
  ];

  return (
    <>
      <ThemeProvider theme={theme}>
        <TableParent>
          <TableContainer>
            <TableTitle
              background='#008080'
              fontSize='20px'
              color='white'
              align='center'
            >
              Evaluations
            </TableTitle>

            <Accordion disableGutters>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} align='center'>
                What is the evaluation process?
              </AccordionSummary>

              <AccordionDetails>
                <List
                  sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                  }}
                  aria-label='contacts'
                >
                  <ListItem style={{ gap: '1rem' }}>
                    <img
                      src='/check.png'
                      height={18}
                      width={18}
                      alt='check-icon'
                    />

                    <ListItemText primary='Free phone consultation' />
                  </ListItem>

                  <ListItem style={{ gap: '0.5rem' }}>
                    <img
                      src='/check.png'
                      height={18}
                      width={18}
                      alt='check-icon'
                    />

                    <ListItemText primary='Complete intake paperwork' />
                  </ListItem>

                  <ListItem style={{ gap: '0.5rem' }}>
                    <img
                      src='/check.png'
                      height={18}
                      width={18}
                      alt='check-icon'
                    />

                    <ListItemText primary='Complete the evaluation' />
                  </ListItem>

                  <ListItem style={{ gap: '0.5rem' }}>
                    <img
                      src='/check.png'
                      height={18}
                      width={18}
                      alt='check-icon'
                    />

                    <ListItemText primary='Review the results and create a plan for treatment' />
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>

            {rows1.map((row, idx) => {
              return (
                <Accordion disableGutters key={idx}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    {row.services}
                  </AccordionSummary>

                  <AccordionDetails>{row.description}</AccordionDetails>
                  {idx >= 0 ? (
                    <Button
                      style={{
                        margin: '0.5rem',
                        background: '#008080',
                        color: 'white',
                        ':hover': {
                          background: '#008080',
                        },
                      }}
                    >
                      <Link
                        spy={true}
                        smooth={true}
                        duration={500}
                        to='contactUs'
                      >
                        Request an Evaluation
                      </Link>
                    </Button>
                  ) : null}
                </Accordion>
              );
            })}

            <TableTitle background='#008080' fontSize='20px' color='white'>
              Areas of Expertise
            </TableTitle>

            <ExpertiseContainer>
              <div>
                {areasOfExpertise1.map((area, idx) => {
                  return (
                    <div className='area' key={idx}>
                      <img src='./star.png' height={18} width={18} alt='star' />
                      <p>{area}</p>
                    </div>
                  );
                })}
              </div>

              <div>
                {areasOfExpertise2.map((area, idx) => {
                  return (
                    <div className='area' key={idx}>
                      <img src='./star.png' height={18} width={18} alt='star' />
                      <p>{area}</p>
                    </div>
                  );
                })}
              </div>
            </ExpertiseContainer>

            <TableTitle background='#008080' fontSize='20px' color='white'>
              Payment
            </TableTitle>

            {rows2.map((row, idx) => {
              return (
                <Accordion disableGutters key={idx}>
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
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const ExpertiseContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 6rem;


  .area {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0rem;
    padding: 1rem;
  }
`;

const TableTitle = styled.p`
  font-size: ${(props) => props.fontSize};
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  text-align: center;
  margin: auto;
  padding: 1rem;
`;
