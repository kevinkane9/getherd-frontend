import React from 'react';
import CenterIc from './idea.png';
import './center.css';

const CenterBox = () => {
    return(
        <div className="centerImg">
            <a href='/'>
               <img alt="left" src={CenterIc}/>
            </a>
            <h1>Ideas</h1>
            <p>Share your ideas with us!</p>
        </div>
    );
};

export default CenterBox;