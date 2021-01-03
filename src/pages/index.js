
import React, { useState, useRef, useEffect } from 'react';


import { 
    FaChevronDown,
    FaChevronUp
} from "react-icons/fa";


import './pages.css';
import { Home } from './home';
import { About } from './about';
// import { Experience } from './pages/experience';
// import { Projects } from './pages/projects';
// import { Skills } from './pages/skills';

// import bg from './bg.png';

// import background from './background.jpg';

export const Pages = props => {
   
    const pagesBoxRef = useRef(null);
    const [isColumnRatio, setIsColumnRatio] = useState(false);
   

    useEffect ( () => {

        function getRatioState() {

            if(pagesBoxRef.current){

                const canvas =  pagesBoxRef.current.getBoundingClientRect()
                const ratio = canvas.width / canvas.height;
                
                // console.log(" width is ", canvas.width, " height ", canvas.height, " ratio is ", ratio);

                if(ratio <  0.72){
                    setIsColumnRatio(true)
                } else {
                    setIsColumnRatio(false)
                }
                
            }

        }
          
          window.addEventListener("resize", getRatioState);
          getRatioState();
          return () => window.removeEventListener("resize", getRatioState);
      
    }, []);


    

    const handleScroll = (e) =>{
        
        console.log("scrolling 11111..");    
    }

    return (
        <div 
            className="pages-container-div" 
            ref={pagesBoxRef}
            onScroll={handleScroll}>
            {props.menuItems.map( (item, index) => {

                return (
                    <PageLoader 
                        name={item}
                        key={item}
                        isColumnRatio={isColumnRatio}
                        {...props}/>
                );
            })}
        </div>
    );
};






const PageLoader = props => {

    
    switch (props.name) {
        case 'home':
            return (
                <PageProvider  {...props} >
                    <Home {...props} />
                </PageProvider>
            );
        case 'about':
            return (
                <PageProvider  {...props} >
                    <About {...props} />
                </PageProvider>
            );
//         case 'Experience':
//             return (
//                 <PageProvider {...props} >
//                     <Experience  {...props} />
//                 </PageProvider>
//             );
//         case 'Projects':            
//             return (
//                 <PageProvider {...props} >
//                     <Projects  {...props} />
//                 </PageProvider>
//             );
//         case 'Skills':            
//             return (
//                 <PageProvider {...props} >
//                     <Skills  {...props} />
//                 </PageProvider>
//             );
//         case 'Education':            
//             return (
//                 <PageProvider {...props} >
//                     <Education  {...props} />
//                 </PageProvider>
//             );
//         case 'Contact':            
//             return (
//                 <PageProvider {...props} >
//                     <Contact  {...props} />
//                 </PageProvider>
//             );
//         case 'Blog':            
//             return (
//                 <PageProvider {...props} >
//                     <Blog  {...props} />
//                 </PageProvider>
//             );
//         case 'Resume':            
//             return (
//                 <PageProvider {...props} >
//                     <Resume  {...props} />
//                 </PageProvider>
//             );
        default:
            return null;
    }
    
}



export const PageProvider = props => {

    const pageRef = useRef(null)
    const [isCollapsed, setIsCollapsed] = useState(true);


    const collapsePage = () => {
        setIsCollapsed(!isCollapsed);

        // TODO: scroll to uncollapsed page
        
    }

    useEffect( () => {
        pageRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [isCollapsed])

// console.log(" PageProvider props are ", props);

    return (
        <div 
            className={`page`}
            ref={pageRef}>
             <span 
                className={`${props.name}-page-header`}
                onClick={collapsePage}>
                <div className="title-div">
                    <h1>
                        {` ${props.name.toUpperCase()} `}
                    </h1>
                </div>
                <div 
                    className="collapse-icon-div"
                    style={styles.collapseIconDiv(props.isColumnRatio)}>
                     {isCollapsed ? <FaChevronDown /> : <FaChevronUp /> }
                </div>
             </span>
             <div className={'page-body'} style={props.name != "home" ? styles.pageBody(props.isColumnRatio && isCollapsed) : null}>
                {props.children}
             </div>
        </div>
    );
};


///////////////////////////////////////////////////
//
//      Portfolio Pages
//
//////////////////////////////////////////////////////











export const Education = props => {
    return (
        <div className="education" style={styles.page}>

        </div>
    );
};


export const Contact = props => {
    return (
        <div className="contact" style={styles.page}>

        </div>
    );
};


export const Blog = props => {
    return (
        <div className="blog" style={styles.page}>

        </div>
    );
};


export const Resume = props => {
    return (
        <div className="resume" style={styles.page}>

        </div>
    );
};





const styles = {
    pageBody: isCollapsed => ({
        display: isCollapsed ? 'none' : 'flex',
    }),
    collapseIconDiv: isColumnRatio => ({
        display: isColumnRatio ? 'flex' : 'none',
    }),
  };
  