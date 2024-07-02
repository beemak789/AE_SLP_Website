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
  const [submitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setPhoneNumber('');
  };

  const submitForm = async (e) => {
    setIsLoading(true);
    try {
      e.preventDefault();
      await fetch('https://formsubmit.co/ajax/speechwithbrandy@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          message,
        }),
      });

      setIsSubmitted(true);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }

    resetForm();
  };

  return (
    <FormContainer onSubmit={submitForm}>
      <h3>Request an Evaluation</h3>

      <InputFieldContainer>
        <Input
          type='text'
          placeholder='Name'
          value={name}
          name='_autoresponse'
          onInput={(event) => setName(event.target.value)}
          required
          onChange={() => setIsSubmitted(false)}
        />
        <Input
          type='email'
          placeholder='Email'
          value={email}
          name='_autoresponse'
          onInput={(event) => setEmail(event.target.value)}
          required
          onChange={() => setIsSubmitted(false)}
        />
        <Input
          type='tel'
          placeholder='Phone Number'
          value={phoneNumber}
          name='_autoresponse'
          onInput={(event) => setPhoneNumber(event.target.value)}
          required
          onChange={() => setIsSubmitted(false)}
        />
      </InputFieldContainer>

      {isLoading && <CircularProgress style={{ marginTop: '1rem' }} />}

      {submitted && (
        <h3
          style={{ padding: '1rem', textAlign: 'center', fontWeight: '100pt' }}
        >
          {'Thank you. Your message has been sent.'}
        </h3>
      )}
      <TextAreaContainer>
        <textarea
          id='message'
          name='message'
          rows='8'
          cols='65'
          value={message}
          required
          onInput={(event) => setMessage(event.target.value)}
          onChange={() => setIsSubmitted(false)}
        ></textarea>
      </TextAreaContainer>

      <Button
        className='submit-button'
        variant='contained'
        type='submit'
        style={{ marginTop: '2rem', background: '#008080' }}
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
`;
