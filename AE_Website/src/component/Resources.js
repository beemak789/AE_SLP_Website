import React from 'react';
import styled from 'styled-components';
import { resourceTitles, resources } from '../utils/clientinfo';
import { Box } from '@mui/material';

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
        <p>
          What is Speech Language Therapy and how can a Speech Language
          Pathologist help? Pediatric speech language pathologists assess and
          treat communication disorders and delays in children. These disorders
          may affect various aspects of communication, including speech,
          language, voice, fluency, and social communication skills. The goal of
          pediatric speech therapy is to help children develop and improve their
          communication abilities, enabling them to effectively express
          themselves and interact with others. A speech-language pathologist
          (SLP) works with children to address their specific needs and
          challenges. Pediatric speech therapy may involve a range of
          interventions and techniques, tailored to each child's age,
          developmental level, and areas of difficulty. Some common areas
          addressed in pediatric speech therapy include: Articulation: Helping
          children produce speech sounds correctly. Early Intervention: Focused
          on identifying and addressing speech and language delays or disorders
          in children as early as possible to maximize their communication
          potential. Language: Enhancing vocabulary, grammar, comprehension, and
          expressive language skills. Fluency: Assisting children who stutter or
          have other fluency disorders. Pragmatics: Improving social
          communication skills, including turn-taking, eye contact, and
          understanding social cues. Literacy: Supporting literacy development
          for reading, writing, and spelling. Pediatric speech therapists use
          various tools and activities, such as games, toys, books, and
          technology, to engage children in therapy sessions and make learning
          fun and interactive. Additionally, they collaborate with parents,
          caregivers, teachers, and other professionals involved in the child's
          care to provide a holistic approach to therapy and support ongoing
          progress outside of therapy sessions. Overall, pediatric speech
          therapy aims to empower children to communicate effectively, build
          confidence, and achieve their full potential in social, academic, and
          everyday settings. To learn more about pediatric speech language
          therapy, visit the website of the American Speech-Language-Hearing
          Association (ASHA). You may find the developmental milestone resources
          particularly helpful when trying to determine if your child would
          benefit from a speech language evaluation. Those milestones can be
          found at this link:
          https://www.asha.org/public/developmental-milestones/communication-milestones/.
        </p>
      </ResourcesList>
    </ResourcesContainer>
  );
};

export default Resources;

const ResourcesContainer = styled.div`
  p {
    font-size: 22px;
    text-align: center;
    color: #008080;
    font-weight: 500;
  }

  .fancy {
    --b: 6px; /* control the border thickness */
    --w: 400px; /* control the width of the line*/
    --g: 10px; /* control the gap */
    --c: #8e3e63;

    width: fit-content;
    padding: 0 1em;
    line-height: 1.6em;
    border: 1px solid;
    color: #fff;
    background: conic-gradient(from 45deg at left, var(--c) 25%, #0000 0) 0,
      conic-gradient(from -135deg at right, var(--c) 25%, #0000 0) 100%;
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
  width: 50;
  font-size: 15px;
  padding: 2rem;
  font-weight: 100;
`;

const SingleResourceCard = styled.div`
  padding: 1rem;
  border-radius: 2px;
  background: white;
  color: black;
  display: flex;
  line-height: 15pt;
  margin-top: -1rem;

  .resource-title {
    text-align: center;
    color: #008080;
    font-weight: 500;
  }
`;
