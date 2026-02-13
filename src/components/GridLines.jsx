import './GridLines.css';
import ProjectIcon from './ProjectIcon';
import SkillsIcon from './SkillsIcon';

export default function Grid() {
  const cells = [
    {
      title: "Projects",
      hoverTitle: "PROJECTS",
      useSvgComponent: true
    },
    {
      title: "Skills",
      hoverTitle: "SKILLS",
      useSvgComponent: true,
      svgComponent: "skills"
    },
    {
      title: "Education",
      hoverTitle: "EDUCATION",
      techIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      title: "Experience",
      hoverTitle: "EXPERIENCE",
      techIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    },
    {
      title: "Hi! The name's Sarvesh Varvatkar",
      hoverTitle: "SARVESH",
      techIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
    },
    {
      title: "Currently Learning",
      hoverTitle: "LEARNING",
      techIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      title: "Achievements",
      hoverTitle: "ACHIEVEMENTS",
      techIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
      title: "Interests",
      hoverTitle: "INTERESTS",
      techIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      title: "Contact",
      hoverTitle: "CONTACT",
      techIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    }
  ];

  return (
    <div className="grid-container">
      {cells.map((cell, index) => (
        <div className="grid-cell" key={index}>
          <div className="cell-content">
            {/* Default title - visible in normal state */}
            <h1 className="title-default">{cell.title}</h1>

            {/* Hover title - visible only on hover with bold typography */}
            <h1 className="title-hover">{cell.hoverTitle}</h1>

            {/* Tech Icon/Logo - only visible on hover */}
            <div className="tech-icon-container">
              {cell.useSvgComponent ? (
                <div className="tech-icon">
                  {cell.svgComponent === "skills" ? <SkillsIcon /> : <ProjectIcon />}
                </div>
              ) : (
                <img
                  src={cell.techIcon}
                  alt="tech icon"
                  className="tech-icon"
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}