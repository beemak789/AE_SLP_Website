import React from 'react';
import styled from 'styled-components';
import { resourceTitles, resources } from '../utils/clientinfo';
import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Resources = () => {
  return (
    <ResourcesContainer>
      <h2 className='fancy'>Resources</h2>

      <ResourcesList>
        <ResourceBox>
          <h3 className='resource-header'>
            What is Speech Language Therapy and how can a Speech Language
            Pathologist help?{' '}
          </h3>
          <Accordion disableGutters>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Learn More
            </AccordionSummary>
            <AccordionDetails>
              Pediatric speech language pathologists assess and treat
              communication disorders and delays in children. These disorders
              may affect various aspects of communication, including speech,
              language, voice, fluency, and social communication skills. The
              goal of pediatric speech therapy is to help children develop and
              improve their communication abilities, enabling them to
              effectively express themselves and interact with others. A
              speech-language pathologist (SLP) works with children to address
              their specific needs and challenges. Pediatric speech therapy may
              involve a range of interventions and techniques, tailored to each
              child's age, developmental level, and areas of difficulty.
            </AccordionDetails>
          </Accordion>

          <h3 className='resource-header'>
            What are some common areas addressed in pediatric speech therapy?
          </h3>
          <Accordion disableGutters>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Learn More
            </AccordionSummary>
            <AccordionDetails>
              <p>
                Some common areas addressed in pediatric speech therapy include:
              </p>
              <ul>
                <li>
                  Articulation: Helping children produce speech sounds
                  correctly.
                </li>

                <li>
                  {' '}
                  Early Intervention: Focused on identifying and addressing
                  speech and language delays or disorders in children as early
                  as possible to maximize their communication potential.
                </li>

                <li>
                  {' '}
                  Fluency: Assisting children who stutter or have other fluency
                  disorders.
                </li>

                <li>
                  {' '}
                  Pragmatics: Improving social communication skills, including
                  turn-taking, eye contact, and understanding social cues.
                </li>

                <li>
                  {' '}
                  Literacy: Supporting literacy development for reading,
                  writing, and spelling.
                </li>
              </ul>

              <p>
                Pediatric speech therapists use various tools and activities,
                such as games, toys, books, and technology, to engage children
                in therapy sessions and make learning fun and interactive.
              </p>
            </AccordionDetails>
          </Accordion>
        </ResourceBox>

        <ResourceBox>
          <h3 className='resource-header'>
            Who are pediatric speech therapists and what do we do?
          </h3>
          <Accordion disableGutters>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Learn More
            </AccordionSummary>
            <AccordionDetails>
              Pediatric speech therapists collaborate with parents, caregivers,
              teachers, and other professionals involved in the child's care to
              provide a holistic approach to therapy and support ongoing
              progress outside of therapy sessions. Overall, pediatric speech
              therapy aims to empower children to communicate effectively, build
              confidence, and achieve their full potential in social, academic,
              and everyday settings.
            </AccordionDetails>
          </Accordion>

          <h3 className='resource-header'>Resources and Links</h3>
          <Accordion disableGutters>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Learn More
            </AccordionSummary>
            <AccordionDetails>
              To learn more about pediatric speech language therapy, visit the
              website of the American Speech-Language-Hearing Association
              (ASHA). You may find the developmental milestone resources
              particularly helpful when trying to determine if your child would
              benefit from a speech language evaluation. Those milestones can be
              found at this link:
              https://www.asha.org/public/developmental-milestones/communication-milestones/.
            </AccordionDetails>
          </Accordion>
        </ResourceBox>
      </ResourcesList>
    </ResourcesContainer>
  );
};

export default Resources;

const ResourcesContainer = styled.div`
  .fancy {
    font-size: 30px;
    font-weight: 300;
    text-align: center;

    --b: 0.5px; /* control the border thickness */
    --w: 400px; /* control the width of the line*/
    --g: -1px; /* control the gap */
    --c: #023020;

    width: fit-content;
    padding: 0 1em;
    line-height: 1.6em;
    border: 1px solid;
    color: #023020;
    margin-top: 0.5rem;
    background-size: 51% 100%;
    background-origin: border-box;
    background-repeat: no-repeat;
    border-image: linear-gradient(
        #0000 calc(50% - var(--b) / 2),
        var(--c) 0 calc(50% + var(--b) / 2),
        #0000 0
      )
      1/0 var(--w) / calc(var(--w) + var(--g));
    margin-inline: auto;
  }
`;

const ResourcesList = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  padding: 2rem;
  font-weight: 100;
  gap: 1rem;
`;

const ResourceBox = styled.div`
  margin: auto;
  max-width: 80%;

  .resource-header {
    color: #8e3e63;
    font-size: 20px;
    font-weight: 500;
  }
`;
