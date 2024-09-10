import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../Context/LanguageContex";
import socialMediaData from "../data/socialMediaData.json"; 

const SocialMedia = () => {
  const { language, translations } = useContext(LanguageContext);
  const [isLoadingPage, setIsLoadingPage] = useState(true); 
  const [isLoadingData, setIsLoadingData] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoadingPage(false);
    }, 200);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    const dataLoadingTimer = setTimeout(() => {
      // Simulación de carga de datos
      setIsLoadingData(false);
    }, 500);

    return () => clearTimeout(dataLoadingTimer);
  }, []);

  if (error) {
    setError(error.message);
    toast.error(translations[language].error.loadingData || 'Error al cargar los datos');
  }

  return (
    <main className="main-social-media">
      {isLoadingPage ? (
        <p className="loading-mssg">{translations[language].socialMedia.loadingPage}</p>
      ) : isLoadingData ? (
        <p className="loading-mssg">{translations[language].socialMedia.loadingData}</p>
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
                        alt={language === 'es' ? image.alt_es : image.alt_en} 
                      />
                    </picture>
                    <p>{language === 'es' ? image.caption_es : image.caption_en}</p>
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
