import React, { useState } from 'react';
import styled from 'styled-components';

const NewVideoContainer = styled.div`
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const NewVideo = () => {
  const [form, setForm] = useState({
    title: '',
    category: '',
    image: '',
    video: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Procesa el formulario aquí
  };

  return (
    <NewVideoContainer>
      <h2>Nuevo Video</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Título" value={form.title} onChange={handleChange} />
        <input type="text" name="category" placeholder="Categoría" value={form.category} onChange={handleChange} />
        <input type="text" name="image" placeholder="Imagen" value={form.image} onChange={handleChange} />
        <input type="text" name="video" placeholder="Video" value={form.video} onChange={handleChange} />
        <textarea name="description" placeholder="Descripción" value={form.description} onChange={handleChange}></textarea>
        <button type="submit">Guardar</button>
      </form>
    </NewVideoContainer>
  );
};

export default NewVideo;
