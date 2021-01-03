
import React, { useState, useEffect } from 'react';
import './header.css';
import { IoMdClose, IoMdMenu } from "react-icons/io";

import { Badge } from '../myBadge';
import { Menu } from '../menu';
export const Header = props => {

    
    const [menuHidden, setMenuHidden] = useState(true);



    function toggleMenu(e) {

        if(menuHidden){
            setMenuHidden(false);
        } else {
            setMenuHidden(true);
        }
      } 
    

    return (
        <>
            <div className="handheld-menu-div" style={styles.handheldMenuDiv(menuHidden)}>
                <div className=".menu-toggler-div"  style={styles.menuTogglerDiv(menuHidden)} >
                    <button className="menu-toggler-btn" onClick={toggleMenu}>
                        { menuHidden ? <IoMdMenu style={styles.icon}/> :  <IoMdClose style={styles.icon}/> }       
                    </button>
                </div>
                <div className='menu-items-div' style={styles.menuItemsDiv(menuHidden)}>
                    <Menu 
                        items={props.menuItems}
                        selected={props.selectedItem}
                        onItemSelect={props.navigate}/>
                </div>
            </div>
            <div className='title-badge'>
                <Badge navigate={props.navigate}/>
            </div>
            <div className='menu-div' >
                <Menu 
                    items={props.menuItems}
                    selected={props.selectedItem}
                    onItemSelect={props.navigate}/>
            </div>

        </>
    );
};




const styles = {
    icon: {
      color:'#ffffff',
      fontSize:'30px'
    },
    handheldMenuDiv: menuHidden => ({
        position: menuHidden? "relative" : "absolute",
        width: menuHidden ? "60px" : "45vw",
        height: "100%",
        minHeight: menuHidden ? "100%" : "650px",
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
  
  