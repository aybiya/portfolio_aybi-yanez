import React, { useState } from 'react';

const SkillsForm = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const skillData = { name, category, level };

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
        // Limpiar campos después de agregar el producto
        setName('');
        setCategory('');
        setLevel('');
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
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Level"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Add Skill</button>
    </form>
  );
};

export default SkillsForm;
