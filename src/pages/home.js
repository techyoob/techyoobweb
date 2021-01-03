

import React, { useState, useRef, useEffect } from 'react';

import IntroLogo from '../assets/fullstack.engineer.logo.png';
import Background from '../assets/background.jpg';

import './home.css'

import { 
    FaRegEnvelope,
    FaLinkedin,
    FaGithub,
    FaEnvelope,
} from "react-icons/fa";




export const Home = props => {

    const [isColumnRatio, setIsColumnRatio] = useState(false);
    const briefBioRef = useRef(null);

    useEffect ( () => {

        function getRatioState() {

            if(briefBioRef.current){

                const canvas =  briefBioRef.current.getBoundingClientRect()
                const ratio = canvas.width / canvas.height;
                
                if(ratio >  0.7){
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
            style={styles.home(isColumnRatio)}
            ref = { briefBioRef }>
            <div 
                className="brief-bio-div"
                style={styles.briefBioDiv(isColumnRatio)}>
                <div className="section-one-div" style={styles.sectionOneDiv(isColumnRatio)} >
                    <BriefBioText {...props}/>
                </div>
                <div className="section-two-div" >
                    <BriefBioLogo {...props} />
                </div>
            </div>
        </div>
    );
};



const BriefBioText = props => {

  


    return (
         <>
            <div className="text-div">
                <p >The broader the perspective, </p>
                <p style={{alignSelf:"center"}}>the wider the creativity</p>
                <p >Improvise, Adapt, and Overcome</p>
            </div>
            <div className="call-to-action-div">
                <button 
                    className="contact-me-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href='mailto:techyoob@gmail.com';
                        }}
                    >Contact Me</button>
            </div>
            <div className="social-media-div" >
                <div style={{ display:'flex', justifyContent:'space-around', alignItems:'flex-start', width:'50%', fontSize:'29px'}}>
                    <span
                        className="social-btn" 
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://www.linkedin.com/in/ayoubsoud/';
                            }}>
                        <FaLinkedin />                    
                    </span>
                    <span
                        className="social-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://github.com/techyoob';
                            }}>
                        <FaGithub />
                    </span>
                    <span
                        className="social-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='mailto:techyoob@gmail.com';
                            }}>
                        <FaEnvelope />
                    </span>                    
                </div>
            </div>
        </>
    );
};



export const BriefBioLogo = props => {

    const introLogoRef = useRef(null);
    const [viewBox, setViewBox] = useState({x0:-50, y0:-50, width:500, height:500});

    useEffect ( () => {

        function handleViewBoxResize() {

            if(introLogoRef.current){

                const canvas =  introLogoRef.current.getBoundingClientRect()
                
                console.log(" wwidth and height are ", canvas.width, "  and ", canvas.height);
                
                const coordScale = Math.min(canvas.width, canvas.height)
                
                setViewBox({...viewBox,
                    width:coordScale,
                    height:coordScale,
                    x0:-canvas.width/2,
                    y0:-canvas.height/2
                })


            }

        }
          
          window.addEventListener("resize", handleViewBoxResize);

          handleViewBoxResize();

          return () => window.removeEventListener("resize", handleViewBoxResize);
      
    }, []);






    return (
        <div className="intro-logo-div"  style={styles.briefBioLogoDiv}>
            <img
                src={IntroLogo} 
                alt="fullstack intro graph, ayoub soud"/>
        </div>
    );
};










const styles = {
 
    home: isColumnRatio =>({
        display: 'flex',
        height:'100vh',
        width:'100%',
        // backgroundImage:`url(${Background})`,
    }),
    briefBioDiv: isColumnRatio =>({
        display: 'flex',
        flexDirection: isColumnRatio ? 'column-reverse' : 'row',
        height: isColumnRatio? '60%':'50%',
    }),
    sectionOneDiv: isColumnRatio =>({
        display: 'flex',
        flex: isColumnRatio ? 2 : 3,
    }),
    p: smallScreen =>({
        fontSize: smallScreen? '0.9rem' : '0.9vw',
        alignSelf:'center',
        margin:0,
    }),
    briefBioLogoDiv:{
        // backgroundImage:`url(${IntroLogo})`,
    },
    
  };
  