import React from "react";
import ProjectButton from "../ProjectButton";

function Projects() {
    return (
        <div className="projects">
            <ProjectButton id='work1' name='ShareSp@ce' />
            <ProjectButton id='work2' name='Movie-Drink Matchmaker' />
            <ProjectButton id='work3' name='Code Quiz' />
            <ProjectButton id='work4' name='Weather Dashboard' />
            <ProjectButton id='work5' name='Workday Scheduler' />
        </div>
    )
}

export default Projects;