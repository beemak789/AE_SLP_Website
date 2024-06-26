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
        {resources.map((resource, idx) => {
          return (
            <SingleResourceCard>
              <div key={idx} className='single-resource-text'>
                <div className='resource-title'>
                  {' '}
                  {bull} {resourceTitles[idx]} {bull}
                </div>
                {resource}{' '}
              </div>
            </SingleResourceCard>
          );
        })}
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
  line-height: 16pt;

  .resource-title {
    text-align: center;
    color: #008080;
    font-weight: 500;
  }
`;
