import React from 'react';
import './style.css';

function NavList() {
    return (
        <ul>
            <li>
                <a href="/#aboutme">About Me</a>
            </li>
            <li>
                <a href="/#work">Work</a>
            </li>
            <li>
                <a href="/#contact-me">Contact Me</a>
            </li>
            <li>
                <a href={process.env.PUBLIC_URL +"/assets/Resume_Coding_20210812.pdf"} target="_blank" rel="noreferrer noopener" >Resume</a>
            </li>
        </ul> 
    )
}

export default NavList;