import { useEffect, useState } from "react"
import React from "react"
import axios from 'axios';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/projects/")
        .then(response => {
            setProjects(response.data);
            console.log(projects)
        })
        .catch(err => {console.log("There was an error fetching the projects!", err);
        });
    }, []);

    return <div>Projects</div>
}

export default Projects