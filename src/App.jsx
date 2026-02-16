import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AntigravityEffect from './components/AntigravityEffect';

function App() {
  return (
    <>
      <AntigravityEffect />
      <div className="app-container">
        <Header />
        <Hero />
      </div>
    </>
  );
}

export default App;