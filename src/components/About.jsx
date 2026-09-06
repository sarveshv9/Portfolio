import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

function About() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    // The main statement to reveal on scroll
    const statement = "I'm Sarvesh Varvatkar, a Software Engineer who enjoys building thoughtful, simple experiences and exploring new places whenever I'm not creating.";
    const words = statement.split(" ");

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            // 1. Infinite Background Marquee Animation
            gsap.to('.marquee-track', {
                xPercent: -50,
                repeat: -1,
                duration: 25,
                ease: 'linear',
            });

            // 2. Scrubbing Timeline for Text Reveal & Button
            const wordElements = textRef.current.children;
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.5,
                }
            });

            // Reveal text word by word
            tl.fromTo(wordElements,
                { opacity: 0.1, color: '#444' },
                {
                    opacity: 1,
                    color: '#fff',
                    stagger: 0.1,
                    ease: 'none',
                    duration: 1 // take up 1 second of relative timeline time
                }
            );

            // Fade in the button
            tl.fromTo('.about-cta',
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    ease: 'power2.out',
                    duration: 0.3 // fade in quickly
                },
                "-=0.1" // start slightly before text finishes
            );

            // Add empty space to the timeline so it stays pinned longer
            tl.to({}, { duration: 1 });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className="about-wrapper" ref={containerRef}>
            {/* Top Curve Overlapping Content */}
            <div className="about-top-curve">
                <div className="about-top-content">
                    <div className="hero-scroll-wrapper">
                        <div className="hero-scroll-mouse">
                            <div className="hero-scroll-wheel"></div>
                        </div>
                        <span className="hero-scroll-text">SCROLL TO EXPLORE</span>
                    </div>
                </div>
            </div>

            <div className="about-sticky">

                {/* Infinite Background Marquee */}
                <div className="marquee-container">
                    <div className="marquee-track">
                        <h1 className="marquee-text">PORTFOLIO DEVELOPER DESIGNER ENGINEER PORTFOLIO DEVELOPER DESIGNER ENGINEER</h1>
                    </div>
                </div>

                {/* Foreground Content */}
                <div className="about-foreground">
                    <h2 className="scrub-statement" ref={textRef}>
                        {words.map((word, index) => (
                            <span key={index} className="scrub-word">
                                {word}
                            </span>
                        ))}
                    </h2>

                    <div className="about-cta">
                        <Link to="/gallery" className="gallery-btn">
                            <span>Know me more</span>
                            <div className="btn-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;