import React, { useState } from 'react';
import { Input } from '@mui/material';
import { Button } from '@mui/material';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');



  return (
    <form
      action='https://formsubmit.co/speechwithbrandy@gmail.com'
      method='POST'
      className='form-container'
    >
      <div className='submit-form-container'>
        <h3 className='submit-question-header'>Submit A Question</h3>
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
        <div className='input-field-container'>
          <Input
            placeholder='Name'
            sx={{ marginLeft: '1rem' }}
            value={name}
            name='name'
            onInput={(event) => setName(event.target.value)}
            required
          />
          <Input
            placeholder='Email'
            sx={{ marginLeft: '1rem' }}
            value={email}
            name='email'
            onInput={(event) => setEmail(event.target.value)}
            required
          />
          <Input
            placeholder='Phone Number'
            sx={{ marginLeft: '1rem' }}
            value={phoneNumber}
            name='phoneNumber'
            onInput={(event) => setPhoneNumber(event.target.value)}
            required
          />
        </div>
        <div className='text-area-div'>
          <textarea
            id='message'
            name='message'
            rows='8'
            cols='65'
            required
            onInput={(event) => setMessage(event.target.value)}
            className='text-area-container'
          ></textarea>
        </div>
        <Button
          className='submit-button'
          variant='contained'
          type='submit'
          sx={{
            backgroundColor: '#064c3f',
            width: '10rem',
            margin: 'auto',
            marginTop: '2rem',
          }}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Form;
