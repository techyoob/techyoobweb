


import React, { useRef, useEffect } from 'react';
import './about.css';

import about from '../../data/about.json'



export const About = props => {


    return (
        <div className="about" >
            <div className={"about-text-div"} >
                <p>
                   {about.p1} 
                </p>
                <p>
                    {about.p2}                    
                </p>
                <p>
                    {about.p3}                    
                </p>
            </div>
        </div>
    );
};







const styles = {
    aboutTextDiv: smallScreen =>({
        width: smallScreen? '94%' : '65%',
        fontSize: smallScreen? '1.1rem' : '1.68rem',
    }),
  };
  