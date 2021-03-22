

import React, { useRef, useEffect } from 'react';



import { 
    FaCogs,
    FaLinkedin,
    FaGithub,
    FaLink,
    FaRegImages
} from "react-icons/fa" ;


import { ReactComponent  as FullStack } from './fullstack.svg';
import { ReactComponent  as BackEnd } from './backend.svg'
import { ReactComponent  as FrontEnd } from './frontend.svg';
import { ReactComponent  as Database } from './database.svg';
import { ReactComponent  as D3JS } from './d3js.svg';
import { ReactComponent  as Iot } from './iot.svg';
import { ReactComponent  as Arduino } from './arduino.svg';
import { ReactComponent  as Ti } from './ti.svg';
import { ReactComponent  as DotNet } from './.net.svg';
import { ReactComponent  as NodeJS } from './nodejs.svg';
import { ReactComponent  as ExpressJS } from './expressjs.svg';
import { ReactComponent  as Mobile } from './mobile.svg';
import { ReactComponent  as Web } from './web.svg';
import { ReactComponent  as ReactSVG } from './react.svg';
import { ReactComponent  as Android } from './android.svg'; 
import { ReactComponent  as IoS } from './ios.svg';
// import { ReactComponent  as MicroPython } from './micropython.svg';
import { ReactComponent  as CSS } from './css.svg'; 
import { ReactComponent  as HTML } from './html.svg';
import { ReactComponent  as MySQOL } from './mysql.svg'; 
import { ReactComponent  as MongoDB } from './mongodb.svg';
import { ReactComponent  as Cpp } from './c++.svg';
import { ReactComponent  as CSharp } from './csharp.svg';
import { ReactComponent  as Java } from './java.svg'; 
import { ReactComponent  as Javascript } from './javascript.svg';
import { ReactComponent  as Python } from './python.svg';
import { ReactComponent  as Typescript } from './typescript.svg';
import { ReactComponent  as ImageProcessing } from './imageprocessing.svg';
import { ReactComponent  as Cuda } from './nvidia.svg';
import { ReactComponent  as GitHub } from './github.svg';
import { ReactComponent  as Email } from './email.svg';
import { ReactComponent  as LinkedIn } from './linkedin.svg';




export const IconSVG = props => {

    switch(props.name){
        case "full stack":
            return <FullStack x={typeof props.x === 'undefined' ? 0 : props.x}
                            y={typeof props.y === 'undefined' ? 0 : props.y}
                            width={typeof props.width === 'undefined' ? "100%" : props.width}
                            height={typeof props.height === 'undefined' ? "100%" : props.height}
                            fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
        case "back end":
            return <BackEnd x={typeof props.x === 'undefined' ? 0 : props.x}
                            y={typeof props.y === 'undefined' ? 0 : props.y}
                            width={typeof props.width === 'undefined' ? "100%" : props.width}
                            height={typeof props.height === 'undefined' ? "100%" : props.height}
            fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
        case "front end":
            return <FrontEnd x={props.x} y={props.y} width={props.width} height={props.height}/>
        case "database":
            return <Database x={props.x} y={props.y} width={props.width} height={props.height}/>
        case "iot":
            return <Iot x={props.x} y={props.y} width={props.width} height={props.height}/>
        case ".net":
            return(
                <svg width={props.width} height={props.height}>
                    <DotNet  x={typeof props.x === 'undefined' ? 0 : props.x}
                            y={typeof props.y === 'undefined' ? 0 : props.y}
                            width={typeof props.width === 'undefined' ? "100%" : props.width}
                            height={typeof props.height === 'undefined' ? "100%" : props.height}
                            fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
            )
        case "nodejs":
            return(
                <svg width={props.width} height={props.height}>
                    <NodeJS x={typeof props.x === 'undefined' ? 0 : props.x}
                            y={typeof props.y === 'undefined' ? 0 : props.y}
                            width={typeof props.width === 'undefined' ? "100%" : props.width}
                            height={typeof props.height === 'undefined' ? "100%" : props.height}
                            fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
            )
        case "express.js":
            return(
                <svg width={props.width} height={props.height}>
                <ExpressJS x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
            )
        case "mobile":
            return < Mobile x={props.x} y={props.y} width={props.width} height={props.height}/>
        case "web":
            return <Web x={props.x} y={props.y} width={props.width} height={props.height}/>
        case "react":
        case "react native":
            return(
                <svg width={props.width} height={props.height}>
                    <ReactSVG x={typeof props.x === 'undefined' ? 0 : props.x}
                            y={typeof props.y === 'undefined' ? 0 : props.y}
                            width={typeof props.width === 'undefined' ? "100%" : props.width}
                            height={typeof props.height === 'undefined' ? "100%" : props.height}
                            fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
            )
        case "android":
            return(
                <svg width={props.width} height={props.height}>
                    <Android x={typeof props.x === 'undefined' ? 0 : props.x}
                            y={typeof props.y === 'undefined' ? 0 : props.y}
                            width={typeof props.width === 'undefined' ? "100%" : props.width}
                            height={typeof props.height === 'undefined' ? "100%" : props.height}
                            fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
            )
        case "ios":
            return(
                <svg width={props.width} height={props.height}>
                    <IoS x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
            )
        case "css":
            return(
                <CSS x={typeof props.x === 'undefined' ? 0 : props.x}
                    y={typeof props.y === 'undefined' ? 0 : props.y}
                    width={typeof props.width === 'undefined' ? "100%" : props.width}
                    height={typeof props.height === 'undefined' ? "100%" : props.height}
                    fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
            )            
        case "html":
            return(
                <svg width={props.width} height={props.height}>
                    <HTML x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
            )
        case "d3.js":
            return(
                <svg width={props.width} height={props.height}>
                    <D3JS x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
            )
        case "mysql":
            return(
                <svg width={props.width} height={props.height}>
                    <MySQOL x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
            )
        case "mongodb":
            return(
                <svg width={props.width} height={props.height}>
                    <MongoDB x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
            )
        case "arduino":
            return(
                <svg width={props.width} height={props.height}>
                    <Arduino x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
            )
        case "ti":
            return(
                <svg width={props.width} height={props.height}>
                    <Ti x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
            )
        // case "micropython":
        //     return(
        //         <svg width={props.width} height={props.height}>
        //             <MicroPython x={"5%"} y={props.y} width={"90%"} height={props.height}/>
        //         </svg>
        //     )
        case "cpp":
            return(
                <svg width={props.width} height={props.height}>
                    <Cpp x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
            )
        case "csharp":
            return(
                <svg width={props.width} height={props.height}>
                    <CSharp x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
            )
        case "python":
            return(
                <svg width={props.width} height={props.height}>
                    <Python x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
        )
        case "java":
            return(
                <svg width={props.width} height={props.height}>
                    <Java x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
        )
        case "javascript":
            return(
                <svg width={props.width} height={props.height}>
                    <Javascript x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
        )
        case "typescript":
            return(
                <svg width={props.width} height={props.height}>
                    <Typescript x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
        )
        case "image processing":
            return(
                <svg width={props.width} height={props.height}>
                    <ImageProcessing x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
        )
        case "cuda":
            return(
                <svg width={props.width} height={props.height}>
                    <Cuda x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                </svg>
        )
        case "email":
            return(
                <svg width={props.width} height={props.height}>
                    <Email x={"0%"} y={"0%"} width={"100%"} height={props.height}/>
                </svg>
        )
        case "github":
            return(
                <svg width={props.width} height={props.height}>
                    <GitHub x={"0%"} y={"0%"} width={"100%"} height={props.height}/>
                </svg>
        )
        case "linkedin":
            return(
                <svg width={props.width} height={props.height}>
                    <LinkedIn x={"0%"} y={"0%"} width={"100%"} height={props.height}/>
                </svg>
        )
        default:
            return null;

    }

};



