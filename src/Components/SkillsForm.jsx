import React, { useState } from 'react';

const SkillsForm = () => {
  const [nameEs, setNameEs] = useState('');
  const [nameEn, setNameEn] = useState('');
  const [categoryEs, setCategoryEs] = useState('');
  const [categoryEn, setCategoryEn] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const skillData = {
      name_es: nameEs,
      name_en: nameEn,
      category_es: categoryEs,
      category_en: categoryEn,
      url: url || null, 
    };

    try {
      const response = await fetch('https://66d8759537b1cadd8054bd63.mockapi.io/skills', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(skillData),
      });

      if (response.ok) {
        console.log('Skill data added:', await response.json());
        // Limpiar campos después de agregar el skill
        setNameEs('');
        setNameEn('');
        setCategoryEs('');
        setCategoryEn('');
        setUrl('');
      } else {
        console.error('Failed to add skill data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Skill</h2>
      <input
        type="text"
        placeholder="Nombre (ES)"
        value={nameEs}
        onChange={(e) => setNameEs(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nombre (EN)"
        value={nameEn}
        onChange={(e) => setNameEn(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Categoría (ES)"
        value={categoryEs}
        onChange={(e) => setCategoryEs(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Categoría (EN)"
        value={categoryEn}
        onChange={(e) => setCategoryEn(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="URL (opcional)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Add Skill</button>
    </form>
  );
};

export default SkillsForm;
