import React from 'react';
import styled from 'styled-components';

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <AboutMeSection>
        <img src='/amyElderProfile.jpg' alt='profile-pic'></img>
        <AboutMeParagraphContainer>
          <p className='header-1'>Who We Are</p>
          <p className='paragraph'>
            Amy Elder, owner and ASHA certified speech language pathologist at
            Full Bloom Speech Language Pathology earned both her undergraduate
            and graduate degrees from Ohio University in Athens, OH. She has
            been a licensed speech language pathologist since 2006 and
            specializes in pediatrics. She has worked in a variety of settings
            including public schools, private schools, home health, and private
            practice. Amy is passionate about helping children improve their
            communication skills to gain independence, confidence, achieve
            academic success, and make meaningful relationships.
            {'\n'}
            Amy enjoys including parents and caregivers in the therapy process
            to educate and empower caregivers on how they can help boost their
            child's speech and language skills at home during their daily
            activities. Amy believes that speech language therapy must be a
            collaborative, team effort which includes not only other
            professionals that may also be working with your child, but you, the
            parents. She has witnessed firsthand how powerful a "team approach"
            can be for making efficient progress towards meeting communication
            goals. Amy has extensive training and expertise with a variety of
            diagnosis including articulation, phonology, literacy, childhood
            apraxia of speech, developmental language disorder, late talkers,
            gestalt language processing, and pragmatic language.
          </p>
        </AboutMeParagraphContainer>
      </AboutMeSection>

      <OurPhilosophyContainer>
        <img src='/family.jpg' />
        <PhilosophyText>
          <p className='header-2'>
            <b>Our Philosophy</b>
          </p>
          <p className='paragraph'>
            At Full Bloom Speech Language Pathology, we believe in nurturing the
            communication skills of our youngest clients, laying the foundation
            for a lifetime of success. We understand the unique needs of
            children and the critical role that communication plays in their
            development, relationships, and overall well-being. Our philosophy
            is centered around compassion, expertise, and a deep commitment to
            helping children reach their full potential.
          </p>
        </PhilosophyText>
      </OurPhilosophyContainer>
    </AboutMeContainer>
  );
};

export default AboutMe;

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 32px;
  font-weight: bold;
  background-color: white;
  width: 100%;
`;

const AboutMeSection = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem;
  padding-left: 4rem;
  align-items: center;

  img {
    width: 28%;
    height: 28%;
    border-radius: 5px;
    margin-top: 3.5rem;
  }
`;

const AboutMeParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  .header-1 {
    font-size: 20px;
    text-align: center;
    padding: 1rem;
    color: #8e3e63;
  }
  .paragraph {
    font-size: 12px;
    padding: 1.2rem;
    font-size: 15px;
    line-height: 16pt;
    font-weight: 100;
    text-align: start;
    margin-top: -2rem;
  }
`;

const OurPhilosophyContainer = styled.div`
  display: flex;
  background-color: white;
  padding: 3rem;
  gap: 2rem;

  img {
    height: 30%;
    width: 31%;
    border: 2px;
  }
`;

const PhilosophyText = styled.div`
  text-align: start;
  font-size: 15px;
  line-height: 16pt;
  font-weight: 100;
  padding: 1rem;
  margin-top: -2rem;

  .header-2 {
    font-size: 20px;
    text-align: center;
    color: #008080;
  }
`;
