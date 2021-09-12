import React from "react";
import { useHistory } from 'react-router-dom';

function ProjectButton(props) {
    const history = useHistory();

    const handleRoute =  () => {
        console.log('test');
        history.push('/projectdetails');
    }

    return (
        <button className="project-item" id={props.id} onClick={handleRoute}>
            <h2>{props.name}</h2>
        </button>
    )
}

export default ProjectButton;