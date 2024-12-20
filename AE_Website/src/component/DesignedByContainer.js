import React from 'react';
import styled from 'styled-components';

const DesignedByContainer = () => {
  return (
    <TextContainer>
      <p>&copy; 2024 Designed by Brandy Mak</p>
    </TextContainer>
  );
};

export default DesignedByContainer;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  color: white;
  text-align: center;
  font-size: 15px;
  background-color: #008080;

  & p {
    padding: 10px;
  }
`;
