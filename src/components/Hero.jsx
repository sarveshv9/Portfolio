import React from 'react';
import { HandwritingText } from "@/components/ui/handwriting-text";
import './Hero.css';

const FOCUS_AREAS = [
    'Blockchain',
    'AI / ML',
    'Mobile Apps',
    'Full-Stack Dev',
];

function Hero() {
    return (
        <section id="hero" className="hero">
            <div className="hero-container">
                <div className="hero-content">

                    <h1 className="hero-name">
                        <span className="color-green" style={{ display: 'inline-block', transform: 'translateY(0.15em)' }}>
                            <HandwritingText
                              text="Ideas"
                              height="1.15em"
                              delay={1.0}
                            />
                        </span>
                        {" go in."}
                        <br />
                        <span className="color-yellow" style={{ display: 'inline-block', transform: 'translateY(0.15em)' }}>
                            <HandwritingText
                              text="Web apps"
                              height="1.15em"
                              delay={1.5}
                            />
                        </span>
                        {" come out."}
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

        </section>
    );
}

export default Hero;