import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

function Contact() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Staggered reveal for content elements
            const elements = gsap.utils.toArray('.contact-animate');
            gsap.fromTo(elements,
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 80%',
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: 'power3.out'
                }
            );

            // Social icons pop-in
            const icons = gsap.utils.toArray('.contact-social-icon');
            gsap.fromTo(icons,
                { scale: 0, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: '.contact-socials',
                        start: 'top 90%',
                    },
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.08,
                    ease: 'back.out(1.7)'
                }
            );

            // Footer fade
            gsap.fromTo('.contact-footer',
                { opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: '.contact-footer',
                        start: 'top 95%',
                    },
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out'
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" className="contact-section" ref={containerRef}>
            {/* Background Glow */}
            <div className="contact-bg-glow top-right" />
            <div className="contact-bg-glow bottom-left" />

            {/* Divider */}
            <hr className="contact-divider contact-animate" />

            {/* Content */}
            <div className="contact-content">
                <p className="contact-overline contact-animate">Get In Touch</p>

                <h2 className="contact-heading contact-animate">
                    Let's Connect
                </h2>

                <p className="contact-subtext contact-animate">
                    I'm actively looking for full-time roles where I can build meaningful products. Have an opportunity or just want to say hello? Let's talk.
                </p>

                {/* Resume Download */}
                <div className="contact-resume-wrapper contact-animate">
                    <a href="/Resume.pdf" download className="contact-resume-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download Resume
                    </a>
                </div>

                {/* Email */}
                <div className="contact-email-wrapper contact-animate">
                    <a href="mailto:varvatkar.sarvesh09@gmail.com" className="contact-email">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>
                        varvatkar.sarvesh09@gmail.com
                    </a>
                </div>

                {/* Social Links */}
                <p className="contact-social-label contact-animate">Follow Me</p>
                <div className="contact-socials">
                    <a href="https://www.instagram.com/sarvesh._.v9/" target="_blank" rel="noopener noreferrer" className="contact-social-icon" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                    <a href="https://github.com/sarveshv9" target="_blank" rel="noopener noreferrer" className="contact-social-icon" aria-label="GitHub">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a href="https://linkedin.com/in/sarveshvarvatkar" target="_blank" rel="noopener noreferrer" className="contact-social-icon" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="contact-social-icon" aria-label="X (Twitter)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Footer */}
            <div className="contact-footer">
                <span className="contact-footer-text">© 2026 Sarvesh Varvatkar</span>
                <span className="contact-footer-text">Designed & Built with care</span>
            </div>
        </section>
    );
}

export default Contact;
