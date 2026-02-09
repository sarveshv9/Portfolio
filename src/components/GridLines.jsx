import './GridLines.css';

export default function Grid() {
  const cells = [
    {
      title: "Projects",
      hoverTitle: "PROJECTS",
      emojis: ["🛠️", "⚙️", "🚀", "🧩"],
      techIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
      title: "Skills",
      hoverTitle: "SKILLS",
      emojis: ["💻", "🔧", "⚡", "🎯"],
      techIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    },
    {
      title: "Education",
      hoverTitle: "EDUCATION",
      emojis: ["📚", "🎓", "🧠", "💡"],
      techIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      title: "Experience",
      hoverTitle: "EXPERIENCE",
      emojis: ["💼", "📈", "🌟", "🏆"],
      techIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    },
    {
      title: "Hi! The name's Sarvesh Varvatkar",
      hoverTitle: "SARVESH",
      emojis: ["👋", "😊", "💫", "🎉"],
      techIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
    },
    {
      title: "Currently Learning",
      hoverTitle: "LEARNING",
      emojis: ["⚛️", "🟢", "🧠", "📖", "🔥"],
      techIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      title: "Achievements",
      hoverTitle: "ACHIEVEMENTS",
      emojis: ["🏆", "🎖️", "⭐", "🔥"],
      techIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
      title: "Interests",
      hoverTitle: "INTERESTS",
      emojis: ["🎨", "🎵", "🌍", "🎮"],
      techIcon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      title: "Contact",
      hoverTitle: "CONTACT",
      emojis: ["📧", "💬", "🤝", "📱"],
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
              <img 
                src={cell.techIcon} 
                alt="tech icon" 
                className="tech-icon"
              />
            </div>

            {/* Emoji container - only visible on hover */}
            <div className="emoji-container">
              {cell.emojis.map((emoji, i) => (
                <span 
                  key={i} 
                  className="emoji" 
                  style={{
                    '--emoji-delay': `${i * 0.1}s`
                  }}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}