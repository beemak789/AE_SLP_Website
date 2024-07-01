import React from 'react';
import Form from './Form';
import styled from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material';
import Divider from '@mui/material/Divider';

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
      <ContactMeContainer name='contactUs'>
        <Divider
          style={{ color: '#008080', fontWeight: '100', fontSize: '32px' }}
        >
          Testimonials
        </Divider>

        <ContactTextboxContainer>
          <GetInTouch>
            <h1>Get in touch!</h1>
            <p>
              Interested in speech therapy? Contact us to learn about the
              services we provide and have any questions answered.
            </p>

            <div className='info'>
              <img src='/phone.png' height={28} width={28} />
              <p>(937)-369-6613</p>
            </div>
            <div className='info'>
              <img src='/mail.png' height={28} width={28} />
              <p>amye@fullbloomspeechlanguagepathology.com</p>
            </div>
            <div className='address-container'>
              <img src='/map.png' height={28} width={28} />
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
  padding-bottom: 3rem;

  @media (min-width: 375px) and (max-width: 768px) {
    width: 100%;
  }
`;

const ContactTextboxContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;

  @media (min-width: 375px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
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

  @media (min-width: 375px) and (max-width: 768px) {
    width: fit-content;
    font-size: 12px;
  }
`;
