import React, { useState, useEffect } from 'react';

const BrandingForm = () => {
  const [name, setName] = useState('');
  const [logo, setLogo] = useState('');
  const [description, setDescription] = useState('');
  const [designs, setDesigns] = useState([]);
  const [newDesign, setNewDesign] = useState('');
  const [brandingList, setBrandingList] = useState([]);
  const [editingId, setEditingId] = useState(null); // Nuevo estado para el id del branding en edición

  useEffect(() => {
    // Cargar los datos de branding existentes al montar el componente
    const fetchBrandingData = async () => {
      try {
        const response = await fetch('https://66d8759537b1cadd8054bd63.mockapi.io/branding');
        const data = await response.json();
        setBrandingList(data);
      } catch (error) {
        console.error('Error fetching branding data:', error);
      }
    };

    fetchBrandingData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const brandingData = { name, logo, description, designs };

    try {
      if (editingId) {
        // Actualizar branding existente
        const response = await fetch(`https://66d8759537b1cadd8054bd63.mockapi.io/branding/${editingId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(brandingData),
        });

        if (response.ok) {
          console.log('Branding data updated:', await response.json());
          setBrandingList(brandingList.map(item => item.id === editingId ? { ...item, ...brandingData } : item));
          clearForm();
        } else {
          console.error('Failed to update branding data');
        }
      } else {
        // Agregar nuevo branding
        const response = await fetch('https://66d8759537b1cadd8054bd63.mockapi.io/branding', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(brandingData),
        });

        if (response.ok) {
          console.log('Branding data added:', await response.json());
          setBrandingList([...brandingList, brandingData]); // Actualizar la lista local
          clearForm();
        } else {
          console.error('Failed to add branding data');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const clearForm = () => {
    setName('');
    setLogo('');
    setDescription('');
    setDesigns([]);
    setEditingId(null); // Resetear el id al limpiar el formulario
  };

  const handleEdit = (branding) => {
    setName(branding.name);
    setLogo(branding.logo);
    setDescription(branding.description);
    setDesigns(branding.designs || []);
    setEditingId(branding.id); // Guardar el id del branding en edición
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
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{editingId ? 'Actualizar Branding' : 'Agregar Branding'}</h2>
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
        {/* Botones para agregar o actualizar branding */}
        <button type="submit">{editingId ? 'Actualizar Branding' : 'Agregar Branding'}</button>
      </form>

      <h2>Branding List</h2>
      <ul>
        {brandingList.map((branding) => (
          <li key={branding.id}>
            <strong>{branding.name}</strong> - {branding.description}
            <button onClick={() => handleEdit(branding)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandingForm;
