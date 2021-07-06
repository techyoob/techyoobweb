

import React, { useRef, useEffect } from 'react';

import './projects.css'

import projects from '../../assets/jsons/projects.json';
import { IconSVG } from '../../assets/svgs'


import {
    FaGithub,
    FaLink,
} from "react-icons/fa";



export const Projects = props => {

    return (
        
        <div className="projects" >
            <div className="projects-wrapper" >
            {projects.map((item, i)=>{
                return (
                    <ProjectItem {...props}
                        item={item}
                        key={i}/>
                );
            })}
            </div>
        </div>
    );
};



const ProjectItem = props => {

    return (
        <div className={"project-div"}>
            <div className={"project-body-div"}>
                <div className={"project-info-div"}> 
                    <div className="project-logo-div">
                        <IconSVG name={"react"} fill="#cc8673" width="100%" height="100%"/>
                    </div>                  
                    <h4>{props.item.name}</h4>
                    <p className={"project-description-div"}>  
                        {props.item.description}
                    </p>
                </div>
                <div className={"project-skills-div"}>
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
  