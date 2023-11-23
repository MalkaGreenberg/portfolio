// Resume.js
import React from 'react';
import '../styles/Resume.css';
import resume from '../Resume.pdf';

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>Resume</h2>
      <p>Download my resume:</p>
      <a class='resume' href= {resume}  download="MalkaGreenberg_Resume.pdf">
        Download Resume
      </a>

      <h3>Developer Proficiencies:</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>RESTful APIs</li>
        <li>Git / Version Control</li>
        <li>Responsive Web Design</li>
        <li>Bootstrap</li>
        <li>Database Management (e.g., MongoDB, MySQL)</li>
        <li>Testing (e.g., Jest, React Testing Library)</li>
        <li>Package Managers (e.g., npm, Yarn)</li>
        <li>Build Tools (e.g., Webpack)</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </div>
  );
};

export default Resume;