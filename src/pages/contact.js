

import React, { useRef, useEffect, useState } from 'react';
import './contact.css';

import contacts from '../data/contacts.json'
import { IconSVG } from '../svgs'





export const Contact = props => {

  


    return (
        <section className="contacts">
            {contacts.map((option, index)=>{
                return (
                    <span
                        className="contact-option-div" 
                        key={index}
                        onClick={(e) => {
                            window.location.href=`${option.path}`;
                            }}>
                        <div className="contact-icon-div">
                            <IconSVG name={option.name} x="0" y="0" width="90%" height="90%" />          
                        </div>
                        <span className="contact-link-div">
                            <a>{option.link}</a>
                        </span>
                    </span>
                )
            })}
        </section>
    );
};
