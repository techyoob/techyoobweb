

import React, { useRef, useEffect, useState } from 'react';
import './contact.css';

import contacts from '../../assets/jsons/contacts.json'
import { IconSVG, getSVG } from '../../assets/svgs'





export const Contact = props => {

  


    return (
        <div className="contacts">
            <div className="contact-abstract-background-top">
                <IconSVG fill="#a6afb6" name="wave background" x="0" y="0" width="100%" height="100%"/>
            </div>
            <section className="contact_list" >
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
        </div>

    );
};
