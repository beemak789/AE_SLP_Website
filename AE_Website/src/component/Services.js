import React from 'react';
// import { Link } from 'react-scroll';
import styled from 'styled-components';
import ServiceTable from './ServiceTable';

const Services = () => {
  return (
    <ServicesContainer>
      <ServiceTableContainer >
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
    font-size: 30px;
    font-weight: 300pt;
    text-align: center;
    padding: 1rem;
    line-height: 10px;
    margin: auto;
    ${'' /* border: 2px solid green; */}
    margin-bottom: 2rem;
    width: 100%;
  }
`;

const ServiceTableContainer = styled.div`
padding: 2rem;
border: 2px solid green;
`

export default Services;
