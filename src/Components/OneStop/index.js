import React from "react";
import SectionHeader from "../SectionHeader";
import Section from "../Section";
import ContactMe from "../ContactMe";
import images from '../../assets/onestop.png'

function OneStop() {

    return(
        <div className='main-container'>
            <div className='work-container'>
                <SectionHeader header='Project Details' />
                <div className='project-details'>
                    <h3>OneStop</h3>
                    <img src={images} className='project-image' alt='OneStop application'/>
                    <h4>Description</h4>
                    <p>OneStop provides travelers with a single spot to store information about an upcoming trip. Confirmation information for flights, car rentals, hotel reservations, and dining reservations for a any trip can be accessed with the click of one button! Register for an account, login, and take advantage of this convenience today.</p>
                    <h4>Technologies Used</h4>
                    <p>MySQL, Express, React, Node, Heroku</p>
                    <h4>View:</h4>
                    <a href="https://onestop-us.herokuapp.com/" target="_blank" rel="noreferrer noopener">Application</a> 
                    <a href="https://github.com/Errollinsjr/OneStop" target="_blank" rel="noreferrer noopener">GitHub Repository</a>
                </div>
            </div>
            <Section id="contact-me" styles="contactme-container contactme-item" header='Contact Me' component={<ContactMe/>} />
        </div>
    )
}

export default OneStop;