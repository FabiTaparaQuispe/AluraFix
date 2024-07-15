import React from 'react';
import styled from 'styled-components';

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

const VideoCard = ({ title, category, image, video, description }) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Editar</button>
      <button>Borrar</button>
    </Card>
  );
};

export default VideoCard;
