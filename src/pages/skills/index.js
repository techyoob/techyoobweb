



import React, { useState, useRef, useEffect } from 'react';


import './skills.css';
import { IconSVG, getSVG } from '../../assets/svgs'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import skills from '../../assets/jsons/skills.json';


import { 
    FaAngleDoubleLeft,
    FaAngleDoubleRight,
} from "react-icons/fa";



export const Skills = props => {

    const skillsRef = useRef(null)
    const [slides, setSlides] = useState(3)

    useEffect(() => {
        const resizeListener = () => {            
        
            const newSlides = Math.floor(window.innerWidth/395) + 1
            setSlides(newSlides)            
        };
        resizeListener()
        
        window.addEventListener('resize', resizeListener);
    
        return () => {
          window.removeEventListener('resize', resizeListener);
        }
      }, [])

    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };


    return (

        
        <div className="skills"
            ref={skillsRef}>
            <div className="abstract-background-top"
                style={{
                    backgroundImage:`url(${getSVG[5]})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'contain'}}>

            </div>
            <div className="skills-boxes">
                <div className="slider-container-div">
                    <Slider {...settings}>
                    {skills?.map((item, i)=>{                        
                    return (
                        <div className="slider-item-container"
                            key={i}>
                                <div className="slider-item-box">
                                    <div className="slider-item-title-div">
                                        {item.name}
                                    </div>
                                    <div className="slider-item-body-div">
                                        {item.children.map((skill, j)=>{
                                            return (
                                                <div className="skill-div" key={j}>
                                                    <div className="skill-logo">
                                                        <IconSVG name={skill.name}
                                                            width="90%"
                                                            height="90%"
                                                            fill="#deb887"/>
                                                    </div>
                                                    <span className="skill-name">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                            )
                                        })}
                                </div>
                                </div>                                    
                        </div>
                    )
                    })}
                </Slider>
                </div>
           </div>
            <div className="abstract-background-bottom"
                style={{
                    backgroundImage:`url(${getSVG[5]})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'contain'}}>

            </div>
        </div>
    );
};

