import React from "react";
import SectionHeader from "../SectionHeader";
import Section from "../Section";
import ContactMe from "../ContactMe";
import images from '../../assets/Code_Quiz_resized.png'

function CodeQuiz() {

    return(
        <div className='main-container'>
            <div className='work-container'>
                <SectionHeader header='Project Details' />
                <div className='project-details'>
                    <h3>Code Quiz</h3>
                    <img src={images} className='project-image' alt='Movie-Drink Matchmaker application'/>
                    <h4>Description</h4>
                    <p>The Code Quiz tests a user’s JavaScript knowledge. The user has 30 seconds to answer 10 questions.  Each correct answer earns 5 points. Each incorrect answer deducts 10 seconds from the timer.  When time is up or all questions have been answered the user is able to save their score and initials to the high scores page of the application.</p>
                    <h4>Technologies Used</h4>
                    <p>HTML, CSS, JavaScript</p>
                    <h4>Which would you like to view?</h4>
                    <a href="https://emangano2816.github.io/code_quiz/" target="_blank" rel="noreferrer noopener">Application</a> 
                    <a href="https://github.com/emangano2816/code_quiz" target="_blank" rel="noreferrer noopener">GitHub Repository</a>
                </div>
            </div>
            <Section id="contact-me" styles="contactme-container contactme-item" header='Contact Me' component={<ContactMe/>} />
        </div>
    )
}

export default CodeQuiz;