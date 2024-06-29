import React from 'react';
import styled from 'styled-components';
import { testimonials } from '../utils/clientinfo';
import { Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <h2 className='fancy'>Testimonials</h2>
      <div className='hear-from'>
        <p>Hear from our happy clients about</p>
        <p className='about-tag'>about their experience with us</p>
      </div>
      <TestimonialList>
        <Carousel
          fullHeightHover={false} // We want the nav buttons wrapper to only be as big as the button element is
          navButtonsProps={{
            // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
            style: {
              backgroundColor: '#023020',
              borderRadius: 50,
            },
          }}
          className='control-arrow'
        >
          {testimonials.map((testimonial, idx) => {
            return (
              <SingleTestimonialCard>
                <img src='/quotation.png' height={10} width={10} />
                <div key={idx} className='single-testimonial'>
                  {testimonial}{' '}
                </div>
              </SingleTestimonialCard>
            );
          })}
        </Carousel>
      </TestimonialList>
    </TestimonialsContainer>
  );
};

export default Testimonials;

const TestimonialsContainer = styled.div`
  .fancy {
    font-size: 30px;
    font-weight: 300;
    text-align: center;

    --b: 0.5px; /* control the border thickness */
    --w: 400px; /* control the width of the line*/
    --g: -1px; /* control the gap */
    --c: #023020;

    width: fit-content;
    padding: 0 1em;
    line-height: 1.6em;
    border: 1px solid;
    color: #023020;
    margin-top: 0.5rem;
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

const TestimonialList = styled.div`
  width: 70%;
  font-size: 18px;
  padding: 1rem;
  font-weight: 100;
  line-height: 16pt;
  margin: auto;
  margin-top: -2rem;
`;

const SingleTestimonialCard = styled.div`
  padding: 4rem;
  border-radius: 2px;
  background: white;
  color: black;
  display: flex;
  gap: 10px;
`;
