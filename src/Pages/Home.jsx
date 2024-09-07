import React, { useContext } from 'react';
import { LanguageContext } from "../Context/LanguageContex";
import { Link } from 'react-router-dom';

const Home = () => {

  const { language, translations } = useContext(LanguageContext);

  return (
    <main className="home-container">
        <picture className="home-img">
          <img
            src="https://aybiya.github.io/portfolio-aybi-yanez/images/portada-portfolio.png"
            alt="{translations[language].home.imgAlt}"
          />
        </picture>
        {/* Botón para ver el currículum */}
        <Link to="/curriculum-vitae">
          <button className='home-btn'>{translations[language].home.button}</button>
        </Link>
    </main>
  );
};

export default Home;