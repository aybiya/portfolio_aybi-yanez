import React, { useState } from 'react';

const BrandingForm = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const brandingData = { name, url, description };

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
        setUrl('');
        setDescription('');
      } else {
        console.error('Failed to add branding data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Branding</button>
    </form>
  );
};

export default BrandingForm;
