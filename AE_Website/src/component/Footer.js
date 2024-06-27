import React from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer className='footer footer-container footer-dark'>
      <FooterText>
        <b>Let's Connect</b>
        <a href='https://instagram.com/speakeasywithbrandy?igshid=MzNlNGNkZWQ4Mg=='>
          {' '}
          <Icon icon='skill-icons:instagram' className='instagram-icon' />
        </a>
      </FooterText>
      <p className="footer-text">&copy; 2024 Designed by Brandy Mak</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  text-align: center;
  margin: 0;
  padding: 10px;
  background: white;
  bottom: 0px;
`

const FooterText = styled.div`
  display: flex;
  justify-content: center;
  color: #008080;
  margin-top: 2.5rem;
`
