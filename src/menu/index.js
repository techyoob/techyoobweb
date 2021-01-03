
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
        props.onItemSelect(index)
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
                <FaUser 
                    style={{ color: '#C26868'}}/>
            );
        case 'experience':
            return (
                <FaBriefcase  
                    style={{ color: '#3b59b3'}}/>
            );
        case 'projects':            
            return (
                <FaPuzzlePiece 
                    style={{ color: '#5a968c'}}/>
            );
        case 'skills':            
            return (
                <FaChartBar 
                    style={{ color: '#b9babd'}}/>
            );
        case 'education':            
            return (
                <FaGraduationCap 
                    style={{ color: '#97c1dc'}}/>
            );
        case 'contact':            
            return (
                <FaEnvelope
                    style={{ color: '#e7a941'}}/>
            );
        case 'blog':            
            return (
                <FaPen
                    style={{ color: '#e8713d'}}/>
            );
        case 'resume':            
            return (
                <FaRegFileAlt
                    style={{ color: '#60448f'}}/>
            );
        default:
            return null;
    }

}


const styles = {

    menuItem: selected => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
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
  