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

        <ContactTextboxContainer>
          <GetInTouch>
            <h1>Get in touch!</h1>
            <p>Interested in speech therapy? Contact us to learn about the services we provide and have any questions answered.</p>

            <div className="info">
              <img src="/phone.png" height={28} width={28} />
              <p>(937)-369-6613</p>
            </div>
            <div className='info'>
            <img src="/mail.png" height={28} width={28} />
            <p>amye@fullbloomspeechlanguagepathology.com</p>
            </div>
            <div className="address-container">
            <img src="/map.png" height={28} width={28} />
            <div className='address'>
            <p>Kenton Place</p>
            <p>17111 Kenton Drive Suite 206B</p>
            <p>Cornelius, NC 28031</p>
            </div>
            </div>
          </GetInTouch>

          <Form />
        </ContactTextboxContainer>
      </ContactMeContainer>
    </ThemeProvider>
  );
};

export default ContactMe;

const ContactMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid green;
  padding-right: 1rem;
  padding-left: 1rem;

  .fancy {
    font-size: 35px;
    font-weight: 300;
    text-align: center;
    border: 2px solid red;

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
`;

const ContactTextboxContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`;

const GetInTouch = styled.div`
  width: 50%;
  padding: 1rem;

  h1 {
    text-align: start;
    font-weight: 100;
  }

  p {
    color: #008080;
  }


  .info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .address-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    .address {
      line-height: 3pt;
    }
  }

`;
