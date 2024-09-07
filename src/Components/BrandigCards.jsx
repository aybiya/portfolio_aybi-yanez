import React, { useContext } from 'react';
import { LanguageContext } from "../Context/LanguageContex";

const BrandingCards = ({ branding, onOpenModal }) => {
    
  const { language, translations } = useContext(LanguageContext);

    return (
      <article className="branding-cards">
        <picture className="branding-cards__images">
          <a href={branding.logo}>
            <img
              src={branding.logo}
              alt={branding.description}
            />
          </a>
        </picture>
        {branding.designs && branding.designs.length > 0 && (
        <button onClick={() => onOpenModal(branding.designs)} className='branding-cards__btn'>
          {translations[language].branding.button}
        </button>
      )}
      </article>
    );
  };
  
  export default BrandingCards;
  

  