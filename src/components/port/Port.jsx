// Port.jsx
import React from 'react';
import './Port.css';


// Importer billederne
import Rejseblog from '../../assets/Rejseblog.png';
import Greenleaf from '../../assets/Greenleaf.png';
import Mclarenf1 from '../../assets/Mclarenf1.png';
import Fremtidbil from '../../assets/Fremtidbil.png';
import githubIcon from '../../assets/icons/github.png';

const Port = () => {
    const projects = [
      {
        img: Rejseblog,
        title: 'React side omkring rejser',
        description: 'Denne hjemmeside er blevet lavet i React og er en a mine nyere projekter. Som er gået meget på design og at få det til at se flot ud og være brugervenligt.',
        link: 'https://github.com/MathiasBirkAs/Travel_React_'
      },
      {
        img: Greenleaf,
        title: 'Første side omkring Greenleaf',
        description: 'Her har vi min første hjemmeside for at se hvor jeg startede og hvordan jeg har udviklet mig. Det er en hjemmeside for et fiktivt firma som hedder Greenleaf. Men det viser min udvikling fra vanille HTML og CSS til React',
        link: 'https://github.com/user/greenleaf'
      },
      {
        img: Mclarenf1,
        title: 'Javascript side omkring McLaren F1',
        description: 'Her har vi en hjemmeside der gik meget på Javascript og det også en af mine første projekter, som ikke køre så meget på design men mere javascript.',
        link: 'https://github.com/user/mclarenf1'
      },
      {
        img: Fremtidbil,
        title: 'React side omkring fremtidens biler',
        description: 'Denne hjemmeside er lavet i React og er en af mine nyere projekter. Som er gået meget på design og at få det til at se flot ud og være brugervenligt. Også den også gået meget på at få hjemmesiden til at være levendne og interaktiv med animationer.',
        link: 'https://github.com/MathiasBirkAs/Bil-Side'
      },
    ];
  
    return (
      <div className="port-container">
        <header className='port-header'>
          <div className="port-content">
            <h1>Mit Portfolio</h1>
            <p>Her er nogle af de projekter, jeg har arbejdet på igennem min uddannelse fra den første hjemmeside til de nyeste</p>
          </div>
        </header>
  
        <section className="projects">
          {projects.map((project, index) => (
            <div className={`project-card ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              <img src={project.img} alt={project.title} />
              <div className="text-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="github-link">
                <img src={githubIcon} alt="GitHub"/> 
                </a>
              </div>
            </div>
          ))}
        </section>
  
      </div>
    );
  };
  
  export default Port;