import React from 'react';
import './Header.css'; // Leaving this import if there are global header styles, though PillNav handles its own layout mostly
import PillNav from './PillNav';

function Header() {
    return (
        <header className="header">

            <PillNav
                items={[
                    { label: 'About', href: '#about' },
                    { label: 'Work', href: '/work' },
                    { label: 'Contact', href: '/contact' }
                ]}
                activeHref="/"
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
