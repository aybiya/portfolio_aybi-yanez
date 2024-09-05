import React, { useState, useEffect } from 'react';
import { IoLogoWhatsapp, IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import SkillList from '../Components/SkillList';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Mssg mientras está cargando la página 
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(loadingTimer); 
  }, []);

  return (
    <main className="main-container">
      {isLoading ? (
        <p className='loading-mssg'>Cargando página...</p> // Mssg mientras está cargando la página 
      ) : (
        <>
          <section>
            <picture className="front">
              <img
                src="https://aybiya.github.io/portfolio-aybi-yanez/images/portada-portfolio.png"
                alt="portada de mi portfolio como diseñadora gráfica y full stack developer"
              />
            </picture>
          </section>
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
            <article>
              <h2>Curriculum Vitae</h2>
              <p>
                Estoy entusiasmada por seguir creciendo, me enfoco en fusionar el
                diseño gráfico con el desarrollo web para crear soluciones
                innovadoras y efectivas.
              </p>
              <p>
                En busca de crecer de forma profesional y desarrollar nuevas
                habilidades creativas, estoy lista para enfrentar nuevos retos y
                contribuir con mi experiencia y pasión a proyectos emocionantes.
              </p>
            </article>
            <section className="container-formation-cards">
              <article className="formation-cards">
                <h3>Formación:</h3>
                <div>
                  <p>Universidad Católica de Salta | 2015-2021</p>
                  <p>Licenciatura en Diseño gráfico</p>
                  <p>Egresada</p>
                </div>
                <div>
                  <p>CoderHouse | 2022</p>
                  <p>Desarrollo web</p>
                  <p>Finalizado</p>
                </div>
                <div>
                  <p>EducationIT | 2023</p>
                  <p>Bootcamp Full Stack Developer</p>
                  <p>Finalizado</p>
                </div>
              </article>
              <article className="formation-cards">
                <h3>Experiencia laboral:</h3>
                <div>
                  <p>Freelancer | 2018 - Actualidad</p>
                  <p>Diseñadora Gráfica</p>
                  <ul>
                    <li>- Branding y creación de marca</li>
                    <li>- Identidad de marcas</li>
                    <li>- Diseño publicitario</li>
                    <li>- Social media</li>
                    <li>- Administración de redes sociales</li>
                    <li>- Fotografía para redes</li>
                  </ul>
                </div>
              </article>
            </section>
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
        </>
      )}
    </main>
  );
};

export default Home;
