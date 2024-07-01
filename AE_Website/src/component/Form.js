import React, { useState } from 'react';
import { Input } from '@mui/material';
import { Button } from '@mui/material';
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);

  function submitForm() {
    const formData = { name, email, phoneNumber, message };
    const url = 'https://formsubmit.co/speechwithbrandy@gmail.com';
    fetch(url, {
      method: 'POST',
      body: formData,
    });
    return false;
  }

  return (
    <FormContainer onSubmit={submitForm}>
      <h3>Request an Evaluation</h3>

      <InputFieldContainer>
        <Input
          className='input'
          placeholder='Name'
          value={name}
          name='_autoresponse'
          onInput={(event) => setName(event.target.value)}
          required
        />
        <Input
          className='input'
          placeholder='Email'
          value={email}
          name='_autoresponse'
          onInput={(event) => setEmail(event.target.value)}
          required
        />
        <Input
          className='input'
          placeholder='Phone Number'
          value={phoneNumber}
          name='_autoresponse'
          onInput={(event) => setPhoneNumber(event.target.value)}
          required
        />
      </InputFieldContainer>

      {submitted &&  (
        <h3
          style={{ padding: '1rem', textAlign: 'center', fontWeight: '100pt' }}
        >
          {statusMessage}
        </h3>
      )}
      <TextAreaContainer>
        <textarea
          id='message'
          name='message'
          rows='8'
          cols='65'
          required
          onInput={(event) => setMessage(event.target.value)}
        ></textarea>
      </TextAreaContainer>

      <Button
        className='submit-button'
        variant='contained'
        type='submit'
        style={{ marginTop: '2rem', background: '#008080' }}
        onClick={() => {
          setSubmitted(true);
          setStatusMessage('Thank you. Your message has been sent.');
        }}
        disabled={!name || !email || !phoneNumber || !message}
      >
        Submit
      </Button>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

  .status-messsage {
    color: #008080;
    font-weight: 100pt;
    border: 2px solid green;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    margin: auto;
    padding: 0rem;
    padding-bottom: 1rem;
  }
`;

const InputFieldContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
`;
const TextAreaContainer = styled.div`
  textarea {
    width: 100%;
    align: center;
    margin: auto;
    margin-top: 2rem;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    width: 50%;
    align: center;
  }
`;
