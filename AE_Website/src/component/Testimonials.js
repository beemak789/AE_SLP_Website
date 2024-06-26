import React from 'react';
import styled from 'styled-components';
import { testimonials } from '../utils/clientinfo';
import { Grid } from '@mui/material';

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <h2 className='fancy'>Testimonials</h2>

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

.fancy {
    --b: 6px; /* control the border thickness */
    --w: 400px; /* control the width of the line*/
    --g: 10px; /* control the gap */
    --c: #3E8E69;

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

const TestimonialList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 50;
  font-size: 15px;
  padding: 2rem;
  font-weight: 100;
  line-height: 16pt;
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
