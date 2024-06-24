import React from 'react';
import styled from 'styled-components';

const AboutMe = () => {
  return (
    <div className='about-me-container'>
      <div className='img-aboutme-container'>
        <img
          src='/amyElderProfile.jpg'
          alt='profile logo'
          className='profile-photo'
        ></img>
        <div className='about-me-text'>
        <p className='amy-title'>About Us</p>
          <p className='about-me-paragraph'>
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
        </div>
      </div>

      <div className='philo-img-container'>
      <img src='/family.jpg' className='family-photo' />
        <div className='philosophy-container'>
          <p className='philo-text'><b>Our Philosophy</b></p>
          <p>
            At Full Bloom Speech Language Pathology, we believe in nurturing the
            communication skills of our youngest clients, laying the foundation
            for a lifetime of success. We understand the unique needs of
            children and the critical role that communication plays in their
            development, relationships, and overall well-being. Our philosophy
            is centered around compassion, expertise, and a deep commitment to
            helping children reach their full potential.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;
