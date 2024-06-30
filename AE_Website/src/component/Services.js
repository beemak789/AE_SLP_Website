import React from 'react';
// import { Link } from 'react-scroll';
import styled from 'styled-components';
import ServiceTable from './ServiceTable';

const Services = () => {
  return (
    <ServicesContainer>
      <ServiceSection>
        <h2 className='fancy'>Our Services</h2>
        <h4 className="explore">Learn more about the services we provide at Full Bloom</h4>
        <ServiceTable />
      </ServiceSection>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  height: fit-content;

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

const ServiceSection = styled.div`
  padding: 2rem;

  .fancy {
    font-size: 35px;
    font-weight: 300;
    text-align: center;

    --b: 0.5px; /* control the border thickness */
    --w: 400px; /* control the width of the line*/
    --g: -1px; /* control the gap */
    --c: #023020;

    width: fit-content;
    padding: 0 1em;
    line-height: 1.6em;
    border: 1px solid;
    color: #023020;
    margin-top: 0.5rem;
    background-size: 51% 100%;
    background-origin: border-box;
    background-repeat: no-repeat;
    border-image: linear-gradient(
        #0000 calc(50% - var(--b) / 2),
        var(--c) 0 calc(50% + var(--b) / 2),
        #0000 0
      )
      1/0 var(--w) / calc(var(--w) + var(--g));
    margin-inline: auto;
  }
  .explore {
    font-size: 20px;
    text-align: center;
    font-weight: 100;
  }
`;

export default Services;
