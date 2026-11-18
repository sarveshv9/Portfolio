import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Header isVisible={!loading} />
      <Routes>
        <Route path="/" element={<Home isLoaded={!loading} />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;