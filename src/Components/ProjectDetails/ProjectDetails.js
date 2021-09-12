import React from "react";
import SectionHeader from "../SectionHeader";
import images from '../../assets/sharespace_resize.png'

function ProjectDetails() {

    return(
        <div className='main-container'>
            <div className='work-container'>
                <SectionHeader header='Project Details' />
                <div className='project-details'>
                    <h3>ShareSp@ce</h3>
                    <img src={images} className='project-image'/>
                    <h4>Description</h4>
                    <p>An application for sharing your favorite pictures, videos, and GIFs about 10 of the most popular subjects on the web.  Users must create an account and log in, in order to post ideas.</p>
                    <h4>Technologies Used</h4>
                    <p>HTML, CSS, JavaScript, MySQL, NodeJS, Heroku</p>
                    <h4>View: </h4>
                    <a href="https://evening-sea-74828.herokuapp.com/" target="_blank" rel="noreferrer noopener">Application</a> 
                    <a href="https://github.com/Errollinsjr/ShareSpaceProjectTwo" target="_blank" rel="noreferrer noopener">GitHub Repository</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;