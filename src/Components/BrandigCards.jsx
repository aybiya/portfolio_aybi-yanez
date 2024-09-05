const BrandingCards = ({ branding }) => {
    
    return (
      <article className="branding-cards">
        <picture className="branding-cards__images">
          <a href={branding.url}>
            <img
              src={branding.url}
              alt={branding.description}
            />
          </a>
        </picture>
      </article>
    );
  };
  
  export default BrandingCards;
  