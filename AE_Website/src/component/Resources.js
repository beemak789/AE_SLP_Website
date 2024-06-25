import React from 'react';
import styled from 'styled-components';
import { resourceTitles, resources } from '../utils/clientinfo';

const Resources = () => {
  return (
    <ResourcesContainer>
      <p>Resources</p>

      <ResourcesList>
        {resources.map((resource, idx) => {
          return (
            <SingleResourceCard>
              <div key={idx} className='single-resource'>
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
`;

const ResourcesList = styled.div`
  ${'' /* display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px; */}
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  width: 50;
  font-size: 15px;
  padding: 2rem;
  font-weight: 100;
`;

const SingleResourceCard = styled.div`
  ${'' /* box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; */}
  padding: 2rem;
  border-radius: 2px;
  background: white;
  color: black;
  display: flex;
`;
