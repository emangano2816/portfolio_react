import React from "react";
import Section from "../Section/index.js";
import SectionHeader from "../SectionHeader/index.js";
import AboutMe from "../AboutMe/index.js";
import '../Main/style.css'

function Main() {

    return(
        <main class="main-container">
            <Section id="aboutme" style="aboutme-container aboutme-item" />
        </main>
    )
}

export default Main;