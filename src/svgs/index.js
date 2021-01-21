

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
// import { ReactComponent  as ExpressJS } from './expressjs.svg';
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
            return <FullStack x={props.x} y={props.y} width={props.width} height={props.height} />
        case "back end":
            return <BackEnd x={props.x} y={props.y} width={props.width} height={props.height}/>
        case "front end":
            return <FrontEnd x={props.x} y={props.y} width={props.width} height={props.height}/>
        case "database":
            return <Database x={props.x} y={props.y} width={props.width} height={props.height}/>
        case "iot":
            return <Iot x={props.x} y={props.y} width={props.width} height={props.height}/>
        case ".net":
            return(
                <svg width={props.width} height={props.height}>
                    <DotNet  x={"18%"} y={props.y} width={"64%"} height={props.height}/>
                </svg>
            )
        case "nodejs":
            return(
                <svg width={props.width} height={props.height}>
                    <NodeJS x={"11%"} y={props.y} width={"78%"} height={props.height}/>
                </svg>
            )
        case "express.js":
            return(
                <svg width={props.width} height={props.height}>
                    <text fill="#4d4d4d" x="10%" y="50%" textLength="80%" fontWeight="bold" >ExpressJS</text>
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
                    <ReactSVG x="0" y="0" width={"100%"} height={"100%"}/>
                </svg>
            )
        case "android":
            return(
                <svg width={props.width} height={props.height}>
                    <Android x={"15%"} y={props.y} width={"70%"} height={props.height}/>
                </svg>
            )
        case "ios":
            return(
                <svg width={props.width} height={props.height}>
                    <IoS x={props.x} y={props.y} width={props.width} height={props.height}/>
                </svg>
            )
        case "css":
            return(
                <svg width={props.width} height={props.height}>
                    <CSS x={"5%"} y={props.y} width={"90%"} height={props.height}/>
                </svg>
            )            
        case "html":
            return(
                <svg width={props.width} height={props.height}>
                    <HTML x={"10%"} y={props.y} width={"80%"} height={props.height}/>
                </svg>
            )
        case "d3.js":
            return(
                <svg width={props.width} height={props.height}>
                    <D3JS x={"20%"} y={props.y} width={"60%"} height={props.height}/>
                </svg>
            )
        case "mysql":
            return(
                <svg width={props.width} height={props.height}>
                    <MySQOL x={props.x} y={props.y} width={"110%"} height={props.height}/>
                </svg>
            )
        case "mongodb":
            return(
                <svg width={props.width} height={props.height}>
                    <MongoDB x={"5%"} y={props.y} width={"90%"} height={props.height}/>
                </svg>
            )
        case "arduino":
            return(
                <svg width={props.width} height={props.height}>
                    <Arduino x={"15%"} y={"20%"} width={"70%"} height={props.height}/>
                </svg>
            )
        case "ti":
            return(
                <svg width={props.width} height={props.height}>
                    <Ti x={"5%"} y={props.y} width={"90%"} height={props.height}/>
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
                    <Cpp x={"25%"} y={props.y} width={"50%"} height={props.height}/>
                </svg>
            )
        case "csharp":
            return(
                <svg width={props.width} height={props.height}>
                    <CSharp x={"25%"} y={props.y} width={"50%"} height={props.height}/>
                </svg>
            )
        case "python":
        return(
            <svg width={props.width} height={props.height}>
                <Python x={"20%"} y={props.y} width={"60%"} height={props.height}/>
            </svg>
        )
        case "java":
        return(
            <svg width={props.width} height={props.height}>
                <Java x={"30%"} y={props.y} width={"40%"} height={props.height}/>
            </svg>
        )
        case "javascript":
        return(
            <svg width={props.width} height={props.height}>
                <Javascript x={"25%"} y={props.y} width={"50%"} height={props.height}/>
            </svg>
        )
        case "typescript":
        return(
            <svg width={props.width} height={props.height}>
                <Typescript x={"25%"} y={props.y} width={"50%"} height={props.height}/>
            </svg>
        )
        case "image processing":
            return(
                <svg width={props.width} height={props.height}>
                    <ImageProcessing x={"25%"} y={"5%"} width={"50%"} height={props.height}/>
                </svg>
        )
        case "cuda":
            return(
                <svg width={props.width} height={props.height}>
                    <Cuda x={"15%"} y={"1%"} width={"70%"} height={props.height}/>
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



