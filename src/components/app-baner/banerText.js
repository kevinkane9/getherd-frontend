import React from 'react';
import styled from 'styled-components';

import './banertext.css';

const Heading = styled.h1`
   white-space: nowrap;
`;

const BanerText = () => {
   return(
     <div className="banerText">
        <Heading>Your voice</Heading>
        <h1>heard..</h1>
     </div>
   );
};

export default BanerText;