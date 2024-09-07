import React from 'react'

const CurriculumVitae = () => {

  return (
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
            </section>
        );
    };

export default CurriculumVitae;