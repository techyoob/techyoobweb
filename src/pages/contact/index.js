

import React, { useRef, useEffect, useState } from 'react';
import './contact.css';

import contacts from '../../assets/jsons/contacts.json'
import { IconSVG } from '../../assets/svgs'





export const Contact = props => {

  


    return (
        <section className="contacts">
            {contacts.map((option, i)=>{
                return (
                    <div className="contact-option-div" 
                        key={i}
                        onClick={(e) => {
                            window.location.href=`${option.path}`;
                            }}>
                        <div className="contact-icon-div">
                            <IconSVG fill="#52616b" name={option.name} x="0" y="0" width="90%" height="90%" />          
                        </div>
                        <span className="contact-link-div">
                            <a>{option.link}</a>
                        </span>
                    </div>
                )
            })}
        </section>
    );
};
