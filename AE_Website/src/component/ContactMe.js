import React from 'react';
import Form from './Form';
import styled from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Solway',
    fontWeightRegular: 100,
    fontSize: '16',
  },
});

const ContactMe = () => {
  return (
    <ThemeProvider theme={theme}>
    <ContactMeContainer>
      <h2 className='fancy'>Contact Us</h2>

      <Form />
    </ContactMeContainer>
    </ThemeProvider>
  );
};

export default ContactMe;

const ContactMeContainer = styled.div`
  display: flex;
  flex-direction: column;

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
