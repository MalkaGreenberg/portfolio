// Portfolio.js
import React from 'react';
import Project from '../components/Project';
import skincare from '../images/skin.png';
import noteTaker from '../images/NoteTaker.png';
import quiz from '../images/Quiz.png';
import AGM from '../images/agm.png';
import weather from '../images/screenshot.png';
import password from '../images/password.png';
import reelDelights from '../images/reelDelights.png';

const Portfolio = () => {
  // Create an array of project data
  const projects = [
    {
      title: 'Reel Delights',
      image: reelDelights,
      deployedLink: 'https://reel-delights.onrender.com/',
      githubLink: 'https://github.com/MalkaGreenberg/reel-delights/',
    },
    {
      title: 'Discover Skin',
      image: skincare,
      deployedLink: 'https://discover-skin-7a59e0f720d4.herokuapp.com/homepage',
      githubLink: 'https://github.com/Clarisagonzalez/Discover-Skin',
    },
    {
      title: 'Note Taker',
      image: noteTaker,
      deployedLink: 'https://notes-tracker-e6327ed268d1.herokuapp.com/',
      githubLink: 'https://github.com/MalkaGreenberg/Note-Taker',
    },
    {
      title: 'E-Commerce',
      image: AGM,
      deployedLink: 'https://anandp95.github.io/AGM_Ecommerce_Shoes/',
      githubLink: 'https://github.com/AnandP95/AGM_Ecommerce_Shoes',
    },
    {
      title: 'Weather Forcast',
      image: weather,
      deployedLink: 'https://malkagreenberg.github.io/Weather-Forecast',
      githubLink: 'https://github.com/MalkaGreenberg/Weather-Forecast',
    },
    {
      title: 'Password Generator',
      image: password,
      deployedLink: 'https://malkagreenberg.github.io/Password-Generator',
      githubLink: 'https://github.com/MalkaGreenberg/Password-Generator',
    },
    {
      title: 'Coding Quiz',
      image: quiz,
      deployedLink: 'https://malkagreenberg.github.io/JavaScript-Quiz/',
      githubLink: 'https://github.com/MalkaGreenberg/JavaScript-Quiz',
    },
    // Add more projects as needed
  ];

  return (
    <div class = 'project-container'>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
};

export default Portfolio;