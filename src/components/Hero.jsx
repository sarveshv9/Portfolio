import React from 'react';
import { HandwritingText } from "@/components/ui/handwriting-text";
import TopographicGrid from './TopographicGrid';
import './Hero.css';

function Hero({ isLoaded = true }) {
    return (
        <section id="hero" className="hero">
            <TopographicGrid />
            <div className="hero-container">
                <div className="hero-content">

                    <h1 className="hero-name">
                        <span className="color-blue" style={{ display: 'inline-block', transform: 'translateY(0.15em)' }}>
                            <HandwritingText
                              text="Sarvesh"
                              height="1.15em"
                              delay={0.2}
                              fontUrl="/GloriaHallelujah.ttf"
                              strokeWidth={2.0}
                              trigger={isLoaded}
                            />
                        </span>
                        <br />
                        <span className="color-yellow" style={{ display: 'inline-block', transform: 'translateY(0.15em)' }}>
                            <HandwritingText
                              text="Varvatkar"
                              height="1.15em"
                              delay={0.9}
                              fontUrl="/GloriaHallelujah.ttf"
                              strokeWidth={2.0}
                              trigger={isLoaded}
                            />
                        </span>
                    </h1>

                    <p className="hero-intro">Software Engineer</p>

                    <div className="hero-actions">
                        <a href="#work" className="btn-primary">
                            View My Work <span>→</span>
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hero;