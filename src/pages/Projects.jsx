import { useEffect, useState } from "react";
import React from "react";
import ReactMarkdown from "react-markdown";
import Modal from "react-modal";
import '../styles/Projects.css';
import { getProjects, getTags } from '../services/api.js'

Modal.setAppElement('#root');

function Projects() {
    const [projects, setProjects] = useState([]);
    const [tags, setTags] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const fetchTags = async () => {
        const data = await getTags();
        console.log(data);
        setTags(data);
    }

    const fetchProjects = async () => {
        const data = await getProjects();
        console.log(data);
        setProjects(data);
    }

    useEffect(() => {
        fetchProjects();
        fetchTags();
    }, []);

    const openModal = (project) => {
        setSelectedProject(project);
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setSelectedProject(null);
        setModalIsOpen(false);
    };

    const handleTagClick = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t != tag));
        } else {
            setSelectedTags([...selectedTags, tag])
        }
    };

    const filteredProjects = selectedTags.length > 0
        ? projects.filter(project =>
            selectedTags.every(tag => project.tags.map(t => t.name).includes(tag))
        )
        : projects;

    return (
        <div className="projects-container">
                <div className="tags-container">
                    {tags.map(tag => (
                        <button
                            key={tag.name}
                            onClick={() => handleTagClick(tag.name)}
                            className={selectedTags.includes(tag.name) ? "selected-tag" : "unselected-tag"}
                        >
                            {tag.name}
                        </button>
                    ))}
                </div>

                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <div key={index} className="project-card" onClick={() => openModal(project)}>
                            <img src={project.image} alt={project.title} className="project-image"/>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <a href={project.github_url} className="project-link" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        </div>
                    ))
                ) : (
                    <p className="temp-loading">Please wait for backend to warm up!</p>
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
                            <a href={selectedProject.live_url} target="_blank" rel="noopener noreferrer">Demo</a>
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
