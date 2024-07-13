import React, { useState } from 'react';
import './Form.css';

function EditVideo({ video, onSave, onClose, onDelete }) {
  const [title, setTitle] = useState(video.title);
  const [category, setCategory] = useState(video.category);
  const [image, setImage] = useState(video.image);
  const [videoUrl, setVideoUrl] = useState(video.videoUrl);
  const [description, setDescription] = useState(video.description);

  const handleSave = () => {
    onSave({ ...video, title, category, image, videoUrl, description });
  };

  return (
    <div className="form-container">
      <h1>Editar Vídeo</h1>
      <form>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Imagem"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL do Vídeo"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <div className="form-buttons">
          <button type="button" onClick={handleSave}>Salvar</button>
          <button type="button" onClick={onClose}>Cancelar</button>
          <button type="button" className="delete-button" onClick={onDelete}>Excluir</button>
        </div>
      </form>
    </div>
  );
}

export default EditVideo;




