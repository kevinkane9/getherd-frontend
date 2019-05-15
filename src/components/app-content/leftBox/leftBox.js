import React from 'react';
import LeftIc from './celebrate.png';
import './left.css';

const LeftBox = () => {

    return(
        <div className="leftImg">
            <a href='/'>
               <img alt="left" src={LeftIc}/>
            </a>
            <h1>Celebrate</h1>
            <p>Let's celebrate something!</p>
        </div>
    );
};

export default LeftBox;