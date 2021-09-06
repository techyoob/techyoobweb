


import React, { useRef, useEffect } from 'react';
import './about.css';

import about from '../../assets/jsons/about.json'
import Ayoub from '../../assets/imgs/ayoub.soud.jpg'

import { IconSVG, getSVG } from '../../assets/svgs'


export const About = props => {


    return (
        <div className="about-page" >
            <div className="mypic-illustration-container">
                <MyPicture />
            </div>
            <div className="about-me-container">
                <AboutMe />
            </div>
        </div>
    );
};


{/* <div className="bio-div">
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
</div>
</div> */}

// style={{
//     backgroundImage:`url(${getSVG[3]})`,
//     backgroundRepeat:'no-repeat',
//     backgroundPositionX:'right',
//     backgroundPositionY:'center',
//     backgroundSize:'80% 90%'}}

const MyPicture = (props) => {


    return (
        <div className="mypic-illustration"
            style={{
                backgroundImage:`url(${getSVG[3]})`,
                backgroundRepeat:'no-repeat',
                backgroundPosition:'center',
                backgroundSize:'100% 100%'}}>
                    <div className="picture-frame">
                        <img className="ayoub-about-img" src={Ayoub} alt="ayoub soud"/>
                    </div>
        </div>
    )
}



const AboutMe = (props) => {


    return (
        <div className="about-me">
            <h3>Welcome to my portfolio</h3>
            <p>
                {about.p1} 
            </p>
            <p>
                {about.p2}                    
            </p>
        </div>
    )
}



const styles = {
    aboutTextDiv: smallScreen =>({
    }),
};
