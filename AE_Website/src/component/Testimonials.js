import React from 'react';
import styled from 'styled-components';
import { testimonials } from '../utils/clientinfo';
import Carousel from 'react-material-ui-carousel';
import Divider from '@mui/material/Divider';

const Testimonials = () => {
  return (
    <TestimonialsContainer name='testimonials'>
      <Divider
        style={{ color: '#008080', fontWeight: '100', fontSize: '32px' }}
      >
        Testimonials
      </Divider>

      <div className='hear-from'>
        <p>Our happy clients</p>
        <p className='about-tag'>on their experience with us</p>
      </div>

      <Carousel
        autoPlay={true}
        navButtonsAlwaysInvisible={true}
        navButtonsProps={{
          style: {
            backgroundColor: '#023020',
            borderRadius: 50,
          },
        }}
        className='control-arrow'
      >
        {testimonials.map((testimonial, idx) => {
          return (
            <SingleTestimonialCard key={idx}>
              <img src='/quotation.png' height={10} width={10} alt=""/>
              <div key={idx} className='single-testimonial'>
                {testimonial}{' '}
              </div>
            </SingleTestimonialCard>
          );
        })}
      </Carousel>
    </TestimonialsContainer>
  );
};

export default Testimonials;

const TestimonialsContainer = styled.div`
  .fancy {
    font-size: 35px;
    font-weight: 300;
    text-align: center;
    color: #023020;
  }

  .hear-from {
    font-size: 25px;
    text-align: center;
    font-weight: 100;
    color: #8e3e63;
    display: flex;
    flex-direction: column;
    .about-tag {
      margin-top: -1rem;
    }
  }
`;

const SingleTestimonialCard = styled.div`
  border-radius: 2px;
  background: white;
  color: black;
  display: flex;
  margin: auto;
  line-height: 15pt;
  padding: 3rem;

  @media (min-width: 375px) and (max-width: 768px) {
    margin: auto;
  }
`;
