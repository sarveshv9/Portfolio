import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import LoadingScreen from './components/LoadingScreen';

const Gallery = lazy(() => import('./components/Gallery'));

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;