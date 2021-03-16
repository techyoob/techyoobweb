

import React, { useRef, useEffect, useState } from 'react';
import './education.css';

import education from '../../data/education.json';
import { IconSVG } from '../../svgs';




export const Education = props => {

    const timelineRef = useRef(null)
    const schoolRef = useRef(null)

    const [timelineSize, setTimelineSize] = useState({w:0, h:0})
    const [schoolSize, setSchoolSize] = useState({w:0, h:0})


    useEffect(()=>{

        if(timelineRef.current){
            const canvas =  timelineRef.current.getBoundingClientRect()
            setTimelineSize({w:canvas.width , h:canvas.height})
        }

    }, [])


    return (
        <section className="education" style={styles.education}>
            {education.map((school, index)=>{
                return (
                    <div
                        className="school-div"
                        key={school.id} 
                        style={{flexDirection:props.isColumnRatio ? "row" : (index % 2===0) ? "row" : "row-reverse"}}>
                        <div 
                            className="school-logo-div"
                            style={{display:props.isColumnRatio ? "none" : "flex"}}>

                        </div>
                        <div 
                            className="school-timeline-div"
                            ref={timelineRef}>
                            <svg 
                                width={timelineSize.w}
                                height={timelineSize.h}
                                viewBox={`0 0 ${timelineSize.w} ${timelineSize.h}`}>
                                    <circle cx="50%" cy="50%" r="3%" fill="black"/>
                                    <line x1="50%" y1="0" x2="50%" y2="100%" stroke="black" strokeWidth="2"/>
                            </svg>
                        </div>
                        <div className="school-info-wrapper">
                            <div className="school-info-div">
                                <h2> {school.name} </h2>
                                <h4> {school.subject}</h4>
                                <span className="school-loc-grad">
                                    <p> {school.location} </p>
                                    <p> {school.graduation} </p> 
                                </span>
                            </div>
                        </div>

                    </div>
                )
            })}
        </section>
    );
};










const styles = {
    education: {
        
    },
  };
  