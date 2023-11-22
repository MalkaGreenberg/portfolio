// Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';


const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><NavLink  to="/"  >About Me</NavLink ></li>
        <li><NavLink  to="/portfolio" >Portfolio</NavLink ></li>
        <li><NavLink  to="/contact" >Contact</NavLink ></li>
        <li><NavLink  to="/resume" >Resume</NavLink ></li>
      </ul>
    </nav>
  );
};

export default Navigation;