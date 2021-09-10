import React from "react";
import SectionHeader from '../SectionHeader/index.js'
import AboutMe from "../AboutMe/index.js";


function Section(props) {
    return(
        <section id={props.id} className={props.style}>
            <SectionHeader header={props.header} />
            {props.component}

        </section>
    )
}

export default Section;