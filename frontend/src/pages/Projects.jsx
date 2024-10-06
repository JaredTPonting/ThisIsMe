import { useEffect, useState } from "react";
import React from "react";
import ReactMarkdown from "react-markdown";
import Modal from "react-modal";
import axios from 'axios';
import '../styles/Projects.css';

Modal.setAppElement('#root');

function Projects() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/projects/projects")
        .then(response => {
            setProjects(response.data);
            
        })
        .catch(err => {
            console.log("There was an error fetching the projects!", err);
        });
    }, []);


    const openModal = (project) => {
        setSelectedProject(project);
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setSelectedProject(null);
        setModalIsOpen(false);
    };

    return (
        <div className="projects-container">
                {projects.length > 0 ? (
                    projects.map((project, index) => (
                        <div key={index} className="project-card" onClick={() => openModal(project)}>
                            <img src={project.image} alt={project.title} className="project-image"/>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <a href={project.github_url} className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        </div>
                    ))
                ) : (
                    <p className="temp-loading">Loading Projects...</p>
                )}

                {/* Modal */}
                {selectedProject && (
                    <Modal 
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className="modal"
                    overlayClassName="overlay"
                >
                    <button className="close-button" onClick={closeModal}> &times; </button>
                    <div className="modal-body">
                        <div className="modal-content-left">
                            <h2>{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                        </div>
                        <div className="modal-content-right">
                            <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                            <a href={selectedProject.github_url} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                    <div className="modal-markdown">
                        <ReactMarkdown>{selectedProject.content}</ReactMarkdown>
                    </div>
                </Modal>
                )}
        </div>
    );
}

export default Projects;
