

import React, { useRef, useEffect } from 'react';











import fullstack, { ReactComponent  as FullStack } from './fullstack.svg';
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
import bioSVG, { ReactComponent  as BioVector } from './bio_illustrations2.svg';

import shapeI, { ReactComponent  as ShapeI } from './43.svg';
import shapeII, { ReactComponent  as ShapeII } from './55.svg';
import shapeIII, { ReactComponent  as ShapeIII } from './36.svg';
import shapeIV, { ReactComponent  as ShapeIV } from './56.svg';




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
                <DotNet  x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
            )
        case "nodejs":
            return(
                <NodeJS x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
            )
        case "express.js":
            return(
                <ExpressJS x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
            )
        case "mobile":
            return < Mobile x={props.x} y={props.y} width={props.width} height={props.height}/>
        case "web":
            return <Web x={props.x} y={props.y} width={props.width} height={props.height}/>
        case "react":
        case "react native":
            return(
                <ReactSVG x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
            )
        case "android":
            return(
                <Android x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
            )
        case "ios":
            return(
                <IoS x={typeof props.x === 'undefined' ? 0 : props.x}
                    y={typeof props.y === 'undefined' ? 0 : props.y}
                    width={typeof props.width === 'undefined' ? "100%" : props.width}
                    height={typeof props.height === 'undefined' ? "100%" : props.height}
                    fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
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
                <HTML x={typeof props.x === 'undefined' ? 0 : props.x}
                    y={typeof props.y === 'undefined' ? 0 : props.y}
                    width={typeof props.width === 'undefined' ? "100%" : props.width}
                    height={typeof props.height === 'undefined' ? "100%" : props.height}
                    fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
            )
        case "d3.js":
            return(
                <D3JS x={typeof props.x === 'undefined' ? 0 : props.x}
                    y={typeof props.y === 'undefined' ? 0 : props.y}
                    width={typeof props.width === 'undefined' ? "100%" : props.width}
                    height={typeof props.height === 'undefined' ? "100%" : props.height}
                    fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
            )
        case "mysql":
            return(
                <MySQOL x={typeof props.x === 'undefined' ? 0 : props.x}
                    y={typeof props.y === 'undefined' ? 0 : props.y}
                    width={typeof props.width === 'undefined' ? "100%" : props.width}
                    height={typeof props.height === 'undefined' ? "100%" : props.height}
                    fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
            )
        case "mongodb":
            return(
                <MongoDB x={typeof props.x === 'undefined' ? 0 : props.x}
                    y={typeof props.y === 'undefined' ? 0 : props.y}
                    width={typeof props.width === 'undefined' ? "100%" : props.width}
                    height={typeof props.height === 'undefined' ? "100%" : props.height}
                    fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
            )
        case "arduino":
            return(
                <Arduino x={typeof props.x === 'undefined' ? 0 : props.x}
                    y={typeof props.y === 'undefined' ? 0 : props.y}
                    width={typeof props.width === 'undefined' ? "100%" : props.width}
                    height={typeof props.height === 'undefined' ? "100%" : props.height}
                    fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
            )
        case "texas instruments":
            return(
                <Ti x={typeof props.x === 'undefined' ? 0 : props.x}
                    y={typeof props.y === 'undefined' ? 0 : props.y}
                    width={typeof props.width === 'undefined' ? "100%" : props.width}
                    height={typeof props.height === 'undefined' ? "100%" : props.height}
                    fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
            )
        // case "micropython":
        //     return(
        //         <svg width={props.width} height={props.height}>
        //             <MicroPython x={"5%"} y={props.y} width={"90%"} height={props.height}/>
        //         </svg>
        //     )
        case "cpp":
            return(
                <Cpp x={typeof props.x === 'undefined' ? 0 : props.x}
                    y={typeof props.y === 'undefined' ? 0 : props.y}
                    width={typeof props.width === 'undefined' ? "100%" : props.width}
                    height={typeof props.height === 'undefined' ? "100%" : props.height}
                    fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
            )
        case "csharp":
            return(
                <CSharp x={typeof props.x === 'undefined' ? 0 : props.x}
                    y={typeof props.y === 'undefined' ? 0 : props.y}
                    width={typeof props.width === 'undefined' ? "100%" : props.width}
                    height={typeof props.height === 'undefined' ? "100%" : props.height}
                    fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
            )
        case "python":
            return(
                <Python x={typeof props.x === 'undefined' ? 0 : props.x}
                    y={typeof props.y === 'undefined' ? 0 : props.y}
                    width={typeof props.width === 'undefined' ? "100%" : props.width}
                    height={typeof props.height === 'undefined' ? "100%" : props.height}
                    fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
        )
        case "java":
            return(
                <Java x={typeof props.x === 'undefined' ? 0 : props.x}
                    y={typeof props.y === 'undefined' ? 0 : props.y}
                    width={typeof props.width === 'undefined' ? "100%" : props.width}
                    height={typeof props.height === 'undefined' ? "100%" : props.height}
                    fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
        )
        case "javascript":
            return(
                <Javascript x={typeof props.x === 'undefined' ? 0 : props.x}
                    y={typeof props.y === 'undefined' ? 0 : props.y}
                    width={typeof props.width === 'undefined' ? "100%" : props.width}
                    height={typeof props.height === 'undefined' ? "100%" : props.height}
                    fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
        )
        case "typescript":
            return(
                <Typescript x={typeof props.x === 'undefined' ? 0 : props.x}
                    y={typeof props.y === 'undefined' ? 0 : props.y}
                    width={typeof props.width === 'undefined' ? "100%" : props.width}
                    height={typeof props.height === 'undefined' ? "100%" : props.height}
                    fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
        )
        case "computer vision":
            return(
                <ImageProcessing x={typeof props.x === 'undefined' ? 0 : props.x}
                    y={typeof props.y === 'undefined' ? 0 : props.y}
                    width={typeof props.width === 'undefined' ? "100%" : props.width}
                    height={typeof props.height === 'undefined' ? "100%" : props.height}
                    fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
        )
        case "cuda":
            return(
                <Cuda x={typeof props.x === 'undefined' ? 0 : props.x}
                    y={typeof props.y === 'undefined' ? 0 : props.y}
                    width={typeof props.width === 'undefined' ? "100%" : props.width}
                    height={typeof props.height === 'undefined' ? "100%" : props.height}
                    fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
        )
        case "email":
            return(
                <Email x={typeof props.x === 'undefined' ? 0 : props.x}
                    y={typeof props.y === 'undefined' ? 0 : props.y}
                    width={typeof props.width === 'undefined' ? "100%" : props.width}
                    height={typeof props.height === 'undefined' ? "100%" : props.height}
                    fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
               
        )
        case "github":
            return(
                <GitHub x={typeof props.x === 'undefined' ? 0 : props.x}
                    y={typeof props.y === 'undefined' ? 0 : props.y}
                    width={typeof props.width === 'undefined' ? "100%" : props.width}
                    height={typeof props.height === 'undefined' ? "100%" : props.height}
                    fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
                
        )
        case "linkedin":
            return(
                <LinkedIn x={typeof props.x === 'undefined' ? 0 : props.x}
                        y={typeof props.y === 'undefined' ? 0 : props.y}
                        width={typeof props.width === 'undefined' ? "100%" : props.width}
                        height={typeof props.height === 'undefined' ? "100%" : props.height}
                        fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
               
        )
        case "bio vector":
            return(
                <BioVector x={typeof props.x === 'undefined' ? 0 : props.x}
                    y={typeof props.y === 'undefined' ? 0 : props.y}
                    width={typeof props.width === 'undefined' ? "100%" : props.width}
                    height={typeof props.height === 'undefined' ? "100%" : props.height}
                    fill={typeof props.fill === 'undefined' ? "#cacaca" : props.fill}/>
               
        )
        default:
            return null;

    }

};



export const getSVG = {
    0:fullstack,
    1:bioSVG,
    2:shapeI,
    3:shapeII,
    4:shapeIII,
    5:shapeIV
}