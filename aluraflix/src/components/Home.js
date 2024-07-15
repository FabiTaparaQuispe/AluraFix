import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const HomeContainer = styled.div`
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
  @media (max-width: 480px) {
    padding: 5px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: calc(33.333% - 20px);
  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <HomeContainer>
      <h1>AluraFlix</h1>
      <button onClick={openModal}>Nuevo Video</button>
      <CardContainer>
        {/* Mapea tus tarjetas de video aquí */}
        <Card>
          <h3>Título del Video</h3>
          {/* Más contenido del card */}
        </Card>
      </CardContainer>
      {showModal && <Modal closeModal={closeModal} />}
    </HomeContainer>
  );
};

export default Home;
