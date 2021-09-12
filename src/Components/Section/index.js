import React from "react";
import SectionHeader from '../SectionHeader/index.js'


function Section(props) {
    return(
        <section id={props.id} className={props.styles}>
            <SectionHeader header={props.header} />
            {props.component}

        </section>
    )
}

export default Section;