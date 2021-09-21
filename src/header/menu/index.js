
import React from 'react';
import './menu.css';


import { 
    FaBriefcase,
    FaUser,
    FaChartBar,
    FaPuzzlePiece,
    FaGraduationCap,
    FaEnvelope,
    FaPen,
    FaRegFileAlt,
} from "react-icons/fa";





export const Menu = props => {


    const onItemSelect = index => {
        
        if(index==="resume"){
            window.open(`https://drive.google.com/open?id=1iFuqiINGiMNcVWZfso2ziz20M0nmc6Po`);
        } else {
            props.onItemSelect(index)

        }
    }

    return (
        <div className="main-menu" >
            {props.items.map( (item, index) => {
                return (
                     item === "home" ? null :             
                    <div className="menu-item"
                        key={index}
                        onClick={() => onItemSelect(item)}
                        style={styles.menuItem(item === props.selected ? true : false )}>
                            <div className={'item-icon-div'} >
                                <MenuIcons
                                    name={item}/>
                            </div>
                            <div className={'item-name-div'} >
                                <h6> {`${item}`} </h6>
                            </div>                       
                    </div>
                );
            })}
        </div>
    );
};








const MenuIcons = props => {

    switch (props.name) {
        case 'about':
            return (
                <FaUser />
            );
        case 'experience':
            return (
                <FaBriefcase  />
            );
        case 'projects':            
            return (
                <FaPuzzlePiece  />
            );
        case 'skills':            
            return (
                <FaChartBar />
            );
        case 'education':            
            return (
                <FaGraduationCap  />
            );
        case 'contact':            
            return (
                <FaEnvelope  />
            );
        case 'blog':            
            return (
                <FaPen />
            );
        case 'resume':            
            return (
                <FaRegFileAlt />
            );
        default:
            return null;
    }

}


const styles = {

    menuItem: selected => ({
        flexDirection: 'row',
    }),
    itemIconDiv: {
        flex:1,
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        
    },
    itemNameDiv: {
        flex:3,
        display: 'flex',
        color:'inherit',
        alignItems: 'center',
        paddingLeft:10,
    }
  };
  