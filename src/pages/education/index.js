

import React, { useRef, useEffect, useState } from 'react';
import './education.css';

import education from '../../assets/jsons/education.json';
import { IconSVG } from '../../assets/svgs';


import { 
    FaLink,
    FaMapMarkerAlt,
} from "react-icons/fa";



export const Education = props => {

    return (
        <div className="education">
            <Timeline data={education} name="education"/>
        </div>
    );
};


export const Timeline = props => {


    return(
        <div className="timeline-container">
            {props.data?.map( (item, i) => {
                return (
                    <div className={`timeline-item-container-${i%2 === 0 ? 'even' : 'odd'}`}
                        key={i}>
                        <div className="item-logo">
                   
                        </div>
                        <div className="item-timeline-vector">
                            <svg height="100%" width="100%">
                                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#deb887" strokeWidth="2"/>
                                <circle cx="50%" cy="15%" r="8" fill="#deb887"/>
                                <circle cx="50%" cy="15%" r="10" fill="none" stroke="#deb887"/>
                            </svg>
                        </div>
                        <div className="item-content">
                            <div className="info-box">
                                <TimelineItemRenderer item={item} name={props.name}/>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}




const TimelineItemRenderer = (props) => {

    switch(props.name){
        case "education":
            return (
                <School item={props.item} />
                )
        default:
            return "data missing!";

    }
    
}



export const School = props => {


    return(
        <div className="school-container">
            <h2> {props.item.name} </h2>
            <h4> {props.item.subject}</h4>
            <span className="school-footer">
                <p> {props.item.location}  <FaMapMarkerAlt /> </p>
                <p> {props.item.graduation} </p>
            </span>
        </div>
    );
}


























const styles = {
    education: {
        
    },
  };
  