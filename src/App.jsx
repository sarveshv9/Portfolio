import React, { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Squares from './components/Squares';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);



  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".pinned-section",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        scrub: true
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <Squares />
      <div className="pinned-section">
        <Header />
        <Hero />
      </div>
      <About />
    </div>
  );
}

export default App;