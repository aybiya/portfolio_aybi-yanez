import React, { useEffect, useState } from 'react';
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiAdobexd } from "react-icons/si";
import { toast } from 'react-toastify';

const SkillList = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {

    const fetchSkills = async () => {
      try {
        const response = await fetch('https://66d8759537b1cadd8054bd63.mockapi.io/skills');
        if (!response.ok) {
          throw new Error('No pudo cargar las habilidades');
        }
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error('Error al cargar los datos de las habilidades:', error);
        toast.error('Error al cargar los datos de las habilidades');
      }
    };

    fetchSkills();
  }, []);

  // Función para agrupar habilidades por categoría
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Función para normalizar nombres asi coinciden
  const normalizeName = (name) => name.toLowerCase().replace(/\s+/g, '');

  // Mapeo de iconos normalizados
  const iconMap = {
    'adobeilustrator': <SiAdobeillustrator className="skills-icons"/>,
    'adobephotoshop': <SiAdobephotoshop className="skills-icons"/>,
    'adobeindesign': <SiAdobeindesign className="skills-icons"/>,
    'adobexd': <SiAdobexd className="skills-icons"/>,
  };

  return (
    <section className="main-container__skills">
    {Object.keys(groupedSkills).map((category) => (
      <article className="skills-cards" key={category}>
        <h3>{category}:</h3>
        {category === 'Front-end' ? (
          <section className="skills-cards__frontEnd">
            <div>
              {groupedSkills[category].slice(0, Math.ceil(groupedSkills[category].length / 2)).map(skill => (
                <div key={skill.id}>{skill.name}</div>
              ))}
            </div>
            <div>
              {groupedSkills[category].slice(Math.ceil(groupedSkills[category].length / 2)).map(skill => (
                <div key={skill.id}>{skill.name}</div>
              ))}
            </div>
          </section>
        ) : category === 'Idioma' ? (
          <section className='skill-cards'>
            <p>Inglés</p>
            <picture className="skills-cards__image">
              <img
                src="https://aybiya.github.io/portfolio-aybi-yanez/images/english-dots.svg"
                alt="Vectores de nivel de Inglés intermedio."
                className="dots"
              />
            </picture>
          </section>
        ) : category === 'Softwares diseño' ? (
          <section className='skills-cards__logos'>
            {groupedSkills[category].map(skill => (
                <span key={skill.id}>
                  {iconMap[normalizeName(skill.name)] || null} 
                </span>
              ))}
          </section>
        ) : (
          <ul>
            {groupedSkills[category].map(skill => (
              <li key={skill.id}>{skill.name} </li>
            ))}
          </ul>
        )}
      </article>
    ))}
  </section>
);
};

export default SkillList;