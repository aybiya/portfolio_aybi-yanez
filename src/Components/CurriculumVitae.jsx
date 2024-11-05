import React, { useContext } from 'react';
import { LanguageContext } from "../Context/LanguageContex";


const CurriculumVitae = () => {

    const { language, translations } = useContext(LanguageContext);

  return (
    <section className="main-container__formation">
            <article>
                <h2>Curriculum Vitae</h2>
                <p>
                    {translations[language].curriculumVitae.description1}
                </p>
                <p>
                    {translations[language].curriculumVitae.description2}
               </p>
            </article>
            <section className="container-formation-cards">
            <article className="formation-cards">
                <h3>{translations[language].curriculumVitae.formationHeading}</h3>
                <div>
                <p>EducationIT | 03/2023 - 12/2023</p>
                <p>{translations[language].curriculumVitae.bootcamp}</p>
                <p>{translations[language].curriculumVitae.completed}</p>
                </div>
                <div>
                <p>CoderHouse | 05/2022 - 07/2022</p>
                <p>{translations[language].curriculumVitae.webDevelopment}</p>
                <p>{translations[language].curriculumVitae.completed}</p>
                </div>
                <div>
                <p>{translations[language].curriculumVitae.university}</p>
                <p>{translations[language].curriculumVitae.degree}</p>
                <p>{translations[language].curriculumVitae.graduated}</p>
                </div>
            </article>
            <article className="formation-cards">
                <h3>{translations[language].curriculumVitae.experienceHeading}</h3>
                <div>
                <p>{translations[language].curriculumVitae.freelancer}</p>
                <p>{translations[language].curriculumVitae.graphicDesigner}</p>
                <ul>
                    <li>{translations[language].curriculumVitae.workAreas1}</li>
                    <li>{translations[language].curriculumVitae.workAreas2}</li>
                    <li>{translations[language].curriculumVitae.workAreas3}</li>
                    <li>{translations[language].curriculumVitae.workAreas4}</li>
                    <li>{translations[language].curriculumVitae.workAreas5}</li>
                    <li>{translations[language].curriculumVitae.workAreas6}</li>
                </ul>
                </div>
            </article>
            </section>
            </section>
        );
    };

export default CurriculumVitae;