import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../Context/LanguageContex";
import socialMediaData from "../data/socialMediaData.json"; 

const SocialMedia = () => {
  const { language, translations } = useContext(LanguageContext);
  const [isLoading, setIsLoading] = useState(true);

  // Mssg mientras está cargando la página 
  useEffect(() => {
    
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(loadingTimer); 
  }, []);

  return (
    <main className="main-social-media">
      {isLoading ? (
        <p className="loading-mssg">Cargando página...</p> // Mssg mientras está cargando la página 
      ) : (
        <>
          <section>
            <h1>SOCIAL MEDIA</h1>
            <p>{translations[language].socialMedia.description}</p>
          </section>
          <section className="social-media__cards">
            {socialMediaData.map((item) => (
              <article key={item.id}>
                <h2>{item.title}</h2>
                {item.images.map((image, idx) => (
                  <div key={idx}>
                    <picture>
                      <source srcSet={image.desktop} media="(min-width: 768px)" />
                      <img 
                        src={image.mobile} 
                        alt={image.alt} 
                        onLoad={() => console.log(`Imagen ${image.mobile} cargada`)}
                      />
                    </picture>
                    <p>{image.caption}</p>
                  </div>
                ))}
              </article>
            ))}
          </section>
        </>
      )}
    </main>
  );
};

export default SocialMedia;
