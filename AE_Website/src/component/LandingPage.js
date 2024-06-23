import React from 'react';
import Navbar from './NavBar';
import AboutMe from './AboutMe';
import Services from './Services';
import ContactMe from './ContactMe';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div style={{position: 'relative'}}>
      <Navbar />
      <AboutMe />
      <Services />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default LandingPage;
