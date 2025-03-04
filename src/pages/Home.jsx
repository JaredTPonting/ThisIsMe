import React from "react";
import "../styles/Home.css";
import profileImage from "../assets/img/kyoto.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-pic" />
      </div>
      <div className="text-boxes">
        <div className="text-box">
          <h2>Header 1</h2>
          <p>
            This is the content for the first text box. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="text-box">
          <h2>Header GAY</h2>
          <p>
            This is the content for the second text box. Suspendisse potenti.
            Curabitur nec.
          </p>
        </div>
        <div className="text-box">
          <h2>Header 3</h2>
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
