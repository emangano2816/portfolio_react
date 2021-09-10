import React from "react";

function ProjectButton(props) {
    return (
        <button className="project-item" id={props.id} >
        <h2>{props.name}</h2>
    </button>
    )
}

export default ProjectButton;