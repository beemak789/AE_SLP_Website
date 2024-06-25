import React from 'react';
import styled from 'styled-components';
import { testimonials } from '../utils/clientinfo';
import { Grid } from '@mui/material';

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <p>Testimonials</p>

      <TestimonialList>
        {testimonials.map((testimonial, idx) => {
          return (
            <SingleTestimonialCard >
            <img src="/quotation.png" height={10} width={10}/>
              <div key={idx} className='single-testimonial'>
                {testimonial}{' '}
              </div>
            </SingleTestimonialCard>
          );
        })}
      </TestimonialList>
    </TestimonialsContainer>
  );
};

export default Testimonials;

const TestimonialsContainer = styled.div`

  p {
    font-size: 20px;
    text-align: center;
    color: #008080;
    font-weight: 500;
  }
`;

const TestimonialList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 50;
  font-size: 15px;
  padding: 2rem;
  font-weight: 100;
`;

const SingleTestimonialCard = styled.div`
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 2rem;
  border-radius: 2px;
  background: white;
  color: black;
  display: flex;
`;
