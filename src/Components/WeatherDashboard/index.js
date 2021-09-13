import React from "react";
import SectionHeader from "../SectionHeader";
import Section from "../Section";
import ContactMe from "../ContactMe";
import images from '../../assets/Weather_Dashboard_resized.png'

function WeatherDashboard() {

    return(
        <div className='main-container'>
            <div className='work-container'>
                <SectionHeader header='Project Details' />
                <div className='project-details'>
                    <h3>Weather Dashboard</h3>
                    <img src={images} className='project-image' alt='Movie-Drink Matchmaker application'/>
                    <h4>Description</h4>
                    <p>The Weather Dashboard application takes in a user specified city and returns the current and 5-day forecast for that city. The searched cities are “pinned” to the application for reference.  Clicking on the “pinned” cities retrieves the forecast as before.</p>
                    <h4>Technologies Used</h4>
                    <p>HTML, CSS, Bootstrap CSS, JavaScript, Third-party APIs</p>
                    <h4>View:</h4>
                    <a href="https://emangano2816.github.io/weather_dashboard/" target="_blank" rel="noreferrer noopener">Application</a> 
                    <a href="https://github.com/emangano2816/weather_dashboard" target="_blank" rel="noreferrer noopener">GitHub Repository</a>
                </div>
            </div>
            <Section id="contact-me" styles="contactme-container contactme-item" header='Contact Me' component={<ContactMe/>} />
        </div>
    )
}

export default WeatherDashboard;