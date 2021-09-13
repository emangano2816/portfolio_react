import React from "react";
import SectionHeader from "../SectionHeader";
import Section from "../Section";
import ContactMe from "../ContactMe";
import images from '../../assets/project1_moviedrink_matchmaker_resized.png'

function MovieDrinkMatch() {

    return(
        <div className='main-container'>
            <div className='work-container'>
                <SectionHeader header='Project Details' />
                <div className='project-details'>
                    <h3>Movie-Drink Matchmaker</h3>
                    <img src={images} className='project-image' alt='Movie-Drink Matchmaker application'/>
                    <h4>Description</h4>
                    <p>Worked collaboratively with 4 peers to develop a responsive, mobile-first Movie-Drink Matchmaker application.  The user selects a movie genre and drink type and the application returns movies and drinks meeting the criteria.  The user is able to scroll through suggested movies and drinks until finding a favorite combination.  The favorite combination is saved to local storage and persists on the favorites page of the application.</p>
                    <h4>Technologies Used</h4>
                    <p>HTML, CSS, Bulma CSS, JavaScript, Third-party APIs</p>
                    <h4>Which would you like to view?</h4>
                    <a href="https://evperkinsjr.github.io/movie-drink-matchmaker/" target="_blank" rel="noreferrer noopener">Application</a> 
                    <a href="https://github.com/evperkinsjr/movie-drink-matchmaker" target="_blank" rel="noreferrer noopener">GitHub Repository</a>
                </div>
            </div>
            <Section id="contact-me" styles="contactme-container contactme-item" header='Contact Me' component={<ContactMe/>} />
        </div>
    )
}

export default MovieDrinkMatch;