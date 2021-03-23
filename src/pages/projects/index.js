

import React, { useRef, useEffect } from 'react';

import './projects.css'

import projects from '../../data/projects.json';
import { IconSVG } from '../../svgs'
// import { ReactComponent  as Mongodb } from '../svgs/mongodb.svg'; 


import { 
    FaReact,
    FaLinkedin,
    FaGithub,
    FaLink,
} from "react-icons/fa";


export const Projects = props => {

    return (
        
        <section className="projects" >
            {projects.map((item, i)=>{
                return (
                    <Project 
                        {...props}
                        item={item}
                        key={i}/>
                );
            })}
        </section>
    );
};




const Project = props => {

    return (
        <div className={"project-div"}>
            <div className={"project-body-div"}>
                <div className={"project-description"}>
                    <div className="project-title-div">
                        <h4>{props.item.name}</h4>
                    </div>
                    <div className="project-details-div">
                        {props.item.description}
                    </div>
                </div>
                <div className={"project-technologies"}>
                    {props.item.technologies.map( (tech, i) => {
                        return <IconSVG key={i} name={tech} x="0" y="0" width="100%" height="100%" />;
                    })}
                </div>
            </div>
            <div className={"project-footer-div"}>
                {Object.keys(props.item.links).map( (name, i) => {

                    const link = props.item.links[name]
                    
                    return (
                        <a 
                            className={"link-button-div"}
                            key={i} 
                            href={link}>
                            <div className={"link-button-icon"} >
                                <LinkLoader name={name} link={link}/>
                            </div>
                            <div className={"link-button-text"}>
                                {name}
                            </div>
                            
                        </a>);
                })}
            </div>
        </div>
    );
};


export const TechLoader = (props) => {

    switch(props.icon){
        case "react":
            return <FaReact color={"#61DBFB"} size={60}/>;
        // case "mongodb":
        //      return <Mongodb  className={"mongodb-svg"}/>
        default:
            return null;

    }
}


export const LinkLoader = (props) => {
    

    switch(props.name){
        case "GitHub":
            return (
                <FaGithub />
            );
        case "Demo":
             return (
                <FaLink />
            );
        default:
            return null;

    }
}



const styles = {
    experience:{
        height:'100%',
    },
    jobHeaderDiv: smallScreen =>({
        fontSize: smallScreen? '1rem' : '1.6rem',
        fontWeight:600,
    }),
    
  };
  