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
            Hi, I’m Jared — a Merchandising Data Scientist with a background in mathematics and a love for building things from scratch. Whether it’s developing full-stack apps or wrangling raw data into clear, actionable insights, I enjoy the process of creating something useful from the ground up.<br /><br />

I’m fluent in Python, SQL, and Java, and always curious to pick up new tools and skills along the way. Outside of work, you’ll usually find me at the gym, making something with my hands through arts and crafts, or exploring new places while travelling. I like to keep things fun and upbeat, both in and out of work.
          </p>
        </div>
        <div className="text-box">
          <h2>About this website</h2>
          <p>
            This website is something I’ve built and deployed myself — a personal space to host and showcase the projects I’ve worked on, and to have something I can iterate on and grow over time. It’s not just for recruiters (though hi if you’re one!) — it’s also for me, to track what I’ve done and where I want to go next.<br /><br />

Right now, the site includes a project portfolio and my CV. There’s also a blog section under the hood — I’ve built the structure, but I’m not quite in the blogging mindset yet. Everything here is built with React and Django, both of which were new technologies to me when I started this site — so even though I’m not shouting from the rooftops about it, it’s been a good learning experience.
          </p>
        </div>
        <div className="text-box">
          <h2>Experience and eduication etc </h2>
          <p>
            I currently work as a Merchandising Data Scientist at JD Sports Fashion PLC, where I’ve been for the past three years. I started out as a Junior and grew into my current role, working across a range of projects involving retail data, SQL pipelines, and full-stack development.<br /><br />

I hold an Integrated Master’s in Mathematics (MSci) from Lancaster University, which gave me a solid foundation in analytical thinking and problem solving that I bring into every project I take on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
