import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Gallery, { images } from './components/Gallery';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Hidden preloader to keep images decoded in memory */}
      <div style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden', opacity: 0, pointerEvents: 'none', zIndex: -999 }}>
        {images.map((img, i) => (
          <img key={i} src={typeof img === 'string' ? img : img.src} alt="preload" />
        ))}
      </div>

      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      {!loading && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      )}
    </>
  );
}

export default App;