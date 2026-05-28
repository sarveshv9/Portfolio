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

    // Magnetic name refs
    const nameRef = useRef(null);
    const targetMag = useRef({ x: 0, y: 0 });
    const currentMag = useRef({ x: 0, y: 0 });
    const rafRef = useRef(null);

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

    // ── Magnetic pull on name ─────────────────────────────────
    useEffect(() => {
        const el = nameRef.current;
        if (!el) return;

        const RADIUS = 220;
        const STRENGTH = 0.07;
        const LERP = 0.09;

        const onMouseMove = (e) => {
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dx = e.clientX - cx;
            const dy = e.clientY - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < RADIUS) {
                const pull = 1 - dist / RADIUS;
                targetMag.current = {
                    x: dx * STRENGTH * pull,
                    y: dy * STRENGTH * pull,
                };
            } else {
                targetMag.current = { x: 0, y: 0 };
            }
        };

        const onMouseLeave = () => {
            targetMag.current = { x: 0, y: 0 };
        };

        const animate = () => {
            currentMag.current.x += (targetMag.current.x - currentMag.current.x) * LERP;
            currentMag.current.y += (targetMag.current.y - currentMag.current.y) * LERP;

            const tx = currentMag.current.x;
            const ty = currentMag.current.y;

            // Only apply if movement is meaningful — avoids jank on idle
            if (Math.abs(tx) > 0.01 || Math.abs(ty) > 0.01) {
                el.style.transform = `translate(${tx}px, ${ty}px)`;
            } else {
                el.style.transform = 'translate(0px, 0px)';
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseleave', onMouseLeave);
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseleave', onMouseLeave);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">

                    <h1 className="hero-name" ref={nameRef}>
                        Sarvesh<br /><span>Varvatkar</span>
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

            {/* Scroll Indicator */}
            <div className="hero-scroll-indicator">
                <div className="hero-scroll-line" />
            </div>
        </section>
    );
}

export default Hero;