import '../styles/Project.css';

const Project = ({ title, image, deployedLink, githubLink }) => {
    return (
      <div id ='project-box' className="project">
        <img class='picture' src={image} alt={title} />
        <h3 class= 'project-title'>{title}</h3>
        <a class = 'project-link' href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed Link</a>
        <a class = 'project-link' href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repository</a>
      </div>
    );
  };
  
  export default Project;