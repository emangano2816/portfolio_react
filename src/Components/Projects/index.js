import React from "react";
import ProjectButton from "../ProjectButton";

function Projects() {
    return (
        <div className="projects">
            <ProjectButton id='work1' name='ShareSp@ce' page='sharespace' />
            <ProjectButton id='work2' name='React Employee Directory' />
            <ProjectButton id='work3' name='Movie-Drink Matchmaker' page= 'moviedrinkmatch'/>
            <ProjectButton id='work4' name='Code Quiz' page='codequiz'/>
            <ProjectButton id='work5' name='Weather Dashboard' />
            <ProjectButton id='work6' name='Workday Scheduler' />
        </div>
    )
}

export default Projects;