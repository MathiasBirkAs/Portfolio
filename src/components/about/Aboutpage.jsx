import React from 'react';
import './Aboutpage.css';
import Locationicon from '../../assets/icons/Location-icon.svg';
import Profileicon from '../../assets/icons/Profile-icon.svg';
import githubIcon from '../../assets/icons/github.png';
import linkedinIcon from '../../assets/icons/linkdin.png'; 

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="left-side">
        <div className="about-header">
          <h1>About Me</h1>
        </div>

      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact</h1>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <img src={Profileicon} alt="Email" className="contact-icon" />
            <p>MathiasAsBirkeland@outlook.dk</p>
          </div>
          <div className="contact-item">
            <img src={Locationicon} alt="Location" className="contact-icon-place" />
            <p>Placeret i Viborg</p>
          </div>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/Bissen0"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <img src={githubIcon} alt="GitHub" className="github-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile" 
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
          </a>
        </div>
        </div>
      </div>
      
      <div className="right-side">
        <div className="about-text">
        <h1>Hey, Mathias her – Front-End Webudvikler</h1>
          <p>
            Jeg er 26 år gammel, og jeg er i gang med min
            uddannelse som webudvikler, med fokus på front-end udvikling. Jeg er
            passioneret omkring at skabe brugervenlige og designrige
            hjemmesider, der giver en god brugeroplevelse.
          </p>
          <p>
            I min fritid bruger jeg tid på at spille og eksperimentere med nye
            ideer og hjemmesider. Jeg værdsætter både samarbejde og sociale aktiviteter,
            men nyder også at arbejde selvstændigt med mine projekter, hvor jeg kan
            fordybe mig i det kreative og tekniske. Jeg søger konstant nye måder at
            udvikle mine færdigheder og tage mine projekter til næste niveau.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;






