import React from 'react';
import { Link } from 'react-scroll';
import ServicesTable from './ServicesTable';

const Services = () => {
  return (
    <div className='services services-container'>
      <div className='services-promo-text'>
        <p className='free-consultation-header'>Free 30-Minute Consultation</p>
        <p>
          <em>Discounted </em> session rates with referrals
        </p>
        <p></p>
        <p className='call-or-email-text'>
          <Link
            spy={true}
            smooth={true}
            duration={500}
            to='contactMe'
            style={{ cursor: 'pointer' }}
          >
            Call or email{' '}
          </Link>
          for more information regarding{' '}
          <b>
            <em>rates</em>
          </b>
        </p>
      </div>

      <div className='what-i-do-text'>
        <em className="what-i-do-header"> What I Do</em>
        <p className='travel-to-you-text'>
          Travel to You • Brooklyn & Manhattan • Treatment and Evaluation •
          Weekday & Weekends
        </p>

        <ServicesTable />
      </div>
    </div>
  );
};

export default Services;
