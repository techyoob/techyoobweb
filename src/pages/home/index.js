

import React, { useState, useRef, useEffect } from 'react';


import './home.css'


import {
    FiGithub,
    FiLinkedin,
    FiMail
} from "react-icons/fi";

import testySvg from '../../assets/svgs/java.svg'
import { IconSVG, getSVG } from '../../assets/svgs'



export const Home = props => {

    const [isColumnRatio, setIsColumnRatio] = useState(false);
    const briefBioRef = useRef(null);



    useEffect(() => {

        function getRatioState() {

            if (briefBioRef.current) {

                const canvas = briefBioRef.current.getBoundingClientRect()
                const ratio = canvas.width / canvas.height;

                if (ratio > 0.7) {
                    setIsColumnRatio(false)
                } else {
                    setIsColumnRatio(true)
                }

            }

        }

        window.addEventListener("resize", getRatioState);
        getRatioState();
        return () => window.removeEventListener("resize", getRatioState);

    }, []);


    return (
        <div
            className="home"
            style={{
                backgroundImage:`url(${getSVG[2]})`,
                backgroundRepeat:'no-repeat',
                backgroundPosition:'left',
                backgroundPositionY:'bottom',
                backgroundSize:'cover'}}>
                    <div className="bio-intro-section">
                        <BriefBioText {...props} />
                    </div>
                    <div className="bio-illustration-section"
                        style={{
                        backgroundImage:`url(${getSVG[1]})`,
                        backgroundRepeat:'no-repeat',
                        backgroundPosition:'center',
                        backgroundSize:'90% 90%'}}>
                    </div>
        </div>
    );
};



// <BriefBioText {...props} />

// style={{
//     backgroundImage:`url(${getSVG[1]})`, 
//     backgroundRepeat:'no-repeat',
//     backgroundPosition:'center'}}



const BriefBioText = props => {




    return (
        <div className="bio-intro-wrapper">
            <h6 className="text-I-div">
                Hello, I'm
            </h6>
            <div className="text-II-div">
                <span>Ayoub Soud </span><h6> and I'm </h6>
            </div>
            <div className="my-title">
                Full Stack Mobile & Web Software Engineer
            </div>
            <div className="my-quote">
                The broader the perspective, the greater the creativity
            </div>
            <button
                className="contact-me-btn"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'mailto:techyoob@gmail.com';
                }}
            >
                Contact Me
            </button>         
            <div className="social-media-div" >
                <span
                    className="social-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://www.linkedin.com/in/ayoubsoud/';
                    }}>
                    <FiLinkedin />
                </span>
                <span
                    className="social-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://github.com/techyoob';
                    }}>
                    <FiGithub />
                </span>
                <span
                    className="social-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'mailto:techyoob@gmail.com';
                    }}>
                    <FiMail />
                </span>
            </div>
        </div>
    );
};





const styles = {

    home: isColumnRatio => ({
        // height:'100vh',
        // width:'100%',
        // backgroundImage:`url(${BackgroundImg})`,
    }),
    briefBioDiv: isColumnRatio => ({
        display: 'flex',
        flexDirection: isColumnRatio ? 'column-reverse' : 'row',
        height: isColumnRatio ? '60%' : '50%',
    }),
    sectionOneDiv: isColumnRatio => ({
        display: 'flex',
        flex: isColumnRatio ? 2 : 3,
    }),
    p: smallScreen => ({
        fontSize: smallScreen ? '0.9rem' : '0.9vw',
        alignSelf: 'center',
        margin: 0,
    }),
    briefBioLogoDiv: {
        // backgroundImage:`url(${IntroLogo})`,
    },

};
