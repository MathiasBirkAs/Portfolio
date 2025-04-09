// Header.jsx
import React from 'react';
import './header.css';
import htmlIcon from '../../assets/icons/Html.png';
import cssIcon from '../../assets/icons/Css.png';
import jsIcon from '../../assets/icons/Javascript.png';
import reactIcon from '../../assets/icons/React.png';
import nodeIcon from '../../assets/icons/Nodejs.png';
import figmaIcon from '../../assets/icons/Figma.png';
import linkedinIcon from '../../assets/icons/Linkdin.png';
import githubIcon from '../../assets/icons/Github.png';
import profilePic from '../../assets/Mathias.jpg';




const Header = () => {
  return (
    <header className="site-header">
      <div className="intro-section">
        <div className="intro-text">
          <h2>Frontend web <br /> developer!</h2>
          <p>Hey, jeg er Mathias. En Front-end Web Developer <br />placeret i Viborg.</p>

          <div className="social-icons">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/Bissen0" target="_blank" rel="noopener noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
        </div>
        <img className="profile-pic" src={profilePic} alt="Mathias" />
      </div>

    <div className="tech-icons">
        <div className="icon html"><img src={htmlIcon} alt="HTML / CSS" /></div>
        <div className="icon html"><img src={cssIcon} alt="HTML / CSS" /></div>
        <div className="icon js"><img src={jsIcon} alt="JavaScript" /></div>
        <div className="icon react"><img src={reactIcon} alt="React" /></div>
        <div className="icon node"><img src={nodeIcon} alt="Node.js" /></div>
        <div className="icon figma"><img src={figmaIcon} alt="Figma" /></div>
    </div>
    </header>
  );
};

export default Header;
