import React, { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Work.css';

import img1 from '../assets/images/img2.JPG';
import img2 from '../assets/images/img3.JPG';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: 'VeriTrust',
        description: 'A decentralized application aimed at revolutionizing reputation management in the gig economy. Combines blockchain immutability with AI-driven sentiment analysis and a robust Proof of Work system to combat fraud and provide verifiable, portable professional reputations.',
        image: img1,
        link: 'https://github.com/sarveshv9/VeriTrust',
        tags: ['Blockchain', 'AI', 'DApp', 'Web3']
    },
    {
        id: 2,
        title: 'DailyDex',
        description: 'A comprehensive, cross-platform mobile application built using React Native and Expo. Seamlessly tracks daily metrics and tasks inside an intuitive, smooth interface optimized for both iOS and Android platforms.',
        image: img2,
        link: 'https://github.com/sarveshv9/DailyDex',
        tags: ['React Native', 'Expo', 'Mobile App', 'Cross-Platform']
    }
];

function Work() {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Title animation on mount
            gsap.fromTo('.work-title span',
                { y: 100, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: '.work-title',
                        start: 'top 85%',
                    },
                    y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power4.out'
                }
            );

            // Project cards scroll animation
            const cards = gsap.utils.toArray('.project-card');
            cards.forEach((card) => {
                const image = card.querySelector('.project-image-wrapper');
                const infoElements = card.querySelectorAll('.project-info > *');

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        end: 'bottom 15%',
                        toggleActions: 'play none none reverse',
                    }
                });

                tl.fromTo(image,
                    { y: 50, opacity: 0, scale: 0.95 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
                );

                tl.fromTo(infoElements,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
                    "-=0.4"
                );
            });

            // Footer animation
            gsap.fromTo('.work-footer',
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: '.work-footer',
                        start: 'top 90%',
                    },
                    y: 0, opacity: 1, duration: 0.8, ease: 'power3.out'
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="work" className="work-page" ref={containerRef}>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className={`project-card ${index % 2 !== 0 ? 'reverse' : ''}`} key={project.id}>
                        <div className="project-image-wrapper">
                            <div className="project-image-inner">
                                <img src={project.image} alt={project.title} />
                            </div>
                        </div>
                        <div className="project-info">
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                            <h2 className="project-title">{project.title}</h2>
                            <p className="project-description">{project.description}</p>
                            <a href={project.link} className="project-link" onClick={e => e.preventDefault()}>
                                <span>View Project</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="work-footer">
                <h2>Want to see more?</h2>
                <Link to="/gallery" className="gallery-btn">
                    <span>View Gallery</span>
                    <div className="btn-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </Link>
            </div>
        </section>
    );
}

export default Work;
