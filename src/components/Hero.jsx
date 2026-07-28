import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const FOCUS_AREAS = [
    'Blockchain',
    'AI / ML',
    'Mobile Apps',
    'Full-Stack Dev',
];

function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const timeoutRef = useRef(null);

    // ── Typewriter ────────────────────────────────────────────
    useEffect(() => {
        const currentWord = FOCUS_AREAS[currentIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                if (displayText.length < currentWord.length) {
                    setDisplayText(currentWord.slice(0, displayText.length + 1));
                    timeoutRef.current = setTimeout(handleTyping, 80 + Math.random() * 40);
                } else {
                    timeoutRef.current = setTimeout(() => setIsDeleting(true), 2200);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentWord.slice(0, displayText.length - 1));
                    timeoutRef.current = setTimeout(handleTyping, 40);
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % FOCUS_AREAS.length);
                }
            }
        };

        timeoutRef.current = setTimeout(handleTyping, isDeleting ? 40 : 100);
        return () => clearTimeout(timeoutRef.current);
    }, [displayText, isDeleting, currentIndex]);



    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">

                    <h1 className="hero-name">
                        Building<br /><span>digital futures</span>
                    </h1>

                    <p className="hero-intro">Software Engineer</p>

                    {/* Rotating Tagline */}
                    <div className="hero-tagline">
                        <span className="hero-tagline-label">Passionate about</span>
                        <span className="hero-tagline-separator">—</span>
                        <span className="hero-tagline-word">
                            {displayText}
                            <span className="hero-cursor" />
                        </span>
                    </div>

                    {/* Availability Badge */}
                    <div className="hero-availability">
                        <span className="hero-availability-dot" />
                        <span className="hero-availability-text">Actively seeking opportunities</span>
                    </div>

                </div>
            </div>

        </section>
    );
}

export default Hero;