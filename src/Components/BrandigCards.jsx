import React from 'react';

const BrandingCards = ({ branding, onOpenModal }) => {
    
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
        <button onClick={() => onOpenModal(branding.designs)} className='branding-cards__btn'>Ver diseños</button>
      )}
      </article>
    );
  };
  
  export default BrandingCards;
  

  