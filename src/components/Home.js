import React, { useState } from 'react';
import VideoCard from './VideoCard';
import EditVideo from './EditVideo';
import { useVideo } from '../VideoContext';
import './Home.css';

function Home() {
  const { getVideosByCategory, updateVideo, deleteVideo } = useVideo();
  const [editingVideo, setEditingVideo] = useState(null);
  const videosByCategory = getVideosByCategory();

  const handleEdit = (video) => {
    setEditingVideo(video);
  };

  const handleSaveEdit = (updatedVideo) => {
    updateVideo(updatedVideo);
    setEditingVideo(null);
  };

  const handleDelete = (videoId) => {
    deleteVideo(videoId);
    setEditingVideo(null);
  };

  return (
    <div>

      <div className="video-categories">
        {Object.keys(videosByCategory).map(category => (
          <div key={category} className="category-section">
            <h2>{category}</h2>
            <div className="video-list">
              {videosByCategory[category].map((video) => (
                <VideoCard key={video.id} video={video} onEdit={() => handleEdit(video)} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {editingVideo && (
        <EditVideo
          video={editingVideo}
          onClose={() => setEditingVideo(null)}
          onSave={handleSaveEdit}
          onDelete={() => handleDelete(editingVideo.id)}
        />
      )}
    </div>
  );
}

export default Home;







