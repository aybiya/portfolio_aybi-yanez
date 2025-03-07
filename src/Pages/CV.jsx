import React, { useContext } from 'react';
import { IoLogoWhatsapp, IoIosMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import SkillList from '../Components/SkillList';
import CurriculumVitae from '../Components/CurriculumVitae';
import { LanguageContext } from "../Context/LanguageContex";

const CV = () => {

    const { language, translations } = useContext(LanguageContext);

  return (
    <main className="main-container">
        <section className="main-container__intro">
            <article className="intro-profile">
                <picture>
                <img
                src="https://firebasestorage.googleapis.com/v0/b/portfolio-26162.appspot.com/o/images%2Fprofile-photo.webp?alt=media&token=135afb7d-8305-480d-9564-22ad6f7618d6"
                alt="{translations[language].intro.imgAlt}"
                />
                </picture>
                <div>
                <h1>{translations[language].intro.greeting}</h1>
                <p>{translations[language].intro.clarification}</p>
                </div>
            </article>
            <p>
                {translations[language].intro.intro1}
            </p>
            <p>
                {translations[language].intro.intro2}
            </p>
            </section>
            
            <SkillList />

            <section className="main-container__formation">
                <CurriculumVitae />
                
                <section className="main-container__contact">
                <article>
                    <h2>{translations[language].contact.heading}</h2>
                    <p>{translations[language].contact.message}</p>
                    <p>{translations[language].contact.info}</p>
                </article>
                <section className="contact-info-container">
                    <article className="contact-info">
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