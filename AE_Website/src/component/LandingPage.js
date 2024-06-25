import React from 'react';
import Navbar from './NavBar';
import AboutMe from './AboutMe';
import Services from './Services';
import ContactMe from './ContactMe';
import Footer from './Footer';
import Testimonials from './Testimonials';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Services />
      <Testimonials/>
      {/* <ContactMe /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
