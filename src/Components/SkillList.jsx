import React, { useEffect, useContext, useState } from 'react';
import { LanguageContext } from "../Context/LanguageContex"; 
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobeindesign, SiAdobexd } from "react-icons/si";
import { toast } from 'react-toastify';

const SkillList = () => {
  const { language } = useContext(LanguageContext);
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
    const category = language === 'es' ? skill.category_es : skill.category_en;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  return (
    <section className="main-container__skills">
      {Object.keys(groupedSkills).map((category) => (
        <article className="skills-cards" key={category}>
          <h3>
            {category === 'Softwares diseño' || category === 'Design softwares' 
              ? (language === 'es' ? 'Softwares diseño' : 'Design softwares') 
              : category}
          </h3>

          {/* Mostrar íconos si la categoría es "Softwares diseño" */}
          {(category === 'Softwares diseño' || category === 'Design softwares') ? (
            <section className='skills-cards__logos'>
              <SiAdobeillustrator className="skills-icons" />
              <SiAdobephotoshop className="skills-icons" />
              <SiAdobeindesign className="skills-icons" />
              <SiAdobexd className="skills-icons" />
            </section>
          ) : category === (language === 'es' ? 'Idioma' : 'Language') ? (
            <div>
              {groupedSkills[category].map((skill) => (
                <div key={skill.id} className="skills-language">
                  <p>{language === 'es' ? skill.name_es : skill.name_en}</p>
                  {skill.url && (
                    <picture className="skills-cards__image">
                      <img
                        src={skill.url}
                        alt={language === 'es' ? `Logo de ${skill.name_es}` : `Logo of ${skill.name_en}`}
                        className="dots"
                      />
                    </picture>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <ul>
              {groupedSkills[category].map((skill) => (
                <li key={skill.id}>{language === 'es' ? skill.name_es : skill.name_en}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </section>
  );
};

export default SkillList;
