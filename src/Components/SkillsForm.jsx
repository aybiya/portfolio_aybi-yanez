import React, { useState, useEffect } from 'react';

const SkillsForm = () => {
  const [nameEs, setNameEs] = useState('');
  const [nameEn, setNameEn] = useState('');
  const [categoryEs, setCategoryEs] = useState('');
  const [categoryEn, setCategoryEn] = useState('');
  const [url, setUrl] = useState('');
  const [skillsList, setSkillsList] = useState([]);
  const [editingId, setEditingId] = useState(null); 

  useEffect(() => {
    // Cargar los datos de habilidades existentes al montar el componente
    const fetchSkillsData = async () => {
      try {
        const response = await fetch('https://66d8759537b1cadd8054bd63.mockapi.io/skills');
        const data = await response.json();
        setSkillsList(data);
      } catch (error) {
        console.error('Error fetching skills data:', error);
      }
    };

    fetchSkillsData();
  }, []);

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
      if (editingId) {
        // Actualizar skill existente
        const response = await fetch(`https://66d8759537b1cadd8054bd63.mockapi.io/skills/${editingId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(skillData),
        });

        if (response.ok) {
          console.log('Skill data updated:', await response.json());
          setSkillsList(skillsList.map(item => item.id === editingId ? { ...item, ...skillData } : item));
          clearForm();
        } else {
          console.error('Failed to update skill data');
        }
      } else {
        // Agregar nuevo skill
        const response = await fetch('https://66d8759537b1cadd8054bd63.mockapi.io/skills', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(skillData),
        });

        if (response.ok) {
          console.log('Skill data added:', await response.json());
          setSkillsList([...skillsList, skillData]); // Actualizar la lista local
          clearForm();
        } else {
          console.error('Failed to add skill data');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const clearForm = () => {
    setNameEs('');
    setNameEn('');
    setCategoryEs('');
    setCategoryEn('');
    setUrl('');
    setEditingId(null); 
  };

  const handleEdit = (skill) => {
    setNameEs(skill.name_es);
    setNameEn(skill.name_en);
    setCategoryEs(skill.category_es);
    setCategoryEn(skill.category_en);
    setUrl(skill.url || '');
    setEditingId(skill.id); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>{editingId ? 'Actualizar Skill' : 'Agregar Skill'}</h2>
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
        <button type="submit">{editingId ? 'Actualizar Skill' : 'Agregar Skill'}</button>
      </form>

      <h2>Lista de Skills</h2>
      <ul>
        {skillsList.map((skill) => (
          <li key={skill.id}>
            <strong>{skill.name_es}</strong> - {skill.category_es}
            <button onClick={() => handleEdit(skill)}>Editar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsForm;
