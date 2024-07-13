import React, { createContext, useState, useContext } from 'react';

const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [videos, setVideos] = useState([]);

  const addVideo = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  };

  const updateVideo = (updatedVideo) => {
    setVideos(videos.map(video => video.id === updatedVideo.id ? updatedVideo : video));
  };

  const deleteVideo = (videoId) => {
    setVideos(videos.filter(video => video.id !== videoId));
  };

  const getVideosByCategory = () => {
    const categories = {};
    videos.forEach(video => {
      if (!categories[video.category]) {
        categories[video.category] = [];
      }
      categories[video.category].push(video);
    });
    return categories;
  };

  return (
    <VideoContext.Provider value={{ videos, addVideo, updateVideo, deleteVideo, getVideosByCategory }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  return useContext(VideoContext);
}


