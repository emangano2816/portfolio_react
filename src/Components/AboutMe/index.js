import React from "react";
import headshot from '../../assets/2021_headshot2.jpg'


function AboutMe() {
    return (
        <div className= "aboutme-info-container">
            <p>I am an experienced business professional with expertise in gathering and interpreting business requirements and developing, maintaining, and executing test plans.  I thoroughly enjoy the challenge of solving client problems and making application processes as user-friendly and efficient as possible.</p>
            <img src={headshot} alt="About me section headshot" className="aboutme-headshot"/>
            <p>With my background in software development a coding course was not farfetched.  I am eager to apply my past experience and utilize my new coding skills to develop responsive, mobile-first web applications that are efficient and user-friendly.</p>
        </div>
    )
}

export default AboutMe;