import React, { useState, useEffect } from 'react';
import { IoLogoWhatsapp, IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import SkillList from '../Components/SkillList';
import CurriculumVitae from '../Components/CurriculumVitae';

const CV = () => {

  return (
    <main className="main-container">
        <section className="main-container__intro">
            <article className="intro-profile">
                <picture>
                <img
                src="https://aybiya.github.io/portfolio-aybi-yanez/images/profile-photo.png"
                alt="Foto de perfil de Aybi Yañez"
                />
                </picture>
                <div>
                <h1>¡Hola, soy Aybi!</h1>
                <p>(sí, mi nombre es Aybi)</p>
                </div>
            </article>
            <p>
                Tengo 28 años, soy licenciada en diseño gráfico con 6 años de
                experiencia en diseño de identidad visual, branding y en social media.
                También estudié full stack developer, lo que me lleva a integrar mis
                dos pasiones en mis proyectos: el diseño gráfico y el desarrollo web.
            </p>
            <p>
            Me entusiasma enfrentar nuevos retos y contribuir con mi experiencia a
            proyectos emocionantes. Mi objetivo es transmitir mensajes de manera
            efectiva, explorando nuevas herramientas y poniendo a prueba mi
            creatividad cada día.
            </p>
            </section>
            
            <SkillList />

            <section className="main-container__formation">
                <CurriculumVitae />
                
                <section className="main-container__contact">
                <article>
                    <h2>Contacto</h2>
                    <p>Me encantaría que trabajemos juntos!</p>
                    <p>Puedes contactarme por cualquiera de estos 3 medios:</p>
                </article>
                <section className="contact-info-container">
                    <article className="contact-info">
                    <a href="https://api.whatsapp.com/send/?phone=5493875822304" target="_blank" className='elemnt'>
                        <IoLogoWhatsapp className='media-icon'/>
                        +54 3875 822304
                    </a>
                    <a href="https://www.linkedin.com/in/aybi-yanez/" target="_blank" className='elemnt'>
                        <FaLinkedinIn className='media-icon'/>
                        www.linkedin.com/in/aybi-yanez
                    </a>
                    <a href="mailto:yanez.aybi@gmail.com" target="_blank" className='elemnt'>
                        <IoIosMail className='media-icon'/>
                        yanez.aybi@gmail.com
                    </a>
                </article>
            </section>
            </section>
        </section>
    </main>
  );
};

export default CV;
