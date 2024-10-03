import React from "react"
import "../styles/Home.css"


const Home = () => {
    return (
      <div className="home-container">
        <div className="description-box">
          <h2>Hello, I'm Jared</h2>
          <p>Welcome to my portfolio website! I'm a Python developer and data professional with experience in software engineering, data analysis, and networking. Explore my projects, blog, and more.</p>
        </div>
        <div className="image-container">
          <img src="../src/assets/img/kyoto.jpg" alt="Your Name" className="profile-pic" />
        </div>
      </div>
    );
  };

export default Home