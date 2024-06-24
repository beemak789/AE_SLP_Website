import React from 'react';
import { Link } from 'react-scroll';
import ServicesTable from './ServicesTable';
import styled from 'styled-components';

const Services = () => {
  return (
    <ServicesContainer >
        <p >Our Services</p>

        <ServicesTable />

    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: white;
  border: 2px solid purple;

  p {
    font-size: 22px;
    font-weight: 300pt;
    border: 2px solid red;
    text-align: center;
    padding: 1rem;
  }

`
