import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <a href="#about" className="nav-link">About</a>
                <a href="#work" className="nav-link">Work</a>
                <a href="#stack" className="nav-link">Stack</a>
                <a href="#experience" className="nav-link">Experience</a>
                <a href="#connect" className="nav-link">Connect</a>
            </nav>
        </header>
    );
}

export default Header;
