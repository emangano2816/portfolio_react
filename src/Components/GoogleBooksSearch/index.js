import React from "react";
import SectionHeader from "../SectionHeader";
import Section from "../Section";
import ContactMe from "../ContactMe";
import images from '../../assets/react_google_books_search.png'

function GoogleBooksSearch() {

    return(
        <div className='main-container'>
            <div className='work-container'>
                <SectionHeader header='Project Details' />
                <div className='project-details'>
                    <h3>(React) Google Books Search</h3>
                    <img src={images} className='project-image' alt='Google Books Search application'/>
                    <h4>Description</h4>
                    <p>The Google Books Search application allows a user to search and save books using the Google Books API. The user is able to easily toggle between searching for and viewing saved books using the links available in the top-right corner of the application.</p>
                    <h4>Technologies Used</h4>
                    <p>React, Express, Node, MongoDB, Heroku</p>
                    <h4>View:</h4>
                    <a href="https://secret-taiga-38025.herokuapp.com/" target="_blank" rel="noreferrer noopener">Application</a> 
                    <a href="https://github.com/emangano2816/google_books_search" target="_blank" rel="noreferrer noopener">GitHub Repository</a>
                </div>
            </div>
            <Section id="contact-me" styles="contactme-container contactme-item" header='Contact Me' component={<ContactMe/>} />
        </div>
    )
}

export default GoogleBooksSearch;