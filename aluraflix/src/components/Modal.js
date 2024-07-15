import React, { useState } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
`;

const Modal = ({ closeModal }) => {
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
    closeModal();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h2>Editar Card</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Título" value={form.title} onChange={handleChange} />
          <input type="text" name="category" placeholder="Categoría" value={form.category} onChange={handleChange} />
          <input type="text" name="image" placeholder="Imagen" value={form.image} onChange={handleChange} />
          <input type="text" name="video" placeholder="Video" value={form.video} onChange={handleChange} />
          <textarea name="description" placeholder="Descripción" value={form.description} onChange={handleChange}></textarea>
          <button type="submit">Guardar</button>
        </form>
        <button onClick={closeModal}>Cerrar</button>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
