import React from "react";
import SectionHeader from "../SectionHeader";
import Section from "../Section";
import ContactMe from "../ContactMe";
import images from '../../assets/emp_react_app.png'

function EmpDirReact() {

    return(
        <div className='main-container'>
            <div className='work-container'>
                <SectionHeader header='Project Details' />
                <div className='project-details'>
                    <h3>React Employee Directory</h3>
                    <img src={images} className='project-image' alt='React Employee Directory application'/>
                    <h4>Description</h4>
                    <p>The React Employee Directory was developed with React.  The application allows the user to see details for their employees (sourced from a random user API).  The user is able to sort the list of employees by last name and email and is able to filter the list by gender.</p>
                    <h4>Technologies Used</h4>
                    <p>HTML, CSS, JavaScript, React</p>
                    <h4>View:</h4>
                    <a href="https://emangano2816.github.io/employee_directory_react/" target="_blank" rel="noreferrer noopener">Application</a> 
                    <a href="https://github.com/emangano2816/employee_directory_react" target="_blank" rel="noreferrer noopener">GitHub Repository</a>
                </div>
            </div>
            <Section id="contact-me" styles="contactme-container contactme-item" header='Contact Me' component={<ContactMe/>} />
        </div>
    )
}

export default EmpDirReact;