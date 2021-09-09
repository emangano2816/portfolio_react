import React from 'react';
import '../List/style.css';

function List() {
    return (
        <ul>
            <li>
                <a href="#aboutme">About Me</a>
            </li>
            <li>
                <a href="#work">Work</a>
            </li>
            <li>
                <a href="#contact-me">Contact Me</a>
            </li>
            <li>
                <a href="./assets/documents/Resume_Coding_20210812.pdf" target="_blank" rel="noreferrer noopener" >Resume</a>
            </li>
        </ul> 
    )
}

export default List;