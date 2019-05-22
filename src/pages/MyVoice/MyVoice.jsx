import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  width: 100%;
`;

export const MyVoice = () => {
  return (
    <Container>
      My Voice<br/>
      Page to do!
    </Container>
  );
};
