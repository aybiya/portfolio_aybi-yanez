import React, { useContext } from 'react';
import { LanguageContext } from "../Context/LanguageContex";
import { Link } from 'react-router-dom';

const Home = () => {

  const { language, translations } = useContext(LanguageContext);

  return (
    <main className="home-container">
        <picture className="home-img">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-26162.appspot.com/o/portada-portfolio.webp?alt=media&token=66e13df4-92b4-46df-817f-352f37bc2c90"
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