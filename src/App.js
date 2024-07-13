import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import NewVideo from './components/NewVideo';
import Footer from './components/Footer';
import { VideoProvider } from './VideoContext';
import './App.css';

function App() {
  return (
    <VideoProvider>
      <Router>
        <div className="app">
          <div className="navbar">
            <div className="logo">Aluraflix</div>
            <div>
              <Link to="/">Home</Link>
              <Link to="/new-video">Novo Vídeo</Link>
            </div>
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new-video" element={<NewVideo />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </VideoProvider>
  );
}

export default App;



