import React from "react";
import "../styles/Home.css";
import profileImage from "../assets/img/hamburg.jpg";

const Home = () => {
  return (
    <div className="home-container">
        <div className="intro-box">
          <div className="profile-section">
            <img src={profileImage} alt="Profile" className="profile-pic" />
          </div>
          <div>
              <h1>Welcome!</h1>
          </div>
        </div>
      <div className="text-boxes">
        <div className="text-box">
          <h2>About me</h2>
          <p>
            This is the content for the first text box. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="text-box">
          <h2>About this website</h2>
          <p>
            This is the content for the second text box. Suspendisse potenti.
            Curabitur nec.
          </p>
        </div>
        <div className="text-box">
          <h2>Experience and eduication etc </h2>
          <p>
            This is the content for the third text box. Praesent vel magna
            efficitur, aliquet massa at, placerat nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
