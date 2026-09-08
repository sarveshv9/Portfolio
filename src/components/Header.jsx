import React, { useState, useEffect } from 'react';
import './Header.css'; // Leaving this import if there are global header styles, though PillNav handles its own layout mostly
import PillNav from './PillNav';

function Header() {
    const [activeHref, setActiveHref] = useState('/');

    useEffect(() => {
        const sections = [
            { id: 'hero', href: '/' },
            { id: 'about', href: '#about' },
            { id: 'work', href: '#work' },
            { id: 'contact', href: '#contact' }
        ];

        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const activeSection = sections.find(section => section.id === entry.target.id);
                    if (activeSection) {
                        setActiveHref(activeSection.href);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <header className="header">

            <PillNav
                items={[
                    {
                        label: (
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: '"Gulfs Display Normal", sans-serif', fontSize: '2rem', paddingTop: '6px' }}>
                                S V
                            </span>
                        ), ariaLabel: 'Sarvesh Varvatkar', href: '/'
                    },
                    { label: 'About', href: '#about' },
                    { label: 'Work', href: '#work' },
                    { label: 'Contact', href: '#contact' }
                ]}
                detachFirstItem={true}
                activeHref={activeHref}
                className="custom-nav"
                ease="power2.easeOut"
                baseColor="#000000"
                pillColor="#ffffff"
                hoveredPillTextColor="#ffffff"
                pillTextColor="#000000"
                theme="light"
                initialLoadAnimation={false}
            />
        </header>
    );
}

export default Header;
