import React from 'react';
import Logoicon from './logo.png';

const Logo = () => {
        return (
        <div>
            <a href='/'>
              <img alt='Logo' width="150px" src={Logoicon}/>
            </a>
        </div>
       );
   };

export default Logo;