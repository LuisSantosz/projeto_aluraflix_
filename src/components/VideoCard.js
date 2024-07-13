import React from 'react';
import './VideoCard.css';

function VideoCard({ video, onEdit }) {
  return (
    <div className="video-card">
      <img src={video.image} alt={video.title} />
      <h2>{video.title}</h2>
      <p>{video.description}</p>
      <button onClick={onEdit}>Editar</button>
    </div>
  );
}

export default VideoCard;
