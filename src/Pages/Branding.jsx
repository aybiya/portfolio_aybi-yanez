import React, { useEffect, useState } from 'react';
import BrandingCards from '../Components/BrandigCards';
import DesignsModal from '../Components/DesignsModal';
import { toast } from 'react-toastify';

const Branding = () => {
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
          Diseños de marca, branding e identidad visual para distintas marcas
        </p>
      </section>
      <section className="branding-container__cards">
        {error && <p>Error: {error}</p>}
        {isLoading ? (
          <p className='loading-mssg'>Cargando datos...</p>
        ) : (
          brandings.length > 0 ? (
            brandings.map((branding) => (
              <BrandingCards key={branding.id} branding={branding} onOpenModal={openModal} />
            ))
          ) : (
            <p>No hay datos disponibles.</p>
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
