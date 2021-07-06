

import React, { useRef, useEffect, useState } from 'react';
import './education.css';

import education from '../../assets/jsons/education.json';
import { IconSVG } from '../../svgs';


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
        <div className={"school-container"}>
            <h2> {props.item.name} </h2>
            <h4> {props.item.subject}</h4>
            <span className="school-footer">
                <p> {props.item.location}  <FaMapMarkerAlt /> </p>
                <p> {props.item.graduation} </p> 
            </span>
        </div>
    );
}




























// export const Education = props => {

//     const timelineRef = useRef(null)
//     const schoolRef = useRef(null)

//     const [timelineSize, setTimelineSize] = useState({w:0, h:0})
//     const [schoolSize, setSchoolSize] = useState({w:0, h:0})


//     useEffect(()=>{

//         if(timelineRef.current){
//             const canvas =  timelineRef.current.getBoundingClientRect()
//             setTimelineSize({w:canvas.width , h:canvas.height})
//         }

//     }, [])


//     return (
//         <section className="education" style={styles.education}>
//             {education.map((school, i)=>{
//                 return (
//                     <div className="school-div"
//                         key={i} 
//                         style={{flexDirection:props.isColumnRatio ? "row" : (i % 2===0) ? "row" : "row-reverse"}}>
//                         <div  className="school-logo-div"
//                             style={{display:props.isColumnRatio ? "none" : "flex"}}>

//                         </div>
//                         <div  className="school-timeline-div"
//                             ref={timelineRef}>
//                             <svg 
//                                 width={timelineSize.w}
//                                 height={timelineSize.h}
//                                 viewBox={`0 0 ${timelineSize.w} ${timelineSize.h}`}>
//                                     <circle cx="50%" cy="50%" r="3%" fill="black"/>
//                                     <line x1="50%" y1="0" x2="50%" y2="100%" stroke="black" strokeWidth="2"/>
//                             </svg>
//                         </div>
//                         <div className="school-info-wrapper">
//                             <div className="school-info-div">
//                                 <h2> {school.name} </h2>
//                                 <h4> {school.subject}</h4>
//                                 <span className="school-loc-grad">
//                                     <p> {school.location} </p>
//                                     <p> {school.graduation} </p> 
//                                 </span>
//                             </div>
//                         </div>

//                     </div>
//                 )
//             })}
//         </section>
//     );
// };










const styles = {
    education: {
        
    },
  };
  