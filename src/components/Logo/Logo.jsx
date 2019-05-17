import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LogoImage from './logo.png'


const StyledLogoContainer = styled.div`
  img {
    width: 150px;
  }
  @media (max-width: 800px) {
    img {
      width: 120px;
    }
  }
  @media (max-width: 660px) {
    img {
      width: 100px;
    }
  }
`;

export const Logo = (props) => {
  return (
    <StyledLogoContainer>
      <Link to='/'>
        <img alt='Logo' src={LogoImage}/>
      </Link>
    </StyledLogoContainer>
  )
}


