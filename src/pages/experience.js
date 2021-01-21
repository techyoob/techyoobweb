import React, { useRef, useEffect } from 'react';
import './experience.css';

import experience from '../data/experience.json'


import { 
    FaLink,
    FaMapMarkerAlt,
} from "react-icons/fa";


export const Experience = props => {

    return (
        <div className="experience" style={styles.experience}>
            {experience.map( (job, index) => {
                return (
                    <Job 
                        {...props}
                        {...job}
                        key={index}/>
                );
            })}
        </div>
    );
};



export const Job = props => {


    return(
        <div className={"job-div"}  >
            <div className={"job-header-div"} >
                <div className={"job-tittle-div"} >
                    {props.position}
                </div>
                <div className={"job-name-div"} >
                    {'link' in props?
                        <a href={props.link} >
                            <FaLink   />   
                        </a>
                    : null }
                    {props.name}
                </div>
            </div>
            <div className={"job-body-div"} >
                <h4> Roles & Accomplishments </h4>
                <ul>
                   {props.roles.map( (role, index) => {
                        return <li key={index}>{role}</li>
                    })}
                </ul>
            </div>
            <div className={"job-footer-div"} >
                <span className="footer-detail-span"> 
                    {props.start + " - " + props.end +  " | "}
                        <FaMapMarkerAlt />
                    {props.location}
                </span>
            </div>
        </div>
    );
}


const styles = {
    experience:{
        height:'100%',
    },
    jobNameDiv: smallScreen =>({
        display: 'flex',
        flex: smallScreen? 4 :  2,
        justifyContent:'center',
        alignItems:'center',
        fontSize: smallScreen? '0.8rem' : '1rem',
    }), 
    jobBodyDiv: smallScreen =>({
        fontSize: smallScreen? '0.8rem' : '1.1rem',
    }),
    jobFooterDiv: smallScreen =>({
        fontSize: smallScreen? '0.8rem' : '1.1rem',
    }),
    
  };
  