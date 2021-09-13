import React from "react";
import SectionHeader from "../SectionHeader";
import Section from "../Section";
import ContactMe from "../ContactMe";
import images from '../../assets/workday_scheduler_resized.png'

function WorkdayScheduler() {

    return(
        <div className='main-container'>
            <div className='work-container'>
                <SectionHeader header='Project Details' />
                <div className='project-details'>
                    <h3>Workday Scheduler</h3>
                    <img src={images} className='project-image' alt='Movie-Drink Matchmaker application'/>
                    <h4>Description</h4>
                    <p>When the application is opened, the current date is displayed at the top. As the user scrolls down, the user will see that each timeblock is color coded as past (grey), present (red), and future (green). The user is able to create an event for any given timeblock by clicking into the text area and including text. Clicking the blue save button saves the user's event into local storage. If the user refreshes the page or revisits the application in the same day, the events that were saved persist on the page. When the user opens the application on a new day, the timeblock events reset.</p>
                    <h4>Technologies Used</h4>
                    <p>HTML, CSS, Bootstrap CSS, JavaScript</p>
                    <h4>View:</h4>
                    <a href="https://emangano2816.github.io/work_day_scheduler/" target="_blank" rel="noreferrer noopener">Application</a> 
                    <a href="https://github.com/emangano2816/work_day_scheduler" target="_blank" rel="noreferrer noopener">GitHub Repository</a>
                </div>
            </div>
            <Section id="contact-me" styles="contactme-container contactme-item" header='Contact Me' component={<ContactMe/>} />
        </div>
    )
}

export default WorkdayScheduler;