import React, { useState } from 'react';
import { Input } from '@mui/material';
import { Button } from '@mui/material';
import styled from 'styled-components';
import Loader from '../shared/Loader';
import CircularProgress from '@mui/material/CircularProgress';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  return (
    <FormContainer
      action='https://formsubmit.co/speechwithbrandy@gmail.com'
      method='POST'
    >
      <h3>Request an Evaluation</h3>
      <input
        type='hidden'
        name='_blacklist'
        value='spammy pattern, banned term, phrase'
      ></input>
      <input
        type='hidden'
        name='_autoresponse'
        value='your custom message'
      ></input>
      <InputFieldContainer>
        <Input
          className='input'
          placeholder='Name'
          value={name}
          name='name'
          onInput={(event) => setName(event.target.value)}
          required
        />
        <Input
          className='input'
          placeholder='Email'
          value={email}
          name='email'
          onInput={(event) => setEmail(event.target.value)}
          required
        />
        <Input
          className='input'
          placeholder='Phone Number'
          value={phoneNumber}
          name='phoneNumber'
          onInput={(event) => setPhoneNumber(event.target.value)}
          required
        />
      </InputFieldContainer>

      {loading && (
        <CircularProgress style={{ marginTop: '2rem' }}></CircularProgress>
      )}

      {loading && <h3 className='status-message'>{statusMessage}</h3>}
      <TextAreaContainer>
        <textarea
          id='message'
          name='message'
          rows='8'
          cols='65'
          required
          onInput={(event) => setMessage(event.target.value)}
          className='text-area-container'
        ></textarea>
      </TextAreaContainer>

      <Button
        className='submit-button'
        variant='contained'
        type='submit'
        style={{ marginTop: '2rem', background: '#008080' }}
        onClick={() => {
          setLoading(true);
          setStatusMessage('Sending your message, please be patient.');
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
    width: 90%;
    align: center;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    width: 50%;
    align: center;
  }
`;
