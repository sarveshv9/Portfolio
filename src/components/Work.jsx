import React from 'react';
import './Work.css';

import img1 from '../assets/images/Veritrust.JPG';
import img2 from '../assets/images/Dailydex.JPG';
import img3 from '../assets/images/ThyroidDetection.png';
import img4 from '../assets/images/PillDispenser.png';

/* ── Tech SVG icons ─────────────────────────────────────────────────── */
const TechIcons = {
    React: (<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2.5" fill="#61DAFB" /><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" /><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)" /></svg>),
    Solidity: (<svg viewBox="0 0 24 24" fill="none"><path d="M15.5 3L12 9H5L8.5 3H15.5Z" fill="#aaa" opacity="0.6" /><path d="M8.5 3L12 9H19L15.5 3H8.5Z" fill="#aaa" /><path d="M8.5 21L12 15H5L8.5 21Z" fill="#aaa" /><path d="M15.5 21L12 15H19L15.5 21Z" fill="#aaa" opacity="0.6" /></svg>),
    Ethereum: (<svg viewBox="0 0 24 24" fill="none"><path d="M12 1.5L5.5 12.2L12 16L18.5 12.2L12 1.5Z" fill="#627EEA" opacity="0.8" /><path d="M12 16L5.5 12.2L12 22.5L18.5 12.2L12 16Z" fill="#627EEA" /></svg>),
    Python: (<svg viewBox="0 0 24 24" fill="none"><path d="M11.9 2C7.4 2 7.8 3.9 7.8 3.9V5.9H12.1V6.6H5.3C5.3 6.6 2 6.2 2 11.1C2 16 4.8 15.8 4.8 15.8H6.4V13.6C6.4 13.6 6.3 10.8 9.2 10.8H13.4C13.4 10.8 16 10.9 16 8.3V4.3C16 4.3 16.4 2 11.9 2ZM9 3.4C9.5 3.4 9.9 3.8 9.9 4.3C9.9 4.8 9.5 5.2 9 5.2C8.5 5.2 8.1 4.8 8.1 4.3C8.1 3.8 8.5 3.4 9 3.4Z" fill="#3776AB" /><path d="M12.1 22C16.6 22 16.2 20.1 16.2 20.1V18.1H11.9V17.4H18.7C18.7 17.4 22 17.8 22 12.9C22 8 19.2 8.2 19.2 8.2H17.6V10.4C17.6 10.4 17.7 13.2 14.8 13.2H10.6C10.6 13.2 8 13.1 8 15.7V19.7C8 19.7 7.6 22 12.1 22ZM15 20.6C14.5 20.6 14.1 20.2 14.1 19.7C14.1 19.2 14.5 18.8 15 18.8C15.5 18.8 15.9 19.2 15.9 19.7C15.9 20.2 15.5 20.6 15 20.6Z" fill="#FFD43B" /></svg>),
    Flask: (<svg viewBox="0 0 24 24" fill="none"><path d="M10 2V8L3 19C2.3 20.2 3.2 22 4.6 22H19.4C20.8 22 21.7 20.2 21 19L14 8V2" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 2H16" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" /></svg>),
    ScikitLearn: (<svg viewBox="0 0 24 24" fill="none"><circle cx="8" cy="8" r="3" fill="#F09437" /><circle cx="16" cy="8" r="3" fill="#3499CD" /><circle cx="12" cy="16" r="3" fill="#F09437" /></svg>),
    Expo: (<svg viewBox="0 0 24 24" fill="none"><path d="M12 3C12 3 5 12 5 16C5 19.3 8.1 22 12 22C15.9 22 19 19.3 19 16C19 12 12 3 12 3Z" fill="#aaa" opacity="0.85" /></svg>),
    Mobile: (<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="3" stroke="#aaa" strokeWidth="1.5" fill="none" /><circle cx="12" cy="20" r="0.8" fill="#aaa" /></svg>),
    HTML: (<svg viewBox="0 0 24 24" fill="none"><path d="M4 2L5.5 20L12 22L18.5 20L20 2H4Z" fill="#E44D26" opacity="0.9" /><path d="M12 4V20.3L17 18.6L18.2 4H12Z" fill="#F16529" opacity="0.7" /></svg>),
    IoT: (<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" fill="#aaa" /><path d="M12 5C15.9 5 19 8.1 19 12" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" /><path d="M12 2C17.5 2 22 6.5 22 12" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" /><path d="M12 19C8.1 19 5 15.9 5 12" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6" /><path d="M12 22C6.5 22 2 17.5 2 12" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3" /></svg>),
};

function TechStrip({ icons }) {
    return (
        <div className="tech-strip">
            {icons.map(n => <span key={n} className="tech-icon" title={n}>{TechIcons[n]}</span>)}
        </div>
    );
}

function StatusBadge({ status }) {
    const cfg = {
        Live: { color: '#4ade80', border: 'rgba(74,222,128,0.35)' },
        'In Progress': { color: '#fbbf24', border: 'rgba(251,191,36,0.35)' },
        Archived: { color: '#71717a', border: 'rgba(113,113,122,0.35)' },
    }[status] || { color: '#71717a', border: 'rgba(113,113,122,0.35)' };
    return (
        <span className="status-badge" style={{ color: cfg.color, borderColor: cfg.border }}>
            <span className="status-dot" style={{ background: cfg.color }} />
            {status}
        </span>
    );
}

const featuredProjects = [
    {
        id: 1,
        title: 'VeriTrust',
        description: 'Decentralized reputation management for the gig economy. Blockchain immutability meets AI-driven sentiment analysis with a Proof of Work fraud-prevention layer.',
        image: img1,
        link: 'https://github.com/sarveshv9/VeriTrust',
        tags: ['Blockchain', 'AI', 'DApp', 'Web3'],
        techIcons: ['React', 'Solidity', 'Ethereum', 'Python'],
        status: 'Archived',
        contribution: 'Architected the full-stack DApp — smart contracts, AI pipeline, and React frontend.',
        year: '2024',
    },
    {
        id: 2,
        title: 'DailyDex',
        description: 'Cross-platform daily metrics tracker built with React Native and Expo. Smooth custom animations and data persistence, optimized for iOS and Android.',
        image: img2,
        link: 'https://github.com/sarveshv9/DailyDex',
        tags: ['React Native', 'Expo', 'Mobile', 'Cross-Platform'],
        techIcons: ['React', 'Expo', 'Mobile'],
        status: 'Archived',
        contribution: 'Built the full cross-platform app — animations, data layer, and UX design.',
        year: '2024',
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
        year: '2023',
    },
    {
        id: 4,
        title: 'Pill Dispenser Alert',
        description: 'IoT medication reminder with automated dispensing alerts.',
        image: img4,
        link: 'https://github.com/sarveshv9/Pill-Dispenser-Alert',
        techIcons: ['Python', 'HTML', 'IoT'],
        year: '2023',
    },
];

function Work() {
    return (
        <section id="work" className="work-page">

            {/* ── Featured projects ──────────────────────────── */}
            <div className="featured-list">
                {featuredProjects.map((p, i) => (
                    <div className="project-panel" key={p.id}>
                        <div className="panel-header">
                            <span className="panel-index">0{i + 1}</span>
                            <div className="panel-divider" />
                            <span className="panel-year">{p.year}</span>
                        </div>

                        <div className="panel-body">
                            {/* Image */}
                            <div className="panel-img-wrap">
                                <img className="panel-img" src={p.image} alt={p.title} />
                                <div className="panel-img-overlay">
                                    <span className="overlay-eyebrow">Key Contribution</span>
                                    <p className="overlay-text">{p.contribution}</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="panel-content">
                                <div className="panel-meta">
                                    {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                                    <StatusBadge status={p.status} />
                                </div>
                                <h2 className="panel-title">{p.title}</h2>
                                <TechStrip icons={p.techIcons} />
                                <p className="panel-desc">{p.description}</p>
                                <a href={p.link} className="panel-link" target="_blank" rel="noopener noreferrer">
                                    View on GitHub
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Also built grid ────────────────────────────── */}
            <div className="sub-section">
                <span className="also-built-label">Also built</span>
                <div className="sub-grid">
                    {subProjects.map(p => (
                        <a href={p.link} key={p.id} className="sub-card" target="_blank" rel="noopener noreferrer">
                            <div className="sub-card-img">
                                <img src={p.image} alt={p.title} />
                                <div className="sub-card-overlay" />
                            </div>
                            <div className="sub-card-body">
                                <div className="sub-card-header">
                                    <h4 className="sub-card-title">{p.title}</h4>
                                    <span className="sub-card-year">{p.year}</span>
                                </div>
                                <p className="sub-card-desc">{p.description}</p>
                                <TechStrip icons={p.techIcons} />
                            </div>
                            <span className="sub-card-arrow">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </a>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Work;