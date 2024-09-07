import React, { useEffect, useState, useContext } from 'react';
import BrandingCards from '../Components/BrandigCards';
import DesignsModal from '../Components/DesignsModal';
import { LanguageContext } from "../Context/LanguageContex";
import { toast } from 'react-toastify';

const Branding = () => {
  const { language, translations } = useContext(LanguageContext);
  const [brandings, setBrandings] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDesigns, setCurrentDesigns] = useState([]);

  const fetchBrandings = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://66d8759537b1cadd8054bd63.mockapi.io/branding');
      if (!response.ok) {
        throw new Error('Error al cargar los datos');
      }
      const data = await response.json();
      setBrandings(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      toast.error('Error al cargar los datos');
    }
  };

  useEffect(() => {
    fetchBrandings();
  }, []);

  const openModal = (designs) => {
    setCurrentDesigns(designs);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentDesigns([]);
  };

  return (
    <main className="branding-container">
      <section>
        <h1>BRANDING</h1>
        <p>
        {translations[language].branding.description}
        </p>
      </section>
      <section className="branding-container__cards">
        {error && <p>Error: {error}</p>}
        {isLoading ? (
          <p className='loading-mssg'>{translations[language].branding.loading}</p>
        ) : (
          brandings.length > 0 ? (
            brandings.map((branding) => (
              <BrandingCards key={branding.id} branding={branding} onOpenModal={openModal} />
            ))
          ) : (
            <p>{translations[language].branding.noData}</p>
          )
        )}
      </section>

      {/* Modal para mostrar los diseños */}
      <DesignsModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        designs={currentDesigns}
      />
    </main>
  );
};

export default Branding;
