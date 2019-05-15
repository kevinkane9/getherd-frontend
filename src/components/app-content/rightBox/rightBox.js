import React from 'react';
import RightIc from './concerns.png';
import './right.css';

const RightBox = () => {
    return(
        <div className="rightImg">
           <a href='/'>
              <img alt="left" src={RightIc}/>
           </a>
            <h1>Concerns</h1>
            <p>Share your concerns with us!</p>
        </div>
    );
};

export default RightBox;