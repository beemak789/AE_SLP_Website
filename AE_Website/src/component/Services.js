import React from 'react';
// import { Link } from 'react-scroll';
import styled from 'styled-components';
import ServiceTable from './ServiceTable';

const Services = () => {
  return (
    <ServicesContainer>
      <ServiceTableContainer>
        <p className='our-services-header'>Our Services</p>
        <ServiceTable />
      </ServiceTableContainer>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  ${'' /* border: 2px solid purple; */}

  .our-services-header {
    font-size: 25px;
    font-weight: 300pt;
    text-align: center;
    padding: 1rem;
    line-height: 10px;
    margin: auto;
    margin-bottom: 2rem;
    width: 100%;
    color: #8e3e63;
    font-weight: 500;
  }
`;

const ServiceTableContainer = styled.div`
  padding: 2rem;
  ${'' /* border: 2px solid green; */}
`;

export default Services;
