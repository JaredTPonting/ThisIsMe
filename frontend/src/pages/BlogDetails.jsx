import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../styles/BlogDetail.css"
import ReactMarkdown from "react-markdown";

function BlogDetails() {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/blog/posts/${id}/`)
            .then(response => {
                setBlog(response.data);
            })
            .catch(err => {
                console.log("Error fetching blog details!", err);
            });
    }, [id]);

    const handleBack = () => {
        navigate("/blog");
    }

    return (
        <div className="blog-details-container">
            <button className='back-button' onClick={handleBack}>
                &larr; Back
            </button>
            {blog ? (
                <div className='blog-content-wrapper'>
                    <div className='blog-header'>
                        <img src={blog.image_url} alt={blog.title} className="blog-details-img" />
                        <h1 className="blog-detail-title">{blog.title}</h1>
                    </div>
                    <div className="blog-markdown-content">
                        <ReactMarkdown>{blog.content}</ReactMarkdown>
                    </div>
                </div>
            ) : (
                <p>Loading blog details...</p>
            )}
        </div>
    );
}

export default BlogDetails;
