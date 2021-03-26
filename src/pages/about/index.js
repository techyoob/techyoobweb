


import React, { useRef, useEffect } from 'react';
import './about.css';

import about from '../../data/about.json'
import Ayoub from '../../assets/ayoub.soud.jpg'



export const About = props => {


    return (
        <div className="about-page" >
            <div className="bio-div">
                <div className="picture-div">
                    <MyPicture />
                </div>
                <div className={"bio-details-div"} >
                    <h3>Welcome to my portfolio</h3>
                    <div className="picture-div-mobile">
                        <MyPicture />
                    </div>
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
        </div>
    );
};





const MyPicture = (props) => {


    return (
        <div className="picture-frame">
            <img className="ayoub-about-img" src={Ayoub} alt="ayoub soud"/>
        </div>
    )
}

const styles = {
    aboutTextDiv: smallScreen =>({
    }),
  };
  