import React, { useContext } from 'react';
import { LanguageContext } from "../Context/LanguageContex";
import { Link } from 'react-router-dom';

const Home = () => {

  const { language, translations } = useContext(LanguageContext);

  return (
    <main className="home-container">
        <picture className="home-img">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-26162.appspot.com/o/images%2Fportada-portfolioo.webp?alt=media&token=6ec01cca-c4af-4e5e-8c43-e1eeadf505bf"
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