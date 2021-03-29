import React, { useRef, useEffect } from 'react';
import './experience.css';

import experience from '../../data/experience.json'


import { 
    FaLink,
    FaMapMarkerAlt,
} from "react-icons/fa";

export const Experience = props => {

    return (
        <div className="experience">
            <Timeline data={experience} name="job"/>
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
                                <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#7593b9" strokeWidth="2"/>
                                <circle cx="50%" cy="15%" r="8" fill="#7593b9"/>
                                <circle cx="50%" cy="15%" r="10" fill="none" stroke="#7593b9"/>
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
        case "job":
            return (
                <Job item={props.item} />
                )
        default:
            return "data missing!";

    }
    
}



export const Job = props => {


    return(
        <div className={"job-container"}>
            <h2> {props.item.position} </h2>
            <div className="job-name">
                <span> {props.item.name} </span>
                {'link' in props.item
                    ?   <a href={props.item.link} >
                            <FaLink  />   
                        </a>
                    :   null 
                }
            </div>
            <span className="job-roles">
                <ul>
                    {props.item?.roles.map( (role, i) => {
                         return <li key={i}><h4>{role}</h4></li>
                     })}
                </ul>
            </span>            
            <div className="job-footer">
                <div className="job-location">
                    <FaMapMarkerAlt />
                    <span> {props.item.location} </span>
                </div>
                <div className="job-period">
                    {props.item?.start + " - " + props.item?.end}
                </div>
            </div>
        </div>
    );
}






























// export const Job = props => {


//     return(
//         <div className={"job-div"}  >
//             <div className={"job-header-div"} >
//                 <div className={"job-tittle-div"} >
//                     {props.position}
//                 </div>
//                 <div className={"job-name-div"} >
//                     {'link' in props?
//                         <a href={props.link} >
//                             <FaLink   />   
//                         </a>
//                     : null }
//                     {props.name}
//                 </div>
//             </div>
//             <div className={"job-body-div"} >
//                 <h4> Roles & Accomplishments </h4>
//                 <ul>
//                    {props.roles.map( (role, i) => {
//                         return <li key={i}>{role}</li>
//                     })}
//                 </ul>
//             </div>
//             <div className={"job-footer-div"} >
//                 <span className="footer-detail-span"> 
//                     {props.start + " - " + props.end +  " | "}
//                         <FaMapMarkerAlt />
//                     {props.location}
//                 </span>
//             </div>
//         </div>
//     );
// }
