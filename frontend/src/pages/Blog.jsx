import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Blog.css";


function Blog() {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/blog/posts/")
        .then(response => {
            setBlogs(response.data)
            console.log(response.data)
        })
        .catch(err => {
            console.log("There was an error fetching data for blogs!", err);
        });
    }, []);

    return (
        <div className="blogs-container">
            {blogs.length > 0 ? (
                blogs.map((blog, index) => (
                    <div key={index} className="blog-card">
                        <img src={blog.image_url} alt={blog.title} className="blog-img"/>
                        <div className="blog-content">
                            <h3 className="blog-title">{blog.title}</h3>
                            <p className="blog-teaser">{blog.content.substring(0, 100)}...</p>
                        </div>
                    </div>
                ))
            ) : (
                <p className="loading-blogs">Loading Blogs...</p>
            )}
        </div>
    )
}

export default Blog