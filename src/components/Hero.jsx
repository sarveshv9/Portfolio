import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const FOCUS_AREAS = [
    'Blockchain',
    'AI / ML',
    'Mobile Apps',
    'Full-Stack Dev',
];

function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">

                    {/* Availability Badge */}
                    <div className="hero-availability">
                        <span className="hero-availability-dot" />
                        <span className="hero-availability-text">Actively seeking opportunities</span>
                    </div>

                    <h1 className="hero-name">
                        Building<br /><span>digital futures</span>
                    </h1>

                    <p className="hero-intro">Software Engineer</p>
                    <p className="hero-tagline-static">
                        Passionate about turning ideas into real-world impact
                    </p>

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

            {/* Bottom Section */}
            <div className="hero-bottom-curve">
                <div className="hero-bottom-content">
                    <div className="hero-scroll-wrapper">
                        <div className="hero-scroll-mouse">
                            <div className="hero-scroll-wheel"></div>
                        </div>
                        <span className="hero-scroll-text">SCROLL TO EXPLORE</span>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Hero;