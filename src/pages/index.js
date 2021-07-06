
import React, { useState, useRef, useEffect } from 'react';


import { 
    FaChevronDown,
    FaChevronUp
} from "react-icons/fa";


import './pages.css';
import { Home } from './home';
import { About } from './about';
import { Experience } from './experience';
import { Projects } from './projects';
import { Skills } from './skills';
import { Education } from './education';
import { Contact } from './contact';
import { Blog } from './blog';



export const Pages = props => {
   
    const pagesBoxRef = useRef(null);
    const [isColumnRatio, setIsColumnRatio] = useState(false);
   

    useEffect ( () => {

        function getRatioState() {

            if(pagesBoxRef.current){

                const canvas =  pagesBoxRef.current.getBoundingClientRect()
                const ratio = canvas.width / canvas.height;
                
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
                        key={index}
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
        case 'experience':
            return (
                <PageProvider {...props} >
                    <Experience  {...props} />
                </PageProvider>
            );
        case 'projects':            
            return (
                <PageProvider {...props} >
                    <Projects  {...props} />
                </PageProvider>
            );
        case 'skills':            
            return (
                <PageProvider {...props} >
                    <Skills  {...props} />
                </PageProvider>
            );
        case 'education':            
            return (
                <PageProvider {...props} >
                    <Education  {...props} />
                </PageProvider>
            );
        case 'contact':            
            return (
                <PageProvider {...props} >
                    <Contact  {...props} />
                </PageProvider>
            );
        case 'blog':            
            return (
                <PageProvider {...props} >
                    <Blog  {...props} />
                </PageProvider>
            );
        // case 'resume':            
        //     return (
        //         <PageProvider {...props} >
        //             <Resume  {...props} />
        //         </PageProvider>
        //     );
        default:
            return null;
    }
    
}



export const PageProvider = props => {

    const pageRef = useRef(null)
    const [isCollapsed, setIsCollapsed] = useState(false);


    const collapsePage = () => {
        setIsCollapsed(!isCollapsed);
             
    }

    useEffect( () => {
        if(isCollapsed===false){
            pageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        
    }, [isCollapsed])

    useEffect( () => {
        
        if(props.selectedItem === props.name){
            pageRef.current.scrollIntoView({ behavior: 'smooth' });
        }

    }, [props.selectedItem])


    return (
        <div 
            className={`page`}
            ref={pageRef}>
             <span className={`${props.name}-page-header`}>
                <div className="title-div">
                    <h1>
                        {`${props.name.toUpperCase()}`}
                    </h1>
                </div>
             </span>
             <div className={'page-body'} 
                style={props.name != "home" ? styles.pageBody(props.isColumnRatio && isCollapsed) : {paddingTop:"0px", paddingBottom:"0px"}}>
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










const styles = {
    pageBody: isCollapsed => ({
        display: isCollapsed ? 'none' : 'flex',
    }),
    collapseIconDiv: isColumnRatio => ({
        display: isColumnRatio ? 'flex' : 'none',
    }),
  };
  