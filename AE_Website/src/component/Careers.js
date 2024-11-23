import React from 'react';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';

const Careers = () => {
  return (
    <Container name='careers'>
      <Divider
        style={{ color: '#008080', fontWeight: '100', fontSize: '32px' }}
      >
        Careers
      </Divider>

    <CareerTextPictureContainer >
    <JobDetailsText>
      <h1>We are Blooming</h1>
    </JobDetailsText>
    <CareerImg src="/table_careers.png" alt="career-pic" />

    </CareerTextPictureContainer>

    </Container>
  );
};

export default Careers;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  border: 2px solid purple;
`;


const CareerTextPictureContainer = styled.div`
display:flex;
`

// children of CareerTextPicture

const CareerImg = styled.img`
border: 2px solid green;
width: 30%;
`

const JobDetailsText = styled.div`
border: 2px solid red;
`
