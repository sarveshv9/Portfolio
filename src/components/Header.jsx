import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSmoothScroll } from '../context/SmoothScrollContext';
import './Header.css'; // Leaving this import if there are global header styles, though PillNav handles its own layout mostly
import PillNav from './PillNav';

gsap.registerPlugin(ScrollTrigger);

function Header() {
    const [activeHref, setActiveHref] = useState('/');
    const location = useLocation();
    const lenis = useSmoothScroll();

    useEffect(() => {
        if (location.pathname !== '/') return;

        const sections = [
            { id: 'hero', href: '/' },
            { id: 'about', href: '#about' },
            { id: 'work', href: '#work', extraIds: ['work-transition'] },
            { id: 'contact', href: '#contact' }
        ];

        const handleScroll = () => {
            const viewportCenter = window.innerHeight / 2;
            let currentActive = '/';

            // Check sections in reverse order so that overlapping sections (like About over Hero)
            // take precedence if they both cover the center.
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                let isMatch = false;

                const element = document.getElementById(section.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the viewport center is within the element's vertical bounds
                    if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
                        isMatch = true;
                    }
                }

                if (!isMatch && section.extraIds) {
                    for (const extraId of section.extraIds) {
                        const extraEl = document.getElementById(extraId);
                        if (extraEl) {
                            const rect = extraEl.getBoundingClientRect();
                            if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
                                isMatch = true;
                                break;
                            }
                        }
                    }
                }

                if (isMatch) {
                    currentActive = section.href;
                    break;
                }
            }

            setActiveHref(currentActive);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Run once on mount to set initial state
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location]);

    const handleLogoClick = (e) => {
        if (location.pathname === '/') {
            e.preventDefault();
            if (lenis) {
                lenis.scrollTo(0, { duration: 1.5 });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    };

    return (
        <header className="header">

            <PillNav
                items={[
                    {
                        label: (
                            <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: '"Gulfs Display Normal", sans-serif', fontSize: '2rem', paddingTop: '6px' }}>
                                S V
                            </span>
                        ), 
                        ariaLabel: 'Sarvesh Varvatkar', 
                        href: '/',
                        onClick: handleLogoClick
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
