import React from 'react';
import Form from './Form';

const ContactMe = () => {
  return (
    <div className='contactMe contact-me-container'>
      <div className='contact-info-container'>
        <h3 className='got-questions-title'>
          <em >Got Questions?</em>
        </h3>
        <p className='lets-start-convo-text'>Let's start a conversation.</p>
        <p className='email-address-text'>
          {' '}
           speechwithbrandy@gmail.com
        </p>
        <p className='phone-number-text'>
           929-548-3290
        </p>
      </div>
      <Form />
    </div>
  );
};

export default ContactMe;
