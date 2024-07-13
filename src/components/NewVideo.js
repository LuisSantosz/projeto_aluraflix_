import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useVideo } from '../VideoContext';
import './Form.css';

function NewVideo() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');
  const { addVideo } = useVideo();
  const navigate = useNavigate();

  const handleSave = () => {
    addVideo({ title, category, image, videoUrl, description });
    navigate('/');
  };

  return (
    <div className="form-container">
      <h1>Novo Vídeo</h1>
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
        <button type="button" onClick={handleSave}>Salvar</button>
        <button type="button" onClick={() => navigate('/')}>Cancelar</button>
      </form>
    </div>
  );
}

export default NewVideo;


