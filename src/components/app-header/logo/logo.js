import React from 'react';
import styled from 'styled-components';

import Logoicon from './logo.png';

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

const Logo = () => {
        return (
        <StyledLogoContainer>
            <a href='/'>
              <img alt='Logo' src={Logoicon}/>
            </a>
        </StyledLogoContainer>
       );
   };

export default Logo;