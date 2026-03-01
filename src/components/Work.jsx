import React, { useLayoutEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Work.css';

import img1 from '../assets/images/Veritrust.JPG';
import img2 from '../assets/images/Dailydex.JPG';
import img3 from '../assets/images/ThyroidDetection.png';
import img4 from '../assets/images/PillDispenser.png';

gsap.registerPlugin(ScrollTrigger);

/* ── Tech‑stack SVG icons (inline, lightweight) ────────────────────────── */
const TechIcons = {
    React: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="2.5" fill="#61DAFB" />
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" />
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)" />
        </svg>
    ),
    Solidity: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 3L12 9H5L8.5 3H15.5Z" fill="#333" opacity="0.6" />
            <path d="M8.5 3L12 9H19L15.5 3H8.5Z" fill="#333" />
            <path d="M8.5 21L12 15H5L8.5 21Z" fill="#333" />
            <path d="M15.5 21L12 15H19L15.5 21Z" fill="#333" opacity="0.6" />
        </svg>
    ),
    Ethereum: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1.5L5.5 12.2L12 16L18.5 12.2L12 1.5Z" fill="#627EEA" opacity="0.8" />
            <path d="M12 16L5.5 12.2L12 22.5L18.5 12.2L12 16Z" fill="#627EEA" />
        </svg>
    ),
    Python: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9 2C7.4 2 7.8 3.9 7.8 3.9V5.9H12.1V6.6H5.3C5.3 6.6 2 6.2 2 11.1C2 16 4.8 15.8 4.8 15.8H6.4V13.6C6.4 13.6 6.3 10.8 9.2 10.8H13.4C13.4 10.8 16 10.9 16 8.3V4.3C16 4.3 16.4 2 11.9 2ZM9 3.4C9.5 3.4 9.9 3.8 9.9 4.3C9.9 4.8 9.5 5.2 9 5.2C8.5 5.2 8.1 4.8 8.1 4.3C8.1 3.8 8.5 3.4 9 3.4Z" fill="#3776AB" />
            <path d="M12.1 22C16.6 22 16.2 20.1 16.2 20.1V18.1H11.9V17.4H18.7C18.7 17.4 22 17.8 22 12.9C22 8 19.2 8.2 19.2 8.2H17.6V10.4C17.6 10.4 17.7 13.2 14.8 13.2H10.6C10.6 13.2 8 13.1 8 15.7V19.7C8 19.7 7.6 22 12.1 22ZM15 20.6C14.5 20.6 14.1 20.2 14.1 19.7C14.1 19.2 14.5 18.8 15 18.8C15.5 18.8 15.9 19.2 15.9 19.7C15.9 20.2 15.5 20.6 15 20.6Z" fill="#FFD43B" />
        </svg>
    ),
    Flask: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2V8L3 19C2.3 20.2 3.2 22 4.6 22H19.4C20.8 22 21.7 20.2 21 19L14 8V2" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M8 2H16" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6 15.5H18" stroke="#333" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
        </svg>
    ),
    ScikitLearn: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="3" fill="#F09437" />
            <circle cx="16" cy="8" r="3" fill="#3499CD" />
            <circle cx="12" cy="16" r="3" fill="#F09437" />
            <path d="M10.5 10L12 13.5" stroke="#333" strokeWidth="1" />
            <path d="M13.5 10L12 13.5" stroke="#333" strokeWidth="1" />
        </svg>
    ),
    Expo: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3C12 3 5 12 5 16C5 19.3 8.1 22 12 22C15.9 22 19 19.3 19 16C19 12 12 3 12 3Z" fill="#000" opacity="0.85" />
        </svg>
    ),
    Mobile: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="2" width="14" height="20" rx="3" stroke="#333" strokeWidth="1.5" fill="none" />
            <line x1="5" y1="6" x2="19" y2="6" stroke="#333" strokeWidth="1" opacity="0.3" />
            <line x1="5" y1="18" x2="19" y2="18" stroke="#333" strokeWidth="1" opacity="0.3" />
            <circle cx="12" cy="20" r="0.8" fill="#333" />
        </svg>
    ),
    HTML: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 2L5.5 20L12 22L18.5 20L20 2H4Z" fill="#E44D26" opacity="0.9" />
            <path d="M12 4V20.3L17 18.6L18.2 4H12Z" fill="#F16529" opacity="0.7" />
            <path d="M8 7H16L15.7 10H8.3L8.5 13H15.4L15 17L12 18L9 17L8.8 14.5" stroke="#fff" strokeWidth="0.8" fill="none" />
        </svg>
    ),
    IoT: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3" fill="#333" />
            <path d="M12 5C15.9 5 19 8.1 19 12" stroke="#333" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
            <path d="M12 2C17.5 2 22 6.5 22 12" stroke="#333" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
            <path d="M12 19C8.1 19 5 15.9 5 12" stroke="#333" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" />
            <path d="M12 22C6.5 22 2 17.5 2 12" stroke="#333" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" />
        </svg>
    ),
};

/* ── Status badge component ─────────────────────────────────────────── */
function StatusBadge({ status }) {
    const statusConfig = {
        Live: { color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)', border: 'rgba(16, 185, 129, 0.3)' },
        'In Progress': { color: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)', border: 'rgba(245, 158, 11, 0.3)' },
        Archived: { color: '#6b7280', bg: 'rgba(107, 114, 128, 0.1)', border: 'rgba(107, 114, 128, 0.3)' },
    };
    const cfg = statusConfig[status] || statusConfig.Archived;
    return (
        <span className="status-badge" style={{ color: cfg.color, background: cfg.bg, borderColor: cfg.border }}>
            <span className="status-dot" style={{ background: cfg.color }} />
            {status}
        </span>
    );
}

/* ── Tech icon strip component ─────────────────────────────────────── */
function TechStrip({ icons }) {
    return (
        <div className="tech-strip">
            {icons.map(name => (
                <span key={name} className="tech-icon" title={name}>
                    {TechIcons[name]}
                </span>
            ))}
        </div>
    );
}

/* ── Project data ──────────────────────────────────────────────────── */
const featuredProjects = [
    {
        id: 1,
        title: 'VeriTrust',
        description: 'A decentralized application aimed at revolutionizing reputation management in the gig economy. Combines blockchain immutability with AI-driven sentiment analysis and a robust Proof of Work system to combat fraud and provide verifiable, portable professional reputations.',
        image: img1,
        link: 'https://github.com/sarveshv9/VeriTrust',
        tags: ['Blockchain', 'AI', 'DApp', 'Web3'],
        techIcons: ['React', 'Solidity', 'Ethereum', 'Python'],
        status: 'Archived',
        contribution: 'Architected the full-stack DApp with smart contracts, AI sentiment pipeline, and React frontend.',
    },
    {
        id: 2,
        title: 'DailyDex',
        description: 'A comprehensive, cross-platform mobile application built using React Native and Expo. Seamlessly tracks daily metrics and tasks inside an intuitive, smooth interface optimized for both iOS and Android platforms.',
        image: img2,
        link: 'https://github.com/sarveshv9/DailyDex',
        tags: ['React Native', 'Expo', 'Mobile App', 'Cross-Platform'],
        techIcons: ['React', 'Expo', 'Mobile'],
        status: 'Archived',
        contribution: 'Built the full cross-platform mobile app with React Native, including custom animations and data persistence.',
    },
];

const subProjects = [
    {
        id: 3,
        title: 'Thyroid Detection',
        description: 'ML-powered thyroid disorder classifier using Random Forest & Flask.',
        image: img3,
        link: 'https://github.com/sarveshv9/Thyroid-Detection',
        techIcons: ['Python', 'Flask', 'ScikitLearn'],
    },
    {
        id: 4,
        title: 'Pill Dispenser Alert',
        description: 'IoT medication reminder system with automated dispensing alerts.',
        image: img4,
        link: 'https://github.com/sarveshv9/Pill-Dispenser-Alert',
        techIcons: ['Python', 'HTML', 'IoT'],
    },
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

            // Featured project cards scroll animation
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

            // Sub-projects row animation
            gsap.fromTo('.sub-projects-section',
                { y: 20, opacity: 0 },
                {
                    scrollTrigger: { trigger: '.sub-projects-section', start: 'top 90%' },
                    y: 0, opacity: 1, duration: 0.6, ease: 'power3.out'
                }
            );

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="work" className="work-page" ref={containerRef}>
            {/* ── Featured projects ─────────────────────────────────── */}
            <div className="projects-container">
                {featuredProjects.map((project, index) => (
                    <div className={`project-card ${index % 2 !== 0 ? 'reverse' : ''}`} key={project.id}>
                        <div className="project-image-wrapper">
                            <div className="project-image-inner">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-image-overlay">
                                <span className="overlay-label">Key Contribution</span>
                                <p className="overlay-text">{project.contribution}</p>
                            </div>
                        </div>
                        <div className="project-info">
                            <div className="project-meta-row">
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <StatusBadge status={project.status} />
                            </div>
                            <h2 className="project-title">{project.title}</h2>
                            <TechStrip icons={project.techIcons} />
                            <p className="project-description">{project.description}</p>
                            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                <span>View Project</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Sub‑projects (subtle list) ─────────────────────── */}
            <div className="sub-projects-section">
                <span className="sub-projects-label">Also built</span>
                <div className="sub-projects-list">
                    {subProjects.map(project => (
                        <a href={project.link} className="sub-project-row" key={project.id} target="_blank" rel="noopener noreferrer">
                            <div className="sub-row-left">
                                <div className="sub-row-thumb">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <h4 className="sub-row-title">{project.title}</h4>
                                <span className="sub-row-dash">—</span>
                                <p className="sub-row-desc">{project.description}</p>
                            </div>
                            <div className="sub-row-right">
                                <TechStrip icons={project.techIcons} />
                                <svg className="sub-row-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Work;
