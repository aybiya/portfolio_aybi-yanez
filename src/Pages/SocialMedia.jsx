import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../Context/LanguageContex";
import socialMediaData from "../data/socialMediaData.json"; 

const SocialMedia = () => {
  const { language, translations } = useContext(LanguageContext);
  const [isLoadingPage, setIsLoadingPage] = useState(true); // Estado para cargar la página
  const [isLoadingData, setIsLoadingData] = useState(true); // Estado para cargar los datos

  // Simulación de la carga de la página
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoadingPage(false);
    }, 200);

    return () => clearTimeout(loadingTimer);
  }, []);

  // Simulación de la carga de los datos de socialMediaData
  useEffect(() => {
    const dataLoadingTimer = setTimeout(() => {
      setIsLoadingData(false);
    }, 500); // Tiempo de carga simulado

    return () => clearTimeout(dataLoadingTimer);
  }, []);

  return (
    <main className="main-social-media">
      {isLoadingPage ? (
        <p className="loading-mssg">{translations[language].socialMedia.loadingPage}</p>
      ) : isLoadingData ? (
        <p className="loading-mssg">{translations[language].socialMedia.loadingData}</p> // Mensaje mientras se cargan los datos
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
