// AboutMe.js
import React from 'react';
import '../styles/AboutMe.css';
import logo from '../images/me.svg';

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="profile-section">
        <img
          src= {logo}
          alt="Profile"
          className="profile-image"
        />
        <h1 class='title'>Malka Greenberg</h1>
        <h4 class='title'>Web Developer</h4>
      </div>

      <div className="bio-section">
        <h2 class='about'>About Me</h2>
        <p class='bio'>
          Hi! I'm Malka Greenberg, a passionate web developer with a strong background in creating
          dynamic and user-friendly websites. I love turning ideas into reality through
          clean and efficient code. My goal is to make the web a better place through
          thoughtful and innovative design.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;