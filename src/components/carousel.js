


import React, { useState, useRef, useEffect } from 'react';
import './carousel.css'


import { 
    FaAngleDoubleLeft,
    FaAngleDoubleRight,
} from "react-icons/fa";


const Carousel = (props) => {

    const carouselItemsRefs = useRef([])
    const [scrollStep, setScrollStep] = useState(0)


    const onScrollCarousel = (direction) => {



        
        console.log("sasas ", carouselItemsRefs.current[scrollStep].getBoundingClientRect());
        // carouselItemsRefs.current[scrollStep]
        // const test  = useOnScreen(ref)
        // console.log(" am i on screen ", useOnScreen(carouselItemsRefs.current[scrollStep]));
        if(direction==='right'){
            setScrollStep((scrollStep + 1 ) % props.data?.length)

        }
    }
    

    useEffect(()=>{

        carouselItemsRefs.current[scrollStep].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })

    }, [scrollStep])
    
    return (
        <div className="carousel-container">
            <div className="scroll-button"
                onMouseDown={()=>console.log("left muose down")}>
                <FaAngleDoubleLeft />
            </div>
            <div className="carousel-items-container">
                {props.data?.map((item, i)=>{
                    
                    return (
                        <div className="carousel-item-box"
                            key={i}
                            ref={(refItem) => carouselItemsRefs.current[i] = refItem}>
                            {i}
                        </div>
                    )
                })}
            </div>
            <div className="scroll-button"
                onMouseDown={()=>onScrollCarousel('right')}>
                <FaAngleDoubleRight />
            </div>
        </div>
        );
}

export default Carousel;

