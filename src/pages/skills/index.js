



import React, { useState, useRef, useEffect } from 'react';


import './skills.css'
import techsList from '../../data/technologies.json';
import langsList from '../../data/languages.json';
import othersList from '../../data/others.json';
import { IconSVG } from '../../svgs'


import skills from '../../data/skills.json'
import graph from '../../data/graphs.json'
// import { IconSVG } from '../svgs/index.js'


import testData from '../../data/testData.json'

// import { ReactComponent  as FullStack } from '../svgs/fullstack.svg';


import { 
    FaReact,
    FaLinkedin,
    FaGithub,
    FaLink,
} from "react-icons/fa" ;



export const Skills = props => {

    return (
        <div className="skills-div">
            {skills.map((item, index)=>{
                return (
                    <SkillCategoryBox 
                        skillCatItem={item}
                        key={index}/>)
                })}
        </div>
    );
};



const SkillCategoryBox = (props) => {
    
    return (
        <div className="skill-cat-box">
            <div className="cat-box-title-div">
                {props.skillCatItem.name}
            </div>
            <div className="cat-box-items-div">
                {props.skillCatItem.children.map((skill, i)=>{
                    return (
                        <div className="skill-div" key={i}>
                            <div className="skill-logo">
                                <IconSVG
                                    name={skill.name}
                                    width="90%"
                                    height="90%"
                                    fill="#c8d421"
                                    />
                            </div>
                            <span className="skill-name">
                                {skill.name}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
        );
}























































// export const Skills = props => {

//     return (
//         <div className="skills-div" style={styles.skillsDiv(props.isColumnRatio)}>
//             <div className="techs-div">
//                 <div className="techs-title-div">
//                     <h1>TECHNOLOGIES</h1>
//                 </div>
//                 <div className="techs-body-div">
// 		            <Techs />
//                 </div>
//             </div>
//             <div className="langs-div">
//                 <div className="langs-title-div">
//                     <h1>LANGUAGES</h1>
//                 </div>
//                 <span className="langs-body-div">
//                     <CircleList data={langsList} />
//                 </span>
//             </div>
//             <div className="others-div">
//                 <div className="others-title-div">
//                     <h1>OTHER</h1>
//                 </div>
//                 <div className="others-body-div">
//                     <CircleList data={othersList} />
//                 </div>
//             </div>
//         </div>
//     );
// };


export const Techs = props => {

        return (
            <React.Fragment>
                {techsList.map((tech)=>{
                    return (
                        <React.Fragment key={tech.name}>
                            <div className="tech-div">
                                <div className="title-div">
                                    <svg className="tech-logo">
                                        <IconSVG name={tech.name} x="0" y="0" width="90%" height="90%" /> 
                                    </svg>
                                    <h2>{tech.name}</h2>
                                </div>
                                <div className="skill-div">
                                    {tech.children.map((skill)=>{
                                        return(
                                            <React.Fragment key={skill.name}>
                                                <div className="skill-logo-div">
                                                    <div className="skill-logo">
                                                        <IconSVG name={skill.name} x="0" y="0" width="100%" height="100%" /> 
                                                    </div>
                                                    <span className="skill-name">
                                                        <p> {skill.name} </p>
                                                    </span>
                                                </div>
                                                <div style={styles.spacingRightDiv}>
                                                    
                                                </div>
                                            </React.Fragment>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="spacing-div">
                            </div>
                        </React.Fragment>
                    )
                })}
            </React.Fragment>
        );
    };


export const CircleList = props => {
    

    return (
    <>
        {props.data.map((lang)=>{
            return (
                <React.Fragment key={lang.name}>
                    <div className="circle-div">
                        <div className="lang-div">
                            <IconSVG name={lang.name} x="0" y="0" width="100%" height="100%" /> 
                        </div>
                        <span className="lang-name">{lang.name}</span>
                    </div>
                    <div style={styles.spacingRightDiv}>
                    </div>
                </React.Fragment>
            )
        })}
    </>
    )
}










// export const Skills = props => {

//     console.log(" props are ", props );
//         return (
//             <div className="skills-div" style={styles.skillsDiv}>
//                 <div className="techs-div">
//                     <div className="techs-title-div">
//                         <h2>TECHNOLOGIES</h2>
//                     </div>
//                     <div className="techs-body-div">
//                         <Techs data={skills.technologies} />
//                     </div>
//                 </div>
//                 <div className="lang-div">
//                     <div className="title-div">
//                         <h2>LANGUAGES</h2>
//                     </div>
//                     <div className="body-div1">
//                     </div>
//                 </div>
//                 <div className="others-div">
//                     <div className="title-div">
//                         <h2>OTHER</h2>
//                     </div>
//                     <div className="">
//                     </div>
//                 </div>
//             </div>
//         );
//     };


// export const Techs = props => {
// // props.data.nodes
// // props.data.links

//     const [data, setData] = useState([150, 150, 150, 150, 150]);

//     const techsContainerRef = useRef();
//     const divContainerRef = useRef();

//     const nodes = props.data.nodes;
//     const edges = props.data.links;

//     // var nodes = [{"id":'/f1'},{"id":'f2'},{"id":'f3'},{"id":'f4'}, {"id":'f5'}, {"id":'f6'}, {"id":'f7'}]
//     // var links = [{source:'f1',target:'f2'}, {source:'f1',target:'f3'}, {source:'f3',target:'f4'}, {source:'f3',target:'f6'}, {source:'f4',target:'f6'}, {source:'f4',target:'f7'}]

//     const handleGraphDraw = () => {

//         if(divContainerRef.current){

//             // get parent div container dimension
//             const canvasContainer =  divContainerRef.current.getBoundingClientRect();

//             // console.log(" width2 is ", canvasContainer.width, " height2 ", canvasContainer.height);
//             const width = canvasContainer.width,
//                 height = canvasContainer.height;

//             //Initializing chart
//             const svgContainer = d3.select(techsContainerRef.current)
//                 .attr('width', width)
//                 .attr('height', height);

//             //define and stop the simulation
//             const simulation = d3.forceSimulation()
//                 .force("center", d3.forceCenter(width/2, height/2))                  
//                 .force("charge", d3.forceManyBody());
            
//             // const nodeElements = svgContainer.append('g')
//             //     .selectAll("svg")
//             //     .data(nodes)
//             //     .join("svg")
//             //     .attr("width", 100)
//             //     .attr("height", 100)
//             //     .append('circle')
//             //     .attr('r', '50%')
//             //     .attr("cx", "50%")
//             //     .attr("cy", "50%")
//             //     .attr('fill', 'yellow')


//             function getNodeColor(node) {
//                 return node.level === 1 ? 'red' : 'yellow'
//                 }

//             const nodeElements = svgContainer
//                 .selectAll('svg')
//                 .data(nodes)
//                 .join("svg")
//                 .attr("width", 100)
//                 .attr("height", 100)

//             nodeElements
//                 .append("circle")
//                 .join("circle")
//                 .attr('r', '50%')
//                 .attr("cx", "50%")
//                 .attr("cy", "50%")
//                 .attr('fill', 'yellow')


//               simulation.nodes(nodes).on('tick', () => {
//                 nodeElements
//                     .attr("x", node => node.x)
//                     .attr("y", node => node.y)
//                 })
//         }
//     }
    
//     useEffect(() => {

//         window.addEventListener("resize", handleGraphDraw);
//         handleGraphDraw();
//         return () => window.removeEventListener("resize", handleGraphDraw);
 
//     }, []);



//     return (
      
//       <div className='div-container'
//             ref={divContainerRef}
//             style={{width:"100%", height:"100%"}}>
//         <svg
//             className="techs-container"
//             ref={techsContainerRef}>
    
//         </svg>
//       </div>
//     );
// };















//  export const Techs = props => {

//     const [data, setData] = useState([{x:0, y:0}]);
//     const techsContainerRef = useRef();
//     const divContainerRef = useRef();


//     const handleGraphDraw = () => {

//         if(divContainerRef.current){

//             // get parent div container dimension
//             const canvasContainer =  divContainerRef.current.getBoundingClientRect();
//             // console.log(" width2 is ", canvasContainer.width, " height2 ", canvasContainer.height);
//             const width = canvasContainer.width,
//                 height = canvasContainer.height;


//             //Initializing chart
//             const svgContainer = d3.select(techsContainerRef.current)
//                 .attr('width', width)
//                 .attr('height', height);

//             // //Creating tooltip
//             // const tooltip = d3.select('.div-container')
//             //     .append('div')
//             //     .attr('class', 'tooltip')
//             //     .html('Tooltip');

//             //Initializing force simulation
//             const simulation = d3.forceSimulation()
//                 .force('link', d3.forceLink())
//                 .force('charge', d3.forceManyBody())
//                 .force('collide', d3.forceCollide())
//                 .force('center', d3.forceCenter(width / 2, height / 2))
//                 .force("y", d3.forceY(0))
//                 .force("x", d3.forceX(0));



//             //Drag functions
//             const dragStart = (event, d) => {
//                 console.log(" evnt ", event);
//                 if (!event.active) simulation.alphaTarget(0.3).restart();
//                 d.fx = d.x;
//                 d.fy = d.y;
//             };
            
//             const drag = (event, d) => {
//                 d.fx = event.x;
//                 d.fy = event.y;
//             };
            
//             const dragEnd = (event, d) => {
//                 if (!event.active) simulation.alphaTarget(0);
//                 d.fx = null;
//                 d.fy = null;
//             }
            
//             //Creating links
//             const link = svgContainer.append('g')
//                 .attr('class', 'links')
//                 .selectAll('line')
//                 .data(testData.links).enter()
//                 .append('line');
            
//             //Creating nodes
//             const node = d3.select('.div-container')
//                 .selectAll('div')
//                 .data(testData.nodes).enter()
//                 .append('div')
//                 .attr('class', d => {return 'flag flag-' + d.code;})
//                 .call(d3.drag()
//                 .on('start', dragStart)
//                 .on('drag', drag)
//                 .on('end', dragEnd)
//                 ).on('mouseover',(event, d) => {
//                     // tooltip.html(d.country)
//                     //     .style('left', event.pageX + 5 +'px')
//                     //     .style('top', event.pageY + 5 + 'px')
//                     //     .style('opacity', .9);
//                 }).on('mouseout', () => {
//                     // tooltip.style('opacity', 0)
//                     //     .style('left', '0px')
//                     //     .style('top', '0px');
//                 });
            
//             //Setting location when ticked
//             const ticked = () => {
//                 link
//                 .attr("x1", d => { return d.source.x; })
//                 .attr("y1", d => { return d.source.y; })
//                 .attr("x2", d => { return d.target.x; })
//                 .attr("y2", d => { return d.target.y; });

//             node
//                 .attr("style", d => { 
//                     return 'left: ' + d.x + 'px; top: ' + (d.y + 72) + 'px'; 
//                 });
//             };
            
//             //Starting simulation
//             simulation.nodes(testData.nodes)
//                 .on('tick', ticked);
            
//             simulation.force('link')
//                 .links(testData.links);
    
//                 console.log(" testData is ", testData);
//         }
//     }
    
//     useEffect(() => {

//         window.addEventListener("resize", handleGraphDraw);
//         handleGraphDraw();
//         return () => window.removeEventListener("resize", handleGraphDraw);
 
//     }, []);



//     return (
      
//       <div className='div-container'
//             ref={divContainerRef}
//             style={{width:"100%", height:"100%"}}>
//         <svg
//             className="techs-container"
//             ref={techsContainerRef}>
     
//         </svg>
//       </div>
//     );
// };


// export const Techs = props => {

//     const [data, setData] = useState([{x:0, y:0}]);
//     const techsContainerRef = useRef();
    
//     useEffect(() => {
//       const container = select(techsContainerRef.current);
//       container
//         .selectAll("svg")
//         .data(data)
//         .join("svg")
//         .attr("x", value => value.x)
//         .attr("y", value => value.y)
//         .attr("width", "10%")
//         .attr("height", "10%")
//         .append("circle")
//         .attr("r", "50%")
//         .attr("cx", "50%")
//         .attr("cy", "50%");
//     }, [data]);



//     return (
//       <React.Fragment>
//         <svg
//             className="techs-container"
//             ref={techsContainerRef}
//             width="100%"
//             height="100%">
//             <defs>
//                 <pattern id="full-stack"  x = "0%" y = "0%"width="1" height="1" >
//                     <IconSVG name="fullstack" x="0" y="0" width="10%" height="10%" /> 
//                 </pattern>
//                 <pattern id="front-end" width="100%" height="100%"  >
//                     <IconSVG name="frontend" x="13" y="10" width="8%" height="10%" /> 
//                 </pattern>
//                 <pattern id="back-end" width="100%" height="100%"  >
//                     <IconSVG name="backend" x="10" y="12" width="10%" height="9%" /> 
//                 </pattern>
//                 <pattern id="database" width="100%" height="100%"  >
//                     <IconSVG name="database" x="10" y="12" width="10%" height="9%" /> 
//                 </pattern>
//                 <pattern id="iot" width="100%" height="100%"  >
//                     <IconSVG name="iot" x="10" y="12" width="10%" height="10%" /> 
//                 </pattern>
//                 <pattern id="web" width="100%" height="100%"  >
//                     <IconSVG name="web" x="11" y="12" width="6%" height="6%" /> 
//                 </pattern>
//                 <pattern id="mobile" width="100%" height="100%"  >
//                     <IconSVG name="mobile" x="10" y="9" width="7%" height="7%" /> 
//                 </pattern>
//                 <pattern id="react" width="100%" height="100%"  >
//                     <IconSVG name="react" x="6" y="8" width="8%" height="9%" /> 
//                 </pattern>
//                 <pattern id="html" width="100%" height="100%"  >
//                     <IconSVG name="html" x="0" y="3" width="12%" height="12%" /> 
//                 </pattern>
//                 <pattern id="css" width="100%" height="100%"  >
//                     <IconSVG name="css" x="0" y="3" width="12%" height="12%" /> 
//                 </pattern>
//                 <pattern id="react-native" width="100%" height="100%"  >
//                     <IconSVG name="react" x="6" y="8" width="8%" height="9%" /> 
//                 </pattern>
//                 <pattern id="android" width="100%" height="100%"  >
//                     <IconSVG name="android" x="3" y="5" width="10%" height="8%" /> 
//                 </pattern>
//                 <pattern id="ios" width="100%" height="100%"  >
//                     <IconSVG name="ios" x="0" y="0" width="13%" height="13%" /> 
//                 </pattern>
//                 <pattern id="nodejs" width="100%" height="100%"  >
//                     <IconSVG name="nodejs" x="0" y="0" width="13%" height="13%" /> 
//                 </pattern>
//                 <pattern id=".net" width="100%" height="100%"  >
//                     <IconSVG name=".net" x="9" y="9" width="7%" height="7%" /> 
//                 </pattern>
//                 <pattern id="mongodb" width="100%" height="100%"  >
//                     <IconSVG name="mongodb" x="0" y="9" width="15%" height="15%" /> 
//                 </pattern>
//                 <pattern id="mysql" width="100%" height="100%"  >
//                     <IconSVG name="mysql" x="2" y="0" width="12%" height="12%" /> 
//                 </pattern>
//             </defs>

//         </svg>
//       </React.Fragment>
//     );
// };





// export const Techs = props => {

//     const techsBodyRef = useRef(null);
//     const [viewBox, setViewBox] = useState({x0:0, y0:0, width:1, height:1}, []);
//     const [direction, setDirection] = useState("");

    

//     const [res, setRes] = useState({w:0, h:0})

//     useEffect ( () => {

//         function handleViewBoxResize() {

//             if(techsBodyRef.current){

//                 const canvas =  techsBodyRef.current.getBoundingClientRect()
//                 setViewBox({...viewBox,
//                     width:canvas.width,
//                     height:canvas.height
//                 })

//                 const ratio = canvas.width / canvas.height;

//                 if(ratio >  1){
//                     setDirection("row")
//                 } else {
//                     setDirection("column")
//                 }
                
//             }

//         }
          
//           window.addEventListener("resize", handleViewBoxResize);

//           handleViewBoxResize();

//           return () => window.removeEventListener("resize", handleViewBoxResize);
      
//     }, []);



//     return (
//            <svg 
//             className="techs-container" 
//             width="100%"
//             height="100%"
//             ref = { techsBodyRef }
//             viewBox={`${viewBox.x0} ${viewBox.y0} ${viewBox.width} 700`}
//             xmlns="http://www.w3.org/2000/svg">
//                 <defs>
//                     <pattern id="full-stack"  x = "0%" y = "0%" width="1" height="1"  >
//                         <IconSVG name="fullstack" x="0" y="0" width="10%" height="10%" /> 
//                     </pattern>
//                     <pattern id="front-end" width="100%" height="100%"  >
//                         <IconSVG name="frontend" x="13" y="10" width="8%" height="10%" /> 
//                     </pattern>
//                     <pattern id="back-end" width="100%" height="100%"  >
//                         <IconSVG name="backend" x="10" y="12" width="10%" height="9%" /> 
//                     </pattern>
//                     <pattern id="database" width="100%" height="100%"  >
//                         <IconSVG name="database" x="10" y="12" width="10%" height="9%" /> 
//                     </pattern>
//                     <pattern id="iot" width="100%" height="100%"  >
//                         <IconSVG name="iot" x="10" y="12" width="10%" height="10%" /> 
//                     </pattern>
//                     <pattern id="web" width="100%" height="100%"  >
//                         <IconSVG name="web" x="11" y="12" width="6%" height="6%" /> 
//                     </pattern>
//                     <pattern id="mobile" width="100%" height="100%"  >
//                         <IconSVG name="mobile" x="10" y="9" width="7%" height="7%" /> 
//                     </pattern>
//                     <pattern id="react" width="100%" height="100%"  >
//                         <IconSVG name="react" x="6" y="8" width="8%" height="9%" /> 
//                     </pattern>
//                     <pattern id="html" width="100%" height="100%"  >
//                         <IconSVG name="html" x="0" y="3" width="12%" height="12%" /> 
//                     </pattern>
//                     <pattern id="css" width="100%" height="100%"  >
//                         <IconSVG name="css" x="0" y="3" width="12%" height="12%" /> 
//                     </pattern>
//                     <pattern id="react-native" width="100%" height="100%"  >
//                         <IconSVG name="react" x="6" y="8" width="8%" height="9%" /> 
//                     </pattern>
//                     <pattern id="android" width="100%" height="100%"  >
//                         <IconSVG name="android" x="3" y="5" width="10%" height="8%" /> 
//                     </pattern>
//                     <pattern id="ios" width="100%" height="100%"  >
//                         <IconSVG name="ios" x="0" y="0" width="13%" height="13%" /> 
//                     </pattern>
//                     <pattern id="nodejs" width="100%" height="100%"  >
//                         <IconSVG name="nodejs" x="0" y="0" width="13%" height="13%" /> 
//                     </pattern>
//                     <pattern id=".net" width="100%" height="100%"  >
//                         <IconSVG name=".net" x="9" y="9" width="7%" height="7%" /> 
//                     </pattern>
//                     <pattern id="mongodb" width="100%" height="100%"  >
//                         <IconSVG name="mongodb" x="0" y="9" width="15%" height="15%" /> 
//                     </pattern>
//                     <pattern id="mysql" width="100%" height="100%"  >
//                         <IconSVG name="mysql" x="2" y="0" width="12%" height="12%" /> 
//                     </pattern>
//                 </defs>
//                 <TagContainer  
//                     data={graph.skills.technologies}
//                     direction={direction}
//                     step={{x:0, y:0}}
//                     container={viewBox}/>
//             </svg>
     
//     );
// };


const TagContainer = props => {
 
    console.log(" props ", props.direction);


    const getCoords = ({index, size}) =>{

        if(props.direction === "column"){

            
            return {
                x:props.step.x,
                y:props.step.y,
                w:props.container.width / props.data.length,
                h:size * props.container.height,
                step:{
                    x:props.step.x,
                    y:props.step.y + size * props.container.height
                }
            }
        } else if(props.direction === "row") {

            return {
                x:0,
                y:0,
                w:size * props.container.width + (index * size * props.container.height),
                h:props.container.height / props.data.length,
                step:{
                    x:props.step.x + size * props.container.width,
                    y:props.step.y + (index * size * props.container.width)
                }
            }

        } else {

console.log(" am nothing direction ");

            return {
                x:0,
                y:0,
                w:1,
                h:1,
                step:{
                    x:0,
                    y:0
                }
            }

        } 
    }
 

    return props.data.map((item, index)=>{
        
        const tagViewBox = getCoords({index, size:item.size});

        console.log(" item ", item.name, " is at ", tagViewBox.step.x, " and ",  tagViewBox.step.y);

        return (
            <g key={index}>
                <TagSVG item={item} tagViewBox={tagViewBox} />
                {item.children.length > 0 
                ? 
                <TagContainer 
                    data={item.children}
                    step={tagViewBox.step} 
                    direction={props.direction}
                    container={props.container}/> 
                : null}                
            </g>
        );
 
    });




}



const TagSVG = (props) => {

    
    
    const tagSize = Math.min(props.tagViewBox.w, props.tagViewBox.h);

    switch(props.item.tagShape){
        case "circle":
            return (
                <svg >
                    <circle />
                </svg>
                );

        case "square":
            
            return (
                <svg
                    width={`${props.tagViewBox.w}`}
                    height={`${props.tagViewBox.h}`}
                    viewBox={`-${props.tagViewBox.w/2} -${props.tagViewBox.h/2} ${props.tagViewBox.w} ${props.tagViewBox.h}`}
                    stroke="black">
                    <rect
                        x={`-${tagSize/2}`}
                        y={`-${tagSize/2}`}
                        width={`${tagSize}`}
                        height={`${tagSize}`}
                        fill="red" />
                </svg>
                );
        default:
            return null; 
    }

}




export const Languages = props => {

    return (
        <div className="skills-div" style={styles.skills}>
            <div>
            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
    );
};



export const Other = props => {

    return (
        <div className="skills-div" style={styles.skills}>
            <div>

            </div>
            <div>
            </div>
            <div>
            </div>
        </div>
    );
};

/////////////////////////////////////////////////////////////
//
//                          Hook
//
////////////////////////////////////////////////////////////////


function useDetectRatio() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      // Add event listener
      window.addEventListener("resize", handleResize);
      
      // Call handler right away so state gets updated with initial window size
      handleResize();
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
  
    return windowSize;
  }



const styles = {

    page: {
        display: 'flex',
        flex:1,
        flexDirection: 'column',        
      },
      spacingRightDiv:{
          width:"20px"     
      },
      skillsDiv: isColumnRatio => ({
        //   width: isColumnRatio ? '90%' : '80%',
      }),

  };
  