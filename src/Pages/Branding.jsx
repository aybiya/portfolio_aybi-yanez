import React, { useEffect, useState } from 'react';
import BrandingCards from '../Components/BrandigCards';
import { toast } from 'react-toastify';

const Branding = () => {
  const [brandings, setBrandings] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState([]);

  // Fetch data 
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
      {isLoading ? ( // Mensaje de carga mientras los datos se están cargando
        <p className='loading-mssg'>Cargando datos...</p>
      ) : (
        brandings.length > 0 ? (
          brandings.map((branding) => (
            <BrandingCards key={branding.id} branding={branding} />
          ))
        ) : (
          <p>No hay datos disponibles.</p>
        )
      )}
    </section>
  </main>
);
};

export default Branding;
