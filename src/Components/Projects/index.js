import React from "react";
import ProjectButton from "../ProjectButton";

function Projects() {
    return (
        <div className="projects">
            <ProjectButton id='work1' name='(React) Google Books Search' page='googlebookssearch' />
            <ProjectButton id='work2' name='ShareSp@ce' page='sharespace' />
            <ProjectButton id='work3' name='React Employee Directory' page='empdirreact'/>
            <ProjectButton id='work4' name='Movie-Drink Matchmaker' page= 'moviedrinkmatch'/>
            <ProjectButton id='work5' name='Code Quiz' page='codequiz'/>
            <ProjectButton id='work6' name='Weather Dashboard' page='weatherdashboard' />
        </div>
    )
}

export default Projects;