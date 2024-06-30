import React from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer className='footer footer-container footer-dark'>
      <FooterContent>
        <div className='logo-socials'>
          <LogoImage
            className='nav-leaf-icon'
            src='/logo.jpg'
            alt='leafIcon logo'
            width={240}
            height={190}
          ></LogoImage>
          <a href='https://instagram.com/speakeasywithbrandy?igshid=MzNlNGNkZWQ4Mg=='>
            {' '}
            <Icon icon='skill-icons:instagram' />
          </a>

          <FacebookIcon
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 256 256'
          >
            <path
              fill='#1877f2'
              d='M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445'
            ></path>
            <path
              fill='#fff'
              d='m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z'
            ></path>
          </FacebookIcon>
        </div>

        <QuickLinksContainer>
          <h3>Quick Links</h3> <p>About Us</p>
          <p>Services</p>
          <p>Resources</p>
          <p>Contact</p>
        </QuickLinksContainer>

        <ContactInfoContainer>
          <h3>Contact Us</h3>
          <div className='info'>
            <img src='/phone.png' height={12} width={12} />
            <p>(937)-369-6613</p>
          </div>
          <div className='info'>
            <img src='/mail.png' height={12} width={12} />
            <p>amye@fullbloomspeechlanguagepathology.com</p>
          </div>
          <div className='address-container'>
            <img src='/map.png' height={12} width={12} />
            <div className='address'>
              <p>Kenton Place</p>
              <p>17111 Kenton Drive Suite 206B</p>
              <p>Cornelius, NC 28031</p>
            </div>
          </div>
        </ContactInfoContainer>
      </FooterContent>
      <p className='footer-text'>&copy; 2024 Designed by Brandy Mak</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  color: black;
  display: flex;
  flex-direction: column;
  background: white;

  ${'' /* p{
    background: #008080;
    color: white;
  } */}
`;

const FooterContent = styled.div`
  display: flex;
  color: #008080;
  width: 100%;
  justify-content: space-between;
  margin: auto;


  .logo-socials {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    padding-bottom: 0rem;
  }
`;

const LogoImage = styled.img`
  margin-left: 2rem;
  bottom: 0;
`;

const FacebookIcon = styled.svg`
  height: 1.2em;
  width: 1.2em;
  margin-top: -0.2rem;
`;

const QuickLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1pt;
  padding-top: 2rem;
  color: #8e3e63
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 1rem;

  .info,
  .address-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 14px;
    color: black;
    line-height: 2pt;
  }
`;
