import React, { useState } from 'react';

const BrandingForm = () => {
  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');
  const [description, setDescription] = useState('');
  const [designs, setDesigns] = useState([]);
  const [newDesign, setNewDesign] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const brandingData = { name, logo, description, designs };

    try {
      const response = await fetch('https://66d8759537b1cadd8054bd63.mockapi.io/branding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(brandingData),
      });

      if (response.ok) {
        console.log('Branding data added:', await response.json());
        // Limpiar campos después de agregar el producto
        setName('');
        setLogo('');
        setDescription('');
        setDesigns([]);
      } else {
        console.error('Failed to add branding data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAddDesign = (e) => {
    e.preventDefault();
    if (newDesign) {
      setDesigns([...designs, newDesign]);
      setNewDesign('');
    }
  };

  const handleRemoveDesign = (designUrl) => {
    setDesigns(designs.filter(design => design !== designUrl));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Branding</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="Logo"
        value={logo}
        onChange={(e) => setLogo(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="Design URL"
        value={newDesign}
        onChange={(e) => setNewDesign(e.target.value)}
      />
      {/* Botón para cargar diseño */}
      <button onClick={handleAddDesign}>Cargar Diseño</button>
      <ul>
        {designs.map((design, index) => (
          <li key={index}>
            {design} <button type="button" onClick={() => handleRemoveDesign(design)}>Eliminar diseño</button>
          </li>
        ))}
      </ul>
      {/* Botón para agregar nuevo branding */}
      <button type="submit">Agregar Branding</button>
    </form>
  );
};

export default BrandingForm;
