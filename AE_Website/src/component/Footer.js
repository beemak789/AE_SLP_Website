import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className='footer footer-container footer-dark'>
      <div className='follow-me-socials'>
        <b>Let's Connect</b>
        <a href='https://instagram.com/speakeasywithbrandy?igshid=MzNlNGNkZWQ4Mg=='>
          {' '}
          <Icon icon='skill-icons:instagram' className='instagram-icon' />
        </a>
      </div>
      <p className="footer-text">&copy; 2023 Speak Easy With Brandy, All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
