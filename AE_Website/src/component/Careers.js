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

      <CareerTextPictureContainer>
        <JobDetailsText>
          <h1>We are blooming!</h1>
          <IconImg src='/cv.png' alt='cv' />
          <div>
            Full Bloom Speech Language Pathology is growing, and we are looking
            for an excellent NC Licensed and ASHA certied SLP who is interested
            in joining our team! If you are interested in learning more, let’s
            chat! Please send resumes to Amy at{' '}
            <a
              href='mailto:amye@fullbloomspeechlanguagepathology.com'
              style={{ color: '#008080', fontWeight: 400, textDecoration: 'none' }}
            >
              amye@fullbloomspeechlanguagepathology.com
            </a>
            .
          </div>
        </JobDetailsText>
        <CareerImg src='/table_careers.png' alt='career-pic' />
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
  ${'' /* border: 2px solid purple; */}
  width: 100%;

  @media (min-width: 375px) and (max-width: 768px) {
  }
`;

const CareerTextPictureContainer = styled.div`
  display: flex;
  @media (min-width: 375px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

// children of CareerTextPicture

const CareerImg = styled.img`
  ${'' /* border: 2px solid green; */}
  width: 35%;
  padding: 2rem;
  border-radius: 2px;

  @media (min-width: 375px) and (max-width: 768px) {
    margin: auto;
    width: 70%;
    object-fit: cover;
  }
`;

const JobDetailsText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${'' /* border: 2px solid red; */}
  line-height: 1.7rem;
  padding: 4rem;
  h1 {
    color: #8e3e63;
    font-size: 32px;
  }
  div {
    font-size: 22px;
    font-weight: 200;
    margin-top: 2rem;
    text-align: center;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    div {
      font-size: 14px;
      padding: 0;
    }
    text-align: center;
  }
`;
const IconImg = styled.img`
  width: 12%;

  @media (min-width: 375px) and (max-width: 768px) {
    width: 20%;
  }
`;
