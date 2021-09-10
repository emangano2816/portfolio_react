import React from "react";
import Section from "../Section/index.js";
import AboutMe from "../AboutMe/index.js";
import Projects from "../Projects/index.js";
import ContactMe from "../ContactMe/index.js";
import '../Main/style.css'

function Main() {

    return(
        <main class="main-container">
            <Section id="aboutme" style="aboutme-container aboutme-item" header='About Me' component={<AboutMe/>} />
            <Section id="work" style="work-container work-item" header='Work' component={<Projects/>} />
            <Section id="contact-me" style="contactme-container contactme-item" header='Contact Me' component={<ContactMe/>} />
        </main>
    )
}

export default Main;