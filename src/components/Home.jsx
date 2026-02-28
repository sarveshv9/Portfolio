import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Header from './Header';
import Hero from './Hero';
import About from './About';
import Squares from './Squares';
import ScrollVelocity from './ScrollVelocity';
import Work from './Work';
import Contact from './Contact';

gsap.registerPlugin(ScrollTrigger);

function Home() {
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
            <div className="pinned-section">
                <Squares />
                <Header />
                <Hero />
            </div>
            <About />

            {/* Transition Section */}
            <div className="transition-cross-section">
                <ScrollVelocity
                    texts={['Selected Works', 'Featured Projects']}
                    velocity={100}
                    className="custom-scroll-text"
                />
            </div>

            <Work />
            <Contact />
        </div>
    );
}

export default Home;
