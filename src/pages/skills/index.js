



import React, { useState, useRef, useEffect } from 'react';


import './skills.css'
import techsList from '../../data/technologies.json';
import langsList from '../../data/languages.json';
import othersList from '../../data/others.json';
import { IconSVG } from '../../svgs'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import skills from '../../data/skills.json'
import graph from '../../data/graphs.json'



import { 
    FaReact,
    FaLinkedin,
    FaGithub,
    FaLink,
} from "react-icons/fa" ;
// import { useSideScroll } from "./useSideScroll";

import Carousel from "../../components/carousel.js";


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
        slidesToScroll: 1
      };


    return (

        
        <div className="skills-div"
            ref={skillsRef}>

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
                                    <div className="cat-box-items-div">
                                        {item.children.map((skill, j)=>{
                                            return (
                                                <div className="skill-div" key={j}>
                                                    <div className="skill-logo">
                                                        <IconSVG name={skill.name}
                                                            width="90%"
                                                            height="90%"
                                                            fill="#775786"/>
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
    );
};


const SkillSlideShow = (props) => {
    
    return (
        <div className="skills-slide-show">
            {props.data?.map((item, i)=>{
                
                return (
                    <div className="skill-cat-box" key={i}>
                        
                    </div>
                )
            })}
        </div>
        );
}





// export const Skills = props => {

//     return (
//         <div className="skills-div">
//             {skills.map((item, index)=>{
//                 return (
//                     <SkillSlideShow
//                         skillCatItem={item}
//                         key={index}/>)
//                 })}
//         </div>
//     );
// };



// const SkillSlideShow = (props) => {
    
//     return (
//         <div className="skill-cat-box">
//             <div className="cat-box-title-div">
//                 {props.skillCatItem.name}
//             </div>
//             <div className="cat-box-items-div">
//                 {props.skillCatItem.children.map((skill, i)=>{
//                     return (
//                         <div className="skill-div" key={i}>
//                             <div className="skill-logo">
//                                 <IconSVG
//                                     name={skill.name}
//                                     width="90%"
//                                     height="90%"
//                                     fill="#eec643"
//                                     />
//                             </div>
//                             <span className="skill-name">
//                                 {skill.name}
//                             </span>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//         );
// }

























































export const Techs = props => {

        return (
            <React.Fragment>
                {techsList.map((tech)=>{
                    return (
                        <React.Fragment key={tech.name}>
                            <div className="tech-div">
                                <div className="title-div">
                                    <svg className="tech-logo">
                                        <IconSVG name={tech.name} x="0" y="0" width="90%" height="90%" /> 
                                    </svg>
                                    <h2>{tech.name}</h2>
                                </div>
                                <div className="skill-div">
                                    {tech.children.map((skill)=>{
                                        return(
                                            <React.Fragment key={skill.name}>
                                                <div className="skill-logo-div">
                                                    <div className="skill-logo">
                                                        <IconSVG name={skill.name} x="0" y="0" width="100%" height="100%" /> 
                                                    </div>
                                                    <span className="skill-name">
                                                        <p> {skill.name} </p>
                                                    </span>
                                                </div>
                                                <div style={styles.spacingRightDiv}>
                                                    
                                                </div>
                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="spacing-div">
                            </div>
                        </React.Fragment>
                    )
                })}
            </React.Fragment>
        );
    };


export const CircleList = props => {
    

    return (
    <>
        {props.data.map((lang)=>{
            return (
                <React.Fragment key={lang.name}>
                    <div className="circle-div">
                        <div className="lang-div">
                            <IconSVG name={lang.name} x="0" y="0" width="100%" height="100%" /> 
                        </div>
                        <span className="lang-name">{lang.name}</span>
                    </div>
                    <div style={styles.spacingRightDiv}>
                    </div>
                </React.Fragment>
            )
        })}
    </>
    )
}


const TagContainer = props => {
 
    console.log(" props ", props.direction);


    const getCoords = ({index, size}) =>{

        if(props.direction === "column"){

            
            return {
                x:props.step.x,
                y:props.step.y,
                w:props.container.width / props.data.length,
                h:size * props.container.height,
                step:{
                    x:props.step.x,
                    y:props.step.y + size * props.container.height
                }
            }
        } else if(props.direction === "row") {

            return {
                x:0,
                y:0,
                w:size * props.container.width + (index * size * props.container.height),
                h:props.container.height / props.data.length,
                step:{
                    x:props.step.x + size * props.container.width,
                    y:props.step.y + (index * size * props.container.width)
                }
            }

        } else {

console.log(" am nothing direction ");

            return {
                x:0,
                y:0,
                w:1,
                h:1,
                step:{
                    x:0,
                    y:0
                }
            }

        } 
    }
 

    return props.data.map((item, index)=>{
        
        const tagViewBox = getCoords({index, size:item.size});

        console.log(" item ", item.name, " is at ", tagViewBox.step.x, " and ",  tagViewBox.step.y);

        return (
            <g key={index}>
                <TagSVG item={item} tagViewBox={tagViewBox} />
                {item.children.length > 0 
                ? 
                <TagContainer 
                    data={item.children}
                    step={tagViewBox.step} 
                    direction={props.direction}
                    container={props.container}/> 
                : null}                
            </g>
        );
 
    });




}


const TagSVG = (props) => {

    
    
    const tagSize = Math.min(props.tagViewBox.w, props.tagViewBox.h);

    switch(props.item.tagShape){
        case "circle":
            return (
                <svg >
                    <circle />
                </svg>
                );

        case "square":
            
            return (
                <svg
                    width={`${props.tagViewBox.w}`}
                    height={`${props.tagViewBox.h}`}
                    viewBox={`-${props.tagViewBox.w/2} -${props.tagViewBox.h/2} ${props.tagViewBox.w} ${props.tagViewBox.h}`}
                    stroke="black">
                    <rect
                        x={`-${tagSize/2}`}
                        y={`-${tagSize/2}`}
                        width={`${tagSize}`}
                        height={`${tagSize}`}
                        fill="red" />
                </svg>
                );
        default:
            return null; 
    }

}




export const Languages = props => {

    return (
        <div className="skills-div" style={styles.skills}>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
    );
};



export const Other = props => {

    return (
        <div className="skills-div" style={styles.skills}>
            <div>

            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
    );
};



const styles = {

    page: {
        display: 'flex',
        flex:1,
        flexDirection: 'column',        
      },
      spacingRightDiv:{
          width:"20px"     
      }

  };
  