
import React, { useState, useEffect } from 'react';
import './header.css';
import { IoMdClose, IoMdMenu } from "react-icons/io";

import { Badge } from '../myBadge';
import { Menu } from '../menu';


import { ReactComponent  as FullStack } from '../svgs/fullstack.svg';

import { 

    FaRegEnvelope,
    FaLinkedin,
    FaGithub,
    FaEnvelope,
} from "react-icons/fa";

import { 
    FiGithub,
    FiLinkedin,
    FiMail
} from "react-icons/fi";

import { IconSVG } from '../svgs'





export const Header = props => {

    
    const [menuHidden, setMenuHidden] = useState(true);

 
    const onSelectMenuOption = (option) => {
        props.navigate(option)
        toggleMenu();
    }

    function toggleMenu(e) {

        if(menuHidden){
            setMenuHidden(false);
        } else {
            setMenuHidden(true);
        }
      }
    

    return (
        <>
            <div className="menu-overlay-div" style={styles.MenuOverlayDiv(menuHidden)}>
                <div className="menu-toggler-div"  style={styles.menuTogglerDiv(menuHidden)} >
                    <button className="menu-toggler-btn" onClick={toggleMenu}>
                        { menuHidden ? <IoMdMenu style={styles.icon}/> :  <IoMdClose style={styles.icon}/> }       
                    </button>
                </div>
                <div className='menu-items-div' style={styles.menuItemsDiv(menuHidden)}>
                 <Menu 
                    items={props.menuItems}
                    selected={props.selectedItem}
                    onItemSelect={onSelectMenuOption}/>
            </div>
            </div>
            <div className='menu-badge-logo-div'>
                <MenuBadge onItemSelect={props.navigate}/>
            </div>
            <div className='menu-options-div'>
                <Menu 
                    items={props.menuItems}
                    selected={props.selectedItem}
                    onItemSelect={props.navigate}/>
            </div>
        </>
    );
};




const MenuBadge = (props) => {



    return (
        <div className="badge-div"
            onClick={()=>props.onItemSelect("home")}>
            <div className="badge-logo-div"> 
                <IconSVG name={'full stack'} width="70%" height="70%"/>
            </div>
            <div className="badge-title-div"> 
                Full Stack
            </div>
        </div>
    )
}



const MenuMyInfo = () => {



    return (
        <>
            <div className='menu-my-name-div'>
                    Ayoub Soud
                </div>                
            <div className='menu-my-title-div'>
                    Full Stack Web & mobile Software Engineer
                </div>                
            <div className='menu-my-socials-div'>
                <span className="menu-social-btn" 
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://www.linkedin.com/in/ayoubsoud/';
                        }}>
                    <FiLinkedin />                    
                </span>
                <span className="menu-social-btn"
                    onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://github.com/techyoob';
                        }}>
                    <FiGithub />
                </span>
                <span className="menu-social-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.href='mailto:techyoob@gmail.com';
                            }}>
                        <FiMail />
                    </span>
            </div>
            
        </>
    )
}

// export const Header = props => {

    
//     const [menuHidden, setMenuHidden] = useState(true);



//     function toggleMenu(e) {

//         if(menuHidden){
//             setMenuHidden(false);
//         } else {
//             setMenuHidden(true);
//         }
//       }
    

//     return (
//         <>
//             <div className="handheld-menu-div" style={styles.handheldMenuDiv(menuHidden)}>
//                 <div className=".menu-toggler-div"  style={styles.menuTogglerDiv(menuHidden)} >
//                     <button className="menu-toggler-btn" onClick={toggleMenu}>
//                         { menuHidden ? <IoMdMenu style={styles.icon}/> :  <IoMdClose style={styles.icon}/> }       
//                     </button>
//                 </div>
//                 <div className='menu-items-div' style={styles.menuItemsDiv(menuHidden)}>
//                     <Menu 
//                         items={props.menuItems}
//                         selected={props.selectedItem}
//                         onItemSelect={props.navigate}/>
//                 </div>
//             </div>
//             <div className='menu-badge-div'>
//             </div>
//             <div className='menu-div' >
//                 <Menu 
//                     items={props.menuItems}
//                     selected={props.selectedItem}
//                     onItemSelect={props.navigate}/>
//             </div>

//         </>
//     );
// };




const styles = {
    icon: {
      color:'#ffffff',
      fontSize:'30px'
    },
    MenuOverlayDiv: menuHidden => ({
        position: menuHidden? "relative" : "absolute",
        width: menuHidden ? "60px" : "45vw",
        height: "100%",
        minHeight: menuHidden ? "100%" : "650px"
    }),
    menuItemsDiv: menuHidden => ({
        display: menuHidden? 'none' : 'flex',

    }),
    menuTogglerDiv: menuHidden => ({
        flex: 1,
        height: menuHidden ?  "100%"  : "10vw",
        width: "100%",
    }),
  };
  
  